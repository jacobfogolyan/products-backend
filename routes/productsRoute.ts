import express, { Request, Response } from 'express'
import { createProduct, readProducts, updateProduct } from '@model/products'

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
    const filter = req.body
    readProducts({ ...(filter ? filter: {}) }).then(allProducts => {
        res.status(200).send(allProducts)
    }).catch(err => {
        res.status(500).send(err)
    })
})

app.put('/update', (req: Request, res: Response) => {
    const id = req.body.id
    const withWhat = req.body.update
    updateProduct(id, withWhat).then(product => {
        res.status(200).send(product)
    }).catch(err => {
        res.status(500).send(err)
    })
})

app.delete('/delete', (req: Request, res: Response) => {
    // deleteProduct
    throw new Error('Method Not implemented')
})

export default app