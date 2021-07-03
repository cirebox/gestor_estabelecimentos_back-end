"use strict";
const model = require("../models/index");
const estabelecimento = model.estabelecimento;

exports.valida = async (data) => {
  let modelBuild = estabelecimento.build(data);
  let validateErrors = await modelBuild.validate().catch((err) => err.errors);
  return validateErrors;
};

exports.list = () => {
  return estabelecimento.findAll();
}

exports.create = data => {
  return estabelecimento.create(data);
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
