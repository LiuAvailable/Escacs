export interface IPiece {
    id:number;
    img: string;
    color: string;

    setImg():void;
    move(): void; // change piece position
}