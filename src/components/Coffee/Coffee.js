import React from 'react';
import './Coffee.css'
const Coffee = (props) => {
    const {img,name,price}= props.coffee
    return (
        <div className="coffee-card">
            
            <div className='coffee-info'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>{price}</p>
            </div>
            <button className='add-btn' onClick={()=>props.btnClick(props.coffee)}>
                <p>Add to list</p>
            </button>
        </div>
    );
};

export default Coffee;