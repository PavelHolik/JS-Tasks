// 4. Создайте инпут который будет выводить код последнего элемента введенного в инпут
let input = document.querySelector("input");

input.addEventListener("keyup", (event) => {
    document.querySelector(".text").innerHTML = `Код нажатой клавиши: ${event.keyCode}`;
});