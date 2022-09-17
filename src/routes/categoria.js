const express = require('express')
const router = express.Router()
const categoria = require('../controllers/categoria')


router.get('/categorias', categoria.showAll)
router.post('/categorias', categoria.create)
router.get('/categorias/:id', categoria.showOne)
router.patch('/categorias/:id', categoria.edit)
router.delete('/categorias/:id', categoria.destroy)

module.exports = router

