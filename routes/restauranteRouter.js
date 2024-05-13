import express from 'express'
import { create, getRestarantes, updateRestaurantes } from '../controllers/restauranteController.js'
import upload from '../config/multer.js'

const restauranteRouter = express.Router()

restauranteRouter.post('/create', upload.single('file'), create)
restauranteRouter.get('/', getRestarantes)
restauranteRouter.patch('/update', upload.single('file'),updateRestaurantes)
export default restauranteRouter