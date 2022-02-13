namespace Endabgabe{

    export class Staff extends Drawable implements Movable {
        currentMood: MoodStaff;
        workspace: number;

        constructor () {
            super();
            this.position = new Vector(150, 100);
        }

        public draw(): void {
            this.crc2.restore()

            let radiusSmiley: number = 30;

            this.crc2.save();
            this.crc2.translate(this.position.x, this.position.y);
            
            this.crc2.fillStyle = 'orange';

            this.crc2.beginPath()
            this.crc2.arc(0, 0, radiusSmiley, 0, 2 * Math.PI);
            this.crc2.closePath()

            this.crc2.fill();

            // console.log("Mitarbeiter");
        }

        public move(): void {

        }
    }

}