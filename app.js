import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import userRoute from './routes/userRoutes.js'
import sequelize from './db.js'
import restauranteRouter from './routes/restauranteRouter.js'
const app = express()

app.use(cors())

dotenv.config()


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/user', userRoute)
app.use('/rest', restauranteRouter)

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log('o servidor está rodando!')
})
