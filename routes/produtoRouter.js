import express from 'express'
import { createProduto, getProdutos, updateProduto } from '../controllers/produtocontroller.js'
import upload from '../config/multer.js'

const produtoRouter = express.Router()

produtoRouter.post('/create/', upload.single('file'), createProduto)
produtoRouter.get('/', getProdutos)
produtoRouter.patch('/update/:id', upload.single('file'), updateProduto)
produtoRouter.delete('/:id', )

export default produtoRouter