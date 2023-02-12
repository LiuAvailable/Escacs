export interface IPiece {
    img: string;
    color: string;
    position: number;

    move(): void; // change piece position
}