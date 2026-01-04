import React from 'react'
import axios from 'axios'
const App = () => {

  const [num, setNum] = React.useState(0);

  const getData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log(response.data);
  }

    React.useEffect(() => {
      getData()
    }, [num]);

  return (
    <div>
      <h1>{num}</h1>
      <button onClick={() => {
        setNum(num + 1)
      }}>Get data</button>
    </div>
  )
}

export default App
