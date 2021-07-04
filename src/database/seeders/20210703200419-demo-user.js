"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("usuario", [
      {
        nome: "Eric Pereira",
        email: "admin@example.com",
        password_hash:
          "$2a$08$TL1ApN3/TjpikMjWNEmWROlZS3TP4KvFWxezBcl8X7oAaJ1m9iLfK",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("usuario", null, {});
  },
};
