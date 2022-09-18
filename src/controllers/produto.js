const { Produto, Estoque } = require('../database/models')

const produtoController = {
  showAll: async (_req, res) => {
    try {
      const produtos = await Produto.findAll()

      return res.status(200).json(produtos)
    } catch (error) {
      console.log(error)

      return res.status(500).json('Bad Request')
    }

  },
  showOne: async (req, res) => {
    const { id } = req.params
    try {
      const produto = await Produto.findOne({ where: { id: id } })
      if (!produto) {
        return res.status(404).json({ Message: 'Product Not Found' })
      }
      return res.status(200).json(produto)
    } catch (error) {
      console.log(error)

      return res.status(500).json('Bad Request')
    }
  },
  create: async (req, res,) => {
    const {
      idCategoria,
      codigo,
      nome,
      descricao,
      valor,
      status
    } = req.body
    if (status !== 0 && status !== 1) {
      return res.status(500).json({ Message: 'Status must be 0 or 1' })
    }
    try {
      const produto = await Produto.create({
        idCategoria,
        codigo,
        nome,
        descricao,
        valor,
        status
      })
      await Estoque.create({
        idProduto: produto.id,
        quantidade: 0,
        reserva: 0,
        status: 0
      })
      return res.status(201).json({ Produto: produto })
    } catch (error) {
      console.log(error)
      return res.status(500).json('Error, product not created')
    }
  },
  edit: async (req, res) => {
    const { id } = req.params
    const {
      idCategoria,
      codigo,
      nome,
      descricao,
      valor,
      status

    } = req.body
    if (status && status !== 0 && status !== 1) {
      return res.status(500).json({ Message: 'Status must be 0 or 1' })
    }

    try {
      const produto = await Produto.findOne({ where: { id: id } })

      if (!produto) {
        return res.status(404).json({ Message: 'Product Not Found' })
      }
      await Produto.update({
        idCategoria,
        codigo,
        nome,
        descricao,
        valor,
        status
      },
        {
          where: {
            id: id
          }
        })

      return res.status(200).json({ Message: 'Product updated' })
    } catch (error) {
      console.log(error)
      return res.status(500).json('Bad Request')
    }
  },
  destroy: async (req, res) => {
    const { id } = req.params
    try {
      const produto = await Produto.findOne({ where: { id: id } })
      if (!produto) {
        return res.status(404).json({ Message: 'Category Not Found' })
      }
      await Estoque.destroy({
        where: { idProduto: id }
      })
      await Produto.destroy({
        where: { id: id }
      })

      return res.status(200).json('Product deleted')
    } catch (error) {
      console.log(error)

      return res.status(500).json('Error, Product was not deleted')
    }
  }
}
module.exports = produtoController