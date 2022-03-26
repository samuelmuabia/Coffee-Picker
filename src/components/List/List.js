import React from 'react';
import Item from '../Item/Item'
import './List.css'
const List = ({lists,pick,reset,remove}) => {
    return (
        <div className='list-container'>
            <h1>List</h1>
            {
             lists.map(item=><Item items={item} key={item.id} remove={remove}></Item>)
            }
          <div className='btn-list'>
          <button className='btn-select' onClick={pick}>Random One</button>
            <button className='btn-reset' onClick={reset}>Reset</button>
          </div>
        </div>
    );
};

export default List;