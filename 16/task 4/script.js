/* Задание 4
Отобразить на странице 10 первых комментариев с сервера *https://jsonplaceholder.typicode.com/comments*
Оформить тегами как в ПРИМЕРЕ.
Порядок работы:
1) записать в переменную блок для отрисовки результата.
2) описать функцию отрисовки результата (напр. addInfo). Функция принимает 3 параметра - тег, содержимое и название класса для CSS. Она создает тег, наполняет его текстом, добавляет класс и помещает в блок на страницу.
3) создать http-запрос и получить результат в виде массива объектов (через JSON.parse). Записать этот результат в переменную, т.к. с ним будем дальше работать.
4) внутри функции .onload:
- обойти через цикл первые 10 элементов массива
- вызвать функцию addInfo 3 раза: для добавления на страницу имени, имейла и комментария.
5) прописать CSS для классов. */
let blockResult = document.querySelector('div');
let addInfo = function(teg, content, className){
let newTeg = document.createElement(`${teg}`);
newTeg.textContent = `${content}`;
newTeg.className = `${className}`;
blockResult.appendChild(newTeg);
}
let httpRequest = new XMLHttpRequest();
httpRequest.onload = function(){
    if (httpRequest.status === 200){
let response = JSON.parse(httpRequest.responseText)
for (let i = 0; i < 10; i++){
    addInfo('h3', response[i].name, 'name');
    addInfo('p', response[i].email, 'email');
    addInfo('p', response[i].body, 'body');
}
}
else(console.log('Error'))
}
httpRequest.open("GET", 'https://jsonplaceholder.typicode.com/comments');
httpRequest.send();