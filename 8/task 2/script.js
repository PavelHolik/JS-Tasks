// Написать функцию makeCounter, которая возвращает функцию, внутри которой увеличивается сохраненный каким-то образом ранее счетчик.
let makeCounter = function(){
    let count = 0;
    return function(){
        return count++
    }
}
let counter1 = makeCounter()
let counter2 = makeCounter()
 
console.log(counter1()); //0
 console.log(counter1()); //1
 console.log(counter2()); //0