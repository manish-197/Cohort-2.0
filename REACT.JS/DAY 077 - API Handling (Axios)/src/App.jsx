import React, { use, useEffect } from "react";
import Card from "./components/Card.jsx";
import axios from "axios";

const App = () => {

  const [allData, setAllData] = React.useState([]);
  
  const getData = async () => {
    const response = await axios.get(
      "https://fakestoreapi.com/users"
    );

    setAllData(response.data);
    
  };

  useEffect( () => {
    getData()
  }, [])

  return (
    <div>
      {/* <button onClick={() => {
        getData()
      }}>get data </button> */}
      <Card allData={allData} />
    </div>
  );
};

export default App;
