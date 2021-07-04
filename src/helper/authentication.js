"use strict";
const models = require("../model/index");
const Usuario = models.usuario;

exports.auth = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await Usuario.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "Usuário não encontrado" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: "Senha incorreta" });
    }

    return res.status(200).json({
      user,
      token: user.generateToken(),
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      message: "Falha ao processar a requisição",
      error: e.message,
    });
  }
};
