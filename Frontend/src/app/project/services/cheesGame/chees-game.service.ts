import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { Team } from '../../model/implementations/Team';

@Injectable({
  providedIn: 'root'
})
export class CheesGameService {
  started:boolean=false;

  socket = io.connect('http://localhost:3000');

  constructor() { 
    this.socket.on('connect', () => {
      console.log('Conectado al servidor de sockets');

      // if the match has already been started
      this.socket.on('started', () => {
        console.log('already started');
        this.socket.emit('player');
        this.getPlayer();
      })
    });

    this.socket.on('start', (message) => {
      this.started = true;
      console.log(message);
    }) 
    this.socket.on('player', (player) => {
      console.log(player);
    });
  }

  start(teams:Array<Team>){
    this.socket.emit('start', (teams))
  }
  
  getPlayer() {
    return new Promise<any>((resolve) => {
      this.socket.on('player', (player) => {
        resolve(player);
      });
    });
  }

  getTeams() {
    this.socket.emit('teams');
    return new Promise<any>((resolve) => {
      this.socket.on('teams', (teams) => {
        console.log(teams)
        resolve(teams);
      });
    });
  }
}
