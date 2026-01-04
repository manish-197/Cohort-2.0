import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex items-center justify-between px-5 bg-sky-400 font-semibold text-{18px} text-black py-2 align-items-center'>
        <h2 className='text-lg '>
            Navbar
        </h2>
        <ul className='flex gap-4 font-semibold text-{18px}'>
            <Link className='cursor-pointer hover:scale-90 p-1 px-3 border-1 transition-all border-white rounded-3xl bg-blue-500'
            to='/' >Home</Link>
            <Link className='cursor-pointer hover:scale-90 p-1 px-3 border-1 transition-all border-white rounded-3xl bg-blue-500'
            to='/about'>About</Link>
            <Link className='cursor-pointer hover:scale-90 p-1 px-3 border-1 transition-all border-white rounded-3xl bg-blue-500'
            to='/contact'>Contact</Link>
        </ul>
    </nav>
  )
}

export default Navbar
