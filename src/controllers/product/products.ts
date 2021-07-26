import express, { Request, Response } from 'express'
import { create, read, update, deleteMethod } from './handlers'
const app = express()

// TODO dynamically generate routes based on json object
app.post('/api/v1/products', (req: Request, res: Response) => {
    create(req, res)
})
app.get('/api/v1/products/:id?', (req: Request, res: Response) => {
    read(req, res)
})
app.patch('/api/v1/product', (req: Request, res: Response) => {
    update(req, res)
})
app.delete('/api/v1/product/:id', (req: Request, res: Response) => {
    deleteMethod(req, res)
})


export default app