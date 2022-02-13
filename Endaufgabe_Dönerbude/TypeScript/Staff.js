"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Staff extends Endabgabe.Drawable {
        constructor() {
            super();
            this.position = new Endabgabe.Vector(150, 100);
        }
        draw() {
            this.crc2.restore();
            let radiusSmiley = 30;
            this.crc2.save();
            this.crc2.translate(this.position.x, this.position.y);
            this.crc2.fillStyle = 'orange';
            this.crc2.beginPath();
            this.crc2.arc(0, 0, radiusSmiley, 0, 2 * Math.PI);
            this.crc2.closePath();
            this.crc2.fill();
            // console.log("Mitarbeiter");
        }
        move() {
        }
    }
    Endabgabe.Staff = Staff;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Staff.js.map