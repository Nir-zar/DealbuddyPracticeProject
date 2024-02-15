import axios from "axios";


interface Params {
    take : number;
}


const BASE_URL = import.meta.env.VITE_RAPID_BASE_URL
const url = "sponsored-ads?v=1703163820228"

const params = {
    take : 12
}

export const getAdsData = async () =>
{
   const data = await axios.get(`${BASE_URL}/${url}`,{
    params : {
        ...params
    }
   });
    return data;
}