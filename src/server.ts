import express from 'express'
import { connect } from 'mongoose'
import productsRoute from '@routes/productsRoute'

const app = express()
const port = 8081

app.use(express.json())

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

