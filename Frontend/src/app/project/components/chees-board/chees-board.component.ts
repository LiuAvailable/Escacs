import { Component, Input } from '@angular/core';
import { CheesBoard } from '../../model/implementations/CheesBoard';
import { CdkDragDrop } from '@angular/cdk/drag-drop';
import { Square } from '../../model/implementations/Square';
import { Graveyard } from '../../model/implementations/Graveyard';


@Component({
  selector: 'app-chees-board',
  templateUrl: './chees-board.component.html',
  styleUrls: ['./chees-board.component.css']
})
export class CheesBoardComponent {
  @Input() variation!: string;
  cheesBoard: CheesBoard = new CheesBoard();
  graveyard:Array<Graveyard> = [new Graveyard('White', 2, 8), new Graveyard('Black', 2, 8)]

  constructor() {
  }

  /**
   * Returns one color graveyard
   * @param position => (true == above) , (false == under)
   */
  getGraveyard(position:boolean){
    let graveyard:Graveyard;
    if(position){
      // top graveyard
      if(this.variation == 'normal') graveyard = this.graveyard[0]
      else graveyard = this.graveyard[1]
    }else{
      // bottom graveyard
      if(this.variation == 'normal') graveyard = this.graveyard[1]
      else graveyard = this.graveyard[0]
    }
    return graveyard
  }


  move(){
    // if square occupied
    const square1 = this.cheesBoard.caselles[1][4]
    const square2 = this.cheesBoard.caselles[6][3]
    this.kill(square1)
    this.kill(square2)
  }

  kill(square:Square){
    let peca = square.piece;
    square.occupied = false;

    if(peca.color == 'Black') this.graveyard[1].kill(peca)
    else this.graveyard[0].kill(peca)
  }

  drop(event: any) {
    console.log(event)
    //this.draggedSquare = square;
  }

}
