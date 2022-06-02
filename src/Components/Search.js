import React, { useState } from 'react'
import { getSearchCoin } from '../Services/cryptocurrencyService';

import NotAvailable from '../Constants/icons/NotAvailable';

const Search = () => {
  const [coinName, setCoinName] = useState('');
  const [coinList, setCoinList] = useState([]);

  const handleCoin = async (charName) => {
    setCoinName(charName);
    

    if (charName.length >= 1) {
      const res = await getSearchCoin(charName);
      setCoinList(res.coins)      
    }
  }


  return (
    <>
        <input type="text" className='searchInput' placeholder='Coin ara' onChange={(e) => handleCoin(e.target.value)} autoComplete='off'/>

        {
          coinName.length > 0 &&
          <>
            {
          coinList.length > 0 ?
          <div className='coinList'>
            {
              coinList.map((item, id) => (
                <div key={id}>
                  <div className='searchedCoinList'>
                    <img src={item?.thumb} alt="" />
                    {item.name}
                  </div>
                </div>

              ))
            }
          </div>
          : <span></span>
        }
          </>
        }
    </>
  )
}

export default Search