'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.createTable('Categorias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      codigo: {
        type: Sequelize.STRING
      },
      titulo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      status: Sequelize.INTEGER
    })

  },

  async down(queryInterface, _Sequelize) {


    await queryInterface.dropTable('Categorias')

  }
}
