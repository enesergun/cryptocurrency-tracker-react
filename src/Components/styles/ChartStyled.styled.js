import styled from 'styled-components'

const ChartStyled = styled.div`
    text-align: center;
    button {        
        margin: 0 10px;        
        border: none;    
        cursor: pointer;
        color: #fff;
        padding: 10px;
        border-radius: 15px;
        box-shadow: 0px 0px 15px -4px #000000;
        background-color: #293143;
        
    }
    .active {
        background-color: #47c2be;
    }
    button:hover {
        background-color: #47c2be;
    }
`

export default ChartStyled;