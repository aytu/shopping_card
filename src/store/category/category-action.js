import { categories } from "../../data/categoy";
export const FETCH_CATEGORIES="FETCH_CATEGORIES";


export const fetchCategories=()=>{
    //assume get categories from db
    return {type:FETCH_CATEGORIES,payload:categories}
}