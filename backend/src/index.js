const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

const app = express();

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

app.listen(3333);