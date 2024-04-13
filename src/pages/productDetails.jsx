import React from 'react'
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../components/DATA';
import { Link } from 'react-router-dom';

export const ProductDetails = (props) => {

    const {id} = useParams();
    
    const productInfo = PRODUCTS.find((product) => product.id === Number(id));

  return (
    
    <div className="row ">
      <div>
        <h2>Product Details</h2>
      </div>
    <div className="card m-auto p-5 border-0">
   
   <div className="d-flex justify-content-center">
   <img 
    src={productInfo.productIMG}
    className=" img-fluid card-img-top" 
    alt={productInfo.productName}
    style={{ width: '30%', height: 'auto', maxHeight: '300px' }} 
    />
   </div>

    <div className="card-body">
      <h5 className="card-title">{productInfo.productName}</h5>
      <p className="card-text">Price: ${productInfo.price}</p>
      
    </div>
  </div>
  <Link style={{textDecoration:"none", color:"blue"}}  to="/">Continue Shopping</Link>
    </div>
  )
}
