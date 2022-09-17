const { Estoque } = require('../database/models')

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
    const {
      idProduto,
      quantiade,
      reserva,
      status
    } = req.body
    if (status && status !== 0 && status !== 1) {
      return res.status(500).json({ Message: 'Status must be 0 or 1' })
    }
    try {
      const estoque = await Estoque.findOne({ where: { idProduto: id } })

      if (!estoque) {
        return res.status(404).json({ Message: 'Inventory Not Found' })
      }
      await Estoque.update({
        idProduto,
        quantiade,
        reserva,
        status
      },
        {
          where: { idProduto: id }
        })
      return res.status(200).json({ Message: 'Inventory Updated' })
    } catch (error) {
      console.log(error)
      return res.status(500).json({ Message: 'Bad Request' })
    }
  },
  destroy: async (_req, res) => {

    return res.status(501).json({ Message: 'Not Implemented' })

  }
}

module.exports = estoqueController