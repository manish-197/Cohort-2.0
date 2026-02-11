import axios from 'axios';
import React, { useContext } from 'react'
import { useState } from 'react';
import { NotesDataContext } from '../context/NotexContext';



const DataInput = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const { fetchNotes } = useContext(NotesDataContext);

    const handleSubmit = async (e) => {
        e.preventDefault();
        
            await axios.post("http://localhost:3000/notes", { title, description })
            .then((res) => {
                console.log(res.data);
                setTitle("");
                setDescription(""); 
                fetchNotes();
            })
          
       

        // await axios.post("http://localhost:3000/notes", {
        //   title: title,
        //   description: e.target.description.value
        // })
        // .then((res) => {
        //     console.log(res.data);
            
        // })

       
        



    }
  return (
    <div className="data-input">
        <h1>Add Notes</h1>
        <form action="" className='data-form' onSubmit={handleSubmit}>
            <input className='data-input-box' name="title" type="text" placeholder='Title' value={title} onChange={(e) => setTitle(e.target.value)} />
            <input className='data-input-box' name="description" type="text" placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} />
            <button className='data-submit' type="submit">Add Note</button> 
        </form>
    </div>
  )
}

export default DataInput
