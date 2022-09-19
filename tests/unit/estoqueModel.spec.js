const dbConnection = require('../../src/database/models')
const { Estoque, Produto } = require('../../src/database/models')

describe('Teste Unitários Estoque', () => {
  it('Criando um novo Estoque junto com seu produto', async () => {
    const produto = await Produto.create({
      idCategoria: 1,
      codigo: 'NovoCodigo1',
      nome: 'ProdutoCategoriaModel',
      descricao: 'NovaDescricao',
      valor: 353.63,
      status: 1
    })
    const estoque = await Estoque.create({
      idProduto: produto.id,
      quantidade: 0,
      reserva: 0,
      status: 0
    })

    expect(estoque.quantidade).toBe(0)
    expect(produto.nome).toBe('ProdutoCategoriaModel')
    expect(produto).toBeDefined()
  })
  it('Lista de Estoques', async () => {
    const estoques = await Estoque.findAll()

    expect(estoques.length).toBeGreaterThan(1)
    expect(estoques).toBeDefined()

  })
  it('Buscado um estoque por id', async () => {
    const estoque = await Estoque.findOne({ where: { id: 1 } })

    expect(estoque).toBeDefined()
    expect(estoque.idProduto).toBe(1)
  })

  it('Deletando uma estoque', async () => {
    await Estoque.destroy({ where: { id: 4 } })
    const estoque = await Estoque.findOne({ where: { id: 4 } })


    expect(estoque).toBeNull()
  })

  afterAll(async () => {
    await dbConnection.sequelize.close()
  })
})