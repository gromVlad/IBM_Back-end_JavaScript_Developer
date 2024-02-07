//Introduction to JavaScript
/* 
JavaScript - это язык программирования, который используется для добавления интерактивности на веб-страницы.

Основные возможности JavaScript:

- Манипулирование DOM: изменение содержимого и структуры веб-страницы.
- Обработка событий: реагирование на действия пользователя, такие как нажатия кнопок или движения мыши.
- Улучшение пользовательского опыта: проверка данных форм, предоставление обратной связи в реальном времени.
- Динамическое содержимое: загрузка новой информации на веб-страницу без перезагрузки.
- Анимации и визуальные эффекты: создание анимаций и визуальных эффектов для улучшения внешнего вида веб-сайтов.
- Веб-приложения: использование JavaScript для создания плавного и отзывчивого пользовательского опыта.

JavaScript может быть включен в HTML-файл непосредственно или подключен внешним файлом. Для вывода информации в JavaScript можно использовать console.log, изменять DOM или использовать диалоговые окна.

JavaScript является неотъемлемой частью веб-разработки и играет ключевую роль в создании интерактивных и динамических веб-сайтов.
*/

//---------------------------
//___Data Types and Variables
/* 
В JavaScript переменные используются для хранения и управления данными. Переменные действуют как контейнеры для различных типов информации или значений. Можно представить переменную как именованное хранилище данных, которые можно использовать в коде JavaScript. Давайте рассмотрим некоторые ключевые моменты о переменных в JavaScript.

Для инициализации переменной вы можете опционально присвоить ей начальное значение. Для создания переменной в JavaScript также необходимо объявить ее с помощью одного из трех ключевых слов: var, let или const. Объявление говорит JavaScript, что вы хотите зарезервировать место в памяти для хранения данных. Var был первоначальным способом объявления переменных в JavaScript и имеет область видимости функции. Это означает, что переменная, объявленная с помощью var, доступна во всей функции, в которой она объявлена. Let был введен в ES6 и предоставляет блочную область видимости. Это означает, что переменная, объявленная с помощью let, доступна только в блоке, заключенном в фигурные скобки, в котором она определена. Эта область видимости более предсказуема и менее подвержена ошибкам. Const также был введен в ES6 и используется для объявления переменных с постоянными значениями. После присвоения значения const переменной, вы не можете присвоить ей другое значение. Он также имеет блочную область видимости. Переменные const часто используются для значений, которые не должны изменяться, таких как математические константы или ссылки на неизменяемые объекты. Имена переменных должны начинаться с буквы, подчеркивания или знака доллара и могут содержать буквы, цифры, подчеркивания и знаки доллара. Имена переменных чувствительны к регистру. Вот несколько примеров имен переменных. Переменные, объявленные с помощью let, могут быть переназначены, но не могут быть повторно объявлены в том же блоке. В то время как переменные, объявленные с помощью const, являются константными и не могут быть ни переназначены, ни повторно объявлены в том же блоке. Понимание переменных критично для управления и манипулирования данными в JavaScript-программах. Они позволяют вам работать с различными типами информации, делая ваш код динамичным и адаптивным.

В JavaScript типы данных - это классификации или категории, которые определяют, какого вида данные могут быть сохранены и обрабатываются в программе. JavaScript является динамически типизированным языком, что означает, что вам не нужно явно указывать тип данных переменной при ее объявлении. Тип данных определяется динамически во время выполнения на основе значения, которое вы присваиваете переменной. В JavaScript есть несколько встроенных типов данных, которые можно разделить на следующие основные категории: примитивные типы данных и составные типы данных.

Примитивные типы данных:
- Строки (String) представляют текст. Строка заключается в одинарные или двойные кавычки.
- Числа (Number) представляют как целые, так и десятичные числа.
- Булевый (Boolean) представляет значения true или false.
- Неопределенный (Undefined) представляет переменную, которая была объявлена, но не была присвоена значение.
- Null представляет пустое значение или отсутствие какого-либо объектного значения.

Составные типы данных:
- Массив (Array) - это структура данных, которая хранит несколько значений в виде списка.
- Объект (Object) - это коллекция пар ключ-значение, используется для хранения структурированных данных.

Динамическая типизация JavaScript позволяет переменным изменять типы данных во время выполнения, что делает этот язык гибким. Понимание этих типов данных критично для эффективного программирования на JavaScript, так как это помогает работать с различными типами данных и выполнять различные операции над ними.
*/

// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";
{
    // Block scope
    var blockVar = "I'm a block-scoped var";
    let blockLet = "I'm a block-scoped let";
    const blockConst = "I'm a block-scoped const";
}

//----------------------------
//___Operators and Expressions

/* 
Операторы и выражения в JavaScript

Операторы

Арифметические операторы: +, -, *, /, %. Используются для выполнения основных математических операций.
Операторы сравнения: ==, !=, ===, !==, <, >, <=, >=. Используются для сравнения двух значений или переменных и возвращают логическое значение true или false.
Логические операторы: &&, ||, !. Используются для объединения или манипулирования логическими значениями.
Операторы присваивания: =. Используются для присваивания значений переменным.
Унарные операторы: ++, --. Оперируют одним значением или переменной.
Оператор typeof. Встроенный оператор в JavaScript, который позволяет определить тип данных переменной или выражения. Возвращает строку, представляющую тип операнда.
Выражения

Арифметические выражения: 3 + 4, 10 - 5, 2 * 3, 8 / 2, 10 % 3.
Выражения с переменными: let x = 10; let y = 5; x + y, x - y, x * y, x / y, x % y.
Выражения вызова функций: Math.max(10, 20), Math.min(10, 20), Math.sqrt(25).
Условные выражения: let x = 10; let y = 5; x > y ? "x is greater than y" : "x is less than or equal to y".
*/

// Арифметическое выражение
let result = 10 + 5; // result будет равно 15

// Выражение с переменными
let x = 10;
let y = 5;
let sum = x + y; // sum будет равно 15

// Выражение вызова функции
let maxNumber = Math.max(10, 20); // maxNumber будет равно 20

// Условное выражение
let x = 10;
let y = 5;
let comparison = x > y ? "x is greater than y" : "x is less than or equal to y"; // comparison будет равно "x is greater than y"

// Арифметические операторы
let num1 = 5;
let num2 = 3;
let sum = num1 + num2; // Оператор сложения
console.log(sum); // Вывод: 8

let difference = num1 - num2; // Оператор вычитания
console.log(difference); // Вывод: 2

let product = num1 * num2; // Оператор умножения
console.log(product); // Вывод: 15

let quotient = num1 / num2; // Оператор деления
console.log(quotient); // Вывод: 1.6666666666666667

let remainder = num1 % num2; // Оператор остатка от деления
console.log(remainder); // Вывод: 2

// Операторы сравнения
let x = 10;
let y = 5;
console.log(x == y); // Вывод: false (оператор равенства)
console.log(x != y); // Вывод: true (оператор неравенства)
console.log(x > y); // Вывод: true (оператор "больше")
console.log(x < y); // Вывод: false (оператор "меньше")
console.log(x >= y); // Вывод: true (оператор "больше или равно")
console.log(x <= y); // Вывод: false (оператор "меньше или равно")

// Логические операторы
let a = true;
let b = false;
console.log(a && b); // Вывод: false (логическое "И")
console.log(a || b); // Вывод: true (логическое "ИЛИ")
console.log(!a); // Вывод: false (логическое "НЕ")

// Операторы присваивания
let c = 10;
let d = 5;
c += d; // Эквивалентно c = c + d;
console.log(c); // Вывод: 15

// Унарные операторы
let e = 10;
e++; // Увеличение на 1, эквивалентно e = e + 1;
console.log(e); // Вывод: 11

// Оператор typeof
let f = 10;
let g = "Hello";
console.log(typeof f); // Вывод: "number"
console.log(typeof g); // Вывод: "string"

//-----------------------------------------
//__Control Flow and Conditional Statements
//Определяет порядок выполнения операторов в программе JavaScript.

if (condition) {
    // код для выполнения, если условие истинно
}

// if statement
let age = 20;
if (age >= 18) { // Если возраст больше или равен 18
    console.log("Вы совершеннолетний"); // Вывод: "Вы совершеннолетний"
} else {
    console.log("Вы несовершеннолетний"); // Вывод: "Вы несовершеннолетний"
}

// else if statement
let time = 10;
if (time < 12) {
    console.log("Доброе утро"); // Вывод: "Доброе утро"
} else if (time < 18) {
    console.log("Добрый день"); // Вывод: "Добрый день"
} else {
    console.log("Добрый вечер"); // Вывод: "Добрый вечер"
}

// else statement
let isRaining = true;
if (isRaining) {
    console.log("Возьмите зонтик"); // Вывод: "Возьмите зонтик"
} else {
    console.log("Зонтик не нужен"); // Вывод: "Зонтик не нужен"
}

// nested if else statement
let temperature = 25;
let rainfall = false;

if (temperature > 30) {
    if (rainfall) {
        console.log("Горячо и дождливо"); // Вывод: "Горячо и дождливо"
    } else {
        console.log("Горячо и солнечно"); // Вывод: "Горячо и солнечно"
    }
} else {
    if (rainfall) {
        console.log("Прохладно и дождливо"); // Вывод: "Прохладно и дождливо"
    } else {
        console.log("Прохладно и солнечно"); // Вывод: "Прохладно и солнечно"
    }
}

// switch statement
let day = "Wednesday";
switch (day) {
    case "Monday":
        console.log("Понедельник"); // Вывод: "Понедельник"
        break;
    case "Tuesday":
        console.log("Вторник"); // Вывод: "Вторник"
        break;
    case "Wednesday":
        console.log("Среда"); // Вывод: "Среда"
        break;
    default:
        console.log("Другой день"); // Вывод: "Другой день"
        break;
}

// ternary operator
let age = 20;
let canVote = (age >= 18) ? "Да" : "Нет";
console.log(canVote); // Вывод: "Да"

//-------------------------
//__Looping and Iteration
/* 
Циклы в JavaScript

Позволяют выполнять блок кода несколько раз.
Используются для выполнения повторяющихся задач, обхода структур данных, таких как массивы и объекты, и обработки различных сценариев в коде.
Типы циклов в JavaScript

Цикл for
Цикл while
Цикл do while
*/

// Пример for loop
for (let i = 1; i <= 5; i++) {
    console.log(i); // Выводит числа от 1 до 5
}

//Цикл while
//Условие: логическое выражение, которое оценивается перед каждой итерацией. Если условие истинно, цикл продолжается, иначе завершается.
let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}

//Цикл do while
//Условие: логическое выражение, которое оценивается после каждой итерации. Если условие истинно, цикл продолжается, иначе завершается.
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

/* 
Выбор цикла зависит от конкретного случая использования и управления потоком в вашем коде.
Используйте циклы for для точного контроля.
Используйте циклы while для повторения, зависящего от условия.
Используйте циклы do while, когда вам нужно обеспечить хотя бы одно выполнение.
*/

//-------------------------------------------------------
//___Implementing Control Flow and Conditional Statements
let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}
console.log("Access Level:", accessLevel);

//__
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}
console.log("User Message:", userMessage);

//__
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}
console.log("User Category:", userCategory);

//__
let isAuthenticated = true;
let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";
console.log("Authentication Status:", authenticationStatus);

//---------------------------------------------------
//___Introduction to Functions and Types of Functions
/* 
Функции в JavaScript
Позволяют группировать код в повторно используемые блоки.
Улучшают структуру, читаемость и поддерживаемость кода.
*/

// Объявление функции (Function Declaration)
function greet() {
    console.log("Привет!");
}

// Вызов функции
greet(); // Выводит "Привет!"

// Объявление функции с параметрами (Parameterized Function)
function add(a, b) {
    return a + b;
}
/* 
function - ключевое слово для объявления функции.
add - имя функции.
(a, b) - параметры функции.
{} - фигурные скобки содержат код функции.
return - ключевое слово для возврата значения из функции
*/

// Вызов функции с передачей аргументов
let result = add(3, 4);
console.log(result); // Выводит 7

// Функция без параметров (Non-Parameterized Function)
function sayHello() {
    console.log("Привет, мир!");
}

sayHello(); // Выводит "Привет, мир!"

// Функция-выражение (Function Expression)
let multiply = function (a, b) {
    return a * b;
};

let product = multiply(2, 5);
console.log(product); // Выводит 10

// Именованная функция (Named Function)
function calculateArea(radius) {
    return Math.PI * radius * radius;
}

let area = calculateArea(5);
console.log(area); // Выводит 78.54...

// Немедленно вызываемая функция (Immediately Invoked Function Expression, IIFE)
//определяются и выполняются сразу после создания.
(function () {
    console.log("Эта функция вызывается немедленно!");
})();

// Стрелочная функция (Arrow Function)
let square = (number) => number * number;

let squared = square(4);
console.log(squared); // Выводит 16

// Анонимная функция (Anonymous Function)
let printMessage = function (message) {
    console.log(message);
};

printMessage("Привет!"); // Выводит "Привет!"

//--------------------------------------------------
//__ECMA Script Function Syntax and Return Statement

/* 
Функции-стрелки
Введены в ECMAScript 6 (ES6).
Более компактный и удобочитаемый синтаксис.
Не требуют ключевого слова function.
*/
const add = (a, b) => a + b;

const add = (a, b) => {
    return a + b;
};

const result = add(3, 4);
console.log(result); // 7

//Функции-стрелки являются более компактным и удобочитаемым способом записи функций в JavaScript, а оператор return используется для возврата значения из функции и завершения ее выполнения.

//---------------------------
//__EX:Writing Your First Javascript Function

/* 
<html>
<head>
  <title>Rectangle Area Calculator</title>
</head>
<body>
  <h1>Rectangle Area Calculator</h1>
  <label for="length">Enter the length: </label>
  <input type="number" id="length"><br><br>
  <label for="width">Enter the width: </label>
  <input type="number" id="width"><br><br>
  <button onclick="calculateArea()">Calculate Area</button><br><br>
  <p id="result"></p>
<script src="./calculate_Area.js"></script>
</body>
</html>
*/
let length;
let width;

function calculateArea() {
    length = parseFloat(document.getElementById('length').value);
    width = parseFloat(document.getElementById('width').value);

    let area = length * width;
}

document.getElementById('result').innerText = `The area of the rectangle is: ${area}`

//----------------------------------------
//__Function Closure and Function Hoisting
/* 
Функциональное замыкание
Функция, которая сохраняет доступ к переменным из своей внешней области видимости.
Позволяет создавать приватные переменные, реализовывать сокрытие данных и поддерживать состояние между вызовами функций.
*/
function outerFunction() {
    var outerVar = "Outer Variable";

    function innerFunction() {
        console.log(outerVar);
    }

    return innerFunction;
}

const innerFunc = outerFunction();
innerFunc(); // "Outer Variable"

/* 
Преимущества использования функционального замыкания
Позволяет инкапсулировать данные в области видимости функции.
Создает приватную среду для переменных.
Предотвращает непреднамеренное вмешательство или изменение переменных извне функции.
Позволяет скрывать определенные данные и предоставлять доступ только к необходимым частям функциональности кода.
Позволяет функциям запоминать и поддерживать состояние между вызовами функций.
*/
function greet(name) {
    var greeting = "Hello, " + name + "!";

    function sayHello() {
        console.log(greeting);
    }

    return sayHello;
}

const greetJohn = greet("John");
greetJohn(); // "Hello, John!"

const greetAlice = greet("Alice");
greetAlice(); // "Hello, Alice!"

/* 
Функция хостинга
Поведение в JavaScript, при котором объявления функций перемещаются в начало их содержащей области видимости во время фазы компиляции.
Позволяет использовать функцию до того, как она фактически объявлена в коде.
Применяется только к объявлениям функций, а не к выражениям функций.
*/
sayHello(); // "Hello!"

function sayHello() {
    console.log("Hello!");
}

//----------------------
//_EX:Develop Followers Count Milestone Alerts Using Function
let count = 0; // Initialize count to 0

function checkCountValue() {
    if (count === 10) {
        alert("Your Instagram post gained 10 followers! Congratulations!");
    } else if (count === 20) {
        alert("Your Instagram post gained 20 followers! Keep it up!");
    }
}

function increaseCount() {
    count++; // Increment the count by 1
    displayCount(); // Display the count
    checkCountValue(); // Check count value and display messages
}

//---------------------
//__Events in JavaScript
/* 
События в JavaScript
Действия или события в браузере, такие как взаимодействие с пользователем, загрузка страницы или перемещение мыши над элементами.

Общие типы событий в JavaScript
click: срабатывает при нажатии на элемент.
mouseover: срабатывает при наведении курсора мыши на элемент.
keydown: срабатывает при нажатии клавиши на клавиатуре.
change: срабатывает при изменении значения элемента ввода
*/


// Получение ссылки на элемент
const button = document.getElementById("myButton");

// Добавление обработчика событий к элементу
button.addEventListener("click", function () {
    // Код, который будет выполняться при срабатывании события
});

/* 
<button id="myButton">Нажмите на меня</button>
  <p id="output"></p>
*/
// Получение ссылки на элементы
const button = document.getElementById("myButton");
const output = document.getElementById("output");

// Добавление обработчика событий к кнопке
button.addEventListener("click", function () {
    // Изменение содержимого параграфа
    output.innerHTML = "Кнопка нажата!";
});

//Пример обработки события mouseover
/* 
<div id="myDiv"></div>
  <p id="output"></p>
*/
// Получение ссылки на элементы
const div = document.getElementById("myDiv");
const output = document.getElementById("output");

// Добавление обработчика событий к div
div.addEventListener("mouseover", function () {
    // Изменение содержимого параграфа
    output.innerHTML = "Мышь над div!";
});

//Пример обработки события keydown
/* 
<input type="text" id="myInput">
  <p id="output"></p>
*/
// Получение ссылки на элементы
const input = document.getElementById("myInput");
const output = document.getElementById("output");

// Добавление обработчика событий к полю ввода
input.addEventListener("keydown", function (event) {
    // Получение нажатой клавиши
    const key = event.key;

    // Изменение содержимого параграфа
    output.innerHTML = `Нажата клавиша: ${key}`;
});

//Пример обработки события change
/* 
<input type="text" id="myInput">
  <p id="output"></p>
*/
// Получение ссылки на элементы
const input = document.getElementById("myInput");
const output = document.getElementById("output");

// Добавление обработчика событий к полю ввода
input.addEventListener("change", function (event) {
    // Получение нового значения поля ввода
    const value = event.target.value;

    // Изменение содержимого параграфа
    output.innerHTML = `Значение изменено на: ${value}`;
});

//Submit event
/* 
<form id="myForm">
  <input type="text" id="textInput">
  <input type="submit" value="Submit">
</form>
*/
document.getElementById('myForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevents the default form submission behavior
    console.log('Form submitted!');
});


//Focus event
// <input type="text" id="textInput" placeholder="Click here">
const textInput = document.getElementById('textInput');
textInput.addEventListener('focus', function () {
    console.log('Input focused');
});

//Window events
window.addEventListener('load', function () {
    console.log('Page and all resources loaded');
});

//Resize event
//Событие изменения размера . Запускается, когда окно браузера изменяет размер, позволяя вносить коррективы или реагировать на изменения размеров окна
window.addEventListener('resize', function () {
    console.log('Window resized');
});

//Scroll event
// <div style="height: 2000px; background-color: lightblue;">Scroll down </div>
window.addEventListener('scroll', function () {
    console.log('Document scrolled');
});



//---------------------------
//__EX:Survey Form Using Events

function submitFeedback() { }

const username = document.getElementById('name').value;
const age = document.getElementById('age').value;
const email = document.getElementById('email').value;
const job = document.getElementById('job').value;
const designation = document.getElementById('designation').value;
const productType = document.getElementById('productType').value;
const feedback = document.getElementById('feedbackText').value;

const submitButton = document.getElementById('submitBtn');
submitButton.onclick = submitFeedback;
alert('Thank you for your valuable feedback')

document.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        submitFeedback();
    }
});
