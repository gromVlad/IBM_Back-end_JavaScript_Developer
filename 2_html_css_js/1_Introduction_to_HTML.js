//Introduction to HTML
/* 
**Введение в HTML**

**HTML**

* Язык гипертекстовой разметки
* Язык разметки, который позволяет отображать документы в Интернете в виде веб-страниц.

**Элементы HTML**

* Строительные блоки HTML-страницы
* Представлены тегами
* Браузеры не отображают теги, но используют их для визуализации контента

**HTML5**

* Последняя версия HTML
* Поддерживает страницы, написанные с использованием синтаксиса HTML или XML
* Взаимодействует с предыдущими версиями HTML
* Включает разметку и API для веб-хранилища, видео и аудиоконтента

**Цели HTML5**

* Определить единый язык под названием HTML5, который может быть написан в синтаксисе HTML или XML.
* Определить модель обработки, которая может взаимодействовать с предыдущими реализациями HTML.
* Улучшить разметку документов.
* Включить разметку и API для идиом, таких как веб-хранилище, видео и аудиоконтент.

**Использование терминов HTML и HTML5**

* Разработчики могут использовать термины HTML и HTML5 как синонимы.
* В общем, термин HTML подразумевает HTML5.
* Используйте полный термин HTML5, если вам нужно различать версии, например, при обсуждении новых функций HTML5.

//__Функции HTML
/* 
* Позволяет классифицировать веб-страницы по разным разделам.
* Включает инструменты для эффективного управления данными, рисованием, видео и аудио.
* Облегчает разработку кроссбраузерных приложений для Интернета и портативных устройств.
* Обеспечивает большую гибкость и позволяет разрабатывать интересные и интерактивные веб-сайты.
* Помогает создать более привлекательный пользовательский интерфейс.
* Страницы, разработанные с использованием HTML5, могут работать так же, как и в настольных приложениях.
* Обеспечивает усовершенствованную многоплатформенную разработку за счет сочетания возможностей интерфейса прикладного программирования (API).

**Объектная модель документа (DOM)**

* Представление документа в памяти.
* Содержит узлы, определяющие тип документа и его структуру, например заголовки и абзацы, текстовые узлы и узлы комментариев.

**Когда использовать XML, а когда — HTML**

* HTML используется для создания веб-страниц, которые будут отображаться в браузере.
* XML используется для создания документов, которые будут обрабатываться программой.

**Различия между HTML и XHTML**

* XHTML является более строгой версией HTML.
* Все теги XHTML должны быть написаны в нижнем регистре.
* Все атрибуты XHTML должны иметь значение.
* Все значения атрибутов XHTML должны быть заключены в двойные или одинарные кавычки.
* XHTML должен быть правильно сформирован.

**Примечание**

* Мнения людей о том, использовать ли XHTML или HTML, разделились поровну.
*/

//___HTML Management and Support
/* 
**HTML Scripting**

**Скрипты**

* Используются для обеспечения более интерактивного пользовательского интерфейса при просмотре веб-сайтов.
* Можно использовать для выполнения различных задач, таких как проверка форм, динамическое изменение содержимого веб-сайта и обработка изображений.
* Можно отключить, поэтому рекомендуется использовать скрипты, но не полагаться на них.

**Включение скриптов**

Скрипты включаются при соблюдении следующих условий:

* Используемый браузер поддерживает написание сценариев.
* У пользователя включено написание сценариев.

**Песочницы HTML5**

* Позволяют управлять мэшапами iframe — веб-страницами, которые извлекают контент с нескольких сайтов.

**Объекты документов**
* HTML-документы, загруженные на страницу браузера, становятся объектами документов.
* Доступ к объектам документов возможен с помощью скриптов.

**Средства доступа к дереву DOM**
* API-интерфейсы HTML-документов, обеспечивающие доступ ко всем HTML-элементам на странице.
* Свойство, к которому осуществляется доступ, имеет префикс слова «документ».
* Например, document.head возвращает первый элемент заголовка, являющийся дочерним элементом элемента html, если таковой имеется, в противном случае значение равно нулю.

**Общие методы дерева HTML DOM**

* Document.getElementByID('id'): возвращает один элемент с указанным идентификатором.
* Document.getElementsByTagName('tag'): возвращает список всех элементов с указанным тегом.

**Пример использования API документов**

```html
<html>
<head>
<title>Пример использования API документов</title>
<script>
    function TextChecker() {
    var text = document.getElementById('TextField1').value;
    if (text == "") {
        alert("Вы не ввели текст.");
    }
    }
</script>
</head>
<body>
<h1>Пример использования API документов</h1>
<input type="text" id="TextField1">
<input type="button" value="Отправить" onclick="TextChecker()">
</body>
</html>
```

**Результат выполнения кода**
Пользователь вводит «Тест» в поле ввода и нажимает «Отправить». Результат отображается в диалоговом окне предупреждения на той же странице.
*/

//__HTML5 Browser Support
/* 
**Поддержка функций HTML5 браузерами**

* Не все браузеры полностью поддерживают все функции, описанные в спецификациях HTML5 и CSS3.
* Разработчики разных браузеров постоянно добавляют поддержку функций HTML5 в свои новые версии браузеров.
* Для наиболее полной поддержки функций HTML5 рассмотрите возможность использования Google Chrome.

**Таблицы поддержки браузеров**

* Показывают, какие функции поддерживаются в каких браузерах.
* Могут быть полезным инструментом при разработке веб-страниц.
* Пример: caniuse.com.

**Проверка поддержки браузером определенного элемента HTML5 с помощью JavaScript**

1. Создайте элемент DOM с помощью Document.createElement().
2. Включите тип элемента в качестве аргумента параметра.
3. Проверьте известное свойство или метод в созданном вами объекте DOM.
4. Если этого свойства или метода нет, значит, браузер еще не полностью поддерживает созданный элемент DOM (или тег HTML5).

**Пример использования JavaScript для проверки поддержки браузером определенного элемента HTML5**

```javascript
*/
var input = document.createElement('input');
input.type = 'date';

if (input.type !== 'date') {
  // Браузер не поддерживает ввод type=date.
}

//__Common HTML Element
/* 
<!DOCTYPE html>
<html>
    <head>
        <!-- Metadata goes here -->
    </head>
    <body>
        <!-- Content goes here -->
    </body>
</html>
*/

//Browser Tab Title
/* 
<head>
    <title>Sample Page Title</title>
</head>
*/

//Page Headings
/* 
<body>
    <h1>Most Important (and Largest) Heading</h1>
    <h6>Least Important (and Smallest) Heading</h6>
<body>
*/

//Adding Text
/* 
<body>
    <h1>Most Important (and Largest) Heading</h1>
    <p>This is some text. The content within this paragraph element can be as short or as long as needed.</p>
    <h6>Least Important (and Smallest) Heading</h6>
    <p>This is another paragraph of text.</p>
<body>
*/

//Using Line Breaks
//<p>This is some text that needs to be split up <br>here, <br>here, and <br>here.</p>

//Add Links to Other Pages
//<a href="https://www.ibm.com" target="_blank">IBM</a>

//places on the same page
/* 
<a href="#section">Link to section</a>
 ...
 <h1 id="section">Section</h1>
*/

//Create a List
/* 
<!-- Unordered List -->
<ul>
    <li>This is a bullet point </li>
    <li>The items in this list have no particular order </li>
    <li>Each item will appear as a bullet, rather than a number </li>
</ul>
<!-- Ordered List -->
<ol>
    <li>This is an ordered list </li>
    <li>The items in this list have a particular order </li>
    <li>Each item will be numbered, starting from 1 </li>
    <li>This is the fourth point in the list </li>
</ol>
*/

//Add a Table
//Таблица создается с помощью HTML с использованием тега <table>. Внутри таблицы каждая строка данных представлена с помощью тега <tr> (строка таблицы). Заголовки столбцов или строк могут быть заданы элементом <th> (заголовок таблицы). Наконец, каждый элемент данных в ячейках таблицы задается с помощью тега <td> (табличные данные).
/* 
<table>
    <tr>
        <th>Heading 1</th>
        <th>Heading 2</th>
        <th>Heading 3</th>
    </tr>
    <tr>
        <td>H1 - Data Item 1</td>
        <td>H2 - Data Item 1</td>
        <td>H3 - Data Item 1</td>
    </tr>
    <tr>
        <td>H1 - Data Item 2</td>
        <td>H2 - Data Item 2</td>
        <td>H3 - Data Item 2</td>
    </tr>
    <tr>
        <td>H1 - Data Item 3</td>
        <td>H2 - Data Item 3</td>
        <td>H3 - Data Item 3</td>
    </tr>
</table>
*/

//Add an Image
/* 
<!-- External Image -->
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/440px-IBM_logo.svg.png" alt="IBM Logo" width="300" height="300">

<!-- Local Images -->
<img src="images/IBMlogo.png" alt="IBM Logo" width="300" height="300">
*/

/* 
Определение термина
Дерево DOM “Объектная модель документа” - это представление данных объектов, которые составляют структуру и содержимое документа в Интернете.
XML - “Расширяемый язык разметки”, предназначенный для хранения и передачи данных, позволяющий пользователям определять свои собственные языки разметки, в первую очередь для отображения документов в Интернете.
XHTML - “Расширяемый язык разметки гипертекста”, аналогичный HTML, но с более строгими правилами форматирования.
API-интерфейсы веб-хранилища, которые позволяют хранить данные в браузере.
*/
