import axios from "axios";

interface StoreParams {
    take : number;
    page : number;
    skip : number;
    searchKeyword : string;
}

const BASE_URL = import.meta.env.VITE_RAPID_BASE_URL

export const getStoreData = async (  params:StoreParams, currentCityName: string | null)=>{
    const data = await axios.get(`${BASE_URL}/store/stores`,{
        params : {
            ...params,
        },
        headers : {
            "City" : currentCityName,
          }
    });
    return data;
}

export const getIndividualStoreData = async (slug:string)=>{
    const data = await axios.get(`${BASE_URL}/store/slug-or-id/${slug}`,{
    });
    return data;
}