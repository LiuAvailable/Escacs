import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  player!:string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.player = this.route.snapshot.params['player'];
  }

}
