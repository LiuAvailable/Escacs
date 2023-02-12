import { ITeam } from "../team/ITeam";
import { IPiece } from "./IPiece";

export interface ICheesBoard {
    whitePlayers: ITeam;
    blackPlayers: ITeam;
    
    whitePieces: Array<IPiece>;
    blackPieces: Array<IPiece>;

    move();
    kill();
    
}