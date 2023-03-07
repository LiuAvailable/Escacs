import { Component, Input } from '@angular/core';
import { CheesBoard } from '../../model/implementations/CheesBoard';
import { Square } from '../../model/implementations/Square';
import { Graveyard } from '../../model/implementations/Graveyard';
import { Piece } from '../../model/implementations/Piece';


@Component({
  selector: 'app-chees-board',
  templateUrl: './chees-board.component.html',
  styleUrls: ['./chees-board.component.css']
})
export class CheesBoardComponent {
  @Input() variation!: string;
  cheesBoard: CheesBoard = new CheesBoard();
  graveyard:Array<Graveyard> = [new Graveyard('White', 2, 8), new Graveyard('Black', 2, 8)];
  lastSquare!:Square | undefined;
  pieceOrigin!:string;
  torn: string = 'White';

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

  kill(square:Square){
    let peca = square.piece;
    square.occupied = false;

    if(peca.color == 'Black') this.graveyard[1].kill(peca)
    else this.graveyard[0].kill(peca)
  }

  checkTorn():boolean{
    const piece = this.lastSquare?.piece;
    let correct = false;
      if(piece != null){
      if(piece.color == this.torn){
        correct = true;
        if(piece.color == 'White')this.torn = 'Black';
        else this.torn = 'White';
      }
    }
    return correct
  }

  /****************
     DRAG EVENTS
  *****************/
  drop(square:Square) {
    if(this.checkTorn()){
      if(this.lastSquare != null){
        if(square.occupied){
          if(this.lastSquare.piece.color != square.piece.color){ // enemy piece
            this.kill(square);
            square.occupy(this.lastSquare.piece)
            this.lastSquare.empty();
          }
        } else {
          square.occupy(this.lastSquare.piece)
          this.lastSquare.empty();
        }
      }
    }
    this.lastSquare = undefined;
  }

  allowDrop(event:any){
    event.preventDefault();
  }
  dragStart(square:Square){
    this.lastSquare = square;
  }
  cancelDrop(event:any){
    event.preventDefault();
    event.dataTransfer.dropEffect = 'none';
  }

}
