"use strict";

const faker = require("faker/locale/pt_BR");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("estabelecimento", [
      {
        nome: "MERCADO VALE SUL",
        cnpj: "12345000154568",
        telefone: "(24) 8984-3212",
        email: "teste@valesul.com",
        cep: "25850-000",
        uf: "RJ",
        cidade: "PARAÍBA DO SUL",
        bairro: "GRAMA",
        logradouro: "ESTR. ENG. EDGARD SOUTELO",
        numero: "123",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "FARMACIA VALE SUL",
        cnpj: "12345000198798",
        telefone: "(24) 8984-6548",
        email: "farma@valesul.com",
        cep: "25850-000",
        uf: "RJ",
        cidade: "PARAÍBA DO SUL",
        bairro: "CENTRO",
        logradouro: "ESTR. ROBERTO PEREIRA",
        numero: "81",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "MERCADO DO VALE",
        cnpj: "12345000132189",
        telefone: "(24) 6548-3212",
        email: "teste@vale.com",
        cep: "25850-000",
        uf: "RJ",
        cidade: "PARAÍBA DO SUL",
        bairro: "BARÃO DE ANGRA",
        logradouro: "ESTR. SOUTELO SILVA",
        numero: "456",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("estabelecimento", null, {});
  },
};
