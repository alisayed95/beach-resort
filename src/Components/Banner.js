import React from 'react';

const Banner = ({children,title,subtitle}) => {
    return ( 
        <div className='banner'>
            <h1>{title}</h1>
            <div className='banner-line'></div>
            <h5>{subtitle}</h5>
            {children}
        </div>
     );
}
 
export default Banner;