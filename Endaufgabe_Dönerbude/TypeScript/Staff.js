"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Staff extends Endabgabe.Drawable {
        constructor() {
            super();
        }
        draw(crc2) {
            crc2.restore();
            let radiusSmiley = 20;
            let smiley = new Path2D();
            smiley.arc(0, 0, radiusSmiley, 0, 2 * Math.PI);
            crc2.save();
            crc2.translate(this.position.x, this.position.y);
            crc2.fillStyle = "yellow";
            crc2.fill();
            console.log("smiley");
        }
        move() {
        }
    }
    Endabgabe.Staff = Staff;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Staff.js.map