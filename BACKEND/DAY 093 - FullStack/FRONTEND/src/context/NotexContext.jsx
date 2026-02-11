import React, { createContext } from "react";
import axios from 'axios'
export const NotesDataContext = createContext();

const NotexContext = ({ children }) => {
  const [notes, setNotes] = React.useState([]);


  
      const fetchNotes = async () => {
      const res = await axios.get("http://localhost:3000/notes");
      const data = res.data;
      // console.log('GET /notes response:', data);
      setNotes(data.note);
    };
  

  return (
    <NotesDataContext.Provider value={{ notes, setNotes, fetchNotes }}>
      {children}
    </NotesDataContext.Provider>
  );
};

export default NotexContext;
