import React, { useState } from 'react'
import Form from './components/Form'

const App = () => {

  const [theme, setTheme] = React.useState('');
  const changeTheme = (u) => {
    setTheme(u);
  }
 
  return (
    <div>
      <h1>This theme is {theme}</h1>
      <Form  changeTheme={changeTheme()}/>
    </div>
  )
}

export default App
