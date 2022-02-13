"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Customer extends Endabgabe.Drawable {
        constructor(_canvasWidth, _canvasHeight) {
            super();
            this.position = new Endabgabe.Vector(1000, 900);
            this.canvasWidth = _canvasWidth;
            this.canvasHeight = _canvasHeight;
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
            this.position.x += Customer.baseSpeed;
            this.position.y += Customer.baseSpeed;
            if (Customer.forward && this.position.y == 400) {
                this.position.x = 0;
            }
        }
    }
    Customer.forward = true;
    Customer.baseSpeed = 2;
    Endabgabe.Customer = Customer;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Customer.js.map