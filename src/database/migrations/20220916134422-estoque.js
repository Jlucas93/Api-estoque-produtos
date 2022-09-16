'use strict'

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Estoque', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idProduto: {
        type: Sequelize.DataTypes.INTEGER,
        references: {
          model: 'Produtos',
          key: 'id'
        },
        allowNull: false
      },
      quantidade: Sequelize.INTEGER,
      reserva: Sequelize.INTEGER,
      status: Sequelize.INTEGER
    })
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.dropTable('Estoque')
  }
};
