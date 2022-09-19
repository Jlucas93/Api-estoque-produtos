const dbConnection = require('../../src/database/models')
const { Produto, Estoque } = require('../../src/database/models')


describe('Teste Unitários Produto', () => {
  it("Criando nova Produto", async () => {
    const produto = await Produto.create({
      idCategoria: 1,
      codigo: 'NovoCodigo1',
      nome: 'NovoNome',
      descricao: 'NovaDescricao',
      valor: 353.63,
      status: 1
    })
    const estoque = await Estoque.create({
      idProduto: produto.id,
      quantidade: 0,
      reserva: 0,
      status: 1
    })
    expect(estoque.idProduto).toBe(produto.id)
    expect(produto).toBeDefined()
  })

  it('Lista de produtos', async () => {
    const produto = await Produto.findAll()

    expect(produto.length).toBeGreaterThan(1)
    expect(produto).toBeDefined()

  })
  it('Buscado um produto por id', async () => {
    const produto = await Produto.findOne({ where: { id: 1 } })

    expect(produto).toBeDefined()
    expect(produto.codigo).toBe('iphone14-1')
  })

  it('Deletando uma produto e seu estoque', async () => {
    await Estoque.destroy({ where: { id: 3 } })
    await Produto.destroy({ where: { id: 3 } })
    const produto = await Produto.findOne({ where: { id: 3 } })


    expect(produto).toBeNull()
  })
  afterAll(async () => {
    await dbConnection.sequelize.close()

  })
})