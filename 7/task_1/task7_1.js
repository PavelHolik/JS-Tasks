// 1. Повторите поведение страницы по данному образцу. Координаты должны меняться и зависеть от положения курсора мыши на в области
const cursor = document.querySelector("body");

cursor.addEventListener("mousemove", (event) => {
    cursor.innerText = `X:${event.screenX}, Y:${event.screenY}`;
});