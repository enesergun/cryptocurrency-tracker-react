import styled from 'styled-components'

const SearchStyled = styled.div`    
    .searchInput {
        width: 35%;
        height: 45px;
        border-radius: 15px;
        border:none;
        background-color: #f5f5f5;
        box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
        padding: 10px;                
    }
    .searchedCoinList {    
        width: 100%;
        padding: 10px;        
        background-color: #f5f5f5;      
        display: flex;
        align-items: center;  
    }
    .coinList {
        width: 35%;
        height: 130px;        
        overflow: auto; 
        
    }
    .coinList img {
        margin-right: 10px;
    }
  
`

export default SearchStyled;