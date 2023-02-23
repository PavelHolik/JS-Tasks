// 8. Создайте кнопку и элемент. При нажатии на кнопку, будет скрываться элемент
const button = document.querySelector(".btn");
const text = document.querySelector(".text");

button.addEventListener("click", () => {
    text.style.display = "none";
});