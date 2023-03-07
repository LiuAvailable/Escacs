import { IPlayer } from "../interfaces/IPlayer";

export class Player implements IPlayer {
    nom!: string;

    constructor(nom:string){ this.nom = nom; }
}