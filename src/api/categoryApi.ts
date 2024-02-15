import axios from "axios";

interface Params {
    take : number;
    shortBy : string;
}

const BASE_URL = import.meta.env.VITE_RAPID_BASE_URL

export const  getCategoryList = async(params:Params)=>{
    const getCategoryList = axios.get(`${BASE_URL}/category?v=1706166440332&order%5BorderBy%5D=ASC`,{
        params : {
            ...params
        }
    });
    return getCategoryList;
} 

export const getIndividualCategoryData = async (categorySlug:string)=>{

        const data = await axios.get(`${BASE_URL}/category/slug-or-id/${categorySlug}`,{
            params : 
            {
                isActive : true,
            }
        });
        return data;

};