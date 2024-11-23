import { createContext, useContext, useState } from 'react';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [contactDetails] = useState({
        email: 'ccare@axamansard.com',
        phone: '0700AXAMANSARD',
        facebook: '@axamansard',
        twitter: '@axamansard',
    });

    return (
        <AppContext.Provider value={{ contactDetails }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    return useContext(AppContext);
};
