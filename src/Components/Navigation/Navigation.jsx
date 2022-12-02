import React from 'react'
import logo from './../../assets/Logo.svg';

function Navigation() {
    return (
        <nav className="hidden md:flex flex-row justify-between w-full max-w-screen-xl px-4 py-8 text-white mx-auto">
            <img src={logo} alt="" className="w-30 object-contain" />
            <ul className="list-none flex flex-row gap-4 items-center justify-between">
                <li className='hover:text-gray-400 cursor-pointer' >Home</li>
                <li className='hover:text-gray-400 cursor-pointer' >Properties</li>
                <li className='hover:text-gray-400 cursor-pointer' >Listings</li>
                <li className='hover:text-gray-400 cursor-pointer' >Agents</li>
                <li className='hover:text-gray-400 cursor-pointer' >Blogs</li>
            </ul>
            <div className="flex flex-row items-center justify-between gap-4">
                <a href="" className="px-5 py-2 bg-teal-400 cursor-pointer rounded-full">Add listing</a>
                <svg className='w-6 h-6 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z" /></svg>
                <svg className='w-6 h-6 fill-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 0c70.7 0 128 57.3 128 128s-57.3 128-128 128s-128-57.3-128-128S153.3 0 224 0zM209.1 359.2l-18.6-31c-6.4-10.7 1.3-24.2 13.7-24.2H224h19.7c12.4 0 20.1 13.6 13.7 24.2l-18.6 31 33.4 123.9 39.5-161.2c77.2 12 136.3 78.8 136.3 159.4c0 17-13.8 30.7-30.7 30.7H265.1 182.9 30.7C13.8 512 0 498.2 0 481.3c0-80.6 59.1-147.4 136.3-159.4l39.5 161.2 33.4-123.9z" /></svg>
            </div>
        </nav>
    )
}

export default Navigation