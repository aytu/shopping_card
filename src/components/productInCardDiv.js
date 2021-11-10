import React from 'react'
import {useDispatch} from 'react-redux'
import { addToShoppingCard, removeFromShoppingCard } from '../store/shoppingCard/shoppingCard-action';

export default function ProductInCardDiv({product,productInCard}) {

    console.log(product)
    const dispatch=useDispatch();
    const addToCard=()=>{
        dispatch(addToShoppingCard(product));
    }

    const removeFromCard=()=>{
        dispatch(removeFromShoppingCard(product));
    }
    return (
        <div className="productInCardDiv">
            <button onClick={removeFromCard} className="btn btn-secondary btn-sm">-</button>
            {/* <span>{product.quantity ? product.quantity : productInCard.quantity} in cart</span> */}
            {productInCard ? productInCard.quantity : product.quantity }
            <button onClick={addToCard} className="btn btn-secondary btn-sm">+</button>
        </div>
    )
}
