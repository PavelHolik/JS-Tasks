/* Задание1
1)
Задать объект с полем name.
Задать переменную, которая будет хранить JSON упомянутого объекта.
Задать переменную, которая будет хранить результат парсинга предыдущей переменной.
2)
Создать переменную user, в которой хранится объект.
Записать переменную в localStorage.
Создать переменную newUser, в которой будет храниться JS объект из localStorage. */
// 1)
let obj = {name : "Ivan"};
let variable = JSON.stringify(obj);
let variable2 = JSON.parse(variable);
// 2)
let user = {
name : 'Pavel' ,
color : 'white',
};
let getting = JSON.stringify(user);
localStorage.setItem('key', getting);
let newUser = JSON.parse(localStorage.getItem('key'))
console.log(newUser);




