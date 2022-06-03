import styled from 'styled-components'

const GlobalMarketStyled = styled.div`    
    .totalDataWrapper {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;        
        margin: 10px 0;
    }
    .totalData {        
        box-shadow: 0px 0px 15px -4px #000000;
        border-radius: 15px;        
        width: 20%;
        min-width: 20%;
        height: 100px;
        background-color: #293143;
        padding: 20px;        
    }
    .totalPrice {
        font-size: 20px;
        font-weight: bold;
    }
    .totalData span {
        font-size: 12px;
    }
    @media only screen and (min-width: 275px) {
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