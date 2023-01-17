import React from 'react'

function SearchBar() {
    return (
        <form className="w-full flex flex-col md:flex-row items-center justify-center gap-8">

            <select className='w-full md:w-1/4 p-2 text-base text-gray-700 bg-white rounded-md' name="" id="">
                <option value="" disabled>Choose</option>
                <option value="rent">Rental</option>
                <option value="buy">Buy</option>
            </select>

            <input type="text" className="w-full md:w-2/4 text-base text-gray-800 placeholder:text-gray-500 p-2 bg-white rounded-md" placeholder='Keywords' />

            <button className="w-full md:w-1/4 p-2 bg-white rounded-md flex flex-row items-center justify-center gap-4 hover:shadow-md hover:scale-105 transition-transform">
                <span>
                    <svg className="w-4 h-4 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352c79.5 0 144-64.5 144-144s-64.5-144-144-144S64 128.5 64 208s64.5 144 144 144z" />
                    </svg>
                </span>
                <span>Search</span>
            </button>


        </form>
    )
}

export default SearchBar