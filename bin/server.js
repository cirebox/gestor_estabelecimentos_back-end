"use strict";
const app = require("../app");
const debug = require("debug")("GestorEstabelecimento:server");
const http = require("http");

const port = normalizePort(process.env.PORT || "3100");
app.set("port", port);

const server = http.createServer(app);

server.listen(port);
server.on("error", onError);
server.on("listening", onListening);
console.log("API Gestao de Estabelecimento rodando na porta " + port);

function normalizePort(val) {
  const port = Number(val, 10);
  if (isNaN(port)) {
    return val;
  }
  if (port >= 0) {
    return port;
  }
  return false;
}

function onError(error) {
  if (error.syscall !== "listen") {
    throw error;
  }
  const bind = typeof port === "string" ? "Pipe " + port : "Port " + port;
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requer privilegios elevados");
      // process.exit(1);
      break;
    case "EADDRINUSE":
      console.error("A porta " + bind + " já está sendo usada");
      // process.exit(1);
      break;
    default:
      throw error;
  }
}

function onListening() {
  const addr = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  debug("Listening on " + bind);
}
