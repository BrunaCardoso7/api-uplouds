import express from "express"
import { createUserController, loginUserController, userById } from "../controllers/userController.js"

const userRoute = express.Router()

userRoute.post('/create', createUserController)
userRoute.post('/login', loginUserController)
userRoute.get('/:id', userById)
export default userRoute