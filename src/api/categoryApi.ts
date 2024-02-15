import axios from "axios";


const BASE_URL = import.meta.env.VITE_RAPID_BASE_URL

export const  getCategoryList = async()=>{
    const getCategoryList = axios.get(`${BASE_URL}/category?v=1706166440332&order%5BorderBy%5D=ASC`);
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