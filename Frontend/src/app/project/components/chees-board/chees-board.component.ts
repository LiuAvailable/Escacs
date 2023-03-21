import { Component, Input } from '@angular/core';
import { CheesBoard } from '../../model/implementations/CheesBoard';
import { Square } from '../../model/implementations/Square';
import { Graveyard } from '../../model/implementations/Graveyard';
import { Piece } from '../../model/implementations/Piece';
import { CheesGameService } from '../../services/cheesGame/chees-game.service';
import { last } from 'rxjs';


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

  constructor(private socket:CheesGameService) {  }

  ngOnInit() { 
    this.socket.objetoRecibido.subscribe((data: any) => {
      this.move(data.square, data.lastSquare, data.variation);
    });
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

  checkTorn(lastSquare:Square):boolean{
    const piece = lastSquare?.piece;
    let correct = false;
      if(piece != null){
      if(piece.color == this.torn){
        correct = true;
      }
    }
    return correct
  }

  /****************
     DRAG EVENTS
  *****************/
  async drop(square:Square) {
    if(this.lastSquare != null) this.socket.move(square, this.lastSquare, this.variation)
    console.log(square);
    console.log(this.lastSquare);
    console.log(this.variation);
  }

  move(square:Square, lastSquare:Square, variation:string){
    this.cheesBoard.caselles.forEach(row => row.forEach(sq => {
      if(sq.id == square.id) square = sq;
      if(sq.id == lastSquare.id) lastSquare = sq;
    }));

    if(variation == this.variation){
      console.log('variation')
      if(this.checkTorn(lastSquare)){
        console.log('torn')
        if(lastSquare != null){
          if(square.occupied){
            if(lastSquare.piece.color != square.piece.color){ // enemy piece
              this.kill(square);
              square.occupy(lastSquare.piece)
              lastSquare.empty();
              this.nextTorn(lastSquare.piece)
            }
          } else {
            this.nextTorn(lastSquare.piece)
            square.occupy(lastSquare.piece)
            lastSquare.empty();
          }
        }
      }
      this.lastSquare = undefined;
    }
  }

  nextTorn(piece:Piece){
    if(piece.color == 'White')this.torn = 'Black';
    else this.torn = 'White';
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
