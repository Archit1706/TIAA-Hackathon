import React from 'react'
import { useContext } from 'react'
import { AppContext } from "context/AppContext"
type Props = {}

const RealEstateForm = (props: Props) => {
  // specs is a object with key value pair of specs
  const { setFormNumber, specs, setSpecs, price, setPrice, soldDate, setSoldDate } = useContext(AppContext)
  const submitHandler = () => {
    console.log({
      "specs": specs,
      "price": price,
      "soldDate": soldDate
    })
    setFormNumber(3)
  }
  const handelDateTime = (e: any) => {
    const event = new Date(e.target.value);
    const newDate = event.toISOString();
    setSoldDate(newDate)
  }
  // specs format
  //    "specs": {
  //     "Under Construction": "Yes",
  //     "Rera Approved": "No",
  //     "Ready to MoveIn": "No",
  //     "Resale": "Yes",
  //     "Area": 500,
  //     "Rooms": 3,
  //     "City": "bhiwandi"
  // },
  return (
    <div className="mt-8 p-4">
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <label htmlFor="uc" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Under Construction</label>
          <select
            onChange={(e) => setSpecs({ ...specs, "Under Construction": e.target.value })}
              name="uc" id="uc" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            <option value={""}>select Choice</option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
          </select>
        </div>
        <div>
          <label htmlFor="rp" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rera Approved</label>
          <select
            onChange={(e) => setSpecs({ ...specs, "Rera Approved": e.target.value })}
              name="rp" id="rp" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            <option value={""}>select Choice</option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
          </select>
        </div>
        <div>
          <label htmlFor="rm" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ready to MoveIn</label>
          <select
            onChange={(e) => setSpecs({ ...specs, "Ready to MoveIn": e.target.value })}
              name="rm" id="rm" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            <option value={""}>select Choice</option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
          </select>
        </div>
        <div>
          <label htmlFor="resale" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Resale</label>
          <select
            onChange={(e) => setSpecs({ ...specs, "Resale": e.target.value })}
              name="resale" id="resale" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
            <option value={""}>select Choice</option>
            <option value={"Yes"}>Yes</option>
            <option value={"No"}>No</option>
          </select>
        </div>
        <div>
          <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">City</label>
          <input
            onChange={(e) => setSpecs({ ...specs, "City": e.target.value })}
            type="text" name="city" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Mumbai" required />
        </div>
        <div>
          <label htmlFor="area" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Area (sqft)</label>
          <input
            onChange={(e) => setSpecs({ ...specs, "Area": parseInt(e.target.value) })}
            type="number" min={0} name="area" id="area" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="500" required />
        </div>
        <div>
          <label htmlFor="rooms" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Rooms (CC)</label>
          <input
            onChange={(e) => setSpecs({ ...specs, "Rooms": parseInt(e.target.value) })}
            type="number" min={0} name="rooms" id="rooms" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2" required />
        </div>
      </div>
      <hr className=" bg-gray-200 w-full my-4" />
      <div className="grid gap-4 mb-4 sm:grid-cols-2">
        <div>
          <label htmlFor="battery" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Initial Bid</label>
          <input
            onChange={(e) => setPrice(parseInt(e.target.value))}
            type="text" name="bid" id="bid" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="3500" required />
        </div>
        <div>
          <label htmlFor="battery" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">End Date</label>
          <input
            onChange={handelDateTime}
            type="datetime-local" name="end-date" id="end-date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="DD-YY-MM" required />
        </div>
      </div>
      <div className="flex p-2 mt-4">
        <button
          onClick={() => { setFormNumber(1) }}
          className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile-light bg-mobile-light text-mobile border duration-200 ease-in-out border-mobile transition">Previous</button>
        <div className="flex-auto flex flex-row-reverse">
          <button
            onClick={() => { submitHandler() }}
            className="text-base ml-2  hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile bg-mobile text-mobile-light border duration-200 ease-in-out border-mobile transition">Next</button>
          <button className="text-base hover:scale-110 focus:outline-none flex justify-center px-4 py-2 rounded font-bold cursor-pointer hover:bg-mobile bg-mobile-light text-mobile border duration-200 ease-in-out border-mobile transition">Skip</button>
        </div>
      </div>
    </div>
  )
}

export default RealEstateForm