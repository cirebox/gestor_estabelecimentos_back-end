"use strict";
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports = (sequelize, DataTypes) => {
  const Usuario = sequelize.define(
    "usuario",
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
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: {
            msg: "Esse campo não pode ser vazio ou nulo!",
          },
        },
      },
      password: DataTypes.VIRTUAL,
      password_hash: DataTypes.STRING,
    },
    {
      hooks: {
        beforeSave: async (usuario) => {
          if (usuario.password) {
            usuario.password_hash = await bcrypt.hash(usuario.password, 8);
          }
        },
      },
    },
    {
      modelName: "usuario",
      tableName: "usuario",
    }
  );

  Usuario.prototype.checkPassword = function (password) {
    return bcrypt.compare(password, this.password_hash);
  };

  Usuario.prototype.generateToken = function () {
    return jwt.sign({ id: this.id }, process.env.APP_SECRET, {
      expiresIn: 28800, // vai expirar em 8 horas
    });
  };

  return Usuario;
};
