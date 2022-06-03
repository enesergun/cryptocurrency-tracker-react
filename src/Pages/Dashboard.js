import React, { useEffect, useState } from 'react';
import GlobalMarket from '../Components/GlobalMarket';
import List from '../Components/List';
import Pagination from '../Components/Pagination';
import Search from '../Components/Search';
import DashboardStyled from '../Components/styles/DashboardStyled.styled';
import GlobalMarketStyled from '../Components/styles/GlobalMarketStyled.styled';
import ListStyled from '../Components/styles/ListStyled.styled';
import SearchStyled from '../Components/styles/SearchStyled.styled';
import PaginationStyled from '../Components/styles/PaginationStyled.styled';
import { getAllCoin, getGlobalMarketData } from '../Services/cryptocurrencyService';
import {useTracker} from '../Context/tracker';

import ClipLoader from "react-spinners/ClipLoader";
import CurrencySwitcher from '../Components/CurrencySwitcher';



function Dashboard() {
    const {currency, currencySymbol} = useTracker();

    const [global, setGlobal] = useState([]);
    const [listData, setListData] = useState([]);
    const [favorite, setFavorite] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPage, setTotalPage] = useState();
    const [loading, setLoading] = useState();


    useEffect(() => {
        globalMarketData();
        /* listDataFunc(); */
    }, []);


    useEffect(() => {
        listDataFunc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, currency]);

    
  
    
    const globalMarketData = async () => {
        const data = await getGlobalMarketData();
        setGlobal(data);     
        setTotalPage((Math.round(data.active_cryptocurrencies / 100)));   
    }

    const listDataFunc = async () => {     
        setLoading(true);
        const favoriteStorage = JSON.parse(localStorage.getItem(`favorite`));
        const coins = JSON.parse(localStorage.getItem(`${currentPage}-${currency}`));

        if (favoriteStorage) {
            setFavorite(favoriteStorage);
        }
        
        if (coins) {
            setListData(coins);
            setLoading(false);
        } else {
            const data = await getAllCoin(currency, currentPage);
            console.log(currency);
            setListData(data);
            localStorage.setItem(`${currentPage}-${currency}`, JSON.stringify(data));
            setLoading(false);
        }
        
    }

  

    const handleFavorite = (coin) => {
      const prevFavorite = [...favorite];      
      if(favorite.includes(coin)){
        setFavorite(favorite.filter(item => item !== coin));
        const favoriteStorage = JSON.parse(localStorage.getItem(`favorite`));

        // eslint-disable-next-line array-callback-return
        favoriteStorage.map((item, index) => {
            if (item.id === coin.id) {
                favoriteStorage.splice(index, 1);
                localStorage.setItem(`favorite`, JSON.stringify(favoriteStorage));
            }
        })
      }
      else{
        const newFavorite = favorite.concat(coin);
        if (prevFavorite.length > 0) {
          localStorage.setItem(`favorite`, JSON.stringify(newFavorite));
        } 
        else {
            localStorage.setItem(`favorite`, JSON.stringify(newFavorite));
        }
        setFavorite(newFavorite);
      }
    }
      

    const setPage = (value) => {
        if (value.type === "next" && currentPage < totalPage) {
          setCurrentPage((x) => x + 1);
        } else if (value.type === "prev" && currentPage > 0) {
          setCurrentPage((x) => x - 1);
        } else if (value.type === "add") {
          setCurrentPage(value.number);
        }
    };

    

    

  return (
    <>
    <CurrencySwitcher />

    <DashboardStyled>
      <GlobalMarketStyled>
        <GlobalMarket globalData={global} />
        </GlobalMarketStyled>

        
      {
          favorite.length > 0 && 
          <ListStyled>               
            <List listData={favorite} handleFavorite={handleFavorite} star={true}/>
          </ListStyled>
      }
      
      <SearchStyled>
          <Search />
      </SearchStyled>

      
      
      <ListStyled>
        {
            loading ? <ClipLoader /> : <List listData={listData} handleFavorite={handleFavorite} star={false} favoriteList={favorite} currencySymbol={currencySymbol}/> 
        }
            
        
      </ListStyled>

      <PaginationStyled>
        <Pagination totalPage={totalPage} currentPage={currentPage} click={setPage} />
      </PaginationStyled>

        

    </DashboardStyled>
    </>
  )
}

export default Dashboard