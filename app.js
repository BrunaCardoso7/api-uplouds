const express = require('express')
const app = express()
const EventEmitter = require('events');
const cors = require('cors')

app.use(cors())

EventEmitter.setMaxListeners(20); // Defina um limite maior (por exemplo, 20) se necessário

require("dotenv").config()

require('./conn/conn')

const pictureRoter = require('./routes/picture')

app.use('/pictures', pictureRoter)

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log('o servidor está rodando!')
})
