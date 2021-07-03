const faker = require('faker/locale/pt_BR');
const factory = require('factory-girl');
const Estabelecimento = require('../../src/models/estabelecimento-model');

module.exports = () => {
  return {
    nome: faker.company.companyName(),
    cnpj: faker.datatype.number(14),
    telefone: faker.phone.phoneNumber(),
    email: faker.internet.email(),
    cep: faker.address.zipCode(),
    uf: 'RJ',
    cidade: faker.address.city(),
    bairro: faker.address.county(),
    logradouro: faker.address.streetName(),
    numero: faker.address.streetAddress()
  };
}
