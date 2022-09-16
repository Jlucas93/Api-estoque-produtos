const { Categoria } = require('../database/models')

const categoriaController = {
  showAll: async (req, res, next) => {
    try {
      const categorias = await Categoria.findAll()
      return res.json(categorias)
    } catch (error) {
      console.log(error)
      return res.status(500).json('Bad Request')
    }
  }
}
module.exports = categoriaController