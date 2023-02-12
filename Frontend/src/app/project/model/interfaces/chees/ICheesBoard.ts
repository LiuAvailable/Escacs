import { ITeam } from "../team/ITeam";
import { IPiece } from "./IPiece";

export interface ICheesBoard {
    whitePlayers: ITeam;
    blackPlayers: ITeam;
    
    whitePieces: Array<IPiece>;
    blackPieces: Array<IPiece>;
    
    pts: number;
    kills: Array<IPiece>;

    move(): void;
    kill() :void;
    
}