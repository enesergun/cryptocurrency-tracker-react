import React, { useState } from 'react';
import 'animate.css';
import { numberWithCommas } from '../Utils/numberWithCommas';

import {useTracker} from '../Context/tracker';


const GlobalMarket = ({globalData}) => {
    const {currencyChoice, currency, currencySymbol} = useTracker();
    
        
  return (
    <>
    <h1>Cryptocurrency Prices by Market Cap</h1>
    <div className="totalDataWrapper">
        <div className="animate__animated  animate__backInDown totalData totalMarketCap">
            <div className='totalPrice'>$ {numberWithCommas(globalData.total_market_cap?.usd.toFixed(2))}</div>
            <span>Market Capitalization</span>
        </div>
        <div className="animate__animated  animate__backInDown totalData totalVolume">
            <div className='totalPrice'>$ {numberWithCommas(globalData?.total_volume?.usd.toFixed(2))}</div>
            <span>24th Trading Volume</span>
        </div>
        <div className="animate__animated  animate__backInDown totalData marketCapPercentage">
            <div className='totalPrice'>{globalData.market_cap_percentage?.btc.toFixed(2)}%</div>
            <span>Bitcoin Market Cap Dominance</span>
        </div>
        <div className="animate__animated  animate__backInDown totalData totalCoin">
            <div className='totalPrice'>{globalData.active_cryptocurrencies}</div>
            <span># of Coins</span>
        </div>
    </div>
    </>
  )
}

export default GlobalMarket