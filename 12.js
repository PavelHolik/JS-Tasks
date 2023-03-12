/* 1) Описать функцию-конструктор Shop, которая создает объект магазина. У магазина есть два свойства -  название и адрес.
С помощью этого конструктора создать два объекта - например, для магазинов Green и ProStore (можно любые).
Добавить эти объекты в массив shops.
В итоге должен получиться массив объектов типа:
[{title: 'Green', address:  'ул. Петра Мстиславца 11, Минск'},{title: 'ProStore', address:  'пр-т Дзержинского, 126, Минск'}]
2) С помощью метода map получить массив, в котором будут содержаться только адреса магазинов. То есть:
['ул. Петра Мстиславца 11, Минск', 'пр-т Дзержинского, 126, Минск'] */

function Shop(name, adress) {
        this.title = name;
        this.address = adress;
}

let green = new Shop("Green", "ул. Петра Мстиславца 11, Минск");
let prostore = new Shop("ProStore", "пр-т Дзержинского, 126, Минск");

let shops = [green, prostore];
console.log(shops);
let newShops = shops.map((item) => item.address);
console.log(newShops);
