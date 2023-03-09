//1. Написать функцию makeCalculator, которая принимает число x и возвращает функцию, которая возвращает произведение x на 2.
let makeCalculator = function (x){
    let result = function(){
         return x*2;
    }
  return result();
}
console.log(makeCalculator(6))
