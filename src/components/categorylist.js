import React from 'react'
import { useDispatch } from 'react-redux'
import '../assets/scss/categories.scss'
import { fetchProductByCategory } from '../store/product/product-action';

export default function Categorylist({categories}) {

    const dispatch=useDispatch();
    const getProductsByCategory=(e,categoryId)=>{
        console.log("dsfsdf",categoryId)
        dispatch(fetchProductByCategory(categoryId));
    }

    return (
        <div>
            <div className="card" style={{width: '18rem'}}>
                <div className="card-header">
                    All categories
                </div>
                <ul className="list-group list-group-flush">
                  { categories.map(category=>{
                        return ( <li key={category.id} onClick={(e)=>getProductsByCategory(e,category.id)} className="list-group-item">{category.name}</li>)
                    })  
                  }                  
                </ul>
                </div>
        </div>
    )
}
