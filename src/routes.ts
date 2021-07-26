import { RequestHandler } from 'express';
import { create, read, update, deleteMethod } from '@src/controllers/product/handlers'
import express from 'express' 

const app = express()

export type method = 'get' | 'post' | 'options' | 'put' | 'delete' | 'patch'

export type Route = {
  method: method;
  path: string;
  handler: RequestHandler;
};

export const routes: Route[] = [
    { method: 'post', path: '/api/v1/products', handler: create },
    { method: 'get', path: '/api/v1/products/:id?', handler: read },
    { method: 'patch', path: '/api/v1/product', handler: update },
    { method: 'delete', path: '/api/v1/product/:id', handler: deleteMethod },
]
