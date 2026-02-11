import React, { useContext } from "react";
import axios from "axios";
import { NotesDataContext } from "../context/NotexContext";

const ShowData = () => {
  const { notes, fetchNotes } = useContext(NotesDataContext);

  

  React.useEffect(() => {
    fetchNotes();
  }, []);

  const handleDelete = (note) => {
    axios.delete("http://localhost:3000/notes/" + note)
      .then((res) => {
        console.log(res.data);
        fetchNotes();
      })
    
  }

  return (
    <div className="show-data">
      <div className="collection">
        {notes.map((note, index) => {
          return (
            <div className="note" key={index}>
              <h2>{note.title}</h2>
              <h3>{note.description}</h3>
              <button className="delete" onClick={() => handleDelete(note._id)}>+</button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowData;
