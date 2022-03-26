import React from 'react';
import './Coffee.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList } from '@fortawesome/free-solid-svg-icons';

const Coffee = (props) => {
    const {img,name,price}= props.coffee
    return (
        <div className="coffee-card">
            
            <div className='coffee-info'>
                <img src={img} alt="" />
                <h2>{name}</h2>
                <p>Price : ${price}</p>
            </div>
            <button className='add-btn' onClick={()=>props.btnClick(props.coffee)}>
                <p >Add to list</p>
                <FontAwesomeIcon icon={faList}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Coffee;