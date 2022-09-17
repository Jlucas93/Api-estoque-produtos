'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {

    await queryInterface.bulkInsert('produtos', [
      {
        idCategoria: 1,
        codigo: 'iphone14-1',
        nome: 'Iphone 14',
        descricao: 'Novo Lançamento da Apple,iphone 14 Pro Max 128gb, com suporte a tecnologia 5G',
        valor: 9899.99,
        status: 1
      },
      {
        idCategoria: 1,
        codigo: 'iphone13-2',
        nome: 'Iphone 13',
        descricao: 'Apple iPhone 13 Pro Max (1 TB) - Azul Sierra',
        valor: 11999.99,
        status: 1
      },
      {
        idCategoria: 2,
        codigo: 'cadeiragamer-3',
        nome: 'Cadeira Gamer Alpha Gamer Vega',
        descricao: 'Cor Preto e Azul, reclinável, com almofadas, cilindro de gás classe 4',
        valor: 999.99,
        status: 1
      },
      {
        idCategoria: 3,
        codigo: 'notebookacer-4',
        nome: 'Notebook Gamer Acer Nitro 5',
        descricao: 'Intel Core I7, 8GB, 512GB SSD, GTX 1650, 17.3", Windows 11 Home - AN517-52-77KZ',
        valor: 5999.99,
        status: 1
      },
      {
        idCategoria: 4,
        codigo: 'ipadpro-5',
        nome: 'Ipad Pro Apple',
        descricao: 'Tela 12.9, WiFi, 256GB, Cinza Espacial - MXAT2BZ/A',
        valor: 8999.99,
        status: 1
      }

    ], {});

  },

  async down(queryInterface, Sequelize) {

    await queryInterface.bulkDelete('produtos', null, {});

  }
};
