import React, { createContext, Component } from 'react';
import Client from './Contentful'


export const RoomContext = createContext();

class RoomContextProvider extends Component {

    state= {
        rooms : [],
        sortedRooms : [],
        featuredRooms : [],
        loading: true,
        type: 'all',
        capacity : 1,
        price : 0,
        maxPrice : 0,
        minPrice : 0,
        size : 0,
        minSize : 0,
        maxSize : 0,
        breakfast : false,
        pets : false
    }

    getData = async () => {
        try{
            let response = await Client.getEntries({
                content_type : 'beachResortRoom',
                order : 'sys.createdAt'
            });

        const rooms  = this.formatData(response.items)
        const featuredRooms = rooms.filter(room => room.featured === true);
        const maxPrice = Math.max(...rooms.map(item => item.price));
        const maxSize = Math.max(...rooms.map(item => item.size))
        this.setState({
            rooms,
            featuredRooms,
            sortedRooms : rooms,
            loading: false,
            maxPrice,
            price : maxPrice,
            maxSize,
            size : maxSize, 
        });
        }
        catch(error){
            console.log(error);
        }
    }

    componentDidMount() {
        this.getData()
    }

    formatData = (items) => {
        const tempItems = items.map(item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(img=>img.fields.file.url);
            let room = {...item.fields,images,id}
            return room;
        })
        return tempItems;
    }
    getRoom = (slug) => {
        let tempRoom = [...this.state.rooms];
        tempRoom = tempRoom.find(room => room.slug === slug)
        return tempRoom;
    }
    handleChange = (event) =>{
        const {name,value,type} = event.target;
        type === 'checkbox' ? this.setState({[name] : !this.state[name]},this.filterRooms): this.setState({[name] : value},this.filterRooms);            
    }
    
    filterRooms = () =>{
       let {type,capacity,price,size,breakfast,pets} = this.state
        capacity = parseInt(capacity)
        price = parseInt(price)
        
       let tempRooms = [...this.state.rooms];
       //filter by room type
       if(type !== 'all'){
           tempRooms = tempRooms.filter((item) => item.type === type)
       }
       //filter by room capacity
       if(capacity !== 1){
           tempRooms = tempRooms.filter((item) => item.capacity >= capacity);
       }
       //filter by room price
       tempRooms = tempRooms.filter((item)=> item.price <= price)
       //filter by room size
       tempRooms = tempRooms.filter((item) => item.size <= size)
       //filter by breakfast
       if(breakfast){
           tempRooms = tempRooms.filter((item) => item.breakfast === true)
       }
       //filter by pets
       if(pets){
        tempRooms = tempRooms.filter((item) => item.pets === true)
    }
       //change sorted room state
       this.setState({
           sortedRooms : tempRooms
       })
       
    }
    

    render(){
        return ( 
            <RoomContext.Provider value={{...this.state,getRoom:this.getRoom,handleChange:this.handleChange}}>
                {this.props.children}
            </RoomContext.Provider>
         );
    }
}
 
export default RoomContextProvider;