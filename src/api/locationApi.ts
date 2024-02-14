import axios from "axios";


const BASE_URL = "http://localhost:3000/api";
const url ="location?v=1705562814548&order%5Blocation%5D=ASC";


export const getQuickOption = async (params?: object) =>
{
   const data = await axios.get(`${BASE_URL}/${url}`,{
    params : {
      ...params,
    },

   });
    return data;
}

export const getAllCityOption = async (params?: object) =>
{
   const data = await axios.get(`${BASE_URL}/${url}`,{
    params : {
      ...params,
    },

   });
    return data;
}