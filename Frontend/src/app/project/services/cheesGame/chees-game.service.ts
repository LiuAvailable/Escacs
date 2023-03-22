import { EventEmitter, Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Square } from '../../model/implementations/Square';
import { Team } from '../../model/implementations/Team';

@Injectable({
  providedIn: 'root'
})
export class CheesGameService {
  started:boolean=false;
  teams!:Array<Team>;

  socket = io.connect('http://localhost:3000');
  public objetoRecibido: EventEmitter<any> = new EventEmitter<any>();

  constructor() { 
    this.socket.on('connect', () => {
      console.log('Conectado al servidor de sockets');

      // if the match has already been started
      this.socket.on('started', () => {
        console.log('already started');
        this.socket.emit('player');
        this.getPlayer();
      })
    
    this.socket.on('move', (data: any) => {
      console.log(data)
      // Emite el evento de objeto recibido y pasa los datos recibidos del socket
      this.objetoRecibido.emit(data);
    });
    });

    this.socket.on('start', (message) => {
      this.started = true;
      console.log(message);
    }) 
    this.socket.on('player', (player) => {
      console.log(player)
    });

  }


  move(square:Square, lastSquare:Square, variation:string){
    this.socket.emit('move', ({square, lastSquare, variation}))
  }

  start(teams:Array<Team>){
    this.socket.emit('start', (teams))
  }
  
  getPlayer() {
    return new Promise<any>((resolve) => {
      this.socket.on('player', (player) => {
        console.log(player)
        this.teams = player[2]
        resolve(player);
      });
    });
  }
  getTeams(){return this.teams}
}
