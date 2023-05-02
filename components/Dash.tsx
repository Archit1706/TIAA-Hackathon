import React from "react";
import img1 from "../src/assets/img/download1.png";
import Image from "next/image";
const Dash = () => {
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
                                <td className="px-4 py-3 text-sm">$ 863.45</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                        Sold
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">6/10/2020</td>
                            </tr>

                            <tr className="text-gray-700 dark:text-gray-400">
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                            <img
                                                className="object-cover w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
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
                                                Jolina Angelie
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                Unemployed
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm font-bold">
                                    Product Name
                                </td>
                                <td className="px-4 py-3 text-sm">$ 369.95</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
                                        Pending
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">6/10/2020</td>
                            </tr>

                            <tr className="text-gray-700 dark:text-gray-400">
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                            <img
                                                className="object-cover w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
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
                                                Sarah Curry
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                Designer
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm font-bold">
                                    Product Name
                                </td>
                                <td className="px-4 py-3 text-sm">$ 86.00</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                                        Pending
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">6/10/2020</td>
                            </tr>

                            <tr className="text-gray-700 dark:text-gray-400">
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                            <img
                                                className="object-cover w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
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
                                                Rulia Joberts
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                Actress
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm font-bold">
                                    Product Name
                                </td>
                                <td className="px-4 py-3 text-sm">$ 1276.45</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                        Sold
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">6/10/2020</td>
                            </tr>

                            <tr className="text-gray-700 dark:text-gray-400">
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                            <img
                                                className="object-cover w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
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
                                                Wenzel Dashington
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                Actor
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm font-bold">
                                    Product Name
                                </td>
                                <td className="px-4 py-3 text-sm">$ 863.45</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700">
                                        Unsold
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">6/10/2020</td>
                            </tr>

                            <tr className="text-gray-700 dark:text-gray-400">
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                            <img
                                                className="object-cover w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b8377ca9f985d80264279f277f3a67f5"
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
                                                Dave Li
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                Influencer
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm font-bold">
                                    Product Name
                                </td>
                                <td className="px-4 py-3 text-sm">$ 863.45</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                        Sold
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">6/10/2020</td>
                            </tr>

                            <tr className="text-gray-700 dark:text-gray-400">
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                            <img
                                                className="object-cover w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
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
                                                Maria Ramovic
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                Runner
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm font-bold">
                                    Product Name
                                </td>
                                <td className="px-4 py-3 text-sm">$ 863.45</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                        Sold
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">6/10/2020</td>
                            </tr>

                            <tr className="text-gray-700 dark:text-gray-400">
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                            <img
                                                className="object-cover w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
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
                                                Hitney Wouston
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                Singer
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm font-bold">
                                    Product Name
                                </td>
                                <td className="px-4 py-3 text-sm">$ 863.45</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                        Sold
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">6/10/2020</td>
                            </tr>

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
                                <td className="px-4 py-3 text-sm">$ 863.45</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                        Sold
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">6/10/2020</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                    <span className="flex items-center col-span-3">
                        Showing 21-30 of 100
                    </span>
                    <span className="col-span-2"></span>
                    <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                        <nav aria-label="Table navigation">
                            <ul className="inline-flex items-center">
                                <li>
                                    <button
                                        className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                                        aria-label="Previous"
                                    >
                                        <svg
                                            aria-hidden="true"
                                            className="w-4 h-4 fill-current"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                clip-rule="evenodd"
                                                fill-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                        4
                                    </button>
                                </li>
                                <li>
                                    <span className="px-3 py-1">...</span>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                        8
                                    </button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                        9
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                                        aria-label="Next"
                                    >
                                        <svg
                                            className="w-4 h-4 fill-current"
                                            aria-hidden="true"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clip-rule="evenodd"
                                                fill-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </span>
                </div>
            </div>
            <h4 className="mb-4 text-lg font-semibold text-gray-600 dark:text-gray-300">
                Purchased Items History
            </h4>
            <div className="w-full overflow-hidden rounded-lg shadow-xs">
                <div className="w-full overflow-x-auto">
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
                                <td className="px-4 py-3 text-sm">$ 863.45</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                        Approved
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">6/10/2020</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center space-x-4 text-sm">
                                        <button
                                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                                            aria-label="Edit"
                                        >
                                            <Image
                                                src={img1.src}
                                                alt=""
                                                width={24}
                                                height={24}
                                            />
                                            {/* <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"
                              ></path>
                            </svg> */}
                                        </button>
                                        {/* <button
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Delete"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button> */}
                                    </div>
                                </td>
                            </tr>

                            <tr className="text-gray-700 dark:text-gray-400">
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                            <img
                                                className="object-cover w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&facepad=3&fit=facearea&s=707b9c33066bf8808c934c8ab394dff6"
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
                                                Jolina Angelie
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                Unemployed
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm font-bold">
                                    Product Name
                                </td>
                                <td className="px-4 py-3 text-sm">$ 369.95</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-orange-700 bg-orange-100 rounded-full dark:text-white dark:bg-orange-600">
                                        Pending
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">6/10/2020</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center space-x-4 text-sm">
                                        <button
                                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
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
                                        {/* <button
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Delete"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button> */}
                                    </div>
                                </td>
                            </tr>

                            <tr className="text-gray-700 dark:text-gray-400">
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                            <img
                                                className="object-cover w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1551069613-1904dbdcda11?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
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
                                                Sarah Curry
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                Designer
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm font-bold">
                                    Product Name
                                </td>
                                <td className="px-4 py-3 text-sm">$ 86.00</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700">
                                        Denied
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">6/10/2020</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center space-x-4 text-sm">
                                        <button
                                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
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
                                        {/* <button
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Delete"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button> */}
                                    </div>
                                </td>
                            </tr>

                            <tr className="text-gray-700 dark:text-gray-400">
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                            <img
                                                className="object-cover w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
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
                                                Rulia Joberts
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                Actress
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm font-bold">
                                    Product Name
                                </td>
                                <td className="px-4 py-3 text-sm">$ 1276.45</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                        Approved
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">6/10/2020</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center space-x-4 text-sm">
                                        <button
                                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
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
                                        {/* <button
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Delete"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button> */}
                                    </div>
                                </td>
                            </tr>

                            <tr className="text-gray-700 dark:text-gray-400">
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                            <img
                                                className="object-cover w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1546456073-6712f79251bb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
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
                                                Wenzel Dashington
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                Actor
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm font-bold">
                                    Product Name
                                </td>
                                <td className="px-4 py-3 text-sm">$ 863.45</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700">
                                        Expired
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">6/10/2020</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center space-x-4 text-sm">
                                        <button
                                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
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
                                        {/* <button
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Delete"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button> */}
                                    </div>
                                </td>
                            </tr>

                            <tr className="text-gray-700 dark:text-gray-400">
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                            <img
                                                className="object-cover w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&s=b8377ca9f985d80264279f277f3a67f5"
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
                                                Dave Li
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                Influencer
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm font-bold">
                                    Product Name
                                </td>
                                <td className="px-4 py-3 text-sm">$ 863.45</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                        Approved
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">6/10/2020</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center space-x-4 text-sm">
                                        <button
                                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
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
                                        {/* <button
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Delete"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button> */}
                                    </div>
                                </td>
                            </tr>

                            <tr className="text-gray-700 dark:text-gray-400">
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                            <img
                                                className="object-cover w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
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
                                                Maria Ramovic
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                Runner
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm font-bold">
                                    Product Name
                                </td>
                                <td className="px-4 py-3 text-sm">$ 863.45</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                        Approved
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">6/10/2020</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center space-x-4 text-sm">
                                        <button
                                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
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
                                        {/* <button
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Delete"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button> */}
                                    </div>
                                </td>
                            </tr>

                            <tr className="text-gray-700 dark:text-gray-400">
                                <td className="px-4 py-3">
                                    <div className="flex items-center text-sm">
                                        <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                            <img
                                                className="object-cover w-full h-full rounded-full"
                                                src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE3Nzg0fQ"
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
                                                Hitney Wouston
                                            </p>
                                            <p className="text-xs text-gray-600 dark:text-gray-400">
                                                Singer
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-3 text-sm font-bold">
                                    Product Name
                                </td>
                                <td className="px-4 py-3 text-sm">$ 863.45</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                        Approved
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">6/10/2020</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center space-x-4 text-sm">
                                        <button
                                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
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
                                        {/* <button
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Delete"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button> */}
                                    </div>
                                </td>
                            </tr>

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
                                <td className="px-4 py-3 text-sm">$ 863.45</td>
                                <td className="px-4 py-3 text-xs">
                                    <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100">
                                        Approved
                                    </span>
                                </td>
                                <td className="px-4 py-3 text-sm">6/10/2020</td>
                                <td className="px-4 py-3">
                                    <div className="flex items-center space-x-4 text-sm">
                                        <button
                                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
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
                                        {/* <button
                            className="flex items-center justify-between px-2 py-2 text-sm font-medium leading-5 text-purple-600 rounded-lg dark:text-gray-400 focus:outline-none focus:shadow-outline-gray"
                            aria-label="Delete"
                          >
                            <svg
                              className="w-5 h-5"
                              aria-hidden="true"
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path
                                fill-rule="evenodd"
                                d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                clip-rule="evenodd"
                              ></path>
                            </svg>
                          </button> */}
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                    <span className="flex items-center col-span-3">
                        Showing 21-30 of 100
                    </span>
                    <span className="col-span-2"></span>
                    <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                        <nav aria-label="Table navigation">
                            <ul className="inline-flex items-center">
                                <li>
                                    <button
                                        className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple"
                                        aria-label="Previous"
                                    >
                                        <svg
                                            className="w-4 h-4 fill-current"
                                            aria-hidden="true"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                                clip-rule="evenodd"
                                                fill-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                        1
                                    </button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                        2
                                    </button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 text-white transition-colors duration-150 bg-purple-600 border border-r-0 border-purple-600 rounded-md focus:outline-none focus:shadow-outline-purple">
                                        3
                                    </button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                        4
                                    </button>
                                </li>
                                <li>
                                    <span className="px-3 py-1">...</span>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                        8
                                    </button>
                                </li>
                                <li>
                                    <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">
                                        9
                                    </button>
                                </li>
                                <li>
                                    <button
                                        className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple"
                                        aria-label="Next"
                                    >
                                        <svg
                                            className="w-4 h-4 fill-current"
                                            aria-hidden="true"
                                            viewBox="0 0 20 20"
                                        >
                                            <path
                                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                                clip-rule="evenodd"
                                                fill-rule="evenodd"
                                            ></path>
                                        </svg>
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Dash;
