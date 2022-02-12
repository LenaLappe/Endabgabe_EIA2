namespace Endabgabe{

    export class Staff extends Drawable implements Movable {
        startMood: number;
        workspace: number;

        constructor () {
            super();
        }

        public draw(crc2: CanvasRenderingContext2D): void {
            crc2.restore()

            let radiusSmiley: number = 20;
            let smiley: Path2D = new Path2D();

            smiley.arc(0, 0, radiusSmiley, 0, 2 * Math.PI);

            crc2.save();
            crc2.translate(this.position.x, this.position.y);

            crc2.fillStyle = "yellow";
            crc2.fill();

            console.log("smiley");



        }

        public move(): void {

        }
    }

}