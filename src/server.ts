import express from 'express'
import { connect } from 'mongoose'
import productsRoute from '@routes/productsRoute'

const app = express()
const port = 8081

app.use(express.json())

// only neede for local environment
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

connect('mongodb://root:products@127.0.0.1:27017/admin',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)

app.use(productsRoute)

app.listen(port, () => {
    console.log(`Server is Running on port ${port}`)
})

