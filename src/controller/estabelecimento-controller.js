"use strict";
const repository = require("../repository/estabelecimento-repository");

exports.list = async (req, res, next) => {
  try {
    const data = await repository.list();
    if (!data) {
      res.status(200).send({
        status: true,
        data: []
      });
    } else {
      res.status(200).send({
        status: true,
        data: data
      });
    }
  } catch (e) {
    console.log(e)
    res.status(500).send({
      status: false,
      message: "Falha ao processar a requisição",
      error: e.message,
    }, );
  }
}

exports.add = async (req, res, next) => {
  try {
    if (!req.body) {
      res.status(400).send({
        status: false,
        message: "Corpo da requisição não informado!"
      });
      return;
    }

    let validateErrors = await repository.valida(req.body);
    if (validateErrors.length > 0) {
      let field = validateErrors[0].path;
      let message = validateErrors[0].message;
      res.status(422).send({
        field,
        message
      });
      return;
    }

    var data = await repository.create(req.body);
    if (!data) {
      res.status(400).send({
        status: false,
        message: "Falha ao processar a requisição",
      });
    } else {
      res.status(201).send({
        status: true,
        message: "Registro adicionado com sucesso!",
        data: data,
      });
    }
  } catch (e) {
    console.log(e)
    res.status(500).send({
      status: false,
      message: "Falha ao processar a requisição",
      error: e.message,
    }, );
  }
};

exports.update = async (req, res) => {
  try {
    if (!req.body) {
      res.status(400).send({
        status: false,
        message: "Corpo da requisição não informado!"
      });
      return;
    }

    let validateErrors = await repository.valida(req.body);
    if (validateErrors.length > 0) {
      let field = validateErrors[0].path;
      let message = validateErrors[0].message;
      res.status(422).send({
        field,
        message
      });
    }

    var data = await repository.update(req.body);
    if (!data) {
      res.status(400).send({
        status: false,
        message: "Falha ao processar sua requisição"
      });
    } else {
      res.status(200).send({
        status: true,
        message: "Registro atualizado com sucesso!"
      });
    }
  } catch (e) {
    console.log(e)
    res.status(500).send({
      status: false,
      message: "Falha ao processar a requisição",
      error: e.message,
    }, );
  }
};

exports.delete = async (req, res) => {
  try {    
    var data = await repository.delete(req.params.id);
    if (!data) {
      res.status(204).send({
        status: false,
        message: "Nenhum registro para deleta"
      });
    } else {
      res.status(200).send({
        status: true,
        message: "Registro removido com sucesso!"
      });
    }
  } catch (e) {
    console.log(e.message)
    res.status(500).send({
      message: "Falha ao processar a requisição",
      error: e.message,
    }, );
  }
};
