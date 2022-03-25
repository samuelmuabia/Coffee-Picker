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
            <button onClick={props.pick}>Random One</button>
            <button onClick={props.reset}>Reset</button>

        </div>
    );
};

export default List;