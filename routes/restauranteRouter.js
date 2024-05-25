import express from 'express'
import { DeleteRestaurante, create, getRestarantes, updateRestaurantes } from '../controllers/restauranteController.js'
import upload from '../config/multer.js'
import { checkToken } from '../config/jwtConfig.js'


const restauranteRouter = express.Router()

restauranteRouter.post('/create', upload.single('file'), create)
restauranteRouter.get('/', getRestarantes)
restauranteRouter.patch('/update', upload.single('file'),updateRestaurantes)
restauranteRouter.delete('/delete', DeleteRestaurante)
export default restauranteRouter