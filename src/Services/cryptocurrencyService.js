import axios, { URL } from "../Constants/axios";

export const getGlobalMarketData = async () => {
    try {
      const res = await axios.get(URL.global);    
      if(res.status === 200) {
          
        return res.data.data;
      }
      else {
        return {
          error: 'Data gelmedi'
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

export const getAllCoin = async () => {
  try {
    const res = await axios.get(URL.coins + "?vs_currency=usd");    
    if(res.status === 200) {
        
      return res.data;
    }
    else {
      return {
        error: 'Data gelmedi'
      }
    }
  } catch (error) {
    console.log(error);
  }
}
