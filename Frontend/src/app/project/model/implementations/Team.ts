import { IPlayer } from "../interfaces/IPlayer";
import { ITeam } from "../interfaces/ITeam";

export class Team implements ITeam{
    integrants: IPlayer[] = [];
    name!: string;

    constructor(name:string){
        this.name = name;
    }

    newPlayer(player: IPlayer): void {
        this.integrants.push(player);
    }
    
}