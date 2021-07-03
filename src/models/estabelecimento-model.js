'use strict'
module.exports = (sequelize, DataTypes) => {
  const Estabelecimento = sequelize.define(
    'estabelecimento', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: DataTypes.STRING,
      },
      cnpj: {
        type: DataTypes.STRING,
      },
      telefone: {
        type: DataTypes.STRING,
      },
      email: {
        type: DataTypes.STRING,
      },
      cep: {
        type: DataTypes.STRING,
      },
      cidade: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      bairro: {
        type: DataTypes.STRING,
      },
      logradouro: {
        type: DataTypes.STRING,
      },
      numero: {
        type: DataTypes.STRING,
      },
      complemento: {
        type: DataTypes.STRING,
      },
    }, {
      modelName: 'estabelecimento',
      tableName: 'estabelecimento',
    }
  );
  return Estabelecimento;
};
