import React, { useEffect, useState } from 'react';
import Coffee from '../Coffee/Coffee';
import './Shop.css'
import List from '../List/List';
const Shop = () => {
    const[products,setProduct] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    const [lists,setList]=useState([]);
    console.log(lists)
   
    const addToList = (coffee)=>{
        if (lists.length<4){
            const newList = [...lists,coffee];
            setList(newList);
            console.log(lists)
        }
       else{
           alert("List is already full")
       }
    }
    const pickOne = ()=>{
        const number = Math.floor(Math.random() * 4);
        console.log(number);
        console.log(lists);
        console.log(lists[number].name)
        alert(lists[number].name)
    }
    const resetList=()=>{
        setList([]);
    }
    return (
        <div className='container'>
            <div className="coffee-container">
            {
                products.map(product=><Coffee coffee={product} key={product.id} btnClick={addToList}></Coffee>)
            }
            </div>
            <div className="cart-container">
                {
                    <List lists={lists} reset={resetList} pick ={pickOne}></List>
                }
            </div>
        </div>
    );
};

export default Shop;