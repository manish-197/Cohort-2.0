import React from 'react'
import Navbar from './components/Navbar.jsx'

const App = () => {

  const nav = {
    logo: "startup",
    link: ["Home", "About", "Services", "Contact", "Blog", "Careers"]
  }

  return (
    <div>
      <Navbar nav={nav} />
    </div>
  )
}

export default App
