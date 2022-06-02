import styled from 'styled-components'

const GlobalMarketStyled = styled.div`    
    .totalDataWrapper {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;        
        margin: 10px 0;
    }
    .totalData {        
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        border-radius: 15px;        
        width: 20%;
        min-width: 20%;
        height: 100px;
        background-color: #f5f5f5;
        padding: 20px;        
    }
    .totalPrice {
        font-size: 20px;
        font-weight: bold;
    }
    .totalData span {
        font-size: 12px;
    }
    @media only screen and (min-width: 320px) {
        .totalData {
            width: 100%;   
            margin-bottom: 10px;     
      }
      @media only screen and (min-width: 768px) {
        .totalData {
            width: 45%;               
            margin-bottom: 10px;     
      }
      @media only screen and (min-width: 1440px) {
        .totalData {
            width: 20%;              
            margin-bottom: 10px;     
      }
  
  
`

export default GlobalMarketStyled;