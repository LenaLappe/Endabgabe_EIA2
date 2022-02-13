namespace Endabgabe{

    export class Customer extends Drawable implements Movable {
        static forward: boolean = true;
        static baseSpeed: number = 2;
        currentMood: MoodCustomer;
        request: Zutat;
        givenFood: Zutat;
        canvasWidth: number;
        canvasHeight: number;

        constructor (_canvasWidth: number, _canvasHeight: number) {
            super();
            this.position = new Vector(1000, 900);
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
        }

        public draw(): void {
            this.crc2.restore()

            let radiusSmiley: number = 30;

            this.crc2.save();
            this.crc2.translate(this.position.x, this.position.y);

            this.crc2.fillStyle = "yellow";
            
            this.crc2.beginPath()
            this.crc2.arc(0, 0, radiusSmiley, 0, 2 * Math.PI);
            this.crc2.closePath()


            this.crc2.fill();

            // console.log("Kunde");
        }

        public move(): void {
            this.position.x += Customer.baseSpeed;
            this.position.y += Customer.baseSpeed;

            if (Customer.forward && this.position.y == 400) {
                this.position.x = 0;
            }
            

        }

        // private compareFood (givenFood:Zutat, request: Zutat): void {

        // }
    

    }
    
}