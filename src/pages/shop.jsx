import React from 'react'
import {PRODUCTS} from '../components/DATA.js'
import  {ProductCard}  from './productCard.jsx'

import { Link } from 'react-router-dom'


export const Shop = () => {
  return (
    <div className='shop container'>
    <div className="shopTitle mt-3">
        <h1 className="text-center">MyTech Shop</h1>
    </div>

    <div className='products row'>
        {
          PRODUCTS.map((products) =>
          
          <>
          <ProductCard  key = {products.id} data={products} />
          
           
          </> 
          
          )
        
        }
    </div>
</div>

  )
}
