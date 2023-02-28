import { ICheesBoard } from "../interfaces/ICheesBoard";
import { IPiece } from "../interfaces/IPiece";
import { ISquare } from "../interfaces/ISquare";

import { Piece } from "./Piece";
import { Square } from "./Square";

export class CheesBoard implements ICheesBoard {
    caselles:Array<Array<ISquare>> = [];
    pieces:Array<IPiece> = [];

    constructor(){
        this.generateSquares();
        this.generatePieces();
        this.placePieces()
    }

    generateSquares(): void {
        const CASELLES_FILA = 8;
        const LLETRES = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H']

        for (let i = CASELLES_FILA; i > 0; i--) {
            let row:Array<ISquare> = [];
            LLETRES.forEach(lletra => {
                row.push(new Square(`${i}${lletra}`));
            });
            this.caselles.push(row);
        };
    }

    generatePieces(): void {
        const TOTAL_PIECES = 16;
        const COLORS = ['Black', 'White'];

        COLORS.forEach(color => {
            for (let i = 0; i < TOTAL_PIECES; i++) {
                let piece = new Piece(i, color)
                this.pieces.push(piece);
            }
        });
    }

    placePieces():void{
        let voltes = 2
        /* BLANQUES */
        for (let row = 0; row < voltes; row++){
            for (let i = 0; i < this.caselles.length; i++){
                this.caselles[row][i].occupy(this.pieces[i*(row+1)])
            }
        }
        /* NEGRES */
        for (let row = this.caselles.length-1; row > this.caselles.length-voltes-1; row-=1){
            for (let i = 0; i < this.caselles.length; i++){
                this.caselles[row][i].occupy(this.pieces[31-i*(this.caselles.length-row)])
            }
        }
    }


    public getTauler(type:string): Array<Array<Square>> {
        let array:Array<Array<Square>> = []
        if (type == 'girat'){
            this.caselles.reverse().forEach(row => array.push(row.reverse()))
        } else array = this.caselles; 
        return array;
    }



}