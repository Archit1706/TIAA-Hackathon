import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState([]);

    const [product, setProduct] = useState({});
    const [cars, setCars] = useState([]);
    const [bikes, setBikes] = useState([]);
    const [mobiles, setMobiles] = useState([]);
    const [realestates, setRealestates] = useState([]);
    const [laptops, setLaptops] = useState([]);
    const [govt, setGovt] = useState([]);


    const getCars = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/get-cars`);
        const data = await res.json();
        if (data.success) setCars(data.message);
        console.log("cars")
    }

    const getBikes = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/get-bikes`);
        const data = await res.json();
        if (data.success) setBikes(data.message);
    }

    const getMobiles = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/get-mobiles`);
        const data = await res.json();
        if (data.success) setMobiles(data.message);
    }

    const getRealestates = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/get-properties`);
        const data = await res.json();
        if (data.success) setRealestates(data.message);
    }

    const getLaptops = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/get-laptops`);
        const data = await res.json();
        if (data.success) setLaptops(data.message);
    }

    const getGovernment = async () => {
        // https://auction-backend.sidd065.repl.co/api/product/get-government
        // const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/get-government`);
        // const data = await res.json();
        // console.log(data);
        // if (data.success) setGovt(data.message);

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch("https://auction-backend.sidd065.repl.co/api/product/get-government", requestOptions)
            .then(response => response.json())
            .then(response => setGovt(response.message))
            .catch(error => console.log('error', error));

        console.log("govt")
    }

    const getAllProducts = async () => {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/product/get`);
        const data = await res.json();
        if (data.success) setProducts(data.message);
        console.log("jfklae");
    }

    // govt, setGovt, getGovernment

    return (
        <ProductContext.Provider value={{
            cars,
            bikes,
            mobiles,
            realestates,
            laptops,
            govt,
            products,
            setCars,
            setBikes,
            setMobiles,
            setRealestates,
            setLaptops,
            setGovt,
            setProducts,
            getCars,
            getBikes,
            getMobiles,
            getRealestates,
            getLaptops,
            getAllProducts,
            getGovernment,

        }}>
            {children}
        </ProductContext.Provider>
    )
}