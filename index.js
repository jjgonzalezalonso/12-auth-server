const express = require('express');
const cors = require('cors');
const { dbConnection } = require('./db/config.js');
// Crear el servidor/aplicación de express
require('dotenv').config();
//console.log(process.env);

const app=express();
dbConnection();
app.use(express.static('public'));


app.use(cors());
app.use(express.json());

app.use('/api/auth', require('./routes/auth.js'));


app.listen(process.env.PORT,() => {
    console.log('Servidor corriendo en puerto ' + process.env.PORT);
});
