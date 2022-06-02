import styled from 'styled-components'

const IntroStyled = styled.div`
    display: flex;
    justify-content: space-between;

  
  .CoinHeader {
      width: 60%;
  }
  .CoinInformation {
      width: 30%;
  }
  .CoinHeader,
  .CoinInformation {
      margin-top: 50px;
      
  }

  .description,
  .statisticsContainer {
      margin-top: 20px;
  }
  .statisticsContainer {
      background-color: #f5f5f5;      
      padding: 10px;    
      border-radius: 15px;
      box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.2);
  }
  .statisticsContainer h3 {
    margin-bottom: 10px;
    }
    .StatisticValue {
        font-weight: bold;
    }
    .increase {
        color: green;
    }
    .decrease {
        color: red;
    }

  .statistics {
      display: flex;
      flex-wrap: wrap;
  }
  .statisticsElement {
      width: 50%;
      margin-bottom: 10px;
  }
  .InformationContainer {
      max-width: 100%;
      margin: 0 auto;      
  }

  .info {
      padding: 10px 0;
  }
  .info-item {
      display: flex;      
      padding: 10px 0;
  }
  .title {
      width: 30%;
      padding: 10px 0;
  }
  .title-link {
      background-color: #F5F5F5;
      padding: 10px;
      border-radius: 15px;
      font-weight: bold;
  }

    .title-link a {
        display: flex;
        align-items: center;
    }
    .title-link a:hover {
        color: #0070f3;
    }
    .title-link a svg {
        margin-right: 10px;
    }
`

export default IntroStyled;