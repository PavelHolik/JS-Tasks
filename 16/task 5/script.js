/* Задание 5
Создать собственный погодный виджет на основе данных с сервера погоды.
Оформить, как в примере: ЗДЕСЬ.
Документация: https://openweathermap.org/api...
*Порядок работы:*
1) Проверить, работает ли API-ключ, данный в примере. Для этого открыть url https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247
Если данные отображаются - можно не получать свой ключ, иначе см. п. 1.1.
1.1. Зарегистрироваться и получить собственный API-ключ на сайте https://home.openweathermap.or...
2) Создать html-css разметку под данные.
- общий блок для виджета, внутри него два блока - для текущей погоды и для прогноза (пример см. ЗДЕСЬ)
- внутри нижней части виджета через js будут добавляться строки по дням - это дивы, им нужно сразу прописать стили (flex-распределение вставляемых элементов, нижняя граница).
3) Написать JS с HTTP-запросом на url.
- кастомизировать url запроса: указать нужный город, добавить в url параметр отображения градусов по Цельсию (см. на странице документации раздел *Units of measurement*)
4) добавить информацию из ответа в виджет на страницу.
- в верхней части виджета отобразить город и дату (из полученного JSON-объекта).
Возможно, текущую дату проще получить из встроенной функции Date, примеры работы с ней ЗДЕСЬ.
- из JSON-объекта "достать" текущую погоду (.list[0]) - первый объект внутри массива.
Как узнать url иконки: https://openweathermap.org/wea...
- в нижней части добавить необходимую информацию через цикл. Вам понадобится каждый 8-й объект, т.к в ответе приходит погода на каждые 3 часа (8 раз в сутки), а нам нужна погода 1 раз в сутки. */
 const country = document.querySelector('.country');
 const time = document.querySelector('.time');
 const temImg = document.querySelector('.temImg');
 const main = document.querySelector('.main');
 const celsius = document.querySelector('.celsius');
 const speed = document.getElementById('speed');
 const forecast = document.querySelector('.forecast');

 let httpDiv = new XMLHttpRequest();

 httpDiv.onload = function () {
     let title = JSON.parse(httpDiv.responseText);
     for(let i = 7; i < 40; i += 8){
         let dateTemp = document.createElement('div');
         let date = document.createElement('p');
         let image = document.createElement('img');
         let tempCelsius = document.createElement('p');
         date.className = 'date';
         tempCelsius.className = 'tempCelsius';
         date.innerHTML = (title.list[i].dt_txt);
         let temp2 = String(title.list[i].main.temp);
         tempCelsius.innerText = (`${temp2.split('.')[0]} \xB0С`);
         forecast.append(dateTemp);
         image.src = `https://openweathermap.org/img/wn/${title.list[i].weather[0].icon}@2x.png`;
         dateTemp.append(date, image, tempCelsius);
     };
     const timeNow =new Date().toLocaleTimeString().slice(0,-3);
     country.append(title.city.name);
     time.append(timeNow);
     temImg.src = `https://openweathermap.org/img/wn/${title.list[0].weather[0].icon}@2x.png`;
     main.append(title.list[0].weather[0].main);
     let temp = String(title.list[0].main.temp);
     celsius.append(`${temp.split('.')[0]} \xB0С`);
     speed.append(`${title.list[0].wind.speed} m/s`);
 };

 httpDiv.open('GET', 'https://api.openweathermap.org/data/2.5/forecast?q=Minsk&appid=a94d0a5ac08570add4b47b8da933f247&units=metric');
 httpDiv.send();
