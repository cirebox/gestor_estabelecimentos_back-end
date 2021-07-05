"use strict";
const models = require("../model/index");
const estabelecimento = models.estabelecimento;

exports.valida = async (data) => {
  let modelBuild = estabelecimento.build(data);
  let validateErrors = await modelBuild.validate().catch((err) => err.errors);
  return validateErrors;
};

exports.list = async (uf) => {
  if (uf !== '') {
    return await estabelecimento.findAll({ where: { uf } });
  } else {
    return await estabelecimento.findAll();
  }
  
};

exports.create = async (data) => {
  return await estabelecimento.create(data);
};

exports.update = async (data) => {
  return await estabelecimento.update(data, {
    where: {
      id: data.id,
    },
  });
};

exports.delete = async (id) => {
  return await estabelecimento.destroy({
    where: {
      id: id,
    },
  });
};
