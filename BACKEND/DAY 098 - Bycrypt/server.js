const app = require('./src/app')
const connectDB = require('./config/database')

connectDB();

app.listen( 3000, () => {
    console.log('server is running on port 300')
})