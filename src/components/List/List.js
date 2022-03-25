import React from 'react';
import Item from '../Item/Item'
const List = (props) => {
    console.log(props);
    return (
        <div>
            <h1>List</h1>
            {
             props.lists.map(item=><Item name={item.name}></Item>)
            }
            <button onClick={props.pick}>Random One</button>
            <button onClick={props.reset}>Reset</button>

        </div>
    );
};

export default List;