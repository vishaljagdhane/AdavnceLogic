'use client'
import React ,{useState}from 'react'
import { HiMenu } from 'react-icons/hi'; // You can install react-icons for the menu icon


export default function ApplicationBar() {
    const[openClose,setOpenClose]=useState(false)
    const LeftSidMenu =()=>{
        if(openClose){
        setOpenClose(true)
        console.log(openClose)
        }
        else{
            setOpenClose(false)
        }
    }
  return (
    <div className="flex items-center justify-between p-4 bg-gray-800 text-white h-[100px]">
      {/* Left Side: Company Name and Menu Icon */}
      <div className="flex items-center space-x-4">
        {/* Menu Icon */}
        <div className="text-2xl cursor-pointer">
          <HiMenu  onClick={LeftSidMenu}/>
        </div>

        {/* Company Name */}
        <div className="text-xl font-bold">
          <span>CompanyName</span>
        </div>
      </div>

      {/* Right Side: Search Bar and User Icon */}
      <div className="flex items-center space-x-4">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search..."
          className="px-4 py-2 rounded-full bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        {/* User Icon */}
        <div className="w-8 h-8 rounded-full bg-gray-600 flex items-center justify-center cursor-pointer">
          <span className="text-white">U</span> {/* You can replace with an actual user icon */}
        </div>
      </div>
    </div>
  )
}
