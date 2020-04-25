const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const routes = require('./routes');
const { setupWebsocket } = require('./websocket')

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect('mongodb+srv://jralbbuquerque:jr88496944@cluster0-aiydm.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Métodos HTTP: GET, POST, PUT, DELETE

/** Tipos de parâmetros 
 * Query params: request.query (Filtros, ordenação, paginação...)
 * Rotue params: request.params (Indentificar um recurso na alteração ou remoção)
 * Body: request.body (Dados para criação ou alteração de um registro)
*/ 

// MongoDB (bando de dados não relacional)

app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(3333);