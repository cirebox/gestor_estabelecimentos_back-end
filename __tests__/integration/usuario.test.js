const app = require("../../src/app");
const request = require("supertest");
const truncate = require("../utils/truncate");
const faker = require("faker/locale/pt_BR");
const models = require("../../src/model/index");

const usuario = models.usuario;

describe("Test users", function () {
  beforeEach(async () => {
    await truncate();
  });

  it("Returns 201, create user", async () => {
    const data = {
      id: 150,
      nome: faker.company.companyName().substring(0, 70),
      email: faker.internet.email(150),
      password: faker.random.alphaNumeric().substring(0, 150),
    };

    const response = await request(app)
      .post("/v1/signup/")
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

  it("Returns 201, create user", async () => {
    // const data = await factory.create('Estabelecimento',{});
    const data = {
      id: 15,
      nome: faker.company.companyName().substring(0, 70),
      email: faker.internet.email(150),
      password: faker.random.alphaNumeric().substring(0, 150),
    };

    const response = await request(app)
      .post("/v1/signup/")
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

  it("Returns 200, delete user", async () => {
    const data = {
      id: 15,
      nome: faker.company.companyName().substring(0, 70),
      email: faker.internet.email(150),
      password: faker.random.alphaNumeric().substring(0, 150),
    };

    const res = usuario.create(data);

    const response = await request(app)
      .delete("/v1/usuario/15")
      .set(
        "Authorization",
        "bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUiLCJpYXQiOjE2MjUzNTI0NjZ9.q3xyLXPmsQU7Az5vqgRIOShr03Br_EcTgSUJpmsU6uM"
      )
      .set("Accept", "application/json");

    expect(response.status).toBe(200);
  });

  it("Returns 200, update user", async () => {
    const data = {
      id: 10,
      nome: faker.company.companyName().substring(0, 70),
      email: faker.internet.email(150),
      password: faker.random.alphaNumeric().substring(0, 150),
    };

    const response = await request(app)
      .put("/v1/usuario")
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

  it("Returns 204, delete user", async () => {
    const response = await request(app)
      .delete("/v1/usuario/15")
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
      id: 10,
      nome: faker.company.companyName().substring(0, 70),
      password: faker.random.alphaNumeric().substring(0, 150),
    };

    const response = await request(app)
      .post("/v1/signup")
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

  it("Returns 200, list users", async () => {
    const response = await request(app)
      .get("/v1/usuario")
      .set(
        "Authorization",
        "bearer " +
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUiLCJpYXQiOjE2MjUzNTI0NjZ9.q3xyLXPmsQU7Az5vqgRIOShr03Br_EcTgSUJpmsU6uM"
      )
      .set("Accept", "application/json")
      .expect("Content-Type", /json/)
      .expect(200);
  });
});
