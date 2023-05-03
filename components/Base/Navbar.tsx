import Link from "next/link";
import React from "react";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center justify-between">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">Tailblocks</span>
        </a>
        <nav className="md:ml-4 md:py-2 md:pl-4	flex flex-wrap items-center text-base justify-center">
          <a href="/" className="mr-2 hover:text-white hover:bg-mobile py-2 px-3 rounded">Home</a>
          <a href="/auction" className="mr-2 hover:text-white hover:bg-mobile py-2 px-3 rounded">Auction</a>
          <a href="/auction" className="mr-2 hover:text-white hover:bg-mobile py-2 px-3 rounded">Dashboard</a>
          <a href="/" className="mr-2 hover:text-white hover:bg-mobile py-2 px-3 rounded">About</a>
          <a href="/" className="mr-2 hover:text-white hover:bg-mobile py-2 px-3 rounded">Contact</a>
        </nav>


        <form>
          <div className="flex w-[360px] md:w-[500px]">
            <select id="countries" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-32 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
              <option selected>Category</option>
              <option value="mobile">Mobile</option>
              <option value="car">Car</option>
              <option value="bike">Bike</option>
              <option value="laptop">Laptop</option>
              <option value="RE">Real Estate</option>
            </select>
            <div className="relative w-full">
              <input type="search" id="search-dropdown" className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-r-lg border-l-gray-50 border-l-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-l-gray-700  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500" placeholder="Search products..." required />
              <button type="submit" className="absolute top-0 right-0 p-2.5 text-sm font-medium text-white bg-blue-700 rounded-r-lg border border-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                <svg aria-hidden="true" className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                <span className="sr-only">Search</span>
              </button>
            </div>
          </div>
        </form>

        <Link href='/login'>
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 mt-1 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
            Login
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
