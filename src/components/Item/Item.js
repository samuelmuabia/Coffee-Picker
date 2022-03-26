import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';
import './Item.css'
const Item = ({items,remove}) => {
    const {img,name}=items;
    return (
        <div className='item-container'>
            <img className='image-icon' src={img} alt="" />
            <p className='item-name'>{name}</p>
            <button onClick={()=>remove(items)} className='remove-btn'><FontAwesomeIcon icon={faRemove}></FontAwesomeIcon></button>
        </div>
    );
};

export default Item;