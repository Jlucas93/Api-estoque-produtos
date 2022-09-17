'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('estoque', [
      {
        idProduto: 1,
        quantidade: 500,
        reserva: 30,
        status: 1
      },
      {
        idProduto: 2,
        quantidade: 327,
        reserva: 0,
        status: 1
      },
      {
        idProduto: 3,
        quantidade: 8,
        reserva: 1,
        status: 1
      },
      {
        idProduto: 4,
        quantidade: 19,
        reserva: 3,
        status: 1
      },
      {
        idProduto: 5,
        quantidade: 23,
        reserva: 0,
        status: 1
      }
    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('estoque', null, {});

  }
};
