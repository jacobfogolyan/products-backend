import express, { Request, Response } from 'express'
import { createProduct } from '@model/products'

const app = express()

app.post('/create', (req: Request, res: Response) => {
    const { name, size, material, color } = req.body
    createProduct(name, size, material, color).then(product => {
        res.status(200).send(product)
    }).catch((err) => {
        res.status(500).send(err)
    })
})

app.get('/read', (req: Request, res: Response) => {
    // readProduct
    throw new Error('Method Not implemented')
})

app.put('/update', (req: Request, res: Response) => {
    // updateProduct
    throw new Error('Method Not implemented')
})

app.delete('/delete', (req: Request, res: Response) => {
    // deleteProduct
    throw new Error('Method Not implemented')
})

export default app