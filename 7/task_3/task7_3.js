// 3. По аналогии со вторым заданием сделайте чтобы центр квадрата помещался в координату области

let redSquare = document.querySelector(".redSquare");
let body = document.querySelector("body");

function coordinates(event) {
    let redSquareCoordinat = body.getBoundingClientRect();

    let redSquareLeft = event.clientX - redSquareCoordinat.left - body.clientLeft - redSquare.clientWidth / 2;
    let redSquareTop = event.clientY - redSquareCoordinat.top - body.clientTop - redSquare.clientHeight / 2;

    redSquare.style.left = redSquareLeft + "px";
    redSquare.style.top = redSquareTop + "px";
}

body.addEventListener("click", coordinates);