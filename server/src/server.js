const express = require("express");
const router = require("./routes");
const morgan = require("morgan");
const cors = require("cors");

const server = express();

server.use(morgan("dev"));
server.use(express.json()); // es para reconocer la estructura JSON.
server.use(cors());

server.use(router); // Indicamos a nuestro server que utilize las rutas. 

module.exports = server;
