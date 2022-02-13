"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Drawable {
        constructor() {
            this.position = new Endabgabe.Vector(0, 0);
            this.crc2 = document.querySelector("canvas").getContext("2d");
        }
    }
    Endabgabe.Drawable = Drawable;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Drawable.js.map