import { IPiece } from "../interfaces/IPiece";

export class Piece implements IPiece{
    id!: number;
    img!: string;
    color!: string;

    constructor(id: number, color: string){
        this.id = id;
        this.color = color;
        this.setImg();
    }
    
    setImg(){
        if(this.color == 'White') this.img = '../../../../assets/img/peo.png';
        else this.img = '../../../../assets/img/peoN.png';
    }

    move(): void {
        throw new Error("Method not implemented.");
    }
}