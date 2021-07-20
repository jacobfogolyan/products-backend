import { Schema, model } from 'mongoose'

type Product = any

// mongoos document model
const productModel = model('Product', new Schema({
    name: { type: String, required: true, minLength: 2 }, 
    size: { type: Number, required: true },
    color: { type: String, default: 'black' },
    material: { type: String, required: true },
}))

export function createProduct (name: string, size: number, material: string, color?: string): Promise<Product> {
    return new Promise<Product>(async (resolve, reject) => {
        productModel.create({ name, size, material, color }).then((res) => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export function readProductById (id: number): Promise<Product> {
    return new Promise<Product>(async (resolve, reject) => {
        productModel.findById(id).then((res) => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}


export function updateProduct (id: number) {
    return new Promise<Product>(async(resolve, reject) => {
        productModel.updateOne({ id }).then((res) => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}

export function deleteProduct (id: number) {
    return new Promise<Product>(async (resolve, reject) => {
        productModel.deleteOne({ id }).then((res) => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}