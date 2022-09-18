const express = require('express');
const app = express();
const cors = require('cors')
require('dotenv').config()

//Routes
const homeRouter = require('./src/routes/home')
const categoriasRouter = require('./src/routes/categoria')
const produtoRuter = require('./src/routes/produto')
const estoqueRouter = require('./src/routes/estoque')


app.use(express.json())
app.use(cors())
app.use(homeRouter)
app.use(categoriasRouter)
app.use(produtoRuter)
app.use(estoqueRouter)
app.use((_req, res, _next) => {
  return res.status(404).json({ Message: "This route doesn't exist" });
})

module.exports = app