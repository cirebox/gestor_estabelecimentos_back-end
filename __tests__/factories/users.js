const faker = require("faker");
const { factory } = require("factory-girl");
const models = require("../../src/model/index");

const usuario = models.usuario;

factory.define("Usuario", usuario, {
  nome: faker.name.findName(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

module.exports = factory;
