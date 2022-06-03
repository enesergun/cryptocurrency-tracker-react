import React from 'react';
import {useTracker} from '../Context/tracker';
import CurrencySwitcherStyled from './styles/CurrencySwitcherStyled.styled';

const CurrencySwitcher = () => {
    const {currencyChoice,} = useTracker();
    
  const handleCurrency = (e) => {            
    currencyChoice(e.target.value);
  }

  return (
    <CurrencySwitcherStyled>
        <select name="" id="" onChange={handleCurrency}>        
            <option value="usd" >usd</option>
            <option value="try" >try</option>
        </select>
    </CurrencySwitcherStyled>
  )
}

export default CurrencySwitcher