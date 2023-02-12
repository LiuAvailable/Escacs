import { ICheesBoard } from "./chees/ICheesBoard";

export interface IRoom {
    maxPlayers: number;
    players: number;
    CheesBoards: Array<ICheesBoard>;


    completed() : boolean; // maxPlayers == players ?
    startGame(); // generates cheesBoards -> n# = maxPlayers / 2
}