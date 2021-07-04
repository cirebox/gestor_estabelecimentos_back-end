"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("estabelecimento", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.BIGINT,
      },
      nome: {
        type: Sequelize.STRING(70),
        allowNull: false,
      },
      cnpj: {
        type: Sequelize.STRING(14),
        allowNull: false,
        unique: true,
      },
      telefone: {
        type: Sequelize.STRING(16),
      },
      email: {
        type: Sequelize.STRING(150),
      },
      cep: {
        type: Sequelize.STRING(10),
      },
      uf: {
        type: Sequelize.STRING(2),
      },
      cidade: {
        type: Sequelize.STRING(30),
      },
      bairro: {
        type: Sequelize.STRING(30),
      },
      logradouro: {
        type: Sequelize.STRING(70),
      },
      numero: {
        type: Sequelize.STRING(20),
      },
      complemento: {
        type: Sequelize.STRING(30),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("estabelecimento");
  },
};
