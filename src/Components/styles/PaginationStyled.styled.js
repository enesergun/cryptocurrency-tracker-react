import styled from 'styled-components'

const PaginationStyled = styled.div`
  text-align: center;
  padding: 20px 10px;
  
  
  .active {
    background-color: red;
  }
  & > span {
      margin: 0 3px;
      border: 1px solid #ccc;
      
      cursor: pointer;
    padding: 5px 10px;      
  }
`

export default PaginationStyled;