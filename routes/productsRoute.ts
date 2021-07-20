import express, { Request, Response } from 'express'

const app = express()

app.post('/create', (req: Request, res: Response) => {
    // createProduct
    throw new Error('Method Not implemented')
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