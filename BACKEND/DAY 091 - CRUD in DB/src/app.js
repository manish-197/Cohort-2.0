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

app.get('/notes', async (req, res) => {
    const notes = await noteModel.find();

    res.status(200).json({
        message:'notes fetched successfully',
        notes
    })
})

module.exports = app;