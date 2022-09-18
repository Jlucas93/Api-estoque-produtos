const server = require('../../index.js')
const request = require('supertest')
const dbConnection = require('../../src/database/models')

describe('ESTOQUE', () => {
  //Rotas GET
  it('Retorna um estoque', async () => {

    await request(server).post("/produtos").send({
      codigo: 'novoCodigo',
      nome: 'Novo Produto',
      descricao: 'Novo Produto Cadastrado',
      valor: 569.99,
      status: 0
    })
    const response = await request(server).get('/produtos/1/estoque')

    expect(response.ok).toBeTruthy()
    expect(response.status).toEqual(200)
    expect(response.body).toBeDefined()
  })

  //Rotas de PATCH
  it('É possível atualizar um estoque', async () => {
    const response = await request(server).patch('/produtos/1/estoque').send({
      reserva: 5
    })

    expect(response.ok).toBeTruthy()
    expect(response.status).toEqual(200)
  })

  it('Não é possível alterar o status de uma estoque para valores diferentes de 0 e 1', async () => {
    const response = await request(server).patch('/produtos/1/estoque').send({
      status: 5
    })

    expect(response.status).toEqual(500)
  })

  it('Caso o estque não exista, deve retornar status 404, não encontrado', async () => {
    const response = await request(server).patch('/produtos/1000/estoque').send({
      quantidade: 15,
      status: 0
    })

    expect(response.status).toEqual(404)
  })

  //Rotas de DELETE
  it('Não se pode deletar um estoque ', async () => {
    const response = await request(server).delete('/produtos/1/estoque')

    expect(response.status).toEqual(501)
  })

  afterAll(async () => {
    await dbConnection.sequelize.close()

  })
})