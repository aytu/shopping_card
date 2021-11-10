
export const ADD_TO_SHOPPING_CARD="ADD_TO_SHOPPING_CARD";
export const REMOVE_FROM_SHOPPING_CARD="REMOVE_FROM_SHOPPING_CARD";
export const GET_PRODUCT_COUNTS_IN_CART="GET_PRODUCT_COUNTS_IN_CART";


export const addToShoppingCard=(product)=>{   
   return {type:ADD_TO_SHOPPING_CARD, payload:product}
}

export const removeFromShoppingCard=(product)=>{
    return {type:REMOVE_FROM_SHOPPING_CARD, payload:product}
}