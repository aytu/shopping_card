import { ADD_TO_SHOPPING_CARD, GET_PRODUCT_COUNTS_IN_CART, REMOVE_FROM_SHOPPING_CARD } from "./shoppingCard-action";


const initial_state={
    products:[],
    totalProducts:0
}

export const shoppinCardReducer=(state=initial_state,action)=>{
    switch (action.type) {
        case ADD_TO_SHOPPING_CARD:
            const quantity=state.products.length>0 ? state.products.filter(x=>x.product.id===action.payload.id).length : 0;           
            if(quantity===0)  
            return {products: [...state.products,{product:action.payload,quantity:1}] , totalProducts: state.totalProducts+1  } 
            else  return {products: state.products.map(el=>(el.product.id===action.payload.id ? {...el, quantity:el.quantity+1} : el )), totalProducts: state.totalProducts+1} 
        case REMOVE_FROM_SHOPPING_CARD:   
            let products;         
            const isExists=state.products.length>0 ? state.products.filter(x=>x.product.id===action.payload.id).length : 0;           
            if(isExists) products= state.products.map(el=>(el.product.id===action.payload.id ? {...el, quantity:el.quantity-1} : el ))  
            return {products: products.filter(el=>el.quantity!==0), totalProducts: state.totalProducts-1}          
        default:
            return state;
    }
}