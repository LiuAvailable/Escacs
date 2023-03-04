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
        this.placePieces();
        console.log(this.pieces)
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

        let round= -1; // per fer ids de 1 a 32
        COLORS.forEach(color => {
            round++;
            for (let i = 1; i <= TOTAL_PIECES; i++) {
                let piece = new Piece(i+(TOTAL_PIECES*round), color)
                this.pieces.push(piece);
            }
        });
    }

    placePieces():void{
        let voltes = 2
        /* BLANQUES
         * Primera volta id peça 0 - 7
         * Segona volta id peça 8 - 15
         * i = 1 pq sino el primer sempre es 0
         */
        for (let row = 0; row < voltes; row++){
            for (let i = 1; i <= this.caselles.length; i++){
                this.caselles[row][i-1].occupy(this.pieces[i+(row*8)-1])
            }
        }
        /* NEGRES */
        for (let row = 0; row < voltes; row++){
            for (let i = this.pieces.length; i > 24; i--){
                this.caselles[7-row][32-i].occupy(this.pieces[i-(row*8)-1])
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