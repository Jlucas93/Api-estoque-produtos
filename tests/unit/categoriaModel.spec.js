const dbConnection = require('../../src/database/models')
const { Categoria, Produto } = require('../../src/database/models')


describe('Teste Unitários Categoria', () => {
  it("Criando nova categoria", async () => {
    const categoria = await Categoria.create({
      codigo: 'novoCodigo',
      titulo: 'novoTitulo',
      status: 1
    })
    expect(categoria).toBeDefined()
  })

  it('Lista de categorias', async () => {
    const categorias = await Categoria.findAll()

    expect(categorias.length).toBeGreaterThan(1)
    expect(categorias).toBeDefined()

  })
  it('Buscado uma categoria por id', async () => {
    const categoria = await Categoria.findOne({ where: { id: 1 } })

    expect(categoria).toBeDefined()
    expect(categoria.codigo).toBe('celular-smartphone')
  })
  it('Atualizando uma categoria', async () => {
    const categoria = await Categoria.update({
      codigo: 'codigoAtualizado'
    },
      {
        where: {
          id: 1
        }
      })
    expect(categoria).toBeDefined()
  })
  it('Deletando uma categoria', async () => {
    await Produto.update({
      idCategoria: null
    }, {
      where: {
        idCategoria: 2
      }
    })

    await Categoria.destroy({ where: { id: 2 } })
    const categoria = await Categoria.findOne({ where: { id: 2 } })

    expect(categoria).toBeNull()
  })

  afterAll(async () => {
    await dbConnection.sequelize.close()

  })
})