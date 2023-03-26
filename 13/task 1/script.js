/* ЗАДАНИЕ 1
Создать конструктор, который возвращает любой объект из жизни с одним свойством и одним методом. */
function Person (name){
    this.name = name;
    this.myName = function(){return (`My name is ${this.name}`)}
}