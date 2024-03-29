import { Component } from '@angular/core';
import { Router } from '@angular/router';
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

  constructor(private socket:CheesGameService, private router:Router) { 
    this.getPlayer();
  }

  createTeam(name:string, p1:string, p2:string, error:any): void {
    const NUM_EQUIPS = 2;
    if(p1 != '' && p2 != ''){
      let team;

      if (this.teams.length < NUM_EQUIPS){
        team = new Team(name);
        team.newPlayer(new Player(p1, this.teams.length == 0 ? 'White' : 'Black'));
        team.newPlayer(new Player(p2, this.teams.length == 0 ? 'Black' : 'White'));
        this.teams.push(team);
      }
    }else{
      error.classList.add('active');
      setTimeout(() => {
        error.classList.remove('active');
      }, 10000);
    }
    console.log(this.teams)
  }

  startGame(){
    if(this.teams.length != 2) this.showError()
    else this.socket.start(this.teams);
  }

  async getPlayer(){
    const player = await this.socket.getPlayer();
    console.log('----------')
    console.log(player[0])
    this.router.navigate(['/match', `${player[0][0]}_${player[1]}`, player[0][1]]);
  }

  closeGame(section:any){
    section.classList.add('hide');
  }


  // DOM manipulation
  showError(){
    let error = document.getElementById('error');
    error?.classList.add('active');
    setTimeout(() => {
      error?.classList.remove('active');
    }, 10000);
  }


}
