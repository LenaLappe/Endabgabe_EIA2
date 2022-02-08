namespace Endabgabe{

    let globalFormData: FormData;
    let canvas: HTMLCanvasElement;
    let crc2: CanvasRenderingContext2D;


    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("hallo");
        // let fieldsets: NodeListOf<HTMLFieldSetElement> = document.querySelectorAll("fieldset");

        let form: HTMLElement = <HTMLElement>document.querySelector("div#form");
        form.addEventListener("change", handleChange);

        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#startButton");
        startButton.addEventListener("click", createGamefield);
    }

    function handleChange(_event: Event): void {
        let formData: FormData = new FormData(document.forms[0]);
        console.log(formData);
        for (let entry of formData) {
            console.log(entry);

            let values: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[0] + "']");
            console.log(values);
        }
        globalFormData = formData;
    }

    function createGamefield(_event: MouseEvent): void {
        document.getElementById("firstHeadline")!.remove();
        document.getElementById("formElement")!.remove();
        canvas = document.createElement("canvas");
    }


}