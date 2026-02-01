const express = require('express');

const noteModel = require('./model/note.model');

const app = express();

app.use(express.json())


app.post('/notes',async (req, res) => {
    const {title, content} = req.body

    const note =await noteModel.create({title, content})

    res.status(201).json({
        message:'note is created successfully',
        note
        
    })

})

module.exports = app;