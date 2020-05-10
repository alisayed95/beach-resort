import React, { useContext } from 'react';
import { RoomContext } from '../Context';

const getUnique = (items,value) =>{
    return [...new Set(items.map(item => item[value]))]
}

const RoomFilter = ({rooms}) => {
    const {type,capacity,price,maxPrice,minPrice,size,maxSize,minSize,breakfast,pets,handleChange} = useContext(RoomContext);
    //Set Types Options to Unique Value
    let types = getUnique(rooms,'type');
    types = ['all',...types]
    //Set Capacity Options to Unique Value
    let guestCapacity = getUnique(rooms,'capacity');
    
    return ( 
        <div className='room-filter'>
            {/*Start Type*/}
            <div className="form-group">
                <label htmlFor="type">Room Type</label>
                <div className='select'>
                    <select name="type" value={type} onChange={handleChange}>
                    {types.map((item,index)=>{
                        return(<option key={index} value={item} className='options' >{item}</option>)
                    })}
                </select>
                </div>
            </div>
            {/*End Type*/}
            {/*Start Guest Capacity*/}
            <div className="form-group">
                <label htmlFor="capacity">Guests</label>
                <div className='select'>
                    <select name="capacity" value={capacity} onChange={handleChange}>
                        {guestCapacity.map((item,index)=>{
                            return(<option key={index} value={item}>{item}</option>)
                        })}
                    </select>   
                </div>
            </div>
            {/*End Guest Capacity*/}
            {/*Start Room Price*/}
            <div className="form-group">
                <label htmlFor="price">Room Price ${price} </label>
                <input 
                type="range" 
                name = 'price'
                min={minPrice}
                max={maxPrice}
                value={price}
                onChange={handleChange}
                />  
            </div>
            {/*End Room Price*/}
            {/*Start Room Size*/}
            <div className="form-group">
                <label htmlFor="size">Room Size {size/2}&#13217; </label>
                <input 
                type="range" 
                name = 'size'
                min={minSize}
                max={maxSize}
                value={size}
                onChange={handleChange}
                />  
            </div>
            {/*End Room Size*/}
            {/*Start Breakfast*/}
            <div className="form-group">
                <div className='extras'>
                    <input 
                    type="checkbox"
                    name='breakfast'
                    value={breakfast}
                    onChange={handleChange}
                    /> 
                    <label htmlFor="breakfast">Breakfast</label>
                </div>
                <div className='extras'>
                    <input 
                    type="checkbox"
                    name='pets'
                    value={pets}
                    onChange={handleChange}
                    /> 
                    <label htmlFor="pets">pets</label>
                </div>    
            </div>
            {/*End Breakfast*/}

        </div>
     );
}
 
export default RoomFilter;