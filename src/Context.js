import React, { createContext, useState, useEffect } from 'react';
import Client from './Contentful'


export const RoomContext = createContext();

const RoomContextProvider = (props) => {
    const [state,setState] = useState({
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
    })

    const getData = async () => {
        try{
            let response = await Client.getEntries({
                content_type : 'beachResortRoom',
                order : 'sys.createdAt'
            });

        const rooms  = formatData(response.items)
        const featuredRooms = rooms.filter(room => room.featured === true);
        const maxPrice = Math.max(...rooms.map(item => item.price));
        const maxSize = Math.max(...rooms.map(item => item.size))
        setState({
            ...state,
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

    const formatData = (items) => {
        const tempItems = items.map(item =>{
            let id = item.sys.id;
            let images = item.fields.images.map(img=>img.fields.file.url);
            let room = {...item.fields,images,id}
            return room;
        })
        return tempItems;
    }
   
    useEffect(()=>{
        getData();
    },[])

    
    const getRoom = (slug) => {
        let tempRoom = [...state.rooms];
        tempRoom = tempRoom.find(room => room.slug === slug)
        return tempRoom;
    }
    const handleChange = (event) =>{
        const {name,value,type} = event.target;
        type === 'checkbox' ? setState({[name] : !state[name]}): setState({[name] : value});            
    }
    const filterRooms = () =>{
        let {type,capacity,price,size,breakfast,pets} = state
         capacity = parseInt(capacity)
         price = parseInt(price)
         
        let tempRooms = [...state.rooms];
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
     setState({
         ...state,
         sortedRooms : tempRooms
     })
     }
    

    return ( 
        <RoomContext.Provider value={{...state,getRoom,handleChange}}>
            {props.children}
        </RoomContext.Provider>
     );
}
 
export default RoomContextProvider;
