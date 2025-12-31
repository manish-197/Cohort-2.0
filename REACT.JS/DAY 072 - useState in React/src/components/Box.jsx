import React, { useState } from 'react'

const Box = () => {
   
    function Clicked() {
     alert("button is Clicked....")   
    }

  return (
    <div className='container'>

        <div className="btn-container">
            <button onClick={Clicked}>Click Me!</button>
        </div>
        <h2>
            
        </h2>
      
    </div>
  )
}

export default Box
