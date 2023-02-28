import { IPiece } from "./IPiece";

export interface ISquare{
    id: string;
    occupied: boolean;
    piece: IPiece;

    // method to occupy the square
    occupy(peca:IPiece):void;
}