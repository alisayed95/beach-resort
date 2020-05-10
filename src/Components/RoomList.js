import React from 'react';
import Room from './Room';

const RoomList = ({rooms}) => {
    if(!rooms.length){
        return(
            <div className='no-rooms'>
                unfortunately no rooms matched your search parameters.....
            </div>
        )
    }
    return ( 
        <div className='rooms-list'>
            {rooms.map((room,index) =>(<Room key={index} room={room}/>))}
        </div>
     );
}
 
export default RoomList;