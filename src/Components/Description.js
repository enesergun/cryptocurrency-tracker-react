import React from 'react'

const Description = ({data}) => {

  
  return (
    <div className="animate__animated  animate__backInLeft CoinHeader">
        <div className="header">
          <span><img src={data?.image?.thumb} alt="" /></span>
          <h1>{data?.name}</h1>
          <h2 className="price">$ {data?.market_data.current_price.usd}</h2>
          <span className={data?.market_data.price_change_percentage_24h < 0 ? 'decrease' : 'increase'}>{data?.market_data.price_change_percentage_24h}%</span>
          <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quas vero repellat provident voluptas? Reiciendis debitis, quasi, eveniet iusto similique nesciunt natus asperiores, culpa quo eum quae consequatur iure sit.</div>
        </div>
        <div className="statisticsContainer">
          <h3>{data?.symbol} Price Statistics</h3>
          <div className="statistics">
            <div className="statisticsElement">
              <div className="StatisticTitle">Price</div>
              <div className="StatisticValue">$ {data?.market_data.current_price.usd}</div>              
            </div>
            <div className="statisticsElement">
              <div className="StatisticTitle">Volume</div>
              <div className="StatisticValue">$ {data?.market_data.total_volume?.usd}</div>
            </div>
            <div className="statisticsElement">
              <div className="StatisticTitle">Market Cap</div>
              <div className="StatisticValue">$ {data?.market_data.market_cap.usd}</div>
            </div>           
            <div className="statisticsElement">
              <div className="StatisticTitle">24h Low / 24h High</div>
              <div className="StatisticValue"> $ {data?.market_data.high_24h.usd} / $ {data?.market_data.low_24h.usd}</div>
            </div>


          </div>
        </div>
    </div>
  )
}

export default Description