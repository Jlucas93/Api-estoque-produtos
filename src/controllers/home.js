const homeController = {
  index: async (req, res) => {
    res.status(200).json({
      Developer: 'João Lucas Nascimento Andrade',
      GitHubRepository: 'https://github.com/Jlucas93/apiJest',
      Routes: {
        categorias: `http://localhost:${process.env.SERVER_PORT || 3000}/categorias`,
        produtos: `http://localhost:${process.env.SERVER_PORT || 3000}/produtos`,
        estoque: `http://localhost:${process.env.SERVER_PORT || 3000}/produtos/1/estoque`
      }
    })
  }
}
module.exports = homeController
