const { Estoque, Produto } = require('../database/models')

const estoqueController = {
  showOne: async (req, res) => {
    const { id } = req.params
    try {
      const estoque = await Estoque.findOne({ where: { idProduto: id } })
      if (!estoque) {
        return res.status(404).json({ message: 'Inventory Not found' })
      }
      return res.status(200).json({ estoque })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ Message: 'Bad Request' })
    }
  },
  edit: async (req, res) => {
    const { id } = req.params
    try {

    } catch (error) {
      console.log(error)
      return res.status(500).json({ Message: 'Bad Request' })
    }
  },
  destroy: async (req, res) => {
    const { id } = req.params
    try {

    } catch (error) {
      console.log(error)
      return res.status(500).json({ Message: 'Bad Request' })
    }
  }
}

module.exports = estoqueController