import express from 'express'
import { DeleteRestaurante, create, getByIdRestaurante, getRestarantes, getRestarantesByid, updateRestaurantes } from '../controllers/restauranteController.js'
import upload from '../config/multer.js'
import { checkToken } from '../config/jwtConfig.js'
import UserHasRestauranteMiddleware from '../middleware/userhasrestaurante.js'


const restauranteRouter = express.Router()

restauranteRouter.post('/create', upload.single('file'), create)
restauranteRouter.get('/', getRestarantes)
restauranteRouter.get('/', UserHasRestauranteMiddleware, getRestarantesByid)
restauranteRouter.patch('/update', upload.single('file'),updateRestaurantes)
restauranteRouter.delete('/delete', DeleteRestaurante)
restauranteRouter.get('/:id', getByIdRestaurante)
export default restauranteRouter