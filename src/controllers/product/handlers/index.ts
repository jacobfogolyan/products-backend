import express, { Request, Response } from 'express'
import { createProduct, readProducts, updateProduct, deleteProduct } from '@src/model/products'

const app = express()

export const create = (req: Request, res: Response) => {
    const { name, size, material, color } = req.body
    createProduct(name, size, material, color).then(product => {
        res.status(200).send(product)
    }).catch((err) => {
        res.status(500).send(err)
    })
}

export const read = (req: Request, res: Response) => {
    const productId = req.params.id
    readProducts({ ...(productId ? { _id: productId }: {}) }).then(allProducts => {
        res.status(200).send(allProducts)
    }).catch(err => {
        res.status(500).send(err)
    })
}

export const update = (req: Request, res: Response) => {
    const id = req.body.id
    const withWhat = req.body.update
    updateProduct(id, withWhat).then(product => {
        res.status(200).send(product)
    }).catch(err => {
        res.status(500).send(err)
    })
}

export const deleteMethod = (req: Request, res: Response) => {
    const id: string = req.params.id
    deleteProduct(id).then(product => {
        res.status(200).send(product)
    }).catch(err => {
        res.status(500).send(err)
    })
}