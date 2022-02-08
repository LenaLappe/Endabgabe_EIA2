"use strict";
var Endabgabe;
(function (Endabgabe) {
    let globalFormData;
    let canvas;
    let crc2;
    window.addEventListener("load", handleLoad);
    function handleLoad(_event) {
        console.log("hallo");
        // let fieldsets: NodeListOf<HTMLFieldSetElement> = document.querySelectorAll("fieldset");
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
        globalFormData = formData;
    }
    function createGamefield(_event) {
        document.getElementById("firstHeadline").remove();
        document.getElementById("formElement").remove();
        canvas = document.createElement("canvas");
    }
})(Endabgabe || (Endabgabe = {}));
//# sourceMappingURL=Main.js.map