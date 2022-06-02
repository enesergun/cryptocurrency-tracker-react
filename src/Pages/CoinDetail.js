import React from 'react';
import { useParams, Link } from 'react-router-dom';

import CoinDetailStyled from '../Components/styles/CoinDetailStyled.styled';

function CoinDetail() {
    const { id } = useParams();
  return (
    <CoinDetailStyled>
      <Link to="/">
        <button>Back to the dashboard</button>
      </Link>
      <div className="Intro">
        <div className="CoinHeader">
          <h1>BNB</h1>
          <h2 className="price">$30,004.69</h2>
          <span>5.9%</span>
          <div className='description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut quas vero repellat provident voluptas? Reiciendis debitis, quasi, eveniet iusto similique nesciunt natus asperiores, culpa quo eum quae consequatur iure sit.</div>
        </div>
        <div className="CoinInformation">
          <div className='InformationContainer'>
            <h1>Info</h1>
            <div className='info'>
              <div className='info-item'>
                <div className="title">github</div>
                <div className="title-link"><link href="http://github.com/binance" target="_blank" rel="noopener noreferrer"></link>github</div>
              </div>
              <div className='info-item'>
                <div className="title">twitter</div>
                <div className="title-link"><a href="http://github.com/binance" target="_blank" rel="noopener noreferrer"></a>github</div>
              </div>
              <div className='info-item'>
                <div className="title">facebook</div>
                <div className="title-link"><a href="http://github.com/binance" target="_blank" rel="noopener noreferrer"></a>github</div>
              </div>
              <div className='info-item'>
                <div className="title">reddit</div>
                <div className="title-link"><a href="http://github.com/binance" target="_blank" rel="noopener noreferrer"></a>github</div>
              </div>
              <div className='info-item'>
                <div className="title">official forum</div>
                <div className="title-link"><a href="http://github.com/binance" target="_blank" rel="noopener noreferrer"></a>github</div>
              </div>
            </div>                                
          </div>
        </div>
      </div>
    </CoinDetailStyled>
  )
}

export default CoinDetail