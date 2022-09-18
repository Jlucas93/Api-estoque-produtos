const dbConnection = require('../../src/database/models')
const { Produto } = require('../../src/database/models')


describe('Teste Unitários Produto', () => {
  it("Criando nova Produto", async () => {
    const produto = await Produto.create({
      idCategoria: null,
      codigo: 'NovoCodigo1',
      nome: 'NovoNome',
      descricao: 'NovaDescricao',
      valor: 353.63,
      status: 0
    })
    expect(produto).toBeDefined()
  })

  it('Lista de produtos', async () => {
    const produto = await Produto.findAll()

    expect(produto.length).toBe(1)
    expect(produto).toBeDefined()

  })
  it('Buscado um produto por id', async () => {
    const produto = await Produto.findOne({ where: { id: 1 } })

    expect(produto).toBeDefined()
    expect(produto.codigo).toBe('NovoCodigo1')
  })
  it('Deletando uma produto', async () => {
    await Produto.destroy({ where: { id: 1 } })
    const produto = await Produto.findOne({ where: { id: 1 } })


    expect(produto).toBeNull()
  })
  afterAll(async () => {
    await dbConnection.sequelize.close()

  })
})