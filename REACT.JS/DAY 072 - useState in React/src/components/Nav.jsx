import React from 'react'

const Navbar = (props) => {
  return (
    <nav className='navbar'>
        <h2 className='logo'>{props.nav.logo}</h2>
        <ul className='nav-list'>
            {
                props.nav.link.map((item, index) => {
                    return <li key={index}>{item}</li>
                })
            }
        </ul>
    </nav>
  )
}

export default Navbar
