// 7. Дан элемент. Сделайте так, чтобы при клике на него и нажатой клавише Ctrl - в его текст записывалось '1', при нажатой клавише Alt - '2', а при нажатой клавише Shift - '3'.
let div = document.querySelector("div");

div.addEventListener("click", click);

function click(event) {
    if (event.ctrlKey) {
        div.innerHTML = "1";
    } else if (event.altKey) {
        div.innerHTML = "2";
    } else if (event.shiftKey) {
        div.innerHTML = "3";
    }
}