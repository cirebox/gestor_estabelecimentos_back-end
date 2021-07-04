"use strict";
module.exports = (sequelize, DataTypes) => {
  const Estabelecimento = sequelize.define(
    "estabelecimento",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio ou nulo!",
          },
        },
      },
      cnpj: {
        type: DataTypes.STRING,
        allowNull: false,
        notEmpty: {
          msg: "Esse campo não pode ser vazio ou nulo!",
        },
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
      uf: {
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
    },
    {
      modelName: "estabelecimento",
      tableName: "estabelecimento",
    }
  );
  return Estabelecimento;
};
