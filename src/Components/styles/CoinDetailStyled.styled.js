import styled from 'styled-components'

const CoinDetailStyled = styled.div`
  margin-top: 50px;

  button {
      padding: 10px;
      border-radius: 15px;
      box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
      background-color: #F5F5F5;
      border:none;
  }

  .Intro {
    display: flex;
  }
  .CoinHeader,
  .CoinInformation {
      margin-top: 50px;
      width: 50%;
  }

  .description {
      margin-top: 20px;
  }
  .InformationContainer {
      max-width: 80%;
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
  }
`

export default CoinDetailStyled;