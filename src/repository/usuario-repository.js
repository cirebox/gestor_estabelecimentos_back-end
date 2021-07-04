"use strict";
const models = require("../model/index");
const usuario = models.usuario;

exports.valida = async (data) => {
  let modelBuild = usuario.build(data);
  let validateErrors = await modelBuild.validate().catch((err) => err.errors);
  return validateErrors;
};

exports.list = async () => {
  return await usuario.findAll();
};

exports.create = async (data) => {
  return await usuario.create(data);
};

exports.update = async (data) => {
  return await usuario.update(data, {
    where: {
      id: data.id,
    },
  });
};

exports.delete = async (id) => {
  return await usuario.destroy({
    where: {
      id: id,
    },
  });
};
