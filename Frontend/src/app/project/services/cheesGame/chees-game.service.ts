import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class CheesGameService {

  constructor() { 
    const socket = io.connect('http://localhost:3000');

    socket.on('connect', () => {
      console.log('Conectado al servidor de sockets');
    
      // Envía un mensaje al servidor
      socket.emit('message', 'Hola, servidor!');
    });
    
    socket.on('response', (message: string) => {
      console.log(`Mensaje recibido: ${message}`);
    });
  }
}

