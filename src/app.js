"use strict";
require("dotenv").config({
  path: process.env.NODE_ENV === "test" ? ".env.test" : ".env",
});

const express = require("express");
const favicon = require("serve-favicon");
const compression = require("compression");
const cookieParser = require("cookie-parser");
const logger = require("morgan"); // Para determina formato do log no console
const cors = require("cors");
const app = express();

//Comprime a requisição e a torna mais leve
app.use(compression());
app.use(cors());
app.use(cookieParser());

//favicon
app.use(favicon("./public/imagens/favicon.ico"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Carregar as rotas
const indexRoute = require("./routes/index-route");
const v1 = require("./routes/routes");

//Rotas
app.use("/", indexRoute);
app.use("/v1", v1);

// Padrão de log no console
app.use(
  logger(
    ":remote-addr :remote-user :method :url HTTP/:http-version :status [:date] :res[content-length] - :response-time ms"
  )
  //logger("dev")
);

// catch 404 and forward to error handler
app.use(function (err, res, next) {
  var err = new Error("Not Found");
  res.status(err.code || 404).json({
    status: false,
    texto: "não existe",
    message: err,
  });
});

if (app.get("env") === "development") {
  app.use(function (err, res) {
    res.status(err.code || 500).json({
      status: false,
      message: err,
    });
  });
}

app.use(function (err, res) {
  res.status(err.status || 500).json({
    status: false,
    message: err.message,
  });
});

module.exports = app;
