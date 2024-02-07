//Introduction to Arrays
/* 
Массивы в JavaScript

Данные, используемые для хранения и организации набора значений.
Могут содержать значения различных типов данных, такие как числа, строки, объекты или даже другие массивы.
Являются упорядоченными, элементы хранятся в определенной последовательности.
Доступ к элементам осуществляется по их индексу или позиции в массиве.
Индексация в JavaScript начинается с нуля, то есть первый элемент находится под индексом 0, второй под индексом 1 и так далее.
*/

const fruits = ["apple", "banana", "cherry"];
const firstFruit = fruits[0]; // "apple"
const secondFruit = fruits[1]; // "banana"
const length = fruits.length; // 3
fruits[2] = "strawberry"; // Заменяет "cherry" на "strawberry"

/* 
Встроенные методы массива

push: добавляет элемент в конец массива.
pop: удаляет последний элемент из массива.
shift: удаляет первый элемент из массива.
unshift: добавляет элемент в начало массива.
splice: удаляет или добавляет элементы в указанной позиции массива.
slice: возвращает новый массив, являющийся копией части исходного массива.
concat: объединяет два или более массивов в один.
map: применяет функцию к каждому элементу массива и возвращает новый массив с результатами.
filter: создает новый массив, содержащий элементы исходного массива, которые удовлетворяют заданному условию.
reduce: применяет функцию к каждому элементу массива и возвращает одно итоговое значение.
*/

//Многомерные массивы
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

/* 
Использование массивов
Хранение списков элементов.
Итерация по данным.
Реализация стеков и очередей.
Управление данными в таблицах и сетках.
*/
// Использование цикла for
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

// Использование метода forEach
fruits.forEach((fruit) => {
    console.log(fruit);
});

//Первый элемент находится под индексом 0, второй под индексом 1 и так далее

//------------------------------------
//___Manipulating and Iterating Arrays
/* 
Манипуляция и итерация массивов

Манипуляция массивами

JavaScript предоставляет ряд встроенных методов для эффективной манипуляции массивами.
Некоторые стандартные методы: push, pop, shift, unshift, splice, concat, slice, indexOf, reverse, sort и свойство length.
Метод push

Добавляет один или несколько элементов в конец массива.
Возвращает новую длину массива.
*/
const fruits = ["apple", "banana"];
fruits.push("orange", "strawberry");
console.log(fruits); // ["apple", "banana", "orange", "strawberry"]


//Метод push
//Добавляет один или несколько элементов в конец массива.Возвращает новую длину массива.
const fruits = ["apple", "banana"];
fruits.push("orange", "strawberry");
console.log(fruits); // ["apple", "banana", "orange", "strawberry"]

//Метод pop
//Удаляет последний элемент из массива.Возвращает удаленный элемент.
const fruits = ["apple", "banana", "orange"];
const removedFruit = fruits.pop();
console.log(removedFruit); // "orange"
console.log(fruits); // ["apple", "banana"]

//Метод shift
//Удаляет первый элемент из массива.
//Возвращает удаленный элемент.
const fruits = ["apple", "banana", "orange"];
const removedFruit = fruits.shift();
console.log(removedFruit); // "apple"
console.log(fruits); // ["banana", "orange"]

//Метод unshift
//Добавляет один или несколько элементов в начало массива.Возвращает новую длину массива.
const fruits = ["banana", "orange"];
fruits.unshift("apple", "strawberry");
console.log(fruits); // ["apple", "strawberry", "banana", "orange"]

//Метод splice
//Изменяет содержимое массива, удаляя, заменяя или добавляя элементы в указанной позиции.Возвращает массив удаленных элементов.
const fruits = ["apple", "banana", "orange"];
fruits.splice(1, 1, "grape");
console.log(fruits); // ["apple", "grape", "orange"]

//Метод concat
//Объединяет два или более массивов в новый массив.Не изменяет исходные массивы.
const fruits = ["apple", "banana"];
const additionalFruits = ["orange", "strawberry"];
const combinedFruits = fruits.concat(additionalFruits);
console.log(combinedFruits); // ["apple", "banana", "orange", "strawberry"]

//Метод slice
//Возвращает неглубокую копию части массива в новый массив.Не изменяет исходный массив.
const fruits = ["apple", "banana", "orange", "strawberry"];
const slicedFruits = fruits.slice(1, 3);
console.log(slicedFruits); // ["banana", "orange"]

//Метод indexOf
//Находит индекс указанного элемента в массиве.Возвращает индекс первого вхождения элемента или -1, если элемент не найден.
const fruits = ["apple", "banana", "orange"];
const indexOfBanana = fruits.indexOf("banana");
console.log(indexOfBanana); // 1

//Метод reverse
//Обращает порядок элементов в массиве.Изменяет исходный массив.
const fruits = ["apple", "banana", "orange"];
fruits.reverse();
console.log(fruits); // ["orange", "banana", "apple"]

//Метод sort
//Сортирует элементы массива.По умолчанию сортирует элементы как строки в лексикографическом порядке.Для правильной сортировки чисел можно указать функцию сравнения.
const numbers = [1, 3, 2, 5, 4];
// Сортировка без функции сравнения (лексикографическая)
numbers.sort();
console.log(numbers); // [1, 2, 3, 4, 5]
// Сортировка с функцией сравнения (числовая)
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 2, 3, 4, 5]

//Свойство length
//Возвращает количество элементов в массиве.Можно использовать для определения размера массива или для изменения его длины.
const fruits = ["apple", "banana", "orange"];
// Получение длины массива
const numFruits = fruits.length;
console.log(numFruits); // 3
// Увеличение длины массива
fruits.length = 5;
console.log(fruits); // ["apple", "banana", "orange", undefined, undefined]
// Уменьшение длины массива
fruits.length = 2;
console.log(fruits); // ["apple", "banana"]

//Итерация массивов
//Итерация по массиву - распространенная задача.JavaScript предоставляет несколько способов для ее выполнения.
const fruits = ["apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

//------------------------
//__EX:array

const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
    mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenu[i]}</p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;

//---------------------
//__Array Methods

//Метод forEach
//Итерирует по массиву и применяет указанную функцию к каждому элементу.Часто используется, когда нужно выполнить определенное действие для каждого элемента, не создавая новый массив.
const users = [
    { name: "John", email: "john@example.com" },
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" }
];
users.forEach((user) => {
    console.log(`Sending welcome email to ${user.email}`);
});

//Метод map
//Создает новый массив, применяя указанную функцию к каждому элементу исходного массива.Идеально подходит для преобразования данных без изменения исходного массива.
const products = [
    { name: "Apple", price: 10 },
    { name: "Orange", price: 5 },
    { name: "Banana", price: 3 }
];
const productMessages = products.map((product) => {
    return `Product: ${product.name}, Price: $${product.price}`;
});
console.log(productMessages);

//Метод filter
//Создает новый массив, содержащий элементы, удовлетворяющие указанному условию.Полезен для извлечения определенных данных из массива.
const products = [
    { name: "Apple", price: 10 },
    { name: "Orange", price: 5 },
    { name: "Banana", price: 3 }
];
const filteredProducts = products.filter((product) => {
    return product.price > 5;
});
console.log(filteredProducts);

//Метод reduce
//Позволяет свести массив к одному значению, применяя функцию к каждому элементу.Отлично подходит для агрегирования данных
const orderPrices = [10, 20, 30, 40, 50];
const totalOrderValue = orderPrices.reduce((total, price) => {
    return total + price;
}, 0);
console.log(totalOrderValue); // 150

//Метод find
//Возвращает первый элемент массива, удовлетворяющий указанному условию.Полезен для поиска определенных данных.
const employees = [
    { id: 1, name: "John" },
    { id: 2, name: "Alice" },
    { id: 3, name: "Bob" }
];
const employee = employees.find((employee) => {
    return employee.id === 2;
});
console.log(employee); // { id: 2, name: "Alice" }

//-------------------------------------
//__Working with Two-Dimensional Arrays
/* 
Работа с двумерными массивами
Двумерный массив
Коллекция элементов, организованных в строки и столбцы.
Универсальная структура данных, используемая в различных контекстах программирования и математики.
*/
const grid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

//Доступ к элементам двумерного массива
const element = grid[1][2]; // Доступ к элементу во второй строке и третьем столбце

//Перебор двумерного массива
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
        console.log(grid[i][j]);
    }
}

/*
Использование двумерных массивов
Представление игровых досок и сеток.
Хранение и обработка изображений.
Управление данными в электронных таблицах и базах данных.
Решение математических задач, таких как умножение матриц.
Обработка географических данных на картах и в ГИС-системах.
*/

//___
//Пример интерактивного представления рассадки в кинотеатре
/* 
<div class="seating-chart">
  <div class="seat" id="A1">A1</div>
  <div class="seat" id="A2">A2</div>
  ...
</div>

<button class="select-button" id="select-random-seat">Select Random Seat</button>

//css
.seating-chart {
  display: grid;
  grid-template-columns: repeat(3, 70px);
  gap: 10px;
  justify-content: center;
}

.seat {
  width: 50px;
  height: 50px;
  text-align: center;
  border: 1px solid black;
  cursor: pointer;
}

.booked {
  background-color: red;
  cursor: not-allowed;
  color: white;
}

.available {
  background-color: lightgreen;
}

.select-button {
  width: 100%;
  padding: 10px;
  margin: 10px 0;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
}
*/

const theaterSeats = [
    ["X", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O"],
    ["O", "O", "O", "O", "O", "O", "O"]
];

function bookSeat(row, col) {
    if (theaterSeats[row][col] === "O") {
        theaterSeats[row][col] = "X";
        document.getElementById(`seat-${row}-${col}`).classList.add("booked");
        alert("Seat booked successfully!");
    } else {
        alert("Seat is already booked!");
    }
}

function bookRandomSeat() {
    const availableSeats = [];

    for (let i = 0; i < theaterSeats.length; i++) {
        for (let j = 0; j < theaterSeats[i].length; j++) {
            if (theaterSeats[i][j] === "O") {
                availableSeats.push({ row: i, col: j });
            }
        }
    }

    if (availableSeats.length === 0) {
        alert("All seats are booked!");
        return;
    }

    const randomSeat = availableSeats[Math.floor(Math.random() * availableSeats.length)];
    bookSeat(randomSeat.row, randomSeat.col);
}

document.querySelectorAll(".seat").forEach((seat) => {
    seat.addEventListener("click", (event) => {
        const row = parseInt(event.target.id.split("-")[1]);
        const col = parseInt(event.target.id.split("-")[2]);
        bookSeat(row, col);
    });
});

document.getElementById("select-random-seat").addEventListener("click", bookRandomSeat);

//-----------------------------------
//__Classes and Objects in JavaScript

// Класс Person
class Person {
    constructor(firstName, lastName) {
        // Инициализация свойств
        this.firstName = firstName;
        this.lastName = lastName;
    }

    // Метод getFullName
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}

// Создание объекта person из класса Person
const person = new Person('John', 'Doe');

// Вывод полного имени
console.log(person.getFullName()); // John Doe

// Функциональный конструктор Car
function Car(make, model) {
    // Инициализация свойств
    this.make = make;
    this.model = model;

    // Метод startEngine
    this.startEngine = function () {
        console.log('Двигатель запущен');
    };
}

// Создание объектов car1 и car2 из конструктора Car
const car1 = new Car('Toyota', 'Camry');
const car2 = new Car('Honda', 'Civic');

// Вывод информации о машинах
console.log(car1.make, car1.model); // Toyota Camry
console.log(car2.make, car2.model); // Honda Civic

// Запуск двигателя для car1
car1.startEngine(); // Двигатель запущен

// Объектный литерал person
const person = {
    firstName: 'John',
    lastName: 'Doe',

    // Метод getFullName
    getFullName: function () {
        return `${this.firstName} ${this.lastName}`;
    }
};

// Вывод полного имени
console.log(person.getFullName()); // John Doe

//-------------------------------
//__EX:Create Book Management System Using Objects
let books = [];

function addBook() {
    const bookName = document.getElementById('bookName').value;
    const authorName = document.getElementById('authorName').value;
    const bookDescription = document.getElementById('bookDescription').value;
    const pagesNumber = parseInt(document.getElementById('pagesNumber').value);
    if (bookName && authorName && bookDescription && !isNaN(pagesNumber)) {
        const book = {
            name: bookName,
            authorName: authorName,
            bookDescription: bookDescription,
            pagesNumber: pagesNumber
        };
        books.push(book);
        showbooks();
        clearInputs();
    } else {
        alert('Please fill in all fields correctly.');
    }
}

function showbooks() {
    const booksDiv = books.map((book, index) => `<h1>book Number: ${index + 1}</h1>
<P><strong>Book Name: </strong>${book.name}</P>
  <p><strong>Author Name:</strong> ${book.authorName} </p>
  <p><strong>Book Description:</strong> ${book.bookDescription}</p>
  <p><strong>No. of Pages:</strong> ${book.pagesNumber} mins</p>
    document.getElementById('books').innerHTML = booksDiv`)
}

function clearInputs() {
    document.getElementById('bookName').value = '';
    document.getElementById('authorName').value = '';
    document.getElementById('bookDescription').value = '';
    document.getElementById('pagesNumber').value = '';
}

//---------------------------
//__Introduction to String and String Manipulation

// Конкатенация строк
const firstName = 'John';
const greeting = 'Hello';
const message = greeting + ' ' + firstName;
console.log(message); // Hello John

// Определение длины строки
const text = 'JavaScript';
console.log(text.length); // 10

// Доступ к символам строки
const firstCharacter = text[0];
console.log(firstCharacter); // J

// Изменение регистра строки
const lowercaseText = text.toLowerCase();
const uppercaseText = text.toUpperCase();
console.log(lowercaseText); // javascript
console.log(uppercaseText); // JAVASCRIPT

// Поиск подстрок в строке
const sentence = 'The quick brown fox jumps over the lazy dog';
const includesFox = sentence.includes('fox');
const indexOfFox = sentence.indexOf('fox');
console.log(includesFox); // true
console.log(indexOfFox); // 16

// Извлечение части строки
const substring = text.substring(0, 5);
const slice = text.slice(7);
const substr = text.substr(7, 5);
console.log(substring); // JavaS
console.log(slice); // Script
console.log(substr); // Script

// Замена подстрок в строке
const updatedText = text.replace('Script', 'World');
console.log(updatedText); // JavaWorld

// Разделение строки на массив подстрок
const csvData = 'John,Doe,20;Jane,Smith,25;Michael,Jones,30';
const peopleArray = csvData.split(';');
console.log(peopleArray);
// [ 'John,Doe,20', 'Jane,Smith,25', 'Michael,Jones,30' ]

// Удаление пробелов из строки
const textWithSpaces = ' Hello, World! ';
const trimmedText = textWithSpaces.trim();
console.log(trimmedText); // Hello, World!

// Использование шаблонных литералов
const totalCost = 100;
const invoice = `Invoice for ${totalCost} widgets`;
console.log(invoice); // Invoice for 100 widgets

//--------------------
//__Create Text Analysis Tool for Speed Testing Using String Manipulations
//практическую платформу для отработки навыков набора текста в контролируемой среде

let testText = "The quick brown fox jumps over the lazy dog.";
let startTime, endTime;

function startTest() {
    // Set the test text
    document.getElementById("inputText").value = testText;

    // Reset results and timer
    document.getElementById("output").innerHTML = "";
    startTime = new Date().getTime();

    // Change button text and functionality
    var button = document.getElementById("btn");
    button.innerHTML = "End Test";
    button.onclick = endTest;
}

function endTest() {
    endTime = new Date().getTime();

    // Disable user input
    document.getElementById("userInput").readOnly = true;

    // Calculate time elapsed and words per minute (WPM)
    var timeElapsed = (endTime - startTime) / 1000; // in seconds
    var userTypedText = document.getElementById("userInput").value;

    // Split the text using regex to count words correctly
    var typedWords = userTypedText.split(/\s+/).filter(function (word) {
        return word !== "";
    }).length;

    var wpm = 0; // Default value

    if (timeElapsed !== 0 && !isNaN(typedWords)) {
        wpm = Math.round((typedWords / timeElapsed) * 60);
    }

    // Display the results
    var outputDiv = document.getElementById("output");
    outputDiv.innerHTML = "<h2>Typing Test Results:</h2>" +
        "<p>Words Typed: " + typedWords + "</p>" +
        "<p>Time Elapsed: " + timeElapsed.toFixed(2) + " seconds</p>" +
        "<p>Words Per Minute (WPM): " + wpm + "</p>";

    // Reset the button
    var button = document.getElementById("btn");
    button.innerHTML = "Start Test";
    button.onclick = startTest;
}

//---------------------------------
//__Introduction to Math and Date Objects

// Использование объекта Math для округления чисел
const number = 3.6;
const rounded = Math.round(number); // 4
const ceil = Math.ceil(number); // 4
const floor = Math.floor(number); // 3

// Использование объекта Math для возведения в степень и логарифмов
const base = 2;
const exponent = 3;
const power = Math.pow(base, exponent); // 8
const squareRoot = Math.sqrt(base); // 1.41421356237
const naturalLog = Math.log(base); // 0.69314718056

// Использование объекта Math для генерации случайных чисел
const random = Math.random(); // случайное десятичное число между 0 и 1

// Пример использования объекта Math для создания генератора случайных цитат
const quotes = ['quote 1', 'quote 2', 'quote 3', 'quote 4', 'quote 5'];

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const randomQuote = quotes[randomIndex];
  document.getElementById('quoteDisplay').textContent = randomQuote;
}

// Использование объекта Date для создания и форматирования дат
const currentDate = new Date(); // текущая дата и время
const specificDate = new Date('2023-03-08'); // конкретная дата
const millisecondsSinceEpoch = new Date(0); // дата, представляющая эпоху

// Извлечение компонентов даты из объекта Date
const year = currentDate.getFullYear(); // 2023
const month = currentDate.getMonth(); // 2 (март)
const day = currentDate.getDate(); // 8
const hour = currentDate.getHours(); // 10
const minute = currentDate.getMinutes(); // 30

// Форматирование даты в читаемый человеком формат
const formattedDate = currentDate.toLocaleDateString('en-US'); // "3/8/2023"
const formattedTime = currentDate.toLocaleTimeString('en-US'); // "10:30 AM"

// Выполнение арифметических операций с датами
const tomorrow = new Date(currentDate.getTime() + 24 * 60 * 60 * 1000); // завтрашняя дата

// Использование функций таймера для управления потоком кода
setTimeout(() => {
  console.log('This message will appear after a 2 second delay');
}, 2000);

setInterval(() => {
  console.log('This message will appear every second');
}, 1000);

//Вложенный setTimeout
let i = 1;
setTimeout(function run() {
  func(i);
  setTimeout(run, 100);
}, 100);
//Обычно функция setTimeout используется для выполнения определенных действий через заданное время. В данном случае, функция run вызывается каждые 100 миллисекунд и передает текущее значение переменной i функции func.

