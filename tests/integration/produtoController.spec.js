const server = require('../../index.js')
const request = require('supertest')
const dbConnection = require('../../src/database/models')
const { Estoque } = require('../../src/database/models')

describe('PRODUTOS', () => {

  //Rota de POST
  it('É possível criar uma novo produto', async () => {
    const response = await request(server).post("/produtos").send({
      codigo: 'novoCodigo',
      nome: 'Novo Produto',
      descricao: 'Novo Produto Cadastrado',
      valor: 569.99,
      status: 0
    })
    expect(response.ok).toBeTruthy()
    expect(response.status).toEqual(201)
    expect(response.body).toHaveProperty('Produto.id')
    expect(response.body).toHaveProperty('Estoque.id')
  })

  it('Não é possível criar nova produto com status diferente de 0 e 1', async () => {
    const response = await request(server).post("/produtos").send({
      codigo: 'novoCodigo',
      nome: 'Novo Produto',
      descricao: 'Novo Produto Cadastrado',
      valor: 569.99,
      status: 5
    })

    expect(response.status).toEqual(500)
  })

  //Rotas de GET
  it('Retorna uma lista de todos produtos', async () => {
    const response = await request(server).get('/produtos')

    expect(response.ok).toBeTruthy()
    expect(response.status).toEqual(200)
    expect(response.body).toBeDefined()
  })

  it('Retorna uma produto', async () => {
    const response = await request(server).get('/produtos/2')

    expect(response.ok).toBeTruthy()
    expect(response.status).toEqual(200)
    expect(response.body).toBeDefined()
  })

  it('Resposta 404 para uma produto que não existe', async () => {
    const response = await request(server).get('/produtos/1000')

    expect(response.status).toEqual(404)
  })
  //Rotas de PATCH
  it('É possível atualizar uma produto', async () => {
    const response = await request(server).patch('/produtos/2').send({
      descricao: 'Nova descricao'
    })

    expect(response.status).toEqual(200)
    expect(response.ok).toBeTruthy()
  })

  it('Não é possível alterar o status de um produto para valores diferentes de 0 e 1', async () => {
    const response = await request(server).patch('/produtos/1').send({
      status: 5
    })

    expect(response.status).toEqual(500)
  })

  it('Caso o produto não exista, deve retornar status 404, não encontrado', async () => {
    const response = await request(server).patch('/produtos/1000').send({
      titulo: 'Novo titulo',
      codigo: 'NovoCodigo',
      status: 0
    })

    expect(response.status).toEqual(404)
  })
  //Rotas de DELETE
  it('É possível deletar um produto e seu estoque', async () => {
    await Estoque.destroy({ where: { idProduto: 2 } })

    const response = await request(server).delete('/produtos/2')

    expect(response.status).toEqual(200)
  })

  it('Não é possível deletar um produto inexistente', async () => {
    const response = await request(server).delete('/produtos/100')

    expect(response.status).toEqual(404)
  })
  afterAll(async () => {
    await dbConnection.sequelize.close()

  })
})