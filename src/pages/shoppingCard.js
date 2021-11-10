import React from 'react'
import { useSelector } from 'react-redux'
import ShoppingItem from '../components/shoppingItem';
import '../assets/scss/shoppinCart.scss';
export default function ShoppingCard() {

    const state=useSelector(state=>state.shoppingCard);
    return (
        <div>
            <p>You have {state.totalProducts} items in your cart</p>
            <table className="table ">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.products.map(item=>{
                            return <ShoppingItem item={item} key={item.product.id}/>
                        })
                    }
                </tbody>          
           </table>
           <h4>Total : </h4>
        </div>
    )
}
