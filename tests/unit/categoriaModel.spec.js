const dbConnection = require('../../src/database/models')
const { Categoria } = require('../../src/database/models')


describe('Criando Categoria', () => {
  it("Criando nova categoria", async () => {
    const categoria = await Categoria.create({
      codigo: 'novoCodigo',
      titulo: 'novoTitulo',
      status: 0
    })
    expect(categoria).toBeDefined()
  })

  it('Lista de categorias', async () => {
    const categorias = await Categoria.findAll()

    expect(categorias.length).toBe(1)
    expect(categorias).toBeDefined()

  })
  it('Buscado uma categoria por id', async () => {
    const categoria = await Categoria.findOne({ where: { id: 1 } })

    expect(categoria).toBeDefined()
    expect(categoria.codigo).toBe('novoCodigo')
  })
  it('Deletando uma categoria', async () => {
    await Categoria.destroy({ where: { id: 1 } })
    const categoria = await Categoria.findOne({ where: { id: 1 } })


    expect(categoria).toBeNull()
  })
  afterAll(async () => {
    await dbConnection.sequelize.close()

  })
})