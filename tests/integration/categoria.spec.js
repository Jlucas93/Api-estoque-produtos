const server = require('../../index.js')
const request = require('supertest')
const dbConnection = require('../../src/database/models')

describe('CATEGORIAS', () => {
  it('É possivel criar uma nova categoria', async () => {
    const response = await request(server).post("/categorias").send({
      codigo: "testeInegracao",
      titulo: 'testeInegracao',
      status: 0
    })
    expect(response.ok).toBeTruthy()
    expect(response.body).toHaveProperty('Categoria.id')
  })

  afterAll(async () => {
    await dbConnection.sequelize.close()

  })

})