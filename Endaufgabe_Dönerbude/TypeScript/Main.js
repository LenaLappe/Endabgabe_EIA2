"use strict";
var Endabgabe;
(function (Endabgabe) {
    let crc2;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        let canvas = document.querySelector("canvas");
        if (!canvas)
            return;
        crc2 = canvas.getContext("2d");
        let form = document.querySelector("div#form");
        form.addEventListener("change", handleChange);
        let startButton = document.querySelector("button#startButton");
        startButton.addEventListener("click", createGamefield);
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
    function createGamefield(_event) {
        document.getElementById("firstHeadline").remove();
        document.getElementById("formElement").remove();
        console.log("hallo");
        document.querySelector("#canvas")?.classList.remove("is-hidden");
        //draw kitchen
        crc2.beginPath();
        crc2.fillStyle = "lightgrey";
        crc2.closePath();
        crc2.fillRect(0, 0, crc2.canvas.width, 200);
        //draw Theke
        crc2.beginPath();
        moveTo(0, 500);
        crc2.fillStyle = "lightblue";
        crc2.fillRect(300, 330, crc2.canvas.width, 100);
        crc2.closePath();
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Main.js.map