import axios from "axios";


const BASE_URL = "https://www.dealbuddy.co.nz/api"

export const  getCategoryList = async()=>{
    const getCategoryList = axios.get(`${BASE_URL}/category?v=1706166440332&order%5BorderBy%5D=ASC`);
    return getCategoryList;
} 