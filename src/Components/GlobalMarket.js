import React from 'react';
import 'animate.css';

const GlobalMarket = ({globalData}) => {

    
  return (
    <>
    <h1>Cryptocurrency Prices by Market Cap</h1>
    <div className="totalDataWrapper">
        <div className="animate__animated  animate__backInDown totalData totalMarketCap">
            <div className='totalPrice'>{globalData.total_market_cap?.usd}</div>
            <span>Market Capitalization</span>
        </div>
        <div className="animate__animated  animate__backInDown totalData totalVolume">
            <div className='totalPrice'>{globalData.total_volume?.usd}</div>
            <span>24th Trading Volume</span>
        </div>
        <div className="animate__animated  animate__backInDown totalData marketCapPercentage">
            <div className='totalPrice'>{globalData.market_cap_percentage?.btc}</div>
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