namespace Endabgabe{

    window.addEventListener("load", handleLoad);

    let background: ImageData;
    let crc2: CanvasRenderingContext2D;
    let drawables: Array<Drawable & Movable> = []

    function handleLoad(_event: Event): void {
        let canvas: HTMLCanvasElement | null = document.querySelector("canvas");

        if (!canvas)
            return;

        crc2 = <CanvasRenderingContext2D>canvas.getContext("2d");

        drawables = [        
            new Staff(),
            new Customer(),
        ];

        let form: HTMLElement = <HTMLElement>document.querySelector("div#form");
        form.addEventListener("change", handleChange);

        let startButton: HTMLButtonElement = <HTMLButtonElement>document.querySelector("button#startButton");
        startButton.addEventListener("click", removeForm);

        drawBackground();
        background = crc2.getImageData(0, 0, crc2.canvas.width, crc2.canvas.height);
        window.setInterval(update, 50);
    }

    function handleChange(_event: Event): void {
        let formData: FormData = new FormData(document.forms[0]);
        console.log(formData);
        for (let entry of formData) {
            console.log(entry);

            let values: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[0] + "']");
            console.log(values);
        }
        
    }

    function removeForm(_event: MouseEvent): void {
        document.getElementById("firstHeadline")!.remove();
        document.getElementById("formElement")!.remove();
        console.log("hallo");

        document.querySelector("#canvas")?.classList.remove("is-hidden");  
    }

    function drawBackground(): void {
          //draw kitchen
          crc2.fillStyle = "lightgrey"
          crc2.fillRect(0, 0, crc2.canvas.width, 200);
  
          //draw Theke
          crc2.fillStyle = "lightblue"
          crc2.fillRect(300, 330, crc2.canvas.width, 100);

          background = crc2.getImageData(0, 0, 1300, 800);
    }

    function update(): void {
        crc2.putImageData(background, 0, 0);
 
        for (let drawable of drawables) {
            drawable.move();
            drawable.draw();
        }

    }



}