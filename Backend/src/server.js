const Match = require('./model/implementations/Match');

const app = require('express')();
const httpServer = require('http').Server(app);
const io = require('socket.io')(httpServer, {
    cors: {
        origin: '*',
    }
});

const PORT = 3000;

let partida;
let connections = 0;

io.on('connection', (socket) => {
  console.log('Nueva conexión establecida');

  if(connections == 0) partida = null // if there is no connections force match delete
  connections++;

  if(partida != undefined && partida != null) socket.emit('started'); // check if the match has started

  socket.on('start', (teams) => {
    console.log(teams)
    if(!partida){
      this.partida = new Match(4, teams);
      console.log('New match created with limit 4');
      socket.emit('start', 'New match created with limit 4');
      console.log(this.partida)
      returnPlayer(socket, this.partida);
    }
  })

  socket.on('player', () => {
    console.log('player');
    console.log(this.partida);
    returnPlayer(socket, this.partida);
  });

  socket.on('teams', () => {
    console.log('teams ----------');
    console.log(this.partida)
    // returnTeams(this.partida.teams);
  });

  socket.on('disconnect', () => {
    console.log('Conexión cerrada');
    connections--;
  });
});


function returnPlayer(socket, partida){
  const connectionId = partida.newConnection();
  console.log(`player: ${connectionId}`);
  socket.emit('player', connectionId);
}

io.listen(PORT);
console.log('Servidor de sockets escuchando en el puerto 3000');