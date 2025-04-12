import React from 'react'
import { VscAccount } from "react-icons/vsc";
import { RiCelsiusFill } from "react-icons/ri";


const NavBar = () => {
  return (
    <nav className='flex items-center justify-between bg-[#F7F6F9]'>
      <h2 className="text-xl font-normal mb-2 underline underline-offset-8">Week</h2>
      <ul className='flex gap-6 text-sm font-medium'>
        <li className='rounded-full bg-white p-2'><RiCelsiusFill size={24}/></li>
        <li className='rounded-full bg-white p-2'><RiCelsiusFill size={27}/></li>
        <li className='rounded-full bg-[#F7F6F9] p-2'><VscAccount size={27}/></li>
      </ul>
    </nav>
  )
}

export default NavBar
