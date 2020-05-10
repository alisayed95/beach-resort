import React from 'react';
import { Link } from 'react-router-dom';

const Room = ({room}) => {
    const {name,price,slug,images} = room
    return ( 
        <section className='room'>
        <div className='room-container'>
            <img src={images[0]} alt=""/>
            <div className='room-price'>
                <p>${price}</p>
                <p><span>per night</span></p>
            </div>
            <Link to={`/rooms/${slug}`} className=' room-link '><button className='btn-default'>Features</button></Link>
        </div>
        <h3 className='room-name'>{name}</h3>
        </section>
     );
}
 
export default Room;