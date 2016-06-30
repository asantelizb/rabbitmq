var amqp = require('amqp');
var helper = require('./amqp-hacks');

var conexion = amqp.createConnection({host: 'localhost'});

conexion.on('ready', function(){

    var mensaje = 'Hola Ana  + new Date();

    conexion.publish('sencilla', mensaje);

    helper.safeEndConnection(conexion);
});
