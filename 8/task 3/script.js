// Написать функцию startsWith, которая принимает 2 строки и проверяет, начинается ли первая строка с символов второй строки. Функция возвращает true или false.
let startsWith = function(firstString, secondString){
    let firstStringNumber = firstString.charAt(0);
    let secondStringNumber = secondString.charAt(0);
    if (firstStringNumber == secondStringNumber){return true}
    else {return false}
}
console.log(startsWith('avb','tijs'));