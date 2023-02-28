import { IPiece } from "./IPiece";
import { ISquare } from "./ISquare";

export interface ICheesBoard {
    caselles:Array<Array<ISquare>>;
    pieces:Array<IPiece>;

    generateSquares():void;
    generatePieces():void;
}