// 2. Повторите поведение страницы по данному образцу. При нажатии на область, красный квадрат его верхний левый угол доложен поместиться в ту координату, на которую вы нажали
let redSquare = document.querySelector(".redSquare");
let body = document.querySelector("body");

function coordinates(event) {
    redSquare.style.left = event.clientX + "px";
    redSquare.style.top = event.clientY + "px";
}

body.addEventListener("click", coordinates);