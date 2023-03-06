import { IGraveyard } from "../interfaces/IGraveyard";
import { Piece } from "./Piece";
import { Square } from "./Square";

export class Graveyard implements IGraveyard{
    color!:string;
    caselles:Array<Array<Square>> = [];
    morts:number = 0;

    constructor(color:string, rows:number, cols:number){
        this.color = color;
        // caselles
        for(let row = 0; row < rows; row++){
            this.caselles.push([])
            for(let square = 1; square <= cols; square++){
                this.caselles[row].push(new Square(((row+1)*square).toString()));
            }
        }
    }

    kill(peca:Piece){
        const rowLen = this.caselles[0].length;
        let fila, posicio;
        if(this.morts < rowLen){
            fila = 0
            posicio = this.morts
        } else {
            fila = 1;
            posicio = this.morts - rowLen;
        }
        this.caselles[fila][posicio].occupy(peca)
        this.morts++;
    }
}