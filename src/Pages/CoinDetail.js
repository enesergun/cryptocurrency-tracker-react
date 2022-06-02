import  { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Description from '../Components/Description';
import CoinInformation from '../Components/CoinInformation';
import Chart from '../Components/Chart';



import CoinDetailStyled from '../Components/styles/CoinDetailStyled.styled';
import IntroStyled from '../Components/styles/IntroStyled.styled';
import ChartStyled from '../Components/styles/ChartStyled.styled';
import { getCoin } from '../Services/cryptocurrencyService';





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