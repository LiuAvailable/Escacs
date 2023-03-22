import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Team } from '../../model/implementations/Team';
import { CheesGameService } from '../../services/cheesGame/chees-game.service';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  player!:string;
  color!:string;
  playerNum!:number;
  teams!:Array<Team>;
  constructor(private route: ActivatedRoute, private socket:CheesGameService, private router:Router) {  }

  ngOnInit() {
    this.player = this.route.snapshot.params['player'].split('_')[0];
    this.playerNum = parseInt(this.route.snapshot.params['player'].split('_')[1]);
    this.color = this.route.snapshot.params['color'];

    this.teams = this.socket.getTeams()
    if(this.teams == undefined) this.router.navigate(['/menu']);
  }
}
