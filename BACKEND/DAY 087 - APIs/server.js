const express = require('express')

const app = express()

app.use(express.json())

const dataStore = []

app.post('/data', (req, res) => {

    dataStore.push(req.body)

    res.send('Data received')

})

app.get('/data', (req, res) => {

    res.send(dataStore)

})



app.listen(3000, () => {
    console.log('Server is running on port 3000')
})