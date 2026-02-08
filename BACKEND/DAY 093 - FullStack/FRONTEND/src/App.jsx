import React from "react";
import axios from "axios";

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
    <>
    <div className="notes">
      {notes.map((note, index) => (
        <div className="note" key={index}>
          <h2>{note?.title}</h2>
          <p>{note?.description}</p>
        </div>
      ))}
      </div>
    </>
  );
};

export default App;
