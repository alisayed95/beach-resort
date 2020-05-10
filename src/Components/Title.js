import React from 'react';

const Title = ({title}) => {
    return ( 
        <div className='title'>
            <h1>{title}</h1>
            <div className='title-line'></div>
        </div>
     );
}
 
export default Title;