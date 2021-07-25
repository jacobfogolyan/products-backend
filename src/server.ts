import express from 'express'
import { connect } from 'mongoose'
import productsRoute from '@src/controllers/products'

const app = express()
const port = 8081

app.use(express.json())

// only neede for local environment
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE, PATCH");
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

