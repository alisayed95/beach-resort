import React,{useContext} from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import { RoomContext } from '../Context'
import Loading from './Loading'

const RoomContainer = () => {
    const {rooms,sortedRooms,loading} = useContext(RoomContext)
    if(loading){
        return(<Loading/>)
    }
    return ( 
        <div>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms}/>
        </div>
     );
}
 
export default RoomContainer;
