const homeController = {
  index: async (req, res) => {
    res.status(200).json({ Message: 'Hello World' })
  }

}
module.exports = homeController
