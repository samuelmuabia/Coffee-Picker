import React, { useEffect, useState } from 'react';
import Coffee from '../Coffee/Coffee';
import './Shop.css'
const Shop = () => {
    const[products,setProduct] = useState([])
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className='container'>
            <div className="coffee-container">
            {
                products.map(product=><Coffee coffee={product} key={product.id}></Coffee>)
            }
            </div>
            <div className="cart-container">
                <h1>Cart</h1>
            </div>
        </div>
    );
};

export default Shop;