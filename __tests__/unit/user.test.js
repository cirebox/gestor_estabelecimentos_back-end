const bcrypt = require("bcryptjs");
const truncate = require("../utils/truncate");
const models = require("../../src/model/index");
const usuario = models.usuario;

describe("User", () => {
  beforeEach(async () => {
    await truncate();
  });

  it("should encrypt user password", async () => {
    const user = await usuario.create({
      nome: "Eric Pereira",
      email: "eric_pereira95@hotmail.com.br",
      password: "123456",
    });

    const compareHash = await bcrypt.compare("123456", user.password_hash);

    expect(compareHash).toBe(true);
  });
});
