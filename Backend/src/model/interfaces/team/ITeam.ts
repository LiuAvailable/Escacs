import { IPiece } from "../chees/IPiece";
import { IPlayer } from "./IPlayer";

export interface ITeam {
    members: Array<IPlayer>;
    pts: number;
    kills: Array<IPiece>;
}