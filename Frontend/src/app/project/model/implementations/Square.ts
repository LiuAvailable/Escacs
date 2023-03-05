import { ISquare } from "../interfaces/ISquare";
import { Piece } from "./Piece";

export class Square implements ISquare{
    id!: string;
    occupied: boolean = false;
    piece!: Piece;

    constructor(id: string){
        this.id = id;
    }

    occupy(piece:Piece): void {
        this.piece = piece;
        this.occupied = true;
    }
    
}