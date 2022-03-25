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
   
    const addToList = (coffee)=>{
        if (lists.length<4 ){
            if(lists.indexOf(coffee)===-1){
                const newList = [...lists,coffee];
                setList(newList);
            }
            else{
                alert("Already Added");
            }
 
        }
       else{
           alert("List is already full")
       }
    }
    const pickOne = ()=>{
        if (lists.length!=0){
            const number = Math.floor(Math.random() * lists.length);
            alert(lists[number].name);
        }
    }
    const removeItem = (item)=>{
    
        let filteredArray = lists.filter(list => list !== item)
        setList(filteredArray);
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
            <div className="list-container">
                {
                    <List lists={lists} reset={resetList} pick ={pickOne} remove={removeItem}></List>
                }
            </div>
        </div>
    );
};

export default Shop;