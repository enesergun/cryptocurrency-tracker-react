import  { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Description from '../Components/Description';
import CoinInformation from '../Components/CoinInformation';
import Chart from '../Components/Chart';
import {useTracker} from '../Context/tracker';


import CoinDetailStyled from '../Components/styles/CoinDetailStyled.styled';
import IntroStyled from '../Components/styles/IntroStyled.styled';
import ChartStyled from '../Components/styles/ChartStyled.styled';
import { getCoin } from '../Services/cryptocurrencyService';





function CoinDetail() {  
  const {currencyChoice,} = useTracker();
  const { id } = useParams();  
  const [coin, setCoin] = useState();
  


  useEffect(() => {
    coinData();          
  }, [])
  
  

  const coinData = async () => {
    const res = await getCoin(id);
    
    setCoin(res);
  }


  const handleCurrency = (e) => {            
    currencyChoice(e.target.value);
  }


  return (
    <CoinDetailStyled>
      <select name="" id="" onChange={handleCurrency}>        
        <option value="usd" >usd</option>
        <option value="try" >try</option>
    </select>
      <Link to="/">
        <button>Back to the dashboard</button>
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