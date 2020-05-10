import React from 'react';
import Hero from '../Components/Hero';
import Banner from '../Components/Banner';
import {Link} from 'react-router-dom'
import Title from '../Components/Title';
import RoomContainer from '../Components/RoomContainer';


const Rooms = () => {

    return ( 
        <div className='rooms'>
            <Hero hero={'roomHero'}>
                <Banner
                title={'our rooms'}
                >
                <Link to='/'><button className='btn-default'>return home</button></Link>
                </Banner>
            </Hero>
            <Title title={'search'}/>
            <RoomContainer />
        </div>
     );
}
 
export default Rooms;