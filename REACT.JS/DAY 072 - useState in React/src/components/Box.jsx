import React from 'react'

const Box = () => {
   
  const [x, setx] = React.useState();
  const [y, sety] = React.useState();
    function Clicked() {
    //  alert("button is Clicked....") 
     setx(Math.random()*100)  
     sety(Math.random()*100)  
    }

  return (
    <div className='container'>

        <div className="btn-container">
            <button onClick={Clicked}>Click Me!</button>
        </div>
        <div>
          
        <h2 style={{top:`${x}%`, left:`${y}%`}}>
            hello
        </h2>
        </div>
      
    </div>
  )
}

export default Box
