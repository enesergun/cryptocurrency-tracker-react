import React from 'react'

const List = () => {
  return (
    <>
    <div className="table">                
                <div className="rank">#</div>
                <div className="coinName">Coin</div>
                <div className="price">price</div>
                <div className="hourCurrency">24h</div>
                <div className="hourVolume">24h Volume</div>
            </div>                   
            <div className="underline"></div>
            <div className="coin">
                <div className="rank">1</div>
                <div className="coinName">BTC</div>
                <div className="price">$45654654</div>
                <div className="hourCurrency">-6.6%	</div>
                <div className="hourVolume">$34,212,513,501</div>
            </div> 
            <div className="underline"></div>
            <div className="coin">
                <div className="rank">1</div>
                <div className="coinName">BTC</div>
                <div className="price">$45654654</div>
                <div className="hourCurrency">-6.6%	</div>
                <div className="hourVolume">$34,212,513,501</div>
            </div> 
    </>
  )
}

export default List