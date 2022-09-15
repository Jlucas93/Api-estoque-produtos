const express = require('express')
const router = express.Router()


router.get('/produtos', produto.showAll)
router.get('/prodtuos/:id', produto.showOne)
router.get('/produtos', produto.showAll)
router.post('/prodtuos', produto.create)
router.patch('/prodtuos/:id', produto.update)
router.delete('/prodtuos/:id', produto.destroy)

module.exports = router

