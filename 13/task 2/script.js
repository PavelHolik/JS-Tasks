/* ЗАДАНИЕ 2
Создайте класс Calculator, который создаёт объекты с конструктором, который запрашивает два значения при помощи prompt и сохраняет их значение в свойствах объекта, и двумя методами:
sum() возвращает сумму введённых свойств.
mul() возвращает произведение введённых свойств */
class Calculator {
constructor (){
    this.firstNumber = +prompt("Введите первое число");
    this.secondNumber = +prompt("Введите второе число");
}
sum(){
    return (this.firstNumber + this.secondNumber);
}
mul(){
    return (this.firstNumber * this.secondNumber);
}
}
let calculator = new Calculator();
console.log(calculator.sum());
console.log(calculator.mul());

