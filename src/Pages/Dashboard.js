import React from 'react';
import DashboardStyled from '../Components/styles/DashboardStyled.styled';
import GlobalMarketStyled from '../Components/styles/GlobalMarketStyled.styled';
import ListStyled from '../Components/styles/ListStyled.styled';
import SearchStyled from '../Components/styles/SearchStyled.styled';


function Dashboard() {
  return (
    <>
    <DashboardStyled>
      <GlobalMarketStyled>
          <h1>Cryptocurrency Prices by Market Cap</h1>
          <div className="totalDataWrapper">
            <div className="totalData totalMarketCap">
                <div className='totalPrice'>$1,297,851,279,155</div>
                <span>Market Capitalization</span>
            </div>
            <div className="totalData totalVolume">
                <div className='totalPrice'>$1,297,851,279,155</div>
                <span>24th Trading Volume</span>
            </div>
            <div className="totalData marketCapPercentage">
                <div className='totalPrice'>$1,297,851,279,155</div>
                <span>Bitcoin Market Cap Dominance</span>
            </div>
            <div className="totalData totalCoin">
                <div className='totalPrice'>1600</div>
                <span># of Coins</span>
            </div>
          </div>
        </GlobalMarketStyled>

        
      <ListStyled>               
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
            
      </ListStyled>
      
      <SearchStyled>
          <input type="text" className='searchInput' placeholder='Coin ara' />
      </SearchStyled>
      
      <ListStyled>
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
            <div className="underline"></div>
            <div className="coin">
                <div className="rank">1</div>
                <div className="coinName">BTC</div>
                <div className="price">$45654654</div>
                <div className="hourCurrency">-6.6%	</div>
                <div className="hourVolume">$34,212,513,501</div>
            </div> 
      </ListStyled>

    </DashboardStyled>
    </>
  )
}

export default Dashboard