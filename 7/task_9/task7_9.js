//9. Создайте раскрывающееся меню
let divMenu = document.querySelector(".menu");
let titleElement = document.querySelector(".title");

titleElement.onclick = function () {
    divMenu.classList.toggle("open");
};