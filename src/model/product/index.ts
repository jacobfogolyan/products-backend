import { Schema, model } from 'mongoose'

type Product = any

// mongoos document model
const MProduct = model('Product', new Schema({
    name: { type: String, required: true, minLength: 2 }, 
    size: { type: Number, required: true },
    color: { type: String, default: 'black' },
    material: { type: String, required: true },
}))

export function createProduct (name: string, size: number, material: string, color?: string): Promise<Product> {
    return new Promise<Product>(async (resolve, reject) => {
        MProduct.create({ name, size, material, color }).then((res) => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export function readProducts (filter?: any): Promise<Product> {
    return new Promise<Product>(async (resolve, reject) => {
        MProduct.find({ ...(filter ? filter: {})}).then((res) => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export function updateProduct (id: string, withWhat: any) {
    return new Promise<Product>(async(resolve, reject) => {
        MProduct.updateOne({ _id: id }, { ...withWhat }).then((res) => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export function deleteProduct (id: string) {
    return new Promise<Product>(async (resolve, reject) => {
        MProduct.deleteOne({ _id: id }).then((res) => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}