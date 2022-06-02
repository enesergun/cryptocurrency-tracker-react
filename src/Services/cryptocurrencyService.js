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

export const getAllCoin = async (page) => {
  try {
    const res = await axios.get(URL.coins + `?vs_currency=usd&per_page=50&page=${page}&sparkline=true`);    
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

export const getSearchCoin = async (coinName) => {
    try {
        const res = await axios.get(URL.search + `?query=${coinName}`);  
          
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
