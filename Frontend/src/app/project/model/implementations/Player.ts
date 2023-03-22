import { IPlayer } from "../interfaces/IPlayer";

export class Player implements IPlayer {
    nom!: string;
    color!:string;

    constructor(nom:string, color:string){ 
        this.nom = nom; 
        this.color = color;
    }
}