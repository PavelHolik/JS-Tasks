/* Задание 2
По данному url расположена задача:
https://jsonplaceholder.typicode.com/todos/1
В html предусмотреть 
Достать с сервера заголовок задачи и отобразить его в div. */

let httpRequest = new XMLHttpRequest();
httpRequest.onload = function(){
    let value = JSON.parse(httpRequest.responseText);
    let mainWord = value.title;
    let div = document.createElement('div');
    div.innerHTML = mainWord;
    document.body.append(div);
}
httpRequest.open("GET", 'https://jsonplaceholder.typicode.com/todos/1');
httpRequest.send();