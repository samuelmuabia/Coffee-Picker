import React from 'react';
import Item from '../Item/Item'
import './List.css'
const List = (props) => {
    return (
        <div className='list-container'>
            <h1>List</h1>
            {
             props.lists.map(item=><Item items={item} key={item.id} remove={props.remove}></Item>)
            }
          <div className='btn-list'>
          <button className='btn-select' onClick={props.pick}>Random One</button>
            <button className='btn-reset' onClick={props.reset}>Reset</button>
          </div>
        </div>
    );
};

export default List;