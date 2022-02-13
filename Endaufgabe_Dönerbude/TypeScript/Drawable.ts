namespace Endabgabe{

    export abstract class Drawable {
        position: Vector;
        crc2: CanvasRenderingContext2D;

        constructor() {
            this.position = new Vector(0, 0);
            this.crc2 = document.querySelector("canvas")!.getContext("2d")!;
        }

        public abstract draw(): void;
    }

}