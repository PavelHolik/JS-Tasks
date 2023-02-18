/* Задание 1
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
Вам понадобятся методы строк. */
let ucFirst = function (str){
    return (`${str[0].toUpperCase()}${str.slice(1)}`);
}
console.log(ucFirst('павел'));

/* Задание 2
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'badWord' или 'XXX', а иначе false.
Функция должна быть нечувствительна к регистру. */
let checkSpam = function (str){
    let lowerCaseStr = str.toLowerCase();
    return(lowerCaseStr.includes('badword') || lowerCaseStr.includes('xxx'));
}
console.log(checkSpam('sdjfjskjBadWordcHGFFSTDFXXX'));

/* Задание 3
Написать функцию, которой на вход подается строка, на выход она дает символы наоборот (разворачивает строку). Пример: «привет Женя» -> «янеЖ тевирп»
Обратите внимание: метод reverse существует только у массивов. */
let stringReverse = function (str){
    let arrLetters = str.split('');
    arrLetters = arrLetters.reverse();
    return arrLetters.join('');
}
console.log(stringReverse('привет Женя'));

/* Задание 4

Массив содержит строки с информацией о железнодорожных станциях на севере Англии. Строки представляют собой трёхбуквенный код станции, затем некоторые машиночитаемые данные, за которыми следует точка с запятой, а затем название станции, пригодное для чтения человеком. 

let stations = [
'MAN675847583748sjt567654;Manchester Piccadilly',
'GNF576746573fhdg4737dh4;Greenfield',
'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
'SYB4f65hf75f736463;Stalybridge',
'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
];

Необходимо извлечь код станции и имя и поместить их в строку со следующей структурой:

MAN: Manchester Piccadilly

Вывести эти строки в консоль

ПОДСКАЗКА:

1. Извлеките трёхбуквенный код станции и сохраните его в новой переменной.
2. Найдите номер символьного номера точки с запятой.
3. Извлеките название для чтения человеком, используя номер индекса точки с запятой в качестве контрольной точки и сохраните его в новой переменной.
4. Объедините две новые переменные и строк */
let stations = [
    'MAN675847583748sjt567654;Manchester Piccadilly',
    'GNF576746573fhdg4737dh4;Greenfield',
    'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
    'SYB4f65hf75f736463;Stalybridge',
    'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'
    ];
    let firstLettersStation = stations.map ((string) => string.slice(0,3));
    let symbolNumber = stations.map ((string) => string.slice(string.indexOf(';') + 1));
    let firstLettersStationString = firstLettersStation.join(' ');
    for (let i = 0; i < firstLettersStation.length; i++){
        console.log(`${firstLettersStation[i]}: ${symbolNumber[i]}`);
    };
   
    /* Задание 5
Напишите функцию unique(arr), которая принимает массив, а возвращает новый массив, содержащий только уникальные элементы arr.
Пример:
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
console.log(unique(strings) ); должен вывести "кришна, харе, :-O"
ПОДСКАЗКА
- создать новый массив
- обойти исходный массив, если элемент отсутствует в новом - добавлять его в новый. Таким образом в новый добавятся только уникальные. */
let strings = ["кришна", "кришна", "харе", "харе", "харе", "харе", "кришна", "кришна", ":-O"];
let newArr = [];
for (let i = 0; i < strings.length; i++){
    if (!newArr.includes(strings[i])){ newArr.push(strings[i])
    }
}
console.log(newArr);