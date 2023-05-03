import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const [cars, setCars] = useState([]);
    const [bikes, setBikes] = useState([]);
    const [mobiles, setMobiles] = useState([]);
    const [realestates, setRealestates] = useState([]);
    const [laptops, setLaptops] = useState([]);


    const getCars = async () => {
        const res = await fetch("https://auction-backend.sidd065.repl.co/api/product/get-cars");
        const data = await res.json();
        if (data.success) setCars(data);
    }

    const getBikes = async () => {
        const res = await fetch("https://auction-backend.sidd065.repl.co/api/product/get-bikes");
        const data = await res.json();
        if (data.success) setBikes(data);
    }

    const getMobiles = async () => {
        const res = await fetch("https://auction-backend.sidd065.repl.co/api/product/get-mobiles");
        const data = await res.json();
        if (data.success) setMobiles(data);
    }

    const getRealestates = async () => {
        const res = await fetch("https://auction-backend.sidd065.repl.co/api/product/get-properties");
        const data = await res.json();
        if (data.success) setRealestates(data);
    }

    const getLaptops = async () => {
        const res = await fetch("https://auction-backend.sidd065.repl.co/api/product/get-laptops");
        const data = await res.json();
        if (data.success) setLaptops(data);
    }

    const getAllProducts = async () => {
        const res = await fetch("https://auction-backend.sidd065.repl.co/api/product/get");
        const data = await res.json();
        if (data.success) setProducts(data);
    }


    return (
        <ProductContext.Provider value={{
            cars,
            bikes,
            mobiles,
            realestates,
            laptops,
            products,
            setCars,
            setBikes,
            setMobiles,
            setRealestates,
            setLaptops,
            setProducts,
            getCars,
            getBikes,
            getMobiles,
            getRealestates,
            getLaptops,
            getAllProducts,

        }}>
            {children}
        </ProductContext.Provider>
    )
}