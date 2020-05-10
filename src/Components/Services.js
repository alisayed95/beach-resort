import React from 'react';
import Title from './Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBeer,faShuttleVan,faHiking,faCocktail} from '@fortawesome/free-solid-svg-icons'


const Services = () => {
    const servi =[
        {
            icon : <FontAwesomeIcon icon={faCocktail} />,
            name :  'free cocktails',
            text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
        },
        {
            icon : <FontAwesomeIcon icon={faHiking} />,
            name :  'Endless Hiking',
            text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
        },
        {
            icon : <FontAwesomeIcon icon={faShuttleVan} />,
            name :  'Free shuttle',
            text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
        },
        {
            icon : <FontAwesomeIcon icon={faBeer} />,
            name :  'Strongest Beer',
            text : 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, corporis!'
        }
    ]
    return ( 
        <div className='services'>
            <Title title={'services'}/>
            <div className='services-container'>
                {servi.map((item,index) => {
                    return(
                        <div key={index} className='secvice-item'>
                        <i className='iconService'>{item.icon}</i>
                        <h4>{item.name}</h4>
                        <p>{item.text}</p>
                        </div>
                    )
                })}
            </div>
        </div>
     );
}
 
export default Services;