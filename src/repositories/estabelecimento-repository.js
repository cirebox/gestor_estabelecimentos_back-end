"use strict";
const models = require("../models/index");
const estabelecimento = models.estabelecimento;

exports.valida = async (data) => {
  let modelBuild = estabelecimento.build(data);
  let validateErrors = await modelBuild.validate().catch((err) => err.errors);
  return validateErrors;
};

exports.list = async() => {
  return await estabelecimento.findAll();
}

exports.create = async(data) => {
  return await estabelecimento.create(data);
};

exports.update = async (data) => {
  return await estabelecimento.update(data, {
    where: {
      id: data.id
    }
  });
};

exports.delete = async (id) => {
  return await estabelecimento.destroy({
    "where": {
      "id": id
    }
  });
};
