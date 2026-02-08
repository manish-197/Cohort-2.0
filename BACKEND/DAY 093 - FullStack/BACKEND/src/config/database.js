const mongoose = require('mongoose')
const dotenv = require('dotenv')


const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Connected to database');
        
    })
}

module.exports = connectDB