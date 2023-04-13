import { createContext, useState } from 'react';

const initialValue = {
    openHandler: () => { },
    healthStatusHandler: (userValue) => { }
};

const DataContext = createContext(initialValue);

export const Provider = ({ children }) => {
    const [open, setOpen] = useState(false);
    const [healthStatus, setHealthStatus] = useState(false);
    const openHandler = () => {
        setOpen(prev => !prev);
    }

    const healthStatusHandler = (userValue) => {
        setHealthStatus(userValue);
    }

    const contextOperations = {
        open,
        openHandler,
        healthStatus,
        healthStatusHandler
    };

    return (
        <DataContext.Provider value={contextOperations}>
            {children}
        </DataContext.Provider>
    );
};

export default DataContext;