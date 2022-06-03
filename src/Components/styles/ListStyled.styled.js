import styled from 'styled-components'

const ListStyled = styled.div`
    margin: 40px 0;
    padding: 10px;
    border-radius: 15px;      
    box-shadow: 0px 0px 15px -4px #000000;
    background-color: #293143;
    
    .wrap {
        overflow-y:auto;
    }
    .table-header {
        width: 20px;
    }
    .table div{        
        font-size: 12px;
        font-weight: bold;
    }
    .table,
    .coin {
        display: flex;        
               
    }
    .table {
        min-width: 550px;
    }
    .coin {
        padding: 15px 0;
    }
    .table  .coinName, .coinHeader {
        margin-right: 30px;
    }
    .rank {
        margin-left: 30px;
        width: 5%;

    }
    .coinHeader,.coinName {
        width: 30%;      
    }
    .ListCoinName {
        color: #fff;
        width: 90%;
    }
    .ListCoinNameSpanElement{
        margin-right: 10px;
        display: inline-block;
        width: 50%;
        font-weight: bold;
    }
    .symbol {
        text-transform: uppercase;
        font-size: 12px;
    }
    .coinHeader a {
        display: flex;        
    }
    .price,
    .hourCurrency {
        width: 15%;
    }    

    .underline {               
        width: 100%;
        height: 1px;
        background-color: black;
        min-width: 550px;
    }
    .star {
        cursor: pointer;        
    }

    .criptoLogo img {
        margin-right: 10px;
        width: 20px;
        height: 20px;
    }
    .decrease {
        color: #ff7060;     
    }
    .increase {
        color: #26da71;
    }
    .container {
        min-width: 550px;
    } 

    .container:hover {
        background-color: #343e56;
    }
    
    @media (max-width: 768px) {
        font-size: 12px;
    }
    
`

export default ListStyled;