namespace Endabgabe{

    export class Container extends Drawable implements Movable {
        type: Zutat;
        quantity: number;

        constructor () {
            super();
        }

        public draw(): void {
           
            let enumLength = Zutat._LENGTH;

            console.log(enumLength);

            for (let i = 0; i < enumLength; i++) {

                console.log(i);

                //draw Container
                this.crc2.beginPath()
                this.crc2.fillStyle = "red"
                this.crc2.fillRect(400, 350, 60, 60);
                this.crc2.closePath()

                console.log("hier")

                
            }
            


            
    
       

        }

        public move(): void {

        }
    }
}