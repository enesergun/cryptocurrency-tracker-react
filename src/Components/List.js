import React from 'react';
import Star from '../Constants/icons/Star';

import 'animate.css';
import NotAvailable from '../Constants/icons/NotAvailable';
import { Link } from 'react-router-dom';

import {useTracker} from '../Context/tracker';


import { numberWithCommas } from '../Utils/numberWithCommas';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,    
    
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,         
  );

    const historicalData = ["pzt", "sal", "car", "per", "cum", "cts", "paz", "son", "cumartesi", "pazar"];

const List = ({listData, handleFavorite, star, favoriteList}) => {       
    const { currencySymbol} = useTracker();
        
  return (
    <div className='animate__animated animate__backInLeft wrap'>        
    <div className="table">                
        <div className="table-header"></div>    
        <div className="rank">#</div>
        <div className="coinName">Coin</div>
        <div className="price">price</div>
        <div className="hourCurrency">24h</div>
        <div className="hourVolume">24h Volume</div>
    </div>                   
    <div className="underline"></div>            
        {
            listData?.map((coin, id) => (
                
                <div key={id} className="container">
                <div className="coin" >                        
                    <div className="star" onClick={() => handleFavorite(coin)}>
                        <Star color={favoriteList?.includes(coin) ? '#fc6' : star ? '#fc6' : "gray"}/>  
                    </div>                                              
                    <div className="rank">{coin.market_cap_rank}</div>
                    <div className='coinHeader'>
                    <Link to={`/coins/${coin.id}`}>
                    {<div className="criptoLogo">
                        {
                            coin.image ? <img src={coin.image} alt="" /> : <NotAvailable />
                        }
                    </div>}
                    <div className="coinName ListCoinName">
                        <span className='ListCoinNameSpanElement'>{coin.name}</span>
                        <span className='symbol'>{coin.symbol}</span>
                        </div>
                    
                    </Link>
                    </div>
                    <div className="price">{currencySymbol} {numberWithCommas(coin.current_price.toFixed(2))}</div>
                    <div className={coin.price_change_percentage_24h < 0  ? 'hourCurrency decrease' : 'hourCurrency increase'}>{coin.price_change_percentage_24h?.toFixed(2)}%</div>
                    <div className="hourVolume">{currencySymbol} {numberWithCommas(coin.total_volume.toFixed(2))}</div>  
                    
                    </div>
                    <div className="underline"></div>     
                </div>
                
                ))
            }
            
            
    </div>
  )
}

export default List