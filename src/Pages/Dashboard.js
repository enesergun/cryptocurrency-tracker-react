import React, { useEffect, useState } from 'react';
import GlobalMarket from '../Components/GlobalMarket';
import List from '../Components/List';
import DashboardStyled from '../Components/styles/DashboardStyled.styled';
import GlobalMarketStyled from '../Components/styles/GlobalMarketStyled.styled';
import ListStyled from '../Components/styles/ListStyled.styled';
import SearchStyled from '../Components/styles/SearchStyled.styled';
import { getAllCoin, getGlobalMarketData } from '../Services/cryptocurrencyService';


function Dashboard() {
    const [global, setGlobal] = useState([]);


    useEffect(() => {
        globalMarketData();
    }, []);



    const globalMarketData = async () => {
        const data = await getGlobalMarketData();
        setGlobal(data);        
    }


  return (
    <>
    <DashboardStyled>
      <GlobalMarketStyled>
        <GlobalMarket globalData={global}/>
        </GlobalMarketStyled>

        
      <ListStyled>               
        <List />            
      </ListStyled>
      
      <SearchStyled>
          <input type="text" className='searchInput' placeholder='Coin ara' />
      </SearchStyled>
      
      <ListStyled>
        <List />
      </ListStyled>

    </DashboardStyled>
    </>
  )
}

export default Dashboard