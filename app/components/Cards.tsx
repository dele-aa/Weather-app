import React from 'react'
import { WiRain } from "react-icons/wi";
import { TiWeatherPartlySunny,TiWeatherWindy,TiWeatherShower } from "react-icons/ti";
import { SiAccuweather } from "react-icons/si";
import { IoPartlySunny } from "react-icons/io5";



const Cards = () => {
  return (
    <div className="flex justify-center gap-x-4 pt-10 bg-[#F7F6F9]">
            <div className="bg-white rounded-lg p-4 w-64 text-center">
                <h2 className="text-sm font-sm mb-2">Sun</h2>
                    <div className="flex justify-center">
                        <SiAccuweather size={40} className="text-yellow-400" />
                    </div>
                <p className='text-xs pt-2'>15℃</p>
            </div>
            <div className="bg-white rounded-lg p-4 w-64 text-center">
                <h2 className="text-sm font-sm mb-2">Mon</h2>
                    <div className="flex justify-center">
                        <TiWeatherPartlySunny size={40} className="text-gray-400" />
                    </div>
                <p className='text-xs pt-2'>12℃</p>
            </div>
            <div className="bg-white rounded-lg p-4 w-64 text-center">
                <h2 className="text-sm font-sm mb-2">Tue</h2>
                    <div className="flex justify-center">
                        <WiRain size={40} className="text-gray-400" />
                    </div>
                <p className='text-xs pt-2'>9℃</p>
            </div>
            <div className="bg-white rounded-lg p-4 w-64 text-center">
                <h2 className="text-sm font-sm mb-2">Wed</h2>
                    <div className="flex justify-center">
                        <TiWeatherShower size={40} className="text-gray-400" />
                    </div>
                <p className='text-xs pt-2'>8℃</p>
            </div>
            <div className="bg-white rounded-lg p-4 w-64 text-center">
                <h2 className="text-sm font-sm mb-2">Thur</h2>
                    <div className="flex justify-center">
                        <TiWeatherWindy size={40} className="text-blue-400" />
                    </div>
                <p className='text-xs pt-2'>5℃</p>
            </div>
            <div className="bg-white rounded-lg p-4 w-64 text-center">
                <h2 className="text-sm font-sm mb-2">Fri</h2>
                    <div className="flex justify-center">
                        <IoPartlySunny size={40} className="text-yellow-400" />
                    </div>
                <p className='text-xs pt-2'>4℃</p>
            </div>
            <div className="bg-white rounded-lg p-4 w-64 text-center">
                <h2 className="text-sm font-sm mb-2">Sat</h2>
                    <div className="flex justify-center">
                        <SiAccuweather size={40} className="text-yellow-400" />
                    </div>
                <p className='text-xs pt-2'>3℃</p>
            </div>
           
    </div>
  )
}

export default Cards


{/* <nav className="flex justify-between items-center">
        <h2 className="text-xl font-bold mb-2 underline underline-offset-8">Today</h2>
        <div className='container mx-auto flex justify-between items-center'>
                <ul className="hidden md:flex space-x-6 text-sm">
                <li><p>℃</p></li>
                <li><p>℉</p></li>
                <li></li>
                </ul>
          </div>
        </nav>
        
         */}