/* Задание 3
Запросом на сервер по url https://jsonplaceholder.typicode.com/todos достать задачи.
Отобразить первые 20 задач списком ul на странице. Содержимое каждого li - поле title объекта задачи. */

let httpRequest = new XMLHttpRequest();
httpRequest.onload = function(){
    let value = JSON.parse(httpRequest.responseText);
    let ul = document.createElement('ul');
    document.body.append(ul);
    for (let i = 0; i < 20; i++){
        let li = document.createElement('li');
        li.innerHTML = value[i].title;
        let parent = document.querySelector('ul');
        parent.appendChild(li);
    }
}
httpRequest.open("GET", 'https://jsonplaceholder.typicode.com/todos');
httpRequest.send();