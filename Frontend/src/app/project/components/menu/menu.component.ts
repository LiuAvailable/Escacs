import { Component, OnInit } from '@angular/core';
import { Player } from '../../model/implementations/Player';
import { Team } from '../../model/implementations/Team';
import { CheesGameService } from '../../services/cheesGame/chees-game.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  teams: Array<Team> = [];

  constructor() { }

  createTeam(name:string, p1:string, p2:string): void {
    const NUM_EQUIPS = 2;
    let team;

    if (this.teams.length < NUM_EQUIPS){
      team = new Team(name);
      team.newPlayer(new Player(p1));
      team.newPlayer(new Player(p2));
      this.teams.push(team);

      console.log(this.teams)
    }
  }
}
