// 5. Создайте инпут который будет выводить последний элемент введенный в инпут
let input = document.querySelector("input");

input.addEventListener("keyup", letter);

function letter(event) {
    document.querySelector(".text").innerHTML = `Нажатая клавиша: ${event.key}`;
}