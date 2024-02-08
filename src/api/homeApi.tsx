import axios from "axios";





const BASE_URL = "https://www.dealbuddy.co.nz/api";


export const getData = async (url?: string, params?: object, currentCityName?:string | null) =>
{
   const data = await axios.get(`${BASE_URL}/${url}`,{
    params : {
      ...params,
     
    },
    headers : {
      "City" : currentCityName,
    }
   });
    return data;
}


export const getRelatedProductData = async(params:object,currentCityName:string)=>{
  const data = await axios.get(`${BASE_URL}/deal/similar/deals`,{
    params : {
      ...params
    },
    headers : {
      "City" : currentCityName,
    }
  });
  return data;
}