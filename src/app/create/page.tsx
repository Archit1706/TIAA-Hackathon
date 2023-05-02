"use client"
import Confirm from "@/components/createAuction/Confirm";
import Personal from "@/components/createAuction/Personal";
import Product from "@/components/createAuction/Product";
import Success from "@/components/createAuction/Success";
import React, {useState} from "react";

type Props = {};
const page = (props: Props) => {
    const [formNumber, setFormNumber] = useState(1);
    return (
        <div className="w-screen md:p-8 bg-purple-50 flex items-start justify-center min-h-screen">
            <div className="rounded-lg  shadow-lg w-full bg-white p-2 md:py-4">
                <h1 className="text-xl md:text-3xl lg:text-4xl font-bold text-center">Create a New Auction</h1>
                <div>
                    <div className="p-5">
                        <div className="mx-4 p-4">
                            <div className="flex items-center">
                                <div className="flex items-center text-teal-600 relative"
                                    onClick={() => setFormNumber(1)}
                                >
                                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-teal-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-bookmark ">
                                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
                                        </svg>
                                    </div>
                                    <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Personal</div>
                                </div>
                                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-teal-600"></div>
                                <div className="flex items-center text-white relative"
                                    onClick={() => setFormNumber(2)}
                                >
                                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 bg-teal-600 border-teal-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-user-plus ">
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="8.5" cy="7" r="4"></circle>
                                            <line x1="20" y1="8" x2="20" y2="14"></line>
                                            <line x1="23" y1="11" x2="17" y2="11"></line>
                                        </svg>
                                    </div>
                                    <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-teal-600">Product</div>
                                </div>
                                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                                <div className="flex items-center text-gray-500 relative"
                                    onClick={() => setFormNumber(3)}
                                >
                                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-mail ">
                                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                            <polyline points="22,6 12,13 2,6"></polyline>
                                        </svg>
                                    </div>
                                    <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Confirm</div>
                                </div>
                                <div className="flex-auto border-t-2 transition duration-500 ease-in-out border-gray-300"></div>
                                <div className="flex items-center text-gray-500 relative"
                                    onClick={() => setFormNumber(4)}
                                >
                                    <div className="rounded-full transition duration-500 ease-in-out h-12 w-12 py-3 border-2 border-gray-300">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="feather feather-database ">
                                            <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                                            <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                                            <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                                        </svg>
                                    </div>
                                    <div className="absolute top-0 -ml-10 text-center mt-16 w-32 text-xs font-medium uppercase text-gray-500">Success</div>
                                </div>
                            </div>
                        </div>
                        {
                            formNumber === 1 && <Personal />
                        }
                        {
                            formNumber === 2 && <Product />
                        }
                        {
                            formNumber === 3 && <Confirm />
                        }
                        {
                            formNumber === 4 && <Success />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
};

export default page;
