import axios, { URL } from "../Constants/axios";

export const getGlobalMarketData = async () => {
    try {
      const res = await axios.get(URL.global, {
        headers: {
          'Cache-Control': 'max-age=31536000',
      }
      });    
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

export const getAllCoin = async (currency, page) => {
  try {
    const res = await axios.get(URL.coins + `?vs_currency=${currency}&per_page=100&page=${page}&sparkline=true`, {
      headers: {
        'Cache-Control': 'max-age=31536000',
    }});    
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

export const getCoin = async (id) => {
  try {
      const res = await axios.get(URL.coin + `/${id}`);  
        
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

export const getCoinChart = async (id, currency, days = 1) => {
  try {
      const res = await axios.get(URL.coin + `/${id}/market_chart?vs_currency=${currency}&days=${days}`);  
        
      if(res.status === 200) {
        console.log(res);
          
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

