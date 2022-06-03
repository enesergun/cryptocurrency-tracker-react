import styled from 'styled-components'

const SearchStyled = styled.div`    
    .searchInput {
        width: 35%;
        height: 45px;
        border-radius: 15px;
        border:none;
        background-color: #293143;
        box-shadow: 0px 0px 15px -4px #000000;
        padding: 10px;     
        color: #fff;           
    }
    .searchedCoinList {    
        width: 100%;
        padding: 10px;        
        background-color: #293143; 
        display: flex;
        align-items: center;  
        color: #fff;
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