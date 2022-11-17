import React, { useState } from 'react';

export const AppContext = React.createContext();

function AppProvider({ children }) {
    const [isOpenModal, setIsOpenModal] = useState(false);
    return (
        <AppContext.Provider
            value={{ isOpenModal, setIsOpenModal }}
        >
            {children}
        </AppContext.Provider>
    );
}

export default AppProvider;
