import React from 'react'
import Card from './components/cards'

const App = () => {

  const [character, setCharacter] = React.useState('Yuji Itadori');
  function btnClicked() {
    
    if (character == 'Yuji Itadori') {
      setCharacter('Satoru Gojo')
    }
    else if (character == 'Satoru Gojo') {
      setCharacter('Megumi Fushiguro')
    }
    else if (character == 'Megumi Fushiguro') {
      setCharacter('Ryomen Sukuna')
    }
    else if (character == 'Ryomen Sukuna') {
      setCharacter('Suguru Geto')
    }
    else if (character == 'Suguru Geto') {
      setCharacter('Mahito')
    }
    else if (character == 'Mahito') {
      setCharacter('Toge Inumaki')
    }
    else if (character == 'Toge Inumaki') {
      setCharacter('Kento Nanami')
    }
    else{
      setCharacter('Yuji Itadori')
    }
  }
  return (
    <div className='App'>
      <h2 className='text'>Character Name : {character}</h2>
      <button className='btn' onClick={btnClicked}>Click me!</button>
      <Card user={character} name={name}/>
    </div>
  )
}

export default App
