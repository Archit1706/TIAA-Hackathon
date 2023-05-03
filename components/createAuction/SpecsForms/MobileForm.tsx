import React from 'react'
import { useContext } from 'react'
import { AppContext } from "context/AppContext"
type Props = {}

const MobileForm = (props: Props) => {
    const { category, setCategory, productName, setProductName, productDescription, setProductDescription, condition, setCondition, brand, setBrand, location, setLocaion, tags, setTags, formNumber, setFormNumber } = useContext(AppContext)
    return (
        <div className="mt-8 p-4">
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="os" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Operating System</label>
                    <input type="text" name="os" id="os" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Andriod" required />
                </div>
                <div>
                    <label htmlFor="color" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Color</label>
                    <input type="text" name="color" id="color" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Dark Blue" required />
                </div>
                <div>
                    <label htmlFor="processor" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Processor</label>
                    <input type="text" name="processor" id="processor" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Exynos 2200" required />
                </div>
                <div>
                    <label htmlFor="battery" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Battery</label>
                    <input type="number" name="battery" id="battery" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5000" required />
                </div>
                <div>
                    <label htmlFor="ram" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ram (GB)</label>
                    <input type="number" name="ram" id="ram" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="8" required />
                </div>
                <div>
                    <label htmlFor="internal-storage" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Internal Storage (GB)</label>
                    <input type="number" name="internal-storage" id="internal-storage" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="128" required />
                </div>
                <div>
                    <label htmlFor="display" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Display (Inch)</label>
                    <input type="text" name="display" id="display" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="6.2" required />
                </div>
                <div>
                    <label htmlFor="connectivity" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Connectivity</label>
                    <input type="text" name="connectivity" id="connectivity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="5G" required />
                </div>
                <div>
                    <label htmlFor="rear-camera" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rear Camera (MP)</label>
                    <input type="number" name="rear-camera" id="rear-camera" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="64" required />
                </div>
                <div>
                    <label htmlFor="front-camera" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Front Camera (MP)</label>
                    <input type="number" name="front-camera" id="front-camera" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20" required />
                </div>
            </div>
            <hr className=" bg-gray-200 w-full my-4" />
            <div className="grid gap-4 mb-4 sm:grid-cols-2">
                <div>
                    <label htmlFor="battery" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Initial Bid</label>
                    <input type="text" name="bid" id="bid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="3500" required />
                </div>
                <div>
                    <label htmlFor="battery" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
                    <input type="datetime-local" name="end-date" id="end-date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="DD-YY-MM" required />
                </div>
            </div>
            <div className="flex p-2 mt-4">
                <button
                    onClick={() => { setFormNumber(1) }}
                    className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile-light bg-mobile-light text-mobile border duration-200 ease-in-out border-mobile transition">Previous</button>
                <div className="flex-auto flex flex-row-reverse">
                    <button
                        onClick={() => { setFormNumber(3) }}
                        className="text-base ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile bg-mobile text-mobile-light border duration-200 ease-in-out border-mobile transition">Next</button>
                    <button className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile bg-mobile-light text-mobile border duration-200 ease-in-out border-mobile transition">Skip</button>
                </div>
            </div>
        </div>
    )
}

export default MobileForm