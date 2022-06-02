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
    .rank {
        margin-left: 30px;
        width: 5%;

    }
    .coinName {
        width: 30%;      
    }
    .price {
        width: 20%;
    }
    .hourCurrency {
        width: 20%;
    }

    .underline {
        margin: 10px 0;        
        width: 100%;
        height: 1px;
        background-color: #e6e6e6;
    }
    .star {
        cursor: pointer;        
    }
    
    @media only screen and (max-width: 425px) {
        .table {
            min-width: 363px;                        
        }

    
`

export default ListStyled;