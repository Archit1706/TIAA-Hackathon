"use client";
import React, { useState, useEffect, useContext } from "react";
// import img1 from "../src/assets/img/download1.png"
import { AppContext } from "context/AppContext";
import Image from "next/image";
import { Product } from "@/types/Product";
import { ProductContext } from "context/ProductContext";
type Props = {};

const Dash = (props: Props) => {
    const userId = localStorage.getItem("userId");

    const { getDashDetails, itemsSold, itemsBought } = useContext(AppContext);

    const { products, getAllProducts } = useContext(ProductContext);

    useEffect(() => {
        getAllProducts();
        getDashDetails(userId);
    }, []);

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        hour12: true,
    };
    return (
        <div className="px-8">
            <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                Overview
            </h4>
            <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-orange-500 bg-orange-100 rounded-full dark:text-orange-100 dark:bg-orange-500">
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"></path>
                        </svg>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            Total products purchased
                        </p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            150
                        </p>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-green-500 bg-green-100 rounded-full dark:text-green-100 dark:bg-green-500">
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            Total Auctions held
                        </p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            25
                        </p>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-blue-500 bg-blue-100 rounded-full dark:text-blue-100 dark:bg-blue-500">
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path>
                        </svg>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            Unsold Auctions
                        </p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            10
                        </p>
                    </div>
                </div>
                <div className="flex items-center p-4 bg-white rounded-lg shadow-xs dark:bg-gray-800">
                    <div className="p-3 mr-4 text-teal-500 bg-teal-100 rounded-full dark:text-teal-100 dark:bg-teal-500">
                        <svg
                            className="w-5 h-5"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M18 5v8a2 2 0 01-2 2h-5l-5 4v-4H4a2 2 0 01-2-2V5a2 2 0 012-2h12a2 2 0 012 2zM7 8H5v2h2V8zm2 0h2v2H9V8zm6 0h-2v2h2V8z"
                                clip-rule="evenodd"
                            ></path>
                        </svg>
                    </div>
                    <div>
                        <p className="mb-2 text-sm font-medium text-gray-600 dark:text-gray-400">
                            Sold Auctions
                        </p>
                        <p className="text-lg font-semibold text-gray-700 dark:text-gray-200">
                            15
                        </p>
                    </div>
                </div>
            </div>
            <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                Auctions Held History
            </h4>
            <div className="w-full mb-8 overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    {Array.isArray(itemsSold) && itemsSold.length > 0 ? (
                        <table className="w-full whitespace-no-wrap">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3">Client</th>
                                    <th className="px-4 py-3">Product</th>
                                    <th className="px-4 py-3">Amount</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Date</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                {itemsSold.map(
                                    (item: Product, index: number) => {
                                        return (
                                            <tr className="text-gray-700 dark:text-gray-400">
                                                <td className="px-4 py-3">
                                                    <div className="flex items-center text-sm">
                                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                            <img
                                                                className="object-cover w-full h-full rounded-full"
                                                                src={
                                                                    `https://avatars.dicebear.com/api/initials/${item?.buyer}.svg` ||
                                                                    `https://avatars.dicebear.com/api/initials/${item?.seller}.svg`
                                                                }
                                                                alt=""
                                                                loading="lazy"
                                                            />
                                                            <div
                                                                className="absolute inset-0 rounded-full shadow-inner"
                                                                aria-hidden="true"
                                                            ></div>
                                                        </div>
                                                        <div>
                                                            <p className="font-semibold">
                                                                {item?.buyer ||
                                                                    "John Doe"}
                                                            </p>
                                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                                {item?.category}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="px-4 py-3 text-sm font-bold">
                                                    {item?.name}
                                                </td>
                                                <td className="px-4 py-3 text-sm">
                                                    ₹{item?.price}
                                                </td>
                                                <td className="px-4 py-3 text-xs">
                                                    {/* <span className="px-2 py-1 font-semibold leading-tight  rounded-full "> */}
                                                    <span
                                                        className={`${
                                                            item?.status ===
                                                            "Sold"
                                                                ? "text-red-700 bg-red-100 dark:bg-red-700 dark:text-red-100 px-2 py-1 font-semibold leading-tight  rounded-full "
                                                                : item?.status ===
                                                                  "Unsold"
                                                                ? "text-green-700 bg-green-100 dark:bg-green-700 dark:text-green-100 px-2 py-1 font-semibold leading-tight  rounded-full "
                                                                : "text-yellow-600 bg-yellow-100 dark:bg-yellow-700 dark:text-yellow-100 px-2 py-1 font-semibold leading-tight  rounded-full "
                                                        }`}
                                                    >
                                                        {item?.status}
                                                    </span>
                                                </td>
                                                <td className="px-4 py-3 text-sm">
                                                    {/* {item?.createDate} */}
                                                    {item?.soldDate &&
                                                        new Date(
                                                            item?.soldDate
                                                        ).toLocaleDateString(
                                                            "en-US",
                                                            options
                                                        )}
                                                </td>
                                            </tr>
                                        );
                                    }
                                )}
                            </tbody>
                        </table>
                    ) : (
                        <div className="flex items-center justify-center">
                            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md dark:bg-gray-800">
                                <div className="font-medium text-gray-900">
                                    No data found
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                Purchased Items History
            </h4>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
                    {Array.isArray(itemsBought) && itemsBought.length > 0 ? (
                        <table className="w-full whitespace-no-wrap">
                            <thead>
                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                    <th className="px-4 py-3">Client</th>
                                    <th className="px-4 py-3">Product</th>
                                    <th className="px-4 py-3">Amount</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Date</th>
                                    <th className="px-4 py-3">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                <tr className="text-gray-700 dark:text-gray-400">
                                    <td className="px-4 py-3">
                                        <div className="flex items-center text-sm">
                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                <img
                                                    className="object-cover w-full h-full rounded-full"
                                                    src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                                    alt=""
                                                    loading="lazy"
                                                />
                                                <div
                                                    className="absolute inset-0 rounded-full shadow-inner"
                                                    aria-hidden="true"
                                                ></div>
                                            </div>
                                            <div>
                                                <p className="font-semibold">
                                                    Hans Burger
                                                </p>
                                                <p className="text-xs text-gray-600 dark:text-gray-400">
                                                    10x Developer
                                                </p>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-4 py-3 text-sm font-bold">
                                        Product Name
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        $ 863.45
                                    </td>
                                    <td className="px-4 py-3 text-xs">
                                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                            Approved
                                        </span>
                                    </td>
                                    <td className="px-4 py-3 text-sm">
                                        6/10/2020
                                    </td>
                                    <td className="px-4 py-3">
                                        <div className="flex items-center space-x-4 text-sm">
                                            <button
                                                className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                                aria-label="Edit"
                                            ></button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    ) : (
                        <div className="flex items-center justify-center">
                            <div className="flex flex-col items-center justify-center p-4 bg-white rounded-md shadow-md dark:bg-gray-800">
                                <div className="font-medium text-gray-900">
                                    No data found
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
            {/* Auction Cards */}
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-3 gap-5">
                <div className=" w-full lg:max-w-full lg:flex">
                    <div
                        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                        title="Mountain"
                    >
                        <img
                            className="h-full"
                            src="https://images.unsplash.com/photo-1682687982107-14492010e05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        />
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white dark:bg-gray-800 dark:lg:border-gray-700 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <div className="text-gray-900 font-bold text-xl mb-2 dark:text-white">
                                Product Name
                            </div>
                            <p className="text-gray-700 text-base dark:text-gray-200">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptatibus quia, Nonea!
                                Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                            <div className="py-2 flex flex-row">
                                <button
                                    className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 border bg-purple-600 border-purple-700 rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                    aria-label="Like"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                            clip-rule="evenodd"
                                            fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                                <div className="px-2">
                                    <button
                                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-full active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                        aria-label="Edit"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img
                                className="w-10 h-10 rounded-full mr-4"
                                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                alt="Avatar of Writer"
                            />
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none dark:text-gray-200">
                                    Owner Name
                                </p>
                                {/* <p className="text-gray-600">Aug 18</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:max-w-full lg:flex">
                    <div
                        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                        title="River"
                    >
                        <img
                            className="h-full"
                            src="https://images.unsplash.com/photo-1682687982107-14492010e05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        />
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 dark:bg-gray-800 dark:lg:border-gray-700 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <div className="text-gray-900 font-bold text-xl mb-2 dark:text-white">
                                Product Name
                            </div>
                            <p className="text-gray-700 text-base dark:text-gray-200">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptatibus quia, Nonea!
                                Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                            <div className="py-2 flex flex-row">
                                <button
                                    className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 border bg-purple-600 border-purple-700 rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                    aria-label="Like"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                            clip-rule="evenodd"
                                            fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                                <div className="px-2">
                                    <button
                                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-full active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                        aria-label="Edit"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center">
                            <img
                                className="w-10 h-10 rounded-full mr-4"
                                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                alt="Avatar of Writer"
                            />
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none dark:text-gray-200">
                                    Owner Name
                                </p>
                                {/* <p className="text-gray-600">Aug 10</p> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:max-w-full lg:flex">
                    <div
                        className="h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
                        title="Forest"
                    >
                        <img
                            className="h-full"
                            src="https://images.unsplash.com/photo-1682687982107-14492010e05e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                        />
                    </div>
                    <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 dark:bg-gray-800 dark:lg:border-gray-700 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            {/* <p className="text-sm text-gray-600 flex items-center">
                <svg
                  className="fill-current text-gray-500 w-3 h-3 mr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
                </svg>
                Members only
              </p> */}
                            <div className="text-gray-900 font-bold text-xl mb-2 dark:text-white">
                                5 National Forests across the U.S.
                            </div>
                            <p className="text-gray-700 text-base dark:text-gray-200">
                                Lorem ipsum dolor sit amet, consectetur
                                adipisicing elit. Voluptatibus quia, Nonea!
                                Maiores et perferendis eaque, exercitationem
                                praesentium nihil.
                            </p>
                            <div className="py-2 flex flex-row">
                                <button
                                    className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 border bg-purple-600 border-purple-700 rounded-lg active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                    aria-label="Like"
                                >
                                    <svg
                                        className="w-5 h-5"
                                        aria-hidden="true"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                                            clip-rule="evenodd"
                                            fill-rule="evenodd"
                                        ></path>
                                    </svg>
                                </button>
                                <div className="px-2">
                                    <button
                                        className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-purple-600 border border-transparent rounded-full active:bg-purple-600 hover:bg-purple-700 focus:outline-none focus:shadow-outline-purple"
                                        aria-label="Edit"
                                    >
                                        <svg
                                            className="w-5 h-5"
                                            aria-hidden="true"
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img
                                className="w-10 h-10 rounded-full mr-4"
                                src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
                                alt="Avatar of Writer"
                            />
                            <div className="text-sm">
                                <p className="text-gray-900 leading-none dark:text-gray-200">
                                    Owner Name
                                </p>
                                {/* <p className="text-gray-600">Aug 9</p> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dash;
