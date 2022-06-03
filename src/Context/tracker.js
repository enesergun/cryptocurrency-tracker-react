import React, { useContext, useState } from 'react';

const TrackerContext = React.createContext();
 
const TrackerProvider = ({children}) => {
    const [currency, setCurrency] = useState('usd');
    const [currencySymbol, setCurrencySymbol] = useState('$');

    const currencyChoice = (element) => {
        if (element === 'try') {            
            setCurrencySymbol('TRY');
        }
        else {
            setCurrencySymbol('$');
        }
        setCurrency(element);        
    }
    

    return (
        <TrackerContext.Provider 
            value={{
                currencyChoice,
                currency,
                currencySymbol
            }}
        >
            {children}
        </TrackerContext.Provider>
    )   
}


function useTracker() {
    return useContext(TrackerContext)
}

export {TrackerProvider, TrackerContext, useTracker}