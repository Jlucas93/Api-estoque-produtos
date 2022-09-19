const server = require('../../index.js')
const request = require('supertest')
const dbConnection = require('../../src/database/models')

describe('CATEGORIAS', () => {
  //Rota de POST
  it('É possível criar uma nova categoria', async () => {
    const response = await request(server).post("/categorias").send({
      codigo: "testeInegracao",
      titulo: 'testeInegracao',
      status: 0
    })

    expect(response.ok).toBeTruthy()
    expect(response.status).toEqual(201)
    expect(response.body).toHaveProperty('Categoria.id')
  }),
    it('Não é possível criar nova categoria com status diferente de 0 e 1', async () => {
      const response = await request(server).post("/categorias").send({
        codigo: "testeInegracao",
        titulo: 'testeInegracao',
        status: 2
      })

      expect(response.status).toEqual(500)
    })
  //Rotas de GET
  it('Retorna uma lista de todas categorias', async () => {
    const response = await request(server).get('/categorias')

    expect(response.ok).toBeTruthy()
    expect(response.status).toEqual(200)
    expect(response.body).toBeDefined()
  })

  it('Retorna uma categoria', async () => {
    const response = await request(server).get('/categorias/2')

    expect(response.ok).toBeTruthy()
    expect(response.status).toEqual(200)
    expect(response.body).toBeDefined()
  })

  it('Resposta 404 para uma categoria que não existe', async () => {
    const response = await request(server).get('/categorias/1000')

    expect(response.status).toEqual(404)
  })

  //Rotas de PATCH
  it('É possível atualizar uma categoria', async () => {
    const response = await request(server).patch('/categorias/2').send({
      titulo: 'Novo Titulo'
    })

    expect(response.status).toEqual(200)
    expect(response.ok).toBeTruthy()
  })

  it('Não é possível alterar o status de uma categoria para valores diferentes de 0 e 1', async () => {
    const response = await request(server).patch('/categorias/2').send({
      status: 5
    })

    expect(response.status).toEqual(500)
  })

  it('Caso o categoria não exista, deve retornar status 404, não encontrada', async () => {
    const response = await request(server).patch('/categorias/1000').send({
      titulo: 'Novo titulo',
      codigo: 'NovoCodigo',
      status: 0
    })

    expect(response.status).toEqual(404)
  })

  //Rotas de DELETE
  it('É possível deletar uma categoria e produtos com o id da categoria são atulizados para null', async () => {
    const novoProduto = await request(server).post("/produtos").send({
      idCategoria: 2,
      codigo: 'novoCodigo',
      nome: 'Novo Produto',
      descricao: 'Novo Produto Cadastrado',
      valor: 569.99,
      status: 0
    })
    await request(server).patch(`/produtos/${novoProduto.body.Produto.id}`).send({
      idCategoria: null
    })
    const produto = await request(server).get(`/produtos/${novoProduto.body.Produto.id}`)

    const response = await request(server).delete('/categorias/2')

    expect(produto.body.idCategoria).toBeNull()
    expect(response.status).toEqual(200)
    expect(response.body).toHaveProperty('ProdutosAtualizados')
  })

  it('Não é possível deletar uma categoria inexistente', async () => {
    const response = await request(server).delete('/categorias/100')

    expect(response.status).toEqual(404)
  })


  afterAll(async () => {
    await dbConnection.sequelize.close()

  })

})