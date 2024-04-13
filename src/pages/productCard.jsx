import React from 'react'
import { ShopContext } from '../context/shop-context.jsx';
import { useContext } from 'react';
import { Link } from 'react-router-dom';


export const ProductCard = (props) => {

    const {id, productName, price, productIMG} = props.data;
    const {cartItems, addToCart, removeFromCart} = useContext(ShopContext);
      
    const countItems = cartItems[id];
  return (
    <div className="row ">
    <div className="card m-auto p-5 border-0">
   
   <div className="d-flex justify-content-center">
   <img 
    src={productIMG}
    className=" img-fluid card-img-top" 
    alt={productName}
    style={{ width: '50%', height: 'auto', maxHeight: '300px' }} 
    />
   </div>

    <div className="card-body">
      <h5 className="card-title">{productName}</h5>
      <p className="card-text">Price: ${price}</p>
      <button  className="btn btn-primary" onClick={() => addToCart(id)} >Add to Cart {countItems > 0 && <>{countItems}</>} </button>
      <div>
      <Link to={`products/${id}`}   style={{textDecoration:"none", marginTop:10, fontWeight:'bolder'}}> Details </Link>

      </div>
    </div>
  </div>
    </div>
  )
}
