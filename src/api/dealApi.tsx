import axios from "axios";


const BASE_URL = "https://www.dealbuddy.co.nz/api";

export const dealInDetailApiData = async (dealName:string)=>{

const data = await axios.get(`${BASE_URL}/deal/slug-or-id/${dealName}`);
return data;

};