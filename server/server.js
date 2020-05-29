const express = require('express');
const socketIO = require('socket.io'); // 1° Importar paquete
const http = require('http'); // 2.1 Importamos http (es parte de node y es lo que utiliza express para trabajar)

const path = require('path');

const app = express(); // 2° Configurar la app de express
let server = http.createServer(app); // 2.2 Creamos el servidor y enviamos el app de express como argumento

const publicPath = path.resolve(__dirname, '../public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

module.exports.io = socketIO(server); //4° inicializar el socket -> Esta es la comunicacion del backend - Mantiene la coneccion directa
require('./sockets/socket');




server.listen(port, (err) => { //3° En lugar ser app.listen -> server.listen

    if (err) throw new Error(err);

    console.log(`Servidor corriendo en puerto ${ port }`);

});