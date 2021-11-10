import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Categorylist from '../components/categorylist';
import ProductList from '../components/productList';
import { fetchCategories } from '../store/category/category-action';
import { fetchProduct } from '../store/product/product-action';
import "../assets/scss/dashboard.scss";
export default function Dashboard() {
    const state = useSelector(state => state)
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchCategories())
        dispatch(fetchProduct())
    },[])
    return (
       
        <div className="container">
           <Categorylist categories={state.categories.categories}/>
           <ProductList products={state.products.products}/>
        </div>
    )
}
