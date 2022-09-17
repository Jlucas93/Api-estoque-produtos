'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('categorias', [
      {
        codigo: 'celular-smartphone',
        titulo: 'Celulares & Smartphone',
        status: 1
      },
      {
        codigo: 'espaco-gamer',
        titulo: 'Espaço Gamer',
        status: 1
      },
      {
        codigo: 'Computadores',
        titulo: 'Computadores',
        status: 1
      },
      {
        codigo: 'tablets-ipads-e-e-readers',
        titulo: 'Tablets, Ipads e E-readers',
        status: 1
      }
    ], {});

  },
  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('People', null, {});

  }
};
