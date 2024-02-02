import axios from "axios";





const BASE_URL = "https://www.dealbuddy.co.nz/api";


export const getData = async (url?: string, params?: object) =>
{
   const data = await axios.get(`${BASE_URL}/${url}`,{
    params : {
      ...params,
      // limit:5,
    }
   });
    return data;
}


export const getRelatedProductData = async(params:object)=>{
  const data = await axios.get(`${BASE_URL}/deal/similar/deals`,{
    params : {
      ...params
    }
  });
  return data;
}