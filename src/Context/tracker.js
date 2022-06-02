import React, { useContext, useState } from 'react';

const TrackerContext = React.createContext();
 
const TrackerProvider = ({children}) => {
    const [currency, setCurrency] = useState('usd');

    const currencyChoice = (element) => {
        setCurrency(element);
        console.log(element);

    }
    

    return (
        <TrackerContext.Provider 
            value={{
                currencyChoice,
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