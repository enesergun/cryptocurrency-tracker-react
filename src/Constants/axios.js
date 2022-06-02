import axios from "axios";

export const baseURL = "https://api.coingecko.com/api/v3";
export default axios.create({baseURL});

export const URL = {    
    global: '/global',
    coins: '/coins/markets',
    search: '/search'
  
}