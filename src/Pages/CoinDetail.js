import  { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Description from '../Components/Description';
import CoinInformation from '../Components/CoinInformation';
import Chart from '../Components/Chart';

import  BackIcon from '../Constants/icons/BackIcon';

import CoinDetailStyled from '../Components/styles/CoinDetailStyled.styled';
import IntroStyled from '../Components/styles/IntroStyled.styled';
import ChartStyled from '../Components/styles/ChartStyled.styled';
import { getCoin } from '../Services/cryptocurrencyService';
import CurrencySwitcher from '../Components/CurrencySwitcher';





function CoinDetail() {  
  const { id } = useParams();  
  const [coin, setCoin] = useState();
  


  useEffect(() => {
    coinData();          
  }, [])
  
  

  const coinData = async () => {
    const res = await getCoin(id);
    
    setCoin(res);
  }




  return (
    <CoinDetailStyled>
      <CurrencySwitcher />

      <Link to="/">
        <BackIcon />
      </Link>
      <IntroStyled>
        <Description data={coin}/>
        <CoinInformation data={coin}/>
      </IntroStyled>

      <ChartStyled>
        <Chart id={id} />
      </ChartStyled>


    </CoinDetailStyled>
  )
}

export default CoinDetail