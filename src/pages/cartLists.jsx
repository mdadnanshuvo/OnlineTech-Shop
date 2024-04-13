import React, { useContext } from 'react'
import { ShopContext } from '../context/shop-context';



export const CartLists = (props) => {

    const {id, productIMG,price, productName} = props.data;
    const {cartItems, addToCart, removeFromCart, updatedCartItems, totalCartAmount} = useContext(ShopContext);



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
       <strong className='card-text'>Unit {cartItems[id]}</strong>
       
       <div className=' p-3 rounded'>
       <button className='btn btn-primary' onClick={() => removeFromCart(id)}> - </button>
        <input value={cartItems[id]} onChange={(e) => updatedCartItems(Number(e.target.value), id)}  />
       <button className='btn btn-primary' onClick={() => addToCart(id)}> + </button>
       </div>

     
     
       
   
    </div>
  </div>
    </div>

  )
}
