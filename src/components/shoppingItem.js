import React from 'react'
import ProductInCardDiv from './productInCardDiv';

export default function ShoppingItem({item}) {
    const product=item.product;
    return (
        <tr>
            <td>
               <img className="img" src={product.coverUrl} alt={product.title}/>
            </td>
            <td>
                {product.title}
            </td>
            <td>
               <ProductInCardDiv product={product} productInCard={item}/>  
            </td>
            <td>
                {item.quantity * product.price}
            </td>
        </tr>
    )
}
