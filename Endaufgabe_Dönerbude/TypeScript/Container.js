"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Container extends Endabgabe.Drawable {
        constructor() {
            super();
        }
        draw() {
            let enumLength = Endabgabe.Zutat._LENGTH;
            console.log(enumLength);
            for (let i = 0; i < enumLength; i++) {
                console.log(i);
                //draw Container
                this.crc2.beginPath();
                this.crc2.fillStyle = "red";
                this.crc2.fillRect(400, 350, 60, 60);
                this.crc2.closePath();
                console.log("hier");
            }
        }
        move() {
        }
    }
    Endabgabe.Container = Container;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Container.js.map