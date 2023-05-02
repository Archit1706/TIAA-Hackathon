"use client"
import Pictures from "@/components/createAuction/Pictures";
import Specs from "@/components/createAuction/Specs";
import Product from "@/components/createAuction/Product";
import Success from "@/components/createAuction/Success";
import React, { useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { AiOutlineCamera } from "react-icons/ai";
import { MdDone } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { useContext } from "react";
import { AppContext } from "context/AppContext";

type Props = {};
const page = (props: Props) => {
    // const [formNumber, setFormNumber] = useState(1);
    const { category, setCategory , formNumber, setFormNumber } = useContext(AppContext);
    return (
        <div className="w-screen md:p-8 bg-purple-50 flex items-start justify-center min-h-screen">
            <div className="rounded-lg  shadow-lg w-full bg-white p-2 md:py-4">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center"> New Auction</h1>
                <div>
                    {
                        category === "" ?
                            // Ask for categoty of product
                            <div className="flex flex-col items-center justify-center">
                                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center"> Select Category</h1>
                                <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24">
                                    <div className="-m-1 flex flex-wrap md:-m-2">
                                        <div className="flex w-1/2 flex-wrap">
                                            <div className="w-1/2 p-1 md:p-2"
                                                onClick={() => setCategory("laptop")}
                                            >
                                                <img
                                                    alt="gallery"
                                                    className="block h-full w-full rounded-lg object-cover object-center"
                                                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2020&q=80" />
                                            </div>
                                            <div className="w-1/2 p-1 md:p-2"
                                                onClick={() => setCategory("car")}>
                                                <img
                                                    alt="gallery"
                                                    className="block h-full w-full rounded-lg object-cover object-center"
                                                    src="https://images.unsplash.com/photo-1485291571150-772bcfc10da5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1228&q=80" />
                                            </div>
                                            <div className="w-full p-1 md:p-2"
                                                onClick={() => setCategory("mobile")}>
                                                <img
                                                    alt="gallery"
                                                    className="block h-full w-full rounded-lg object-cover object-center"
                                                    src="https://images.unsplash.com/photo-1560672657-a0431178403f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=581&q=80" />
                                            </div>
                                        </div>
                                        <div className="flex w-1/2 flex-wrap">
                                            <div className="w-full p-1 md:p-2"
                                                onClick={() => setCategory("real estate")}>
                                                <img
                                                    alt="gallery"
                                                    className="block h-full w-full rounded-lg object-cover object-center"
                                                    src="https://images.unsplash.com/photo-1570129477492-45c003edd2be?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80" />
                                            </div>
                                            <div className="w-1/2 p-1 md:p-2"
                                                onClick={() => setCategory("bike")}>
                                                <img
                                                    alt="gallery"
                                                    className="block h-full w-full rounded-lg object-cover object-center"
                                                    src="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                                            </div>
                                            <div className="w-1/2 p-1 md:p-2"
                                                onClick={() => setCategory("other")}>
                                                <img
                                                    alt="gallery"
                                                    className="block h-full w-full rounded-lg object-cover object-center"
                                                    src="https://images.unsplash.com/photo-1605642634357-80a58f89af26?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            :
                            // Show form according to category
                            <div className="p-5">
                                <div className="flex items-center space-x-2">
                                    <h2 className="text-2xl">Category : <span className="text-purple-500 font-bold capitalize">{category}</span></h2>
                                    {/* category reset btn */}
                                    <button className="bg-red-500 text-white px-2 py-1 rounded-md"
                                        onClick={() => setCategory("")}
                                    >Reset</button>
                                </div>
                                <div className="mx-4 p-4">
                                    <div className="flex items-center">
                                        <div className={`flex items-center ${formNumber === 1 ? "text-white" : "text-teal-600"} relative`}
                                            onClick={() => setFormNumber(1)}
                                        >
                                            <div className={`${formNumber === 1 && "bg-teal-600"} rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600 flex items-center justify-center`}>
                                                <AiOutlineShoppingCart className="w-6 h-6" />
                                            </div>
                                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Product</div>
                                        </div>
                                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>

                                        <div className={`flex items-center ${formNumber === 2 ? "text-white" : "text-teal-600"} relative`}
                                            onClick={() => setFormNumber(2)}
                                        >
                                            <div className={`${formNumber === 2 && "bg-teal-600"} rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600 flex items-center justify-center`}>
                                                <VscTools className="w-6 h-6" />
                                            </div>
                                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Specs</div>
                                        </div>
                                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>

                                        <div className={`flex items-center ${formNumber === 3 ? "text-white" : "text-teal-600"} relative`}
                                            onClick={() => setFormNumber(3)}
                                        >
                                            <div className={`${formNumber === 3 && "bg-teal-600"} rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600 flex items-center justify-center`}>
                                                <AiOutlineCamera className="w-6 h-6" />
                                            </div>
                                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Images</div>
                                        </div>
                                        <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>

                                        <div className={`flex items-center ${formNumber === 4 ? "text-white" : "text-teal-600"} relative`}
                                            onClick={() => setFormNumber(4)}
                                        >
                                            <div className={`${formNumber === 4 && "bg-teal-600"} rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600 flex items-center justify-center`}>
                                                <MdDone className="w-6 h-6" />
                                            </div>
                                            <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Success</div>
                                        </div>
                                    </div>
                                </div>
                                {
                                    formNumber === 1 && <Product />
                                }
                                {
                                    formNumber === 2 && <Specs />
                                }
                                {
                                    formNumber === 3 && <Pictures />
                                }
                                {
                                    formNumber === 4 && <Success />
                                }
                            </div>
                    }
                </div>
            </div>
        </div>
    )
};

export default page;
