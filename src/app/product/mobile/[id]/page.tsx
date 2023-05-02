"use client";
import ReviewCard from "@/components/Cards/ReviewCard";
import AuctionHistory from "@/components/ProductPage/AuctionHistory";
import Specs from "@/components/ProductPage/Specs";
import { Counter } from "@/components/Timer/Counter";
import React, { useState } from "react";
import { ImHammer2 } from "react-icons/im";
import { RxCross2 } from "react-icons/rx";
import { BsBookmark, BsFillBookmarkCheckFill } from "react-icons/bs";
import TempImg from "../../../../assets/img/temp.jpg";
import ProductCard from "@/components/Cards/ProductCard";
const Product4 = () => {
    const [rotate, setRotate] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [count, setCount] = useState(1000002);
    const [isBookmarked, setIsBookmarked] = useState(false);
    const [tab, setTab] = useState(1);
    const addCount = () => {
        setCount((prev) => prev + 1);
    };

    const minusCount = () => {
        if (count > 0) {
            setCount((prev) => prev - 1);
        }
    };

    return (
        <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 ">
            <div className="flex justify-center items-center lg:flex-row flex-col gap-8">
                {/* <!-- Description Div --> */}

                <div className="  w-full sm:w-96 md:w-8/12 lg:w-6/12 items-center">
                    {/* <p className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-600">Mobile</p> */}
                    <h2 className="font-semibold lg:text-4xl text-3xl lg:leading-9 leading-7 text-gray-800 mt-4">
                        Wooden Stool
                    </h2>
                    <hr className=" bg-gray-200 w-full mt-4" />

                    {/* 
                    <div className=" flex flex-row justify-between  mt-5">
                        <div className=" flex flex-row space-x-3">
                            <svg className=" cursor-pointer" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.5598 20C15.3998 20.0006 15.2421 19.9629 15.0998 19.89L9.99976 17.22L4.89976 19.89C4.73416 19.977 4.54744 20.0159 4.36084 20.0022C4.17424 19.9884 3.99524 19.9226 3.84419 19.8122C3.69314 19.7017 3.5761 19.5511 3.50638 19.3775C3.43665 19.2039 3.41704 19.0142 3.44976 18.83L4.44976 13.2L0.329763 9.19996C0.20122 9.07168 0.110034 8.91083 0.0659903 8.73465C0.0219465 8.55848 0.0267076 8.37363 0.0797626 8.19996C0.137723 8.02223 0.244339 7.86431 0.387513 7.74412C0.530687 7.62392 0.704685 7.54627 0.889763 7.51996L6.58976 6.68996L9.09976 1.55996C9.18165 1.39089 9.3095 1.2483 9.46867 1.14853C9.62785 1.04876 9.81191 0.99585 9.99976 0.99585C10.1876 0.99585 10.3717 1.04876 10.5309 1.14853C10.69 1.2483 10.8179 1.39089 10.8998 1.55996L13.4398 6.67996L19.1398 7.50996C19.3248 7.53627 19.4988 7.61392 19.642 7.73412C19.7852 7.85431 19.8918 8.01223 19.9498 8.18996C20.0028 8.36363 20.0076 8.54848 19.9635 8.72465C19.9195 8.90083 19.8283 9.06168 19.6998 9.18996L15.5798 13.19L16.5798 18.82C16.6155 19.0074 16.5968 19.2012 16.5259 19.3784C16.455 19.5556 16.3349 19.7088 16.1798 19.82C15.9987 19.9469 15.7806 20.0102 15.5598 20Z"
                                    fill="#1F2937"
                                />
                            </svg>
                            <svg className=" cursor-pointer" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.5598 20C15.3998 20.0006 15.2421 19.9629 15.0998 19.89L9.99976 17.22L4.89976 19.89C4.73416 19.977 4.54744 20.0159 4.36084 20.0022C4.17424 19.9884 3.99524 19.9226 3.84419 19.8122C3.69314 19.7017 3.5761 19.5511 3.50638 19.3775C3.43665 19.2039 3.41704 19.0142 3.44976 18.83L4.44976 13.2L0.329763 9.19996C0.20122 9.07168 0.110034 8.91083 0.0659903 8.73465C0.0219465 8.55848 0.0267076 8.37363 0.0797626 8.19996C0.137723 8.02223 0.244339 7.86431 0.387513 7.74412C0.530687 7.62392 0.704685 7.54627 0.889763 7.51996L6.58976 6.68996L9.09976 1.55996C9.18165 1.39089 9.3095 1.2483 9.46867 1.14853C9.62785 1.04876 9.81191 0.99585 9.99976 0.99585C10.1876 0.99585 10.3717 1.04876 10.5309 1.14853C10.69 1.2483 10.8179 1.39089 10.8998 1.55996L13.4398 6.67996L19.1398 7.50996C19.3248 7.53627 19.4988 7.61392 19.642 7.73412C19.7852 7.85431 19.8918 8.01223 19.9498 8.18996C20.0028 8.36363 20.0076 8.54848 19.9635 8.72465C19.9195 8.90083 19.8283 9.06168 19.6998 9.18996L15.5798 13.19L16.5798 18.82C16.6155 19.0074 16.5968 19.2012 16.5259 19.3784C16.455 19.5556 16.3349 19.7088 16.1798 19.82C15.9987 19.9469 15.7806 20.0102 15.5598 20Z"
                                    fill="#1F2937"
                                />
                            </svg>
                            <svg className=" cursor-pointer" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.5598 20C15.3998 20.0006 15.2421 19.9629 15.0998 19.89L9.99976 17.22L4.89976 19.89C4.73416 19.977 4.54744 20.0159 4.36084 20.0022C4.17424 19.9884 3.99524 19.9226 3.84419 19.8122C3.69314 19.7017 3.5761 19.5511 3.50638 19.3775C3.43665 19.2039 3.41704 19.0142 3.44976 18.83L4.44976 13.2L0.329763 9.19996C0.20122 9.07168 0.110034 8.91083 0.0659903 8.73465C0.0219465 8.55848 0.0267076 8.37363 0.0797626 8.19996C0.137723 8.02223 0.244339 7.86431 0.387513 7.74412C0.530687 7.62392 0.704685 7.54627 0.889763 7.51996L6.58976 6.68996L9.09976 1.55996C9.18165 1.39089 9.3095 1.2483 9.46867 1.14853C9.62785 1.04876 9.81191 0.99585 9.99976 0.99585C10.1876 0.99585 10.3717 1.04876 10.5309 1.14853C10.69 1.2483 10.8179 1.39089 10.8998 1.55996L13.4398 6.67996L19.1398 7.50996C19.3248 7.53627 19.4988 7.61392 19.642 7.73412C19.7852 7.85431 19.8918 8.01223 19.9498 8.18996C20.0028 8.36363 20.0076 8.54848 19.9635 8.72465C19.9195 8.90083 19.8283 9.06168 19.6998 9.18996L15.5798 13.19L16.5798 18.82C16.6155 19.0074 16.5968 19.2012 16.5259 19.3784C16.455 19.5556 16.3349 19.7088 16.1798 19.82C15.9987 19.9469 15.7806 20.0102 15.5598 20Z"
                                    fill="#1F2937"
                                />
                            </svg>
                            <svg className=" cursor-pointer" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.5598 20C15.3998 20.0006 15.2421 19.9629 15.0998 19.89L9.99976 17.22L4.89976 19.89C4.73416 19.977 4.54744 20.0159 4.36084 20.0022C4.17424 19.9884 3.99524 19.9226 3.84419 19.8122C3.69314 19.7017 3.5761 19.5511 3.50638 19.3775C3.43665 19.2039 3.41704 19.0142 3.44976 18.83L4.44976 13.2L0.329763 9.19996C0.20122 9.07168 0.110034 8.91083 0.0659903 8.73465C0.0219465 8.55848 0.0267076 8.37363 0.0797626 8.19996C0.137723 8.02223 0.244339 7.86431 0.387513 7.74412C0.530687 7.62392 0.704685 7.54627 0.889763 7.51996L6.58976 6.68996L9.09976 1.55996C9.18165 1.39089 9.3095 1.2483 9.46867 1.14853C9.62785 1.04876 9.81191 0.99585 9.99976 0.99585C10.1876 0.99585 10.3717 1.04876 10.5309 1.14853C10.69 1.2483 10.8179 1.39089 10.8998 1.55996L13.4398 6.67996L19.1398 7.50996C19.3248 7.53627 19.4988 7.61392 19.642 7.73412C19.7852 7.85431 19.8918 8.01223 19.9498 8.18996C20.0028 8.36363 20.0076 8.54848 19.9635 8.72465C19.9195 8.90083 19.8283 9.06168 19.6998 9.18996L15.5798 13.19L16.5798 18.82C16.6155 19.0074 16.5968 19.2012 16.5259 19.3784C16.455 19.5556 16.3349 19.7088 16.1798 19.82C15.9987 19.9469 15.7806 20.0102 15.5598 20Z"
                                    fill="#1F2937"
                                />
                            </svg>
                            <svg className=" cursor-pointer" width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M15.5598 20C15.3998 20.0006 15.2421 19.9629 15.0998 19.89L9.99976 17.22L4.89976 19.89C4.73416 19.977 4.54744 20.0159 4.36084 20.0022C4.17424 19.9884 3.99524 19.9226 3.84419 19.8122C3.69314 19.7017 3.5761 19.5511 3.50638 19.3775C3.43665 19.2039 3.41704 19.0142 3.44976 18.83L4.44976 13.2L0.329763 9.19996C0.20122 9.07168 0.110034 8.91083 0.0659903 8.73465C0.0219465 8.55848 0.0267076 8.37363 0.0797626 8.19996C0.137723 8.02223 0.244339 7.86431 0.387513 7.74412C0.530687 7.62392 0.704685 7.54627 0.889763 7.51996L6.58976 6.68996L9.09976 1.55996C9.18165 1.39089 9.3095 1.2483 9.46867 1.14853C9.62785 1.04876 9.81191 0.99585 9.99976 0.99585C10.1876 0.99585 10.3717 1.04876 10.5309 1.14853C10.69 1.2483 10.8179 1.39089 10.8998 1.55996L13.4398 6.67996L19.1398 7.50996C19.3248 7.53627 19.4988 7.61392 19.642 7.73412C19.7852 7.85431 19.8918 8.01223 19.9498 8.18996C20.0028 8.36363 20.0076 8.54848 19.9635 8.72465C19.9195 8.90083 19.8283 9.06168 19.6998 9.18996L15.5798 13.19L16.5798 18.82C16.6155 19.0074 16.5968 19.2012 16.5259 19.3784C16.455 19.5556 16.3349 19.7088 16.1798 19.82C15.9987 19.9469 15.7806 20.0102 15.5598 20ZM9.99976 15.1C10.1601 15.0959 10.3186 15.1338 10.4598 15.21L14.2298 17.21L13.5098 13C13.4818 12.8392 13.4936 12.6741 13.5442 12.5189C13.5947 12.3638 13.6825 12.2234 13.7998 12.11L16.7998 9.17996L12.5998 8.55996C12.4457 8.52895 12.3012 8.46209 12.1778 8.3648C12.0545 8.2675 11.9558 8.14251 11.8898 7.99996L9.99976 4.24996L8.10976 7.99996C8.03741 8.14366 7.93145 8.26779 7.80089 8.3618C7.67032 8.45581 7.51899 8.51692 7.35976 8.53996L3.15976 9.15996L6.15976 12.09C6.27704 12.2034 6.36478 12.3438 6.41533 12.4989C6.46588 12.6541 6.4777 12.8192 6.44976 12.98L5.72976 17.14L9.49976 15.14C9.65951 15.0806 9.83261 15.0667 9.99976 15.1Z"
                                    fill="#1F2937"
                                />
                            </svg>
                        </div>
                        <p className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 font-normal text-base leading-4 text-gray-700 hover:underline hover:text-gray-800 duration-100 cursor-pointer">22 reviews</p>
                    </div> */}

                    <div className="flex flex-row space-x-2 items-center mt-2">
                        <div className="flex -space-x-4">
                            <img
                                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                                src={TempImg.src}
                                alt=""
                            />
                            <img
                                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                                src={TempImg.src}
                                alt=""
                            />
                            <img
                                className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800"
                                src={TempImg.src}
                                alt=""
                            />
                            <a
                                className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-700 border-2 border-white rounded-full hover:bg-gray-600 dark:border-gray-800"
                                href="#"
                            >
                                +99
                            </a>
                        </div>
                        <p className="text-xl"> Users are bidding.</p>
                    </div>

                    <hr className=" bg-gray-200 w-full mt-4" />
                    <div className="flex flex-col md:flex-row md:justify-between">
                        <p className="font-light">
                            Auctioneer :{" "}
                            <span className="font-bold">Prateek V.</span>
                        </p>
                        <p className="font-light">
                            Category : <span className="font-bold">Mobile</span>
                        </p>
                    </div>

                    <p className=" font-normal text-base leading-6 text-gray-600 mt-7">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using. Lorem Ipsum
                        is that it has a more-or-less normal distribution of
                        letters.
                    </p>
                    <div className="flex flex-row gap-2 flex-wrap">
                        <div className="border-1 border-green-600 px-4 py-1 bg-green-100 text-green-600 text-md md:text-lg w-fit rounded-full mt-2">
                            Electronic
                        </div>
                        <div className="border-1 border-green-600 px-4 py-1 bg-green-100 text-green-600 text-md md:text-lg w-fit rounded-full mt-2">
                            Smart
                        </div>
                        <div className="border-1 border-green-600 px-4 py-1 bg-green-100 text-green-600 text-md md:text-lg w-fit rounded-full mt-2">
                            Fast Charging
                        </div>
                        <div className="border-1 border-green-600 px-4 py-1 bg-green-100 text-green-600 text-md md:text-lg w-fit rounded-full mt-2">
                            Camera
                        </div>
                    </div>
                    <p className=" font-semibold lg:text-2xl text-xl lg:leading-6 leading-5 mt-6 text-[var(--blue)]">
                        <span className="text-black">Current Bid: </span>$
                        790.89
                    </p>

                    <hr className=" bg-gray-200 w-full mt-4" />
                    {/* <p className="font-light">Status : <span className="font-bold">Available</span></p> */}
                    <div className="flex flex-row space-x-2 items-center">
                        <div className="px-6 py-2 bg-green-100 text-green-600 text-md md:text-lg w-fit rounded-md mt-2">
                            Available{" "}
                        </div>
                        <div className="px-6 py-2 bg-red-100 text-red-600 text-md md:text-lg w-fit rounded-md mt-2">
                            Ends on{" "}
                            <span className="font-bold">
                                June 30, 2023 12:00 am
                            </span>
                        </div>
                    </div>
                    {/* <p className="font-light">Aucion ends : <span className="font-bold">June 30, 2023 12:00 am</span></p> */}
                    {/* <p className="font-light">Bids : <span className="font-bold">23</span></p> */}
                    {/*  timer */}
                    <div className="flex flex-row justify-between items-center mt-6">
                        <Counter />
                    </div>

                    <div className="flex flex-row justify-start space-x-2 mt-8">
                        <div className="flex">
                            <span
                                onClick={minusCount}
                                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-9 rounded-l cursor-pointer outline-none flex items-center justify-center font-bold"
                            >
                                -
                            </span>
                            <input
                                id="counter"
                                aria-label="input"
                                className="px-2 border border-gray-300 h-full text-center w-[50%] min-w-fit bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 font-extrabold"
                                type="text"
                                value={count}
                                onChange={(e) => e.target.value}
                            />
                            <span
                                onClick={addCount}
                                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-9 rounded-r cursor-pointer outline-none flex items-center justify-center font-bold"
                            >
                                +
                            </span>
                        </div>
                        <button className="focus:outline-none hover:bg-black font-medium text-white bg-gray-800 px-6 py-2">
                            Bid
                        </button>
                        {/* Bookmark icon */}
                        <BsBookmark className="h-6 w-6 self-center" />
                    </div>
                    <button
                        type="button"
                        onClick={() => setIsModalOpen(true)}
                        className=" mt-2 text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 mr-2 mb-2"
                    >
                        <ImHammer2 className="w-4 h-4 mr-2 -ml-1" />
                        Autobidding
                    </button>
                    <div
                        className={`${
                            isModalOpen ? "" : "hidden"
                        } z-20 absolute top-0 overflow-hidden bottom-0 left-0 right-0 bg-[rgb(0,0,0,0.5)] flex items-center justify-center`}
                    >
                        <div
                            id="info-popup"
                            className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 w-full md:inset-0 md:h-full flex justify-center items-center"
                        >
                            <div className="relative p-4 w-full max-w-lg h-full md:h-auto">
                                <div className="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 md:p-8">
                                    <div className="mb-4 text-sm font-light text-gray-500 dark:text-gray-400">
                                        <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                                            Autobidding
                                        </h3>
                                        <div className="flex flex-col space-y-2 items-center">
                                            <div className="flex flex-row justify-start space-x-2 mt-2 w-full">
                                                <button className="focus:outline-none hover:bg-black font-medium text-white bg-gray-800 px-6 py-2 whitespace-nowrap">
                                                    Limit
                                                </button>
                                                <div className="flex w-full">
                                                    <span
                                                        onClick={minusCount}
                                                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-9 rounded-l cursor-pointer outline-none flex items-center justify-center font-bold"
                                                    >
                                                        -
                                                    </span>
                                                    <input
                                                        id="counter"
                                                        aria-label="input"
                                                        className="w-full px-2 border border-gray-300 h-full text-center min-w-fit bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 font-extrabold"
                                                        type="text"
                                                        value={count}
                                                        onChange={(e) =>
                                                            e.target.value
                                                        }
                                                    />
                                                    <span
                                                        onClick={addCount}
                                                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-9 rounded-r cursor-pointer outline-none flex items-center justify-center font-bold"
                                                    >
                                                        +
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-start space-x-2 mt-2 w-full">
                                                <button className="focus:outline-none hover:bg-black font-medium text-white bg-gray-800 px-6 py-2 whitespace-nowrap">
                                                    Increment
                                                </button>
                                                <div className="flex w-full">
                                                    <span
                                                        onClick={minusCount}
                                                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-9 rounded-l cursor-pointer outline-none flex items-center justify-center font-bold"
                                                    >
                                                        -
                                                    </span>
                                                    <input
                                                        id="counter"
                                                        aria-label="input"
                                                        className="w-full px-2 border border-gray-300 h-full text-center min-w-fit bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 font-extrabold"
                                                        type="text"
                                                        value={count}
                                                        onChange={(e) =>
                                                            e.target.value
                                                        }
                                                    />
                                                    <span
                                                        onClick={addCount}
                                                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-9 rounded-r cursor-pointer outline-none flex items-center justify-center font-bold"
                                                    >
                                                        +
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="flex flex-row justify-start space-x-2 mt-2 w-full">
                                                <button className="focus:outline-none hover:bg-black font-medium text-white bg-gray-800 px-6 py-2 whitespace-nowrap ">
                                                    Time Gap
                                                </button>
                                                <div className="flex w-full">
                                                    <span
                                                        onClick={minusCount}
                                                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-9 rounded-l cursor-pointer outline-none flex items-center justify-center font-bold"
                                                    >
                                                        -
                                                    </span>
                                                    <input
                                                        id="counter"
                                                        aria-label="input"
                                                        className="w-full px-2 border border-gray-300 h-full text-center min-w-fit bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 font-extrabold"
                                                        type="text"
                                                        value={count}
                                                        onChange={(e) =>
                                                            e.target.value
                                                        }
                                                    />
                                                    <span
                                                        onClick={addCount}
                                                        className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 h-full w-9 rounded-r cursor-pointer outline-none flex items-center justify-center font-bold"
                                                    >
                                                        +
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="justify-between items-center pt-0 space-y-4 sm:flex sm:space-y-0">
                                        <a
                                            href="#"
                                            className="font-medium text-primary-600 dark:text-primary-500 hover:underline"
                                        >
                                            Learn more about autobidding
                                        </a>
                                        <div className="items-center space-y-4 sm:space-x-4 sm:flex sm:space-y-0">
                                            <button
                                                onClick={() =>
                                                    setIsModalOpen(false)
                                                }
                                                id="close-modal"
                                                type="button"
                                                className="py-2 px-4 w-full text-sm font-medium text-gray-500 bg-white rounded-lg border border-gray-200 sm:w-auto hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                id="confirm-button"
                                                type="button"
                                                className="py-2 px-4 w-full text-sm font-medium text-center text-white rounded-lg bg-primary-700 sm:w-auto hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                            >
                                                Confirm
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <RxCross2
                            onClick={() => {
                                setIsModalOpen(false);
                            }}
                            className="z-[51] w-8 h-8 text-white fixed right-2 top-2 cursor-pointer"
                        />
                    </div>
                </div>

                {/* <!-- Preview Images Div For larger Screen--> */}

                <div className=" w-full sm:w-96 md:w-8/12  lg:w-6/12 flex lg:flex-row flex-col lg:gap-8 sm:gap-6 gap-4">
                    <div className=" w-full lg:w-8/12 bg-gray-100 flex justify-center items-center cursor-pointer">
                        <img
                            src="https://i.ibb.co/bRg2CJj/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1.png"
                            alt="Wooden Chair Previw"
                        />
                    </div>
                    <div className=" w-full lg:w-4/12 grid lg:grid-cols-1 sm:grid-cols-4 grid-cols-2 gap-6">
                        <div className="bg-gray-100 flex justify-center items-center py-4 cursor-pointer">
                            <img
                                src="https://i.ibb.co/0jX1zmR/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-1-1.png"
                                alt="Wooden chair - preview 1"
                            />
                        </div>
                        <div className="bg-gray-100 flex justify-center items-center py-4 cursor-pointer">
                            <img
                                src="https://i.ibb.co/7zv1N5Q/sam-moqadam-kvmds-Tr-GOBM-unsplash-removebg-preview-2.png"
                                alt="Wooden chair - preview 2"
                            />
                        </div>
                        <div className="bg-gray-100 flex justify-center items-center py-4 cursor-pointer relative">
                            <img
                                src={TempImg.src}
                                alt="Wooden chair- preview 3"
                            />
                            <div className="z-10 absolute top-0 bottom-0 left-0 right-0 bg-black opacity-0 hover:opacity-50 transition-all ease-in flex items-center justify-center">
                                <p className="text-white font-extrabold">
                                    View more
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* extra tabs section */}
            <div className="flex items-center flex-col md:flex-row gap-8 mt-6 md:mt-12">
                <AuctionHistory />
                <Specs />
            </div>
            {/* review section */}
            <div className="flex items-center flex-col gap-8">
                <div className="py-4 mt-12 w-full">
                    <h1 className="text-4xl font-bold">Vendor Reviews</h1>
                </div>
                <section className="w-full bg-blueGray-100 rounded-sm">
                    <div className="px-4 mx-auto">
                        <div className="flex flex-wrap justify-center gap-8">
                            <ReviewCard />
                            <ReviewCard />
                            <ReviewCard />
                        </div>
                        <div className="text-center mt-2">
                            <button className="inline-block w-full md:w-auto h-full py-2 px-10 leading-8 font-heading font-medium tracking-tighter text-xl text-white bg-blue-500 hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-xl">
                                See all
                            </button>
                        </div>
                    </div>
                </section>
            </div>

            {/* Explore more producs */}
            <div className="flex items-center flex-col gap-8">
                <div className="py-4 mt-12 w-full">
                    <h1 className="text-4xl font-bold">
                        Explore More Products
                    </h1>
                </div>
                <div className="flex flex-wrap justify-center gap-8">
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                    <ProductCard />
                </div>
            </div>
        </div>
    );
};

export default Product4;
