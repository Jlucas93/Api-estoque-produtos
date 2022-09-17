const express = require('express')
const router = express.Router()
const produto = require('../controllers/produto')


router.get('/produtos', produto.showAll)
router.post('/produtos', produto.create)
router.get('/produtos/:id', produto.showOne)
router.patch('/produtos/:id', produto.edit)
router.delete('/produtos/:id', produto.destroy)

module.exports = router

