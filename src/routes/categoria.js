const express = require('express')
const router = express.Router()


router.get('/categorias', categoria.showAll)
router.get('/categorias/:id', categoria.showOne)
router.get('/categorias', categoria.showAll)
router.post('/categorias', categoria.create)
router.patch('/categorias/:id', categoria.update)
router.delete('/categorias/:id', categoria.destroy)

module.exports = router

