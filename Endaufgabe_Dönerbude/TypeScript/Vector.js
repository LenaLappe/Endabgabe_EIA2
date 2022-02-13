"use strict";
var Endabgabe;
(function (Endabgabe) {
    class Vector {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
        set(_x, _y) {
            console.log("set");
            this.x = _x;
            this.y = _y;
        }
        scale(_factor) {
            console.log("scale");
            this.x *= _factor;
            this.y *= _factor;
        }
        add(_addend) {
            console.log("add");
            this.x += _addend.x;
            this.y += _addend.y;
        }
    }
    Endabgabe.Vector = Vector;
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Vector.js.map