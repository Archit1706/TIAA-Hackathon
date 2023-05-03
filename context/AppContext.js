"use client";
import React, { useState, useEffect, createContext } from "react";


export const AppContext = createContext();

const AppProvider = ({ children }) => {


  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [category, setCategory] = useState("");

  const [formNumber, setFormNumber] = useState(1);
  // product form data
  const [productName, setProductName] = useState("");
  const [condition, setCondition] = useState("New");
  const [brand, setBrand] = useState("");
  const [location, setLocation] = useState("");
  const [productDescription, setProductDescription] = useState("");
  const [tags, setTags] = useState([])
  const [productImages, setProductImages] = useState([]);

  // specs form data
  const [specs, setSpecs] = useState([]);
  const [price, setPrice] = useState(0);
  const [soldDate, setSoldDate] = useState("");


  // picture form data
  const [links, setLinks] = useState([]);


  useEffect(() => {
    fetch("https://auction-backend.sidd065.repl.co/api/product/get")
      .then(res => res.json())
      .then(res => {
        if (res.success) setProducts(res.message);
      });
  }, []);

  useEffect(() => {
    fetch("https://auction-backend.sidd065.repl.co/api/users/get")
      .then(res => res.json())
      .then(res => {
        if (res.success) setUsers(res.message);
      });
  }, []);


  return (
    <AppContext.Provider
      value={{
        products,
        setProducts,
        users,
        setUsers,
        category,
        setCategory,
        productName,
        setProductName,
        condition,
        setCondition,
        brand,
        setBrand,
        location,
        setLocation,
        productDescription,
        setProductDescription,
        tags,
        setTags,
        productImages,
        setProductImages,
        formNumber,
        setFormNumber,
        links,
        setLinks,
        specs,
        setSpecs,
        price,
        setPrice,
        soldDate,
        setSoldDate
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
