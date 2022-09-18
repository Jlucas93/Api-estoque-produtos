const { Categoria, Produto } = require('../database/models')

const categoriaController = {
  showAll: async (_req, res) => {
    try {
      const categorias = await Categoria.findAll()

      return res.status(200).json(categorias)
    } catch (error) {
      console.log(error)

      return res.status(500).json('Bad Request')
    }
  },
  showOne: async (req, res) => {
    const { id } = req.params
    try {
      const categoria = await Categoria.findOne({ where: { id: id } })
      if (!categoria) {
        return res.status(404).json({ Message: 'Category Not Found' })
      }
      return res.status(200).json(categoria)
    } catch (error) {
      console.log(error)

      return res.status(500).json('Bad Request')
    }
  },
  create: async (req, res) => {
    const {
      codigo,
      titulo,
      status
    } = req.body
    if (status !== 0 && status !== 1) {
      return res.status(500).json({ Message: 'Status must be 0 or 1' })
    }
    try {
      const categoria = await Categoria.create({
        codigo,
        titulo,
        status
      })
      return res.status(201).json({ Categoria: categoria })
    } catch (error) {
      console.log(error)

      return res.status(500).json('Error, category not created')
    }
  },
  edit: async (req, res) => {
    const { id } = req.params
    const {
      codigo,
      titulo,
      status
    } = req.body
    if (status && status !== 0 && status !== 1) {
      return res.status(500).json({ Message: 'Status must be 0 or 1' })
    }
    try {
      const categoria = await Categoria.findOne({ where: { id: id } })
      if (!categoria) {
        return res.status(404).json({ Message: 'Category Not Found' })
      }
      await Categoria.update({
        codigo,
        titulo,
        status
      },
        {
          where: {
            id: id
          }
        })
      return res.status(200).json({ Message: "Category Updated" })
    } catch (error) {
      console.log(error)

      return res.status(500).json('Bad Request')
    }
  },
  destroy: async (req, res) => {
    const { id } = req.params
    try {
      const categoria = await Categoria.findOne({ where: { id: id } })
      if (!categoria) {
        return res.status(404).json({ Message: 'Category Not Found' })
      }
      await Produto.update({
        idCategoria: null
      }, {
        where: {
          idCategoria: id
        }
      })
      await Categoria.destroy({
        where: { id: id }
      })
      const produtosAtualizados = await Produto.findAll({ where: { idCategoria: null } })

      return res.status(200).json({ ProdutosAtualizados: produtosAtualizados, Message: 'Category deleted' })
    } catch (error) {
      console.log(error)

      return res.status(500).json('Error, Category was not deleted')
    }
  }
}
module.exports = categoriaController