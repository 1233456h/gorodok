var PORT = 8008; // порт который будет слушать соккет//

var io = require('socket.io').listen(server);
server.listen(PORT);

io.sockets.on('connection', function (client) { // когда соединяется новый клиент//\
console.info("New Client Connected"); // выводим в консоль сервера сообщение о том, что клиент подключился //
client.on('message', function (message) { // колгда клиент отправляет сообщение//
client.emit('message', message); // отправляем сообщение самому клиенту//
client.broadcast.emit('message', message); // всем подключенным клиентам//
});
});