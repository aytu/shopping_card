import React from 'react'
import '../assets/scss/products.scss'
import ProductItem from './productItem'
export default function ProductList({products}) {
    return (
        <div className="product-container">
            {
                products.map(product=>{
                    return(                   
                          <ProductItem product={product}  key={product.id}/>                  
                    )
                })
            }
           
        </div>
    )
}
