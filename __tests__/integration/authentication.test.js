const request = require("supertest");

const app = require("../../src/app");
const truncate = require("../utils/truncate");
const factory = require("../factories/users");
const models = require("../../src/model/index");

const usuario = models.usuario;

describe("Authentication", function () {
  beforeEach(async () => {
    await truncate();
  });

  it("should authenticate with valid credentials", async () => {
    const user = usuario.create({
      nome: "Eric Pereira",
      email: "admin@example.com",
      password: "123123",
    });

    const response = await request(app)
      .post("/v1/auth/")
      .send({
        email: "admin@example.com",
        password: "123123",
      })
      .set("Accept", "application/json")
      .expect("Content-Type", /json/);

    expect(response.status).toBe(200);
  });

  it("should not authenticate with invalid credentials", async () => {
    const user = await factory.create("Usuario", {
      password: "123123",
    });

    const response = await request(app).post("/v1/auth").send({
      email: user.email,
      password: "123456",
    });

    expect(response.status).toBe(401);
  });

  it("should return jwt token when authenticated", async () => {
    const user = await factory.create("Usuario", {
      password: "123123",
    });

    const response = await request(app).post("/v1/auth").send({
      email: user.email,
      password: "123123",
    });

    expect(response.body).toHaveProperty("token");
  });

  it("should be able to access private routes when authenticated", async () => {
    const user = await factory.create("Usuario", {
      password: "123123",
    });

    const response = await request(app)
      .get("/v1/estabelecimento")
      .set("Authorization", `Bearer ${user.generateToken()}`);

    expect(response.status).toBe(200);
  });

  it("should not be able to access private routes without jwt token", async () => {
    const response = await request(app).get("/v1/estabelecimento");

    expect(response.status).toBe(401);
  });

  it("should not be able to access private routes with invalid jwt token", async () => {
    const response = await request(app)
      .get("/v1/estabelecimento")
      .set("Authorization", `Bearer 123123`);

    expect(response.status).toBe(401);
  });
});
