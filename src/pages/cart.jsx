import React, { useContext } from 'react'
import { PRODUCTS } from '../components/DATA'
import { ShopContext } from '../context/shop-context'
import { CartLists } from './cartLists'
export const Cart = () => {

  const {cartItems, totalCartAmount} = useContext(ShopContext);

  return (
    <>
    <div>
      <h1>Your Products' List</h1>
    </div>
    <div>
      {PRODUCTS.map((product) =>
      {
         if(cartItems[product.id] !== 0)
         {
          return <CartLists key={product.id} data ={product} />
         }
      })}
    </div>
    {totalCartAmount() > 0 && <h2>Sub-total: $ {totalCartAmount()}</h2>}
    </>
  )
}
