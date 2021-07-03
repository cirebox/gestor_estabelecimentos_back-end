'use strict'
require('dotenv').config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env"
})

const config = {
  development: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: process.env.DB_DIALECT || 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    storage: '.__tests__/database.sqlite',
    logging: false,
    pool: {
      max: 20,
      min: 0,
      idle: 10000,
    },
    dialectOptions: {
      options: {
        requestTimeout: 3000
      }
    },
    retry: {
      max: 2,
    },
    define: {
      timestamps: true,
    }
  },
  test: {
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    dialect: process.env.DB_DIALECT || 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    storage: '.__tests__/database.sqlite',
    logging: false,
    pool: {
      max: 20,
      min: 0,
      idle: 10000,
    },
    dialectOptions: {
      options: {
        requestTimeout: 3000
      }
    },
    retry: {
      max: 2,
    },
    define: {
      timestamps: true,
      underscored: true
    }
  },
};

module.exports = config;