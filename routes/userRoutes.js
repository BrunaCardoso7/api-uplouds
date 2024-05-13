import express from "express"
import { createUserController, loginUserController } from "../controllers/userController.js"

const userRoute = express.Router()

userRoute.post('/create', createUserController)
userRoute.post('/login', loginUserController)
export default userRoute