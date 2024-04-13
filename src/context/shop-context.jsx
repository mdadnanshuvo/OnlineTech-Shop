import React, { createContext, useState } from 'react'
import { PRODUCTS } from '../components/DATA';


export const  ShopContext = createContext(null); 



export const ShopContextProvider = (props) => {

    
    const getDefaultCart = () =>
    {
        let cart = {};
        for(let i = 1; i <= PRODUCTS.length; i++)
        {
            cart[i] = 0;
        }

        return cart;
    }

 
 const [cartItems, setCartItems] = useState(getDefaultCart());

 const addToCart = (itemId) =>
 {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] + 1}));
 }
const totalCartAmount = () =>
{
  var totalAmount  = 0;

  for(const item in cartItems){
    if(cartItems[item] > 0)
    {
      let productInfo = PRODUCTS.find((product) => product.id === Number(item));

      totalAmount = productInfo.price * cartItems[item]
    }
  }

  return totalAmount;
}

 const removeFromCart = (itemId) =>
 {
    setCartItems((prev) => ({...prev, [itemId] : prev[itemId] - 1}));
 }

 const updatedCartItems = (newItems,itemId) =>
 {
  setCartItems((prev) => ({...prev , [itemId] : newItems}))
 }

 const contextValues = {cartItems, addToCart, removeFromCart, updatedCartItems, totalCartAmount};

  return (
    <ShopContext.Provider value = {contextValues}>
     {props.children}
    </ShopContext.Provider>
  )
}
