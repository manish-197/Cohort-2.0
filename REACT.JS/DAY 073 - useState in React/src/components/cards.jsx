import React from 'react'

const cards = (props) => {
    
  return (
    <div className='card' style={{ backgroundImage: `url(${props.name})`}}>
        <div className='card-text'>
            <h2>{props.user}</h2>
        </div>
      
    </div>
  )
}

export default cards
