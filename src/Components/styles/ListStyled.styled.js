import styled from 'styled-components'

const ListStyled = styled.div`
    margin: 40px 0;
    padding: 10px;
    border-radius: 15px;      
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    background-color: #F5F5F5;
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
    .price {
        width: 20%;
    }
    .hourCurrency {
        width: 20%;
    }

    .underline {               
        width: 100%;
        height: 1px;
        background-color: #e6e6e6;
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
        color: red;        
    }
    .increase {
        color: green;
    } 

    .container:hover {
        background-color: white;
    }
    
    @media only screen and (max-width: 425px) {
        .table {
            min-width: 363px;                        
        }

    
`

export default ListStyled;