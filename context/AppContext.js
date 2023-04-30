"use client";
import React, { useState, createContext } from "react";


export const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [data, setData] = useState("Test Data");

    return (
        <AppContext.Provider
            value={{
                data,
                setData,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
