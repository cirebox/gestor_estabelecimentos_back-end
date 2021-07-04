const app = require("../../src/app");
const request = require("supertest");
const truncate = require("../utils/truncate");
const faker = require("faker/locale/pt_BR");
const models = require("../../src/model/index");

const estabelecimento = models.estabelecimento;

describe("Test estabelecimento", function () {
  beforeEach(async () => {
    await truncate();
  });

  it("Returns 201, create estabelecimento", async () => {
    const data = {
      id: 10,
      nome: faker.company.companyName().substring(0, 70),
      cnpj: faker.datatype.number(14),
      telefone: faker.phone.phoneNumber().substring(0, 16),
      email: faker.internet.email().substring(0, 150),
      cep: faker.address.zipCode().substring(0, 10),
      uf: "RJ",
      cidade: faker.address.city().substring(0, 30),
      bairro: faker.address.county().substring(0, 30),
      logradouro: faker.address.streetName().substring(0, 70),
      numero: faker.address.streetAddress().substring(0, 20),
    };

    const response = await request(app)
      .post("/v1/estabelecimento")
      .set(
        "Authorization",
        "bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUiLCJpYXQiOjE2MjUzNTI0NjZ9.q3xyLXPmsQU7Az5vqgRIOShr03Br_EcTgSUJpmsU6uM"
      )
      .set("Accept", "application/json")
      .send(data)
      .expect("Content-Type", /json/);

    expect(response.status).toBe(201);
  });

  it("Returns 201, create estabelecimento", async () => {
    // const data = await factory.create('Estabelecimento',{});
    const data = {
      id: 15,
      nome: faker.company.companyName().substring(0, 70),
      cnpj: faker.datatype.number(14),
      telefone: faker.phone.phoneNumber().substring(0, 16),
      email: faker.internet.email().substring(0, 150),
      cep: faker.address.zipCode().substring(0, 10),
      uf: "RJ",
      cidade: faker.address.city().substring(0, 30),
      bairro: faker.address.county().substring(0, 30),
      logradouro: faker.address.streetName().substring(0, 70),
      numero: faker.address.streetAddress().substring(0, 20),
    };

    const response = await request(app)
      .post("/v1/estabelecimento")
      .set(
        "Authorization",
        "bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUiLCJpYXQiOjE2MjUzNTI0NjZ9.q3xyLXPmsQU7Az5vqgRIOShr03Br_EcTgSUJpmsU6uM"
      )
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);

    expect(response.status).toBe(201);
  });

  it("Returns 200, delete estabelecimento", async () => {
    const data = {
      id: 15,
      nome: faker.company.companyName().substring(0, 70),
      cnpj: faker.datatype.number(14),
      telefone: faker.phone.phoneNumber().substring(0, 16),
      email: faker.internet.email().substring(0, 150),
      cep: faker.address.zipCode().substring(0, 10),
      uf: "RJ",
      cidade: faker.address.city().substring(0, 30),
      bairro: faker.address.county().substring(0, 30),
      logradouro: faker.address.streetName().substring(0, 70),
      numero: faker.address.streetAddress().substring(0, 20),
    };

    const res = estabelecimento.create(data);

    const response = await request(app)
      .delete("/v1/estabelecimento/15")
      .set(
        "Authorization",
        "bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUiLCJpYXQiOjE2MjUzNTI0NjZ9.q3xyLXPmsQU7Az5vqgRIOShr03Br_EcTgSUJpmsU6uM"
      )
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
  });

  it("Returns 200, update estabelecimento", async () => {
    const data = {
      id: 15,
      nome: faker.company.companyName().substring(0, 70),
      cnpj: faker.datatype.number(14),
      telefone: faker.phone.phoneNumber().substring(0, 16),
      email: faker.internet.email().substring(0, 150),
      cep: faker.address.zipCode().substring(0, 10),
      uf: "RJ",
      cidade: faker.address.city().substring(0, 30),
      bairro: faker.address.county().substring(0, 30),
      logradouro: faker.address.streetName().substring(0, 70),
      numero: faker.address.streetAddress().substring(0, 20),
    };

    const response = await request(app)
      .put("/v1/estabelecimento")
      .set(
        "Authorization",
        "bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUiLCJpYXQiOjE2MjUzNTI0NjZ9.q3xyLXPmsQU7Az5vqgRIOShr03Br_EcTgSUJpmsU6uM"
      )
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);

    expect(response.status).toBe(200);
  });

  it("Returns 204, delete estabelecimento", async () => {
    const response = await request(app)
      .delete("/v1/estabelecimento/15")
      .set(
        "Authorization",
        "bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUiLCJpYXQiOjE2MjUzNTI0NjZ9.q3xyLXPmsQU7Az5vqgRIOShr03Br_EcTgSUJpmsU6uM"
      )
      .set("Accept", "application/json");

    expect(response.status).toBe(204);
  });

  it("Returns error 422 validação de campos", async () => {
    const data = {
      nome: faker.company.companyName().substring(0, 70),
      // "cnpj": faker.datatype.number(14),
      telefone: faker.phone.phoneNumber().substring(0, 16),
      email: faker.internet.email().substring(0, 150),
      cep: faker.address.zipCode().substring(0, 10),
      uf: "RJ",
      cidade: faker.address.city().substring(0, 30),
      bairro: faker.address.county().substring(0, 30),
      logradouro: faker.address.streetName().substring(0, 70),
      numero: faker.address.streetAddress().substring(0, 20),
    };
    const response = await request(app)
      .post("/v1/estabelecimento")
      .set(
        "Authorization",
        "bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUiLCJpYXQiOjE2MjUzNTI0NjZ9.q3xyLXPmsQU7Az5vqgRIOShr03Br_EcTgSUJpmsU6uM"
      )
      .send(data)
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);

    expect(response.status).toBe(422);
  });

  it("Returns 200, list estabelecimentos", async () => {
    const response = await request(app)
      .get("/v1/estabelecimento/")
      .set(
        "Authorization",
        "bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUiLCJpYXQiOjE2MjUzNTI0NjZ9.q3xyLXPmsQU7Az5vqgRIOShr03Br_EcTgSUJpmsU6uM"
      )
      .expect(200)
      .expect("Content-Type", /json/);

    expect(response.status).toBe(200);
  });
});
