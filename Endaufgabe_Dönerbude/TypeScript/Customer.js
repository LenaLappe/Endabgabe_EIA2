"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Customer extends Endabgabe.Drawable {
        constructor() {
            super();
            this.position = new Endabgabe.Vector(800, 700);
        }
        draw() {
            this.crc2.restore();
            let radiusSmiley = 30;
            this.crc2.save();
            this.crc2.translate(this.position.x, this.position.y);
            this.crc2.fillStyle = "yellow";
            this.crc2.beginPath();
            this.crc2.arc(0, 0, radiusSmiley, 0, 2 * Math.PI);
            this.crc2.closePath();
            this.crc2.fill();
            // console.log("Kunde");
        }
        move() {
        }
        compareFood(givenFood, request) {
        }
    }
    Endabgabe.Customer = Customer;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Customer.js.map