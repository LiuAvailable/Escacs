import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Team } from '../../model/implementations/Team';
import { CheesGameService } from '../../services/cheesGame/chees-game.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  player!:string;
  teams!:Array<Team>;
  constructor(private route: ActivatedRoute, private socket:CheesGameService) {
    this.getTeams()
  }

  ngOnInit() {
    this.player = this.route.snapshot.params['player'];
  }

  async getTeams(){
    console.log('AAAAAAAAA')
    const teams = await this.socket.getTeams();
    this.teams = teams;
    console.log('teams')
    console.log(this.teams);
  }
}
