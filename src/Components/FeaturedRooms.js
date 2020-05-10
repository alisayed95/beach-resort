import React, { useContext} from 'react';
import Title from './Title';
import { RoomContext } from '../Context';
import Room from './Room';
import Loading from './Loading'

const FeaturedRooms = () => {
    const {featuredRooms,loading} = useContext(RoomContext);
    return ( 
        <section className='featured-rooms-container'>
        <Title title={'featured rooms'}/>
        <div className='featured-rooms'>
        {loading? <Loading /> :featuredRooms.map((room,index) => <Room key={index} room={room}/>)}
        </div>
        </section>
     );
}
 
export default FeaturedRooms;