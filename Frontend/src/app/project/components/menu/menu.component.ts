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
        team.newPlayer(new Player(p1));
        team.newPlayer(new Player(p2));
        this.teams.push(team);
      }
    }else{
      error.classList.add('active');
      setTimeout(() => {
        error.classList.remove('active');
      }, 10000);
    }
  }

  startGame(){
    if(this.teams.length != 2) this.showError()
    else this.socket.start(this.teams);
  }

  async getPlayer(){
    const player = await this.socket.getPlayer();
    console.log('----------')
    console.log(player)
    this.router.navigate(['/match', player]);
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
