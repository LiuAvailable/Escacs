import { IPlayer } from "./IPlayer";

export interface ITeam{
    integrants:Array<IPlayer>;
    name: string;

    newPlayer(player:IPlayer):void;
}