import { Component, Input } from '@angular/core';
import { CheesBoard } from '../../model/implementations/CheesBoard';

@Component({
  selector: 'app-chees-board',
  templateUrl: './chees-board.component.html',
  styleUrls: ['./chees-board.component.css']
})
export class CheesBoardComponent {
  @Input() variation!: string;
  cheesBoard: CheesBoard = new CheesBoard();

  constructor() {
    console.log(this.cheesBoard)
  }


}
