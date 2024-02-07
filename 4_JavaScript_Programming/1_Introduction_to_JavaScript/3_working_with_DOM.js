//__Introduction to Debugging in JavaScript
// Использование console.log для отладки
console.log('Hello, world!'); // Выводит сообщение "Hello, world!" в консоль браузера

// Использование breakpoints для отладки
debugger; // Останавливает выполнение кода и открывает инструменты разработчика браузера

// Использование try-catch для обработки ошибок
try {
    // Код, который может вызвать ошибку
} catch (error) {
    // Код для обработки ошибки
}

// Пример использования try-catch для обработки ошибки при доступе к свойству неопределенного объекта
let object;

try {
    console.log(object.property);
} catch (error) {
    console.log('Error: ', error.message);
}

// Пример использования try-catch для обработки ошибки при доступе к элементу массива за пределами его длины
const array = [];

try {
    console.log(array[5]);
} catch (error) {
    console.log('Error: ', error.message);
}

//--------------------------------
//__Debug a JavaScript
//использование ключевого слова debugger также может позволить вам увидеть поток входных значений, который хранится в переменных в JavaScript

function performOperation() {
    // Get user input from input fields
    let num1 = parseInt(document.getElementById('input1').value);
    let num2 = parseInt(document.getElementById('input2').value);
    // Check if inputs are valid numbers
    if (!isNaN(num1) && !isNaN(num2)) {
        // Perform the operation
        let result = multiply(num1, num2);

        // Display the result
        displayResult(result);
    } else {
        displayResult('Please enter valid numbers');
    }
}

function multiply(a, b) {
    // Introduce a debugger statement to pause execution
    debugger;

    // Multiply the numbers
    return a * b;
}

function displayResult(result) {
    // Display the result in the paragraph element
    const resultElement = document.getElementById('result');
    resultElement.textContent = `The result is: ${result}`;
}

//------------------------
//__Introduction to the Document Object Model

// Введение в Document Object Model (DOM)

// Определение DOM
// DOM представляет собой программный интерфейс для работы с веб-документами.
// Он представляет веб-страницу таким образом, что программы, такие как JavaScript, могут изменять структуру документа, содержимое и стиль.
// DOM предоставляет структурированное представление веб-страницы, что облегчает взаимодействие разработчиков с содержимым веб-страницы.

// $0 и его цель
// $0 - это специальная переменная, которую можно использовать в консоли разработчика браузера в качестве быстрого ссылочного указателя на текущий выбранный элемент DOM в панели элементов веб-разработки.
// Она часто используется для отладки и проверки элементов на веб-странице.

// Типы узлов и их важность в DOM
// - Узлы дерева DOM: дерево DOM состоит из узлов, каждый из которых представляет часть документа.
// - Объекты: объекты JavaScript, соответствующие элементам, атрибутам или содержимому веб-документа.
// - Модель: структурированное и абстрактное представление веб-документа.

// Как работает DOM
// - При загрузке веб-страницы браузер создает представление DOM структуры страницы.
// - DOM представляет дерево с корневым узлом документа.
// - Узлы элементов представляют HTML-элементы и составляют основную часть структуры DOM.
// - Узлы атрибутов представляют атрибуты HTML-элементов, включая id, class и src.
// - Узлы текста содержат текстовое содержимое элементов.

// Примеры использования $0 и объяснения
// Получение HTML-кода и деталей выбранного элемента
console.log($0); // Выводит HTML-код и детали выбранного элемента в консоль

// Получение текстового содержимого выбранного элемента
console.log($0.textContent); // Выводит текстовое содержимое выбранного элемента в консоль

// Получение атрибута выбранного элемента
console.log($0.getAttribute("href")); // Выводит значение атрибута "href" выбранного элемента в консоль

// Изменение атрибута выбранного элемента
$0.setAttribute("href", "https://www.example.com"); // Изменяет значение атрибута "href" выбранного элемента на "https://www.example.com"

// Получение комментария выбранного элемента
var commentNode = document.getElementById("myDiv").nextSibling;
console.log(commentNode); // Выводит код комментария выбранного элемента в консоль

// Получение текста комментария выбранного элемента
var commentContent = commentNode.nodeValue;
console.log(commentContent); // Выводит текст комментария выбранного элемента в консоль

// Получение типа документа
console.log(document.doctype); // Выводит тип документа (DOCTYPE) в консоль

// Важность DOM в JavaScript
// - DOM предоставляет структурированный и иерархический доступ к веб-содержимому.
// - DOM позволяет быстро реагировать на действия пользователей в реальном времени с помощью JavaScript.
// - Разработчики используют DOM для доступа и изменения содержимого и структуры страницы.
// - DOM преодолевает различия между браузерами, обеспечивая единообразную функциональность на разных платформах и увеб-браузеров.

// Заключение
// DOM является важной частью веб-разработки, поскольку он предоставляет программный интерфейс для взаимодействия с веб-страницей. Использование $0 в консоли разработчика браузера позволяет быстро получать информацию о выбранном элементе и вносить изменения в его атрибуты или содержимое. DOM также позволяет разработчикам создавать динамические и интерактивные веб-приложения с помощью JavaScript.

// Получение ссылки на документ
const documentNode = document;
console.log(documentNode); // Выводит объект Document

// Получение ссылки на элемент
const paragraph = document.querySelector('p');
console.log(paragraph); // Выводит элемент <p>

// Получение текста элемента
const paragraphText = paragraph.textContent;
console.log(paragraphText); // Выводит текст внутри элемента <p>

// Получение атрибута элемента
const anchor = document.querySelector('a');
const href = anchor.getAttribute('href');
console.log(href); // Выводит значение атрибута href

// Изменение атрибута элемента
anchor.setAttribute('href', 'https://example.com');

// Получение комментария
const comment = document.querySelector('comment');
console.log(comment); // Выводит комментарий <!-- This is a comment -->

// Получение типа узла
const nodeType = paragraph.nodeType;
console.log(nodeType); // Выводит 1 (тип узла для элемента)

//-------------------------
//__Manipulating DOM Elements

// Доступ к элементу по идентификатору
const headingElement = document.getElementById('main-heading');
console.log(headingElement); // Выводит элемент <h1>

// Доступ к элементам по классу
const highlightedElements = document.getElementsByClassName('highlighted');
for (let i = 0; i < highlightedElements.length; i++) {
    highlightedElements[i].textContent = 'This paragraph is highlighted';
}

// Доступ к элементам по тегу
const paragraphElements = document.getElementsByTagName('p');
console.log(paragraphElements); // Выводит коллекцию элементов <p>

// Доступ к элементу с помощью querySelector
const firstHighlightedParagraph = document.querySelector('.highlighted');
const paragraphWithId = document.querySelector('#my-paragraph');
const firstDiv = document.querySelector('div');

// Изменение содержимого элемента
const paragraph = document.querySelector('p');
paragraph.textContent = 'This is updated text';

// Изменение атрибута элемента
const image = document.querySelector('img');
image.src = 'new-image.jpg';

// Добавление нового элемента
const list = document.querySelector('ul');
const newListItem = document.createElement('li');
newListItem.textContent = 'Item 3';
list.appendChild(newListItem);

// Добавление обработчика события
const button = document.querySelector('button');
button.addEventListener('click', () => {
    alert('Button clicked!');
});

// Изменение порядка элементов
const container = document.querySelector('.container');
const secondParagraph = container.querySelector('p:nth-child(2)');
container.insertBefore(secondParagraph, container.firstChild);

// Клонирование элемента
const listItem = document.querySelector('li');
const clonedListItem = listItem.cloneNode(true);
list.appendChild(clonedListItem);

// Пример работы с classList
// Получение элемента
const element = document.getElementById('myElement');
const classes = element.classList;

// Метод add
element.classList.add('newClass');

// Метод remove
element.classList.remove('oldClass');

// Метод toggle
element.classList.toggle('active');

// Метод contains
if (element.classList.contains('special')) {
    // Действия, если класс есть
}

// Метод replace
element.classList.replace('oldClass', 'newClass');

// Метод item
const firstClass = element.classList.item(0);

// Метод toString
const classString = element.classList.toString();

//-----------------------------
//__Create a To-Do List Using JavaScript

const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = [];

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        tasks.push({ text: taskText });
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks() {
    taskList.innerHTML = "";
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
displayTasks();

//------------------------------
//__Introduction to Browser Object Model (BOM)

// BOM (Browser Object Model)

// Компоненты BOM:
// - window: представляет окно браузера
// - document: представляет документ, загруженный в окно
// - navigator: предоставляет информацию о браузере
// - screen: предоставляет информацию об экране
// - history: предоставляет доступ к истории браузера
// - location: предоставляет информацию о текущем URL

// Интеграция BOM с HTML:
// 1. Создать HTML-документ с необходимой структурой и элементом <script> для вставки JavaScript-кода.
// 2. Включить HTML-элементы, такие как кнопки, для запуска методов BOM.
// 3. Разработать JavaScript-файл (например, script.js), содержащий код для использования методов BOM.
// 4. Связать этот файл с HTML-документом с помощью тега <script>.
// 5. Открыть HTML-файл в веб-браузере, чтобы взаимодействовать с кнопками и увидеть методы BOM в действии.

// Различия между DOM и BOM:
// - DOM представляет структуру и содержимое веб-страницы, а BOM предоставляет доступ к функциям, настройкам и поведению, специфичным для браузера.
// - DOM имеет иерархическую структуру, а BOM - нет.
// - Для доступа к DOM используется объект document, а для доступа к BOM - объект window.
// - DOM используется для динамического изменения HTML-элементов, а BOM используется для управления функциями браузера, такими как всплывающие окна, история и информация о клиенте.

// Примеры использования BOM:
// - window.alert('Сообщение'); // Вывести сообщение в окне браузера
// - window.confirm('Подтверждение'); // Запросить подтверждение у пользователя
// - window.open('https://example.com', '_blank'); // Открыть новую вкладку с указанным URL
// - window.location.href = 'https://example.com'; // Перенаправить на указанный URL
// - window.history.back(); // Перейти на предыдущую страницу

// Пример 1: Работа с объектом window

// Диалоговое окно с сообщением
window.alert('Это простое диалоговое окно');

// Окно подтверждения с сообщением
const result = window.confirm('Вы уверены?');
console.log(result); // true или false в зависимости от выбора пользователя

// Открытие нового окна или вкладки браузера
window.open('https://www.google.com', '_blank');

// Закрытие текущего окна
window.close();

// Получение текущего URL
const currentURL = window.location.href;
console.log(currentURL);

// Пример 2: Работа с объектом document

// Получение элемента по его ID
const element = document.getElementById('myElement');
console.log(element);

// Изменение текстового содержимого элемента
element.textContent = 'Новый текст';

// Добавление нового HTML элемента
const newElement = document.createElement('p');
newElement.textContent = 'Это новый параграф';
document.body.appendChild(newElement);

// Изменение стилей элемента
element.style.color = 'red';
element.style.fontSize = '20px';

// Пример 3: Работа с объектом navigator

// Получение информации о браузере
const browserName = navigator.userAgent;
console.log(browserName);

// Пример 4: Работа с объектом screen

// Получение размеров экрана
const screenWidth = screen.width;
const screenHeight = screen.height;
console.log(`Ширина экрана: ${screenWidth}px, Высота экрана: ${screenHeight}px`);

// Пример 5: Работа с объектом history

// Переход назад в истории браузера
history.back();

// Переход вперед в истории браузера
history.forward();

// Пример 6: Работа с объектом location

// Переход на другую страницу
location.href = 'https://www.google.com';

// Получение текущего URL
const currentURL = location.href;
console.log(currentURL);

// Замена текущего URL
location.replace('https://www.google.com');

// Пример интеграции BOM с HTML

// HTML структура с кнопкой
// <button onclick="showAlert()">Показать сообщение</button>

// JavaScript код для показа сообщения
function showAlert() {
    window.alert('Привет, мир!');
}

//----------------------------
//__Traversing the DOM

// Примеры JavaScript кода для каждого из рассмотренных методов и свойств

// Навигация по родительским и дочерним элементам
const parentElement = document.getElementById('parent');
const firstChild = parentElement.firstChild;
const lastChild = parentElement.lastChild;

// Навигация по соседним элементам
const middleParagraphElement = document.querySelector('.middle-paragraph');
const previousSibling = middleParagraphElement.previousSibling;
const nextSibling = middleParagraphElement.nextSibling;

// Поиск элементов внутри контейнера
const containerElement = document.getElementById('container');
const firstMatchedElement = containerElement.querySelector('.myClass');
const allMatchedElements = containerElement.querySelectorAll('.myClass');

// Переход вверх и вниз по дереву DOM
const parentNode = middleParagraphElement.parentNode;
const childNodes = parentElement.childNodes;
const firstChild = parentElement.firstChild;
const lastChild = parentElement.lastChild;

// Объяснение для каждого примера

// Навигация по родительским и дочерним элементам
// Получаем родительский элемент с определенным ID
// Затем, используя свойства firstChild и lastChild, получаем первый и последний дочерний элементы родительского элемента

// Навигация по соседним элементам
// Получаем элемент с классом "middle-paragraph" с помощью функции querySelector
// Затем, используя свойства previousSibling и nextSibling, получаем предыдущий и следующий соседние элементы

// Поиск элементов внутри контейнера
// Получаем элемент с определенным ID
// Затем, используя функции querySelector и querySelectorAll, ищем первый и все элементы внутри контейнера, соответствующие указанному CSS селектору

// Переход вверх и вниз по дереву DOM
// Получаем родительский элемент и дочерние элементы с помощью свойств parentNode, childNodes, firstChild и lastChild

// <!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta name="viewport" content="width=device-width, initial-scale=1.0">
//   <title>DOM Traversal Example</title>
// </head>
// <body>
//   <div id="parent">
//     <h1>Parent Element</h1>
//     <p>First Child Element</p>
//     <p>Last Child Element</p>
//   </div>
// </body>
// </html>

// В данном примере:
// Родительский элемент - <div id="parent">
// Первый дочерний элемент - <h1>Parent Element</h1>
// Второй дочерний элемент - <p>First Child Element</p>
// Третий дочерний элемент - <p>Last Child Element</p>

//Для получения родительского элемента:
const parentElement = document.getElementById('parent');
const parentNode = parentElement.parentNode;

//Для получения первого дочернего элемента:
const firstChild = parentElement.firstChild;

//Для получения последнего дочернего элемента:
const lastChild = parentElement.lastChild;

//-------------------------
//__Styling DOM Elements

// Примеры JavaScript кода для каждого из рассмотренных методов и свойств

// Метод element.style.property
const button = document.getElementById('myButton');
button.style.backgroundColor = 'blue';
button.style.color = 'white';
button.style.fontSize = '16px';

// Свойство element.classList
const div = document.getElementById('myDiv');
const toggleClass = () => {
  div.classList.toggle('active');
  if (div.classList.contains('active')) {
    div.style.backgroundColor = 'green';
  } else {
    div.style.backgroundColor = 'yellow';
  }
};

// Метод element.setAttribute
const paragraph = document.getElementById('myParagraph');
paragraph.setAttribute('style', 'color: blue; font-size: 18px;');

// Свойство element.style.cssText
const text = document.getElementById('myText');
text.style.cssText = 'color: green; font-weight: bold;';

// Метод element.style.setProperty
const paragraph = document.getElementById('myParagraph');
paragraph.style.setProperty('color', 'purple', 'important');

// Метод element.style.removeProperty
const paragraph = document.getElementById('myParagraph');
paragraph.style.removeProperty('font-size');

// Объяснение для каждого примера

// Метод element.style.property
// Получаем элемент с определенным ID
// Затем, используя свойство style, устанавливаем значения CSS свойств (background-color, color, font-size) для изменения внешнего вида элемента

// Свойство element.classList
// Получаем элемент с определенным ID
// Затем, используя методы toggle и contains у свойства classList, добавляем или удаляем CSS класс (active) в зависимости от его наличия
// После этого устанавливаем цвет фона элемента в зависимости от наличия класса (active)

// Метод element.setAttribute
// Получаем элемент с определенным ID
// Затем, используя метод setAttribute, устанавливаем значение атрибута style для изменения внешнего вида элемента

// Свойство element.style.cssText
// Получаем элемент с определенным ID
// Затем, используя свойство cssText, устанавливаем значение CSS свойств для изменения внешнего вида элемента
// Обратите внимание, что это заменит существующий инлайн стиль элемента полностью

// Метод element.style.setProperty
// Получаем элемент с определенным ID
// Затем, используя метод setProperty, устанавливаем значение CSS свойства (color) для изменения внешнего вида элемента
// Параметр 'important' гарантирует, что это свойство имеет приоритет перед другими примененными стилями

// Метод element.style.removeProperty
// Получаем элемент с определенным ID
// Затем, используя метод removeProperty, удаляем CSS свойство (font-size) из инлайн стиля элемента
// Это позволяет сбросить или изменить стили на уровне отдельного свойства