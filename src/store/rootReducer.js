import { combineReducers } from "redux";
import { categoryReducer } from "./category/category-reducer";
import { productReducer } from "./product/product-reducer";
import { shoppinCardReducer } from "./shoppingCard/shoppingCard-reducer";

export const rootReducer=combineReducers({categories:categoryReducer,products:productReducer,shoppingCard:shoppinCardReducer})