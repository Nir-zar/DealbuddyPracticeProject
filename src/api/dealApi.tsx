import { PanoramaFishEyeSharp } from "@mui/icons-material";
import axios from "axios";


interface Params {
    searchKeyword : string;
}


const BASE_URL = "https://www.dealbuddy.co.nz/api";

export const dealsApiData = async (params?:Params)=>{

    const data = await axios.get(`${BASE_URL}/deal/deals`,{
        params : {
            ...params
        }
    });
    return data;
    
    };

export const dealInDetailApiData = async (dealName:string)=>{

const data = await axios.get(`${BASE_URL}/deal/slug-or-id/${dealName}`);
return data;

};