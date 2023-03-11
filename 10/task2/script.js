/* Задание 2

Разместить на странице несколько картинок. При клике на любую картинку она плавно становится на бэкграунд всей страницы, а тег картинки получает уникальные css-свойства (чтобы было понятно, что сейчас эта картинка является выбранным элементом). При перезагрузке страницы последнее выбранное состояние должно сохраниться, реализовать через LocalStorage.

Пример реализации:

https://ucarecdn.com/6e689f37-1e6a-4ba1-b9b4-461d9cb4f661/jsbackgallery

ПОДСКАЗКИ

- значение атрибута можно узнать с помощью метода *element.getAttribute(' ');*

- элемент, по которому пришелся клик, =
*event.target*

остальные элементы -
*!event.target*

Порядок работы, если нет своих идей:
1. Собираем изображения в массив.
2. Перебираем массив с изображениями, добавляем на них обработчик клика.
Внутри обработчика еще раз перебираем массив, проверяем, какая именно картинка является нажатой (на нее пришелся клик - event.target). У остальных убираем класс active, а ей добавляем, записываем ее индекс или url в память и ставим ее на фон body.
При загрузке страницы проверяем, есть ли информация об активной картинке в LocalStorage, если есть - добавляем ей класс active и ставим ее на фон. Если нет - можно присвоить класс и поставить на фон первую картинку. */
const pictures = document.querySelectorAll(".pic");
const wrapper = document.querySelector(".wrapper");

const changeBack = () => {
    if (!!localStorage.getItem("background")) {
        wrapper.style.background = localStorage.background;

        pictures.forEach((item) => {
            item.addEventListener("click", () => {
                wrapper.style.background = `no-repeat center/cover url(${item.src})`;
                localStorage.setItem("background", wrapper.style.background);
            });
        });
    } else {
        pictures.forEach((item) => {
            item.addEventListener("click", () => {
                wrapper.style.background = `no-repeat center/cover url(${item.src})`;
                localStorage.setItem("background", wrapper.style.background);
            });
        });
    }
};
changeBack();