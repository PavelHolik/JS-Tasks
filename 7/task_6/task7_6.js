// 6. Дан элемент. Сделайте так, чтобы по клику на него он красился в красный цвет, но только если в момент клика нажата клавиша Ctrl.
let text = document.querySelector(".text");

text.addEventListener("click", ctrlClick);

function ctrlClick(event) {
    if (event.ctrlKey) {
        text.style.color = "red";
    }
}