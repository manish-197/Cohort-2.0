import React from 'react'
import Navbar from './components/Nav.jsx'
import Box from './components/Box.jsx'

const App = () => {
 
  const nav = {
    logo: "startup",
    link: ["Home", "About", "Services", "Contact", "Blog", "Careers"]
  }

  return (
    <div>
      <Navbar nav={nav} />
      <Box />
    </div>
  )
}

export default App
