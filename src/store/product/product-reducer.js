import { FETCH_PRODUCTS } from "./product-action";

const initial_state={
    products:[]
}

export const productReducer=(state=initial_state,action)=>{
    switch (action.type) {
        case FETCH_PRODUCTS:
            return {...state, products:action.payload}
        
        default:
            return state;
    }
}