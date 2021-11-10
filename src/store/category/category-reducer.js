import { FETCH_CATEGORIES } from "./category-action";

const initial_state={
    categories:[]
}
export const categoryReducer=(state=initial_state,action)=>{
    switch (action.type) {
        case FETCH_CATEGORIES:
            return {...state,categories:action.payload};    
        default:
           return state;
    }
}