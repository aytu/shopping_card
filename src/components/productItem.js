import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addToShoppingCard, removeFromShoppingCard } from '../store/shoppingCard/shoppingCard-action';
import ProductInCardDiv from './productInCardDiv';

export default function ProductItem({product}) {
   
    const dispatch=useDispatch();
    const shoppingCard=useSelector(state=>state.shoppingCard);
    const productInCard=shoppingCard.products.filter(el=>el.product.id===product.id)[0];  
    const addToCard=()=>{
        dispatch(addToShoppingCard(product));
    }

    // const removeFromCard=()=>{
    //     dispatch(removeFromShoppingCard(product));
    // }


    return (
        <div className="card product-item" style={{width: '18rem'}}>
              <img className="card-img-top" src={product.coverUrl} alt={product.title}/>
                    <div className="card-body">
                         <p className="card-text">{product.price}$</p>                       
                    </div>
                    {
                        productInCard ? 
                        <ProductInCardDiv productInCard={productInCard} product={product}/>  
                        :   <button className="btn btn-secondary btn-sm btn-block w-100" onClick={addToCard} >Add to cart</button>
                    }
                   
        </div>
    )
}
