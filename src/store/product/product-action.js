import { products } from "../../data/products";

export const FETCH_PRODUCTS="FETCH_PRODUCTS";

export const fetchProduct=()=>{
    return {type:FETCH_PRODUCTS, payload:products}
}

export const fetchProductByCategory=(id)=>{   
    const filteredProducts=products.filter(p=>p.categoryId===id);  
    return {type:FETCH_PRODUCTS, payload:filteredProducts}
}