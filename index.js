const express = require('express');
const app = express();
require('dotenv').config()
//Routes
const homeRouter = require('./src/routes/home')
const categoriasRouter = require('./src/routes/categoria')


//Starting the server

app.listen(process.env.SERVER_PORT || 3000, () => console.log('Server started'))

app.use(express.urlencoded({ extended: false }))
app.use(express.json())


app.use(homeRouter)
app.use(categoriasRouter)
