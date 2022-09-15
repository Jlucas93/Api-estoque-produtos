const express = require('express')
const router = express.Router()


router.get('/produtos/:id/estoque', estoque.showOne)
router.patch('/prodtuos/:id/estoque', produto.update)
router.delete('/prodtuos/:id/estoque', estoque.destroy)

module.exports = router

