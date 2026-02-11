import React from "react";
import axios from "axios";
import DataInput from "./components/DataInput";
import ShowData from "./components/ShowData";

const App = () => {
  const [notes, setNotes] = React.useState([]);

  const fetchNotes = async () => {
    const res = await axios.get("http://localhost:3000/notes");
    const data = res.data;
    // console.log('GET /notes response:', data);
    setNotes(data.note);
  };

  React.useEffect(() => {
    fetchNotes();
  }, []);

  return (
    
    <div className="app">
      <DataInput />
      <ShowData />
    </div>
  );
};

export default App;
