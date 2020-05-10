import React, { useContext } from 'react';
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import { RoomContext } from '../Context';
import {Link} from 'react-router-dom'
import StyledHero from '../Components/StyledHero';

const SingleRoom = (props) => {
    const {getRoom} = useContext(RoomContext)
    const slug = props.match.params.slug;
    const room = getRoom(slug)
    if(!room){
        return(
            <Hero>
            <Banner
            title='Error 404'
            subtitle='room not found'
            >
            <Link to='/rooms'><button className='btn-default'>go to rooms</button></Link>
            </Banner>
        </Hero>
        )
    }
    const {images,name,description,extras,pets,price,size,breakfast,capacity} = room;
    const [fisrtImg,...restImg] = [...images] 
    return ( 
        <>
            <StyledHero img={fisrtImg}>
                <Banner
                title={name}
                >
                <Link to='/rooms'><button className='btn-default'>see more rooms</button></Link>
                </Banner>
            </StyledHero>
            <section className='single-room'>
               <div className="single-room-container">
                    {restImg.map((imag,index) => (<img key={index} src={imag} alt=""/>))}
               </div> 
               <div className="single-room-info">
                    <article className='details'>
                        <h3>details</h3>
                        <p>{description}</p>
                    </article>
                    <article className="info">
                        <h3>info</h3>
                        <div className='infos'>
                        <h6>price : ${price}</h6>
                        <h6>size : {size} SQFT</h6>
                        <h6>
                            max capacity : {capacity > 1 ? `${capacity} Persons` : `${capacity} Person`  }
                        </h6>
                        <h6>
                            {pets? 'pets allowed' : 'no pets allowed'}
                        </h6>
                        <h6>{breakfast && 'free breakfast included'}</h6>
                        </div>
                    </article>
                    <article className="room-extras">
                        <h3>extras</h3>
                        <ul className="extras">
                                {extras.map((item,index)=>(<li key={index}>- {item}</li>))}
                        </ul>
                    </article>
                </div>
            </section>
            
        </>
     );
}
 
export default SingleRoom
