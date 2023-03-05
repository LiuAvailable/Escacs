import { IPiece } from "./IPiece";
import { ISquare } from "./ISquare";

export interface IGraveyard {
    color: string;
    caselles:Array<Array<ISquare>>;
    morts:number;

    kill(peca:IPiece):void;
}
