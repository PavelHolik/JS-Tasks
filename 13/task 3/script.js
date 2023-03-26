class Logo {
    constructor(url) {
      this.top = 0;
      this.left = 0;
      this.width = 200;
      this.imgUrl = url;
      this.html = null;
    }
  
    init() {
      // метод должен создать тег img
      // вложить в него src картинки (this.imgUrl)
      // и записать в this.html
      // + дергаем render
      // + странице должен залится фон черным
      const img = document.createElement('img');
        img.src = this.imgUrl;
        const body = document.querySelector('body');
        body.appendChild(img);
        document.body.style.background = 'black';
        img.style.position = 'fixed';
        this.html = img;
        this.render();
    }
    
    render() {
      // метод должен отрисовать изображение (this.html) на странице
      // применить фиксированное позиционирование
      // использовать this.top и this.left для указания позиции
      // использовать this.width для указания ширины
      this.html.style.top = `${this.top}px`
        this.html.style.left = `${this.left}px`
        this.html.style.width = `${this.width}px`
    }
  
    moveUp() {
      // метод должен изменять top нашего объекта так
      // чтобы элемент передвинулся ВЫШЕ
      // на 20px
      // + дергаем render
      this.top -= 20;
        this.render();
    }
    moveDown() {
      // метод должен изменять top нашего объекта так
      // чтобы элемент передвинулся НИЖЕ
      // на 20px
      // + дергаем render
      this.top += 20;
      this.render();
    }
    moveLeft() {
      // метод должен изменять left нашего объекта так
      // чтобы элемент передвинулся ЛЕВЕЕ
      // на 20px
      // + дергаем render
      this.left -= 20;
        this.render();
    }
    moveRight() {
      // метод должен изменять left нашего объекта так
      // чтобы элемент передвинулся ПРАВЕЕ
      // на 20px
      // + дергаем render
      this.left += 20;
      this.render();
    }
  }

/* Задание 2
Добавить к приложению желтый круг (пример ЗДЕСЬ)
Реализовать с помощью класса Circle, который принимает аргументы size (ширина и высота фигуры), color (цвет фигуры). При вызове метода render() из экземпляра класса Circle должен отрисоваться круг с заданными стилями.
Сделать по примеру из последнего видео в уроке. */
class Circle {
    constructor(size, color) {
        this.width = size;
        this.height = size;
        this.color = color;
    }
    render() {
        const div = document.createElement('div');
        const body = document.querySelector('body');
        body.appendChild(div)
        div.style.width = `${this.width}px`;
        div.style.height = `${this.height}px`;
        div.style.borderRadius = `${50}px`;
        div.style.background = this.color
    }
}
  
  const imgUrl = 'https://bit.ly/2tcDito';
  var mfLogotip = new Logo(imgUrl);
  console.log(mfLogotip);
  
  // запускаем наше микро-приложение
  mfLogotip.init();

  const circle = new Circle(100, 'yellow')
circle.render()
  
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveRight();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  mfLogotip.moveDown();
  // something else, чтобы всё работало