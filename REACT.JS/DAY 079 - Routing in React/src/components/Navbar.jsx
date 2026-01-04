import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='flex '>
        <h2>
            Navbar
        </h2>
        <ul>
            <Link>Home</Link>
            <Link>Home</Link>
            <Link>Home</Link>
        </ul>
    </nav>
  )
}

export default Navbar
