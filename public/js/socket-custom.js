var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor');
});


socket.on('disconnect', function() {
    console.log('Desconectado del servidor');
});

//Enviar información
socket.emit('enviarMensaje', {
    usuario: 'David',
    mensjae: 'Hola mundo'
}, function(resp) {
    console.log(resp);
})


//Escuchar
socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
});