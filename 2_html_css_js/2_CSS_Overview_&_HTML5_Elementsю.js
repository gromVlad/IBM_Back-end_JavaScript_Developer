//__Special HTML Elements
//Тег <div> определяет разделение страницы и используется для группировки содержимого. В тег div может быть помещен контент любого типа, и необязательно, чтобы он был семантически связан.
/* 
<div>
  <h1>This is a heading in a div element</h1>
  <p>This is some text in a div element.</p>
</div>
*/

//Элемент <section> используется для группировки содержимого более специфичным способом, чем тег <div>. Содержимое в элементе <section> сгруппировано семантически значимым образом, то есть для объединения содержимого есть причина, отличная от целей стилизации
/* 
<section>
    <h1>Section 1</h1>
    <p>This is text related to section 1.</p>
</section>
<section>
    <h1>Section 2</h1>
    <p>This is some text related to section 2.</p>
</section>
*/

//Элемент <article> еще более специфичен, чем тег <section>. Он используется для группировки семантически связанного, автономного контента, который может быть значимым сам по себе
/* 
<article>
    <h1>Article 1</h1>
    <p>This paragraph is related only to article one and is meaningful on its own, without the rest of the code.</p>
</article>
<article>
    <h1>Article 2</h1>
    <p>This paragraph is related only to article two and is meaningful on its own, without the rest of the code.</p>
</article>
*/

//Элемент <header> - это контейнер, используемый для определения вводной информации/заголовка страницы
//Элемент <footer> определяет область внизу страницы (известную как нижний колонтитул). Здесь часто содержится информация об авторских правах, контактная информация и контактные ссылки.
/* 
<body>
    <article>
        <header>
            <h1>G8 summit protests</h1>
        </header>
        <div>
            <section id="public">
                <h1>Public demonstrations</h1>
                <p>...more...</p>                
            </section>
            <section id="control">
                <h1>Crowd control</h1>
                <p>...more...</p>                
            </section>            
        </div>
        <footer>
            <p>Published today.</p>
        </footer>
    </article>
</body>
*/

//Элемент <aside> используется для предоставления дополнительной информации, относящейся к основному обсуждению. Он позволяет отображать дополнительный контент или дополнительные ресурсы, не отвлекаясь от основного обсуждения, и часто размещается в документе в виде боковой панели.
/* 
<aside>
    <h4>Concept Definition</h4>
    <p>This goes over the concept mentioned in the paragraph to provide readers with further explanation if needed. However, it does not detract from the main content.</p>
</aside>
*/

//<figure> определяет автономный контент, такой как диаграмма или фотография, на который ссылаются из основного контента
//Тег <figcaption> определяет заголовок для содержимого элемента <figure>
/* 
<figure>
  <img src="images/IDSNlogo.png" width="500" height="500"/>
  <figcaption>IBM Developer Skills Network Logo</figcaption>
</figure>
*/

//Navigational Elements
/* 
<nav>
    <div class="menu">
        <a href="#">Home</a> |
        <a href="about.html">About</a> |
        <a href="register.html">Register</a> |
        <a href="#">Sign in</a>
    </div>
</nav>
*/

//__Дополнительные элементы HTML5
/* 
audio используется для встраивания звукового контента, такого как музыка или подкасты
<audio>
  <source src="soundtrack.mp3" type="audio/mpeg">
  <source src="soundtrack.ogg" type="audio/ogg">
  Your browser does not support the audio formats provided.
</audio>

<canvas> используется для рисования графики с помощью сценариев
<canvas>
    Your browser does not support the canvas tag.
</canvas>
<script>
    var canvas = document.getElementsByTagName("canvas")[0];
    var context = canvas.getContext("2d");
    context.fillRect(0, 0, 100, 100);
</script>

<embed> используется в качестве контейнера для встраивания внешних ресурсов, таких как медиаплееры и подключаемые приложения, на вашу веб-страницу
<embed type="text/html" src="another_webpage.html">

<track> определяет текстовые дорожки, такие как субтитры или подписи к видео, для элементов <audio> и <video>
<video>
  <source src="common_html_elements.mp4" type="video/mp4">
  <track src="english_subtitles.vtt" kind="subtitles" srclang="en" label="English">
  <track src="spanish_subtitles.vtt" kind="subtitles" srclang="es" label="Spanish">
</video>
*/

//____HTML5 Input Element
//HTML-тег fieldset
//HTML-тег <fieldset> находится внутри тега <form> и используется для группировки связанных элементов в HTML-форме, часто путем заключения их в рамку.Нет никаких ограничений на тип элементов, которые могут находиться внутри набора полей, но они в основном используются для группировки связанных элементов входного типа
//Атрибуты
// - disabled: указывает, что элементы, принадлежащие набору полей, должны быть отключены.
//- form: Указывает идентификатор формы, частью которой должен считаться набор полей.
//- name: Указывает имя для набора полей.
/* 
    <fieldset name="personal_details"> 
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"><br>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br>
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone"><br>
    </fieldset>
*/

//Тег <legend> используется с элементом <fieldset> в качестве первого дочернего элемента (первого внутреннего тега) для определения заголовка для сгруппированных связанных полей
/* 
    <fieldset name="personal_details"> 
        <legend>Personal Details</legend>
        <label for="fname">First name:</label>
        <input type="text" id="fname" name="fname"><br>
        <label for="lname">Last name:</label>
        <input type="text" id="lname" name="lname"><br>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email"><br>
        <label for="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone"><br>
    </fieldset>
*/

//___CSS Basics - Styling Your Web Page
