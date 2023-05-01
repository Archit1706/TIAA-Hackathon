"use client";
import React, { useState, useEffect, createContext } from "react";


export const AppContext = createContext();

const AppProvider = ({ children }) => {

    const [products, setProducts] = useState([]);
		const [users, setUsers] = useState([]);
		useEffect(() => {
    fetch("https://auction-backend.sidd065.repl.co/api/product/get")
      .then(res => res.json())
      .then(res => {
        if(res.success) setProducts(res.message);
      });
  	}, []);
		useEffect(() => {
    fetch("https://auction-backend.sidd065.repl.co/api/users/get")
      .then(res => res.json())
      .then(res => {
				if(res.success) setUsers(res.message);
      });
  	}, []);

    return (
        <AppContext.Provider
            value={{
                products,
                setProducts,
								users,
								setUsers,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
