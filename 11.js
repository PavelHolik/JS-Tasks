/* Задание 1
Задать массив имен. Создать 2 переменные, которые будут хранить первых 2 имени, вывести их в консоль. Создать массив, который будет хранить остальные имена, вывести имена из него по одному в консоль. Если кол-во элементов остаточного массива меньше 2, то вторая переменная должна стать равна "alex". */

let names = ['John', 'Paul', 'Victorya', 'Maria', 'Oliver'];
let [firstName, secName, ...newNames] = names;
newNames.forEach(element => console.log(element))
if (newNames.length < 2){
  secName = 'Alex';
  console.log(`Second name: ${secName}`);
}
else {
  console.log(`Second name: ${secName}`);
}

/* Задание 2
Задать массив имен. Задать функцию, которая принимает 3 параметра и выводит их в консоль. Передать массив в функцию. Внутри функции каждый параметр должен быть равен одному из элементов массива. */
let names = ['John', 'Paul', 'Victorya', 'Maria', 'Oliver'];
let func = function([firstName, secName, thirdName]){
    console.log(firstName, secName, thirdName);
}
func(names)

/* Задание 3
Задать объект с N полей. Создать 2 переменные, которые будут называться так же, как поля, и хранить 2 значения полей объекта. Если соответствующих полей в объекте нет, задать значения чисел 1 и 2. Все остальные поля объекта записать в переменную fields. */
let obj ={
    usName: 'Ivan',
    age: 29,
    gender: "M",
    color: "white",
}
let {usName, age, ...fields} = obj;
if (!!usName == false){usName = 1};
if (!!age == false){age = 2};
