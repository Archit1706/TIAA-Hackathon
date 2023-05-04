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

  const [userId, setUserId] = useState(localStorage.getItem("userId") || "6452c8e67e7e50035edc2de2");

  // getDashDetails, itemsSold, itemsBought

  const [itemsBought, setItemsBought] = useState([]);
  const [itemsSold, setItemsSold] = useState([]);

  const getDashDetails = () => {
    // Post Request

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/getDashDetails`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: userId,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.success) {
          setItemsBought(res.message.itemsBought);
          setItemsSold(res.message.itemsSold);
        }
      });


    // fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/getDashDetails`)
    //   .then(res => res.json())
    //   .then(res => {
    //     if (res.success) {
    //       setItemsBought(res.message.itemsBought);
    //       setItemsSold(res.message.itemsSold);
    //     }
    //   });
  }


  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/get`)
      .then(res => res.json())
      .then(res => {
        if (res.success) setProducts(res.message);
      });
  }, []);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/users/get`)
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
        setSoldDate,
        userId,
        setUserId,
        getDashDetails,
        itemsBought,
        itemsSold,
        setItemsBought,
        setItemsSold,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
