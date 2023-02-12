const app = require('express')();
const httpServer = require('http').Server(app);
const io = require('socket.io')(httpServer, {
    cors: {
        origin: '*',
    }
});
const PORT = 3000;

io.on('connection', (socket) => {
    console.log('Nueva conexión establecida');
  
    socket.on('message', (message) => {
      console.log(`Mensaje recibido: ${message}`);
  
      // Envía un mensaje de respuesta al cliente
      socket.emit('response', `Recibí tu mensaje: "${message}"`);
    });
  
    socket.on('disconnect', () => {
      console.log('Conexión cerrada');
    });
  });
  io.listen(PORT);
  console.log('Servidor de sockets escuchando en el puerto 3000');