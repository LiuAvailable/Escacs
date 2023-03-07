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
        let color=''
        if(this.color == 'Black') color='N';
        if(this.id < 9 || this.id > 24){
            if(this.id==1 || this.id==8 || this.id==25 || this.id==32) this.img = `/assets/img/torre${color}.png`; // torres
            else if(this.id==3 || this.id==6 || this.id==27 || this.id==30) this.img = `/assets/img/alfil${color}.png`; // alfils
            else if(this.id==4 || this.id==29) this.img = `/assets/img/reina${color}.png`; // reines
            else if(this.id==5 || this.id==28) this.img = `/assets/img/rei${color}.png`; // reis
            else this.img = `/assets/img/caball${color}.png`; // caballs
        } else this.img = `/assets/img/peo${color}.png`;
    }
}