import React, { useEffect, useState, Suspense } from 'react';
import GlobalMarket from '../Components/GlobalMarket';
import List from '../Components/List';
import Search from '../Components/Search';
import DashboardStyled from '../Components/styles/DashboardStyled.styled';
import GlobalMarketStyled from '../Components/styles/GlobalMarketStyled.styled';
import ListStyled from '../Components/styles/ListStyled.styled';
import SearchStyled from '../Components/styles/SearchStyled.styled';
import { getAllCoin, getGlobalMarketData } from '../Services/cryptocurrencyService';

import ClipLoader from "react-spinners/ClipLoader";



function Dashboard() {
    const [global, setGlobal] = useState([]);
    const [listData, setListData] = useState([]);
    const [favorite, setFavorite] = useState([]);


    useEffect(() => {
        globalMarketData();
        listDataFunc();
    }, []);



    const globalMarketData = async () => {
        const data = await getGlobalMarketData();
        setGlobal(data);        
    }

    const listDataFunc = async () => {     
        const favoriteStorage = JSON.parse(localStorage.getItem('favorite'));

        if (favoriteStorage) {
            setFavorite(favoriteStorage);
        }

        const data = await getAllCoin();
        setListData(data);
    }

  

    const handleFavorite = (coin) => {
      const prevFavorite = [...favorite];      
      if(favorite.includes(coin)){
        setFavorite(favorite.filter(item => item !== coin));
        const favoriteStorage = JSON.parse(localStorage.getItem('favorite'));

        favoriteStorage.map((item, index) => {
            if (item.id === coin.id) {
                favoriteStorage.splice(index, 1);
                localStorage.setItem('favorite', JSON.stringify(favoriteStorage));
            }
        })
      }
      else{
        const newFavorite = favorite.concat(coin);
        if (prevFavorite.length > 0) {
          localStorage.setItem('favorite', JSON.stringify(newFavorite));
        } 
        else {
            localStorage.setItem('favorite', JSON.stringify(newFavorite));
        }
        setFavorite(newFavorite);
      }
    }
      


  return (
    <>
    <DashboardStyled>
      <GlobalMarketStyled>
        <GlobalMarket globalData={global}/>
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
        <Suspense fallback={<ClipLoader />}>
            <List listData={listData} handleFavorite={handleFavorite} star={false}/> 
        </Suspense>
      </ListStyled>

    </DashboardStyled>
    </>
  )
}

export default Dashboard