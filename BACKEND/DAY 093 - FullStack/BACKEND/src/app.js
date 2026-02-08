const express = require('express')
const cors = require('cors')

const app = express()
const noteModel = require('./model/notes.model')

app.use(express.json())
app.use(cors())

app.post('/notes', async (req, res) => {

    const { title, description } = req.body

    const note = await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: 'note successfully created',
        note
    })
})

app.get('/notes', async (req, res) => {
    const note = await noteModel.find()

    res.status(200).json({
        message: 'notes successfully retrieved',
        note
    })
})

app.delete('/notes/:id', async (req, res) => {
    const { id } = req.params

    const deletedNote = await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: 'note successfully deleted',
        deletedNote
    })
})

app.patch('/notes/:id', async (req, res) => {
    const { id } = req.params
    const { title } = req.body

    await noteModel.findByIdAndUpdate(id, { title })

    res.status(200).json({
        message: 'note successfully updated',
    })
})


module.exports = app