"use strict";
var Endabgabe;
(function (Endabgabe) {
    window.addEventListener("load", handleLoad);
    let background;
    let crc2;
    let drawables = [];
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        drawables = [
            new Endabgabe.Staff(),
            new Endabgabe.Customer(),
        ];
        let form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
        let startButton = document.querySelector("button#startButton");
        startButton.addEventListener("click", removeForm);
        drawBackground();
        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        window.setInterval(update, 50);
    }
    function handleChange(_event) {
        let formData = new FormData(document.forms[0]);
        console.log(formData);
        for (let entry of formData) {
            console.log(entry);
            let values = document.querySelector("[value='" + entry[0] + "']");
            console.log(values);
        }
    }
    function removeForm(_event) {
        document.getElementById("firstHeadline").remove();
        document.getElementById("formElement").remove();
        console.log("hallo");
        document.querySelector("#canvas")?.classList.remove("is-hidden");
    }
    function drawBackground() {
        //draw kitchen
        crc2.fillStyle = "lightgrey";
        crc2.fillRect(0, 0, crc2.canvas.width, 200);
        //draw Theke
        crc2.fillStyle = "lightblue";
        crc2.fillRect(300, 330, crc2.canvas.width, 100);
        background = crc2.getImageData(0, 0, 1300, 800);
    }
    function update() {
        crc2.putImageData(background, 0, 0);
        for (let drawable of drawables) {
            drawable.move();
            drawable.draw();
        }
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Main.js.map