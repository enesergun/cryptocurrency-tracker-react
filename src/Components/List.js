import React, { useState } from 'react';
import Star from '../Constants/icons/Star';

import 'animate.css';
import NotAvailable from '../Constants/icons/NotAvailable';


const List = ({listData, handleFavorite, star}) => {    
   


  return (
    <div className='animate__animated animate__backInLeft '>        
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
                <div key={id}>
                <div className="coin" >                        
                    <div className="star" onClick={() => handleFavorite(coin)}>
                        <Star color={star ? '#fc6' : "gray"}/>  
                    </div>                                              
                    <div className="rank">{coin.market_cap_rank}</div>
                    <div className="criptoLogo">
                        {
                            coin.image ? <img src={coin.image} alt="" /> : <NotAvailable />
                        }
                    </div>
                    <div className="coinName">{coin.name}</div>
                    <div className="price">${coin.current_price}</div>
                    <div className="hourCurrency">{coin.price_change_percentage_24h}</div>
                    <div className="hourVolume">{coin.total_volume}</div>                        
                    </div>
                    <div className="underline"></div>     
                </div>
                ))
            }
            
    </div>
  )
}

export default List