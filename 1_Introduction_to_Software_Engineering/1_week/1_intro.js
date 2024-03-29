//__Что такое программная инженерия?
/* 
- Программная инженерия - это применение научных принципов к проектированию и созданию программного обеспечения.
- В программной инженерии используется системный подход к сбору и анализу бизнес-требований для разработки программных приложений.
- В 1960-х годах программная инженерия стала дисциплиной и развивалась по мере развития технологий и научного подхода.
- В этот период существовал "кризис программного обеспечения", из-за которого разработка программного обеспечения была неэффективной и неотвечала растущему спросу.
- Для преодоления кризиса были разработаны стандартизированные методологии и инструменты CASE (автоматизированная разработка программного обеспечения).
- Термины "инженер-программист" и "разработчик программного обеспечения" часто используются как синонимы, но есть различия. Инженеры-программисты используют системный подход, в то время как разработчики программного обеспечения могут использовать более творческий подход.
- Инженеры-программисты работают над крупномасштабными проектами, проектируют и обслуживают программные системы, а также консультируют заинтересованные стороны.
- Сегодня процесс разработки программного обеспечения регулируется жизненным циклом разработки программного обеспечения (SDLC), который определяет шаги для создания высококачественного ПО.
*/


//__Введение в SDLC
/* 
- Программная инженерия - применение научных принципов к проектированию и созданию программного обеспечения.
- Жизненный цикл разработки программного обеспечения (SDLC) - систематический процесс разработки программного обеспечения в предсказуемые сроки и бюджет.
- SDLC состоит из этапов планирования, проектирования и разработки, которые могут быть реализованы в виде итеративного подхода.
- SDLC был разработан в середине 1960-х годов для решения проблем растущей сложности разработки программного обеспечения.
- Он был адаптирован к более итеративным методам в соответствии с требованиями клиентов и меняющимися требованиями.
- Преимущества использования SDLC включают минимизацию рисков и затрат, улучшение взаимодействия между командой и заинтересованными сторонами, четкое определение обязанностей членов команды и возможность итеративного использования с учетом изменяющихся требований.
*/

//__Фазы SDLC
/* 
**Этапы жизненного цикла разработки программного обеспечения (SDLC)**

* Планирование
* Проектирование
* Разработка
* Тестирование
* Развертывание
* Обслуживание

**Планирование**

* Сбор требований
* Анализ требований
* Документирование требований
* Установление приоритетов требований

**Проектирование**

* Разработка архитектуры программного обеспечения
* Создание проектной документации

**Разработка**

* Написание кода
* Тестирование кода

**Тестирование**

* Модульное тестирование
* Интеграционное тестирование
* Системное тестирование
* Приемочное тестирование

**Развертывание**

* Передача кода в производственную среду
* Пользовательское приемочное тестирование (UAT)

**Обслуживание**

* Сбор отзывов заинтересованных сторон
* Выявление проблем с пользовательским интерфейсом (UI)
* Предложение улучшений кода

**Особенности SDLC**

* Этапы SDLC являются дискретными, т.е. задачи предыдущего этапа не пересекаются с задачами следующего этапа.
* Первоначальный SDLC был задуман как традиционный каскадный метод, в котором этапы были линейными, но с тех пор они были адаптированы для внедрения итераций, позволяющих учитывать меняющиеся требования.
* Некоторые организации могут иметь разные названия для каждого этапа или больше или меньше этапов.

**Прототипирование**

* Прототип - это небольшая копия конечного продукта, используемая для получения отзывов заинтересованных сторон и определения требований.
* Прототипирование обычно происходит на этапе планирования, но может происходить и на других этапах SDLC.

**Спецификация требований к программному обеспечению (SRS)**

* SRS - это документ, в котором собраны все требования к программному обеспечению.
* SRS должен быть четко понят и одобрен всеми заинтересованными сторонами.

**Проектная документация**

* Проектная документация разрабатывается на этапе проектирования и используется разработчиками на этапе разработки.
* Проектная документация содержит подробное описание архитектуры программного обеспечения.

**Развертывание**

* Развертывание - это передача кода в производственную среду.
* Развертывание может происходить поэтапно: сначала приложение передается на пользовательское приемочное тестирование (UAT), а как только заказчик соглашается с этой функциональностью, оно запускается в производственную эксплуатацию.

**Обслуживание**

* Обслуживание начинается после развертывания кода в рабочей среде.
* На этапе обслуживания собираются отзывы заинтересованных сторон, могут быть выявлены другие проблемы с пользовательским интерфейсом и предложены улучшения кода.
* Если на этом этапе будут обнаружены ошибки, которые были пропущены во время тестирования, возможно, потребуется исправить эти ошибки для устранения высокоприоритетных проблем или включить их в требования в будущем выпуске программного обеспечения.
*/

//__Создание качественного программного обеспечения
/* 
**Создание качественного программного обеспечения**

**Общие процессы разработки программного обеспечения**

* Сбор требований
* Проектирование
* Кодирование для обеспечения качества
* Тестирование
* Релизы
* Документирование

**Сбор требований**

* Процесс сбора и документирования набора требований, которым должно соответствовать программное обеспечение.
* Требования к программному обеспечению можно разделить на четыре основные категории: функциональные, внешние и пользовательские интерфейсы, пользовательские интерфейсы, системные функции и нефункциональные возможности.

**Проектирование**

* Процесс преобразования требований в структуру, реализуемую с помощью кода.
* Архитектура системы определяет рекомендации по функциям системы, производительности, безопасности и характеристикам платформы.
* Проект объединяет бизнес-правила и логику приложений, дизайн интерфейса прикладного программирования, пользовательские интерфейсы и дизайн базы данных.

**Кодирование для обеспечения качества**

* Соблюдение ряда правил кодирования во время разработки.
* К ним относятся: соблюдение общих стандартов, условных обозначений, шаблонов и стилей программирования, использование автоматизированных инструментов для выявления программных и стилистических ошибок и комментирование самого кода.

**Тестирование**

* Процесс проверки соответствия программного обеспечения установленным требованиям и отсутствия ошибок.
* Уровни тестирования включают в себя модульное тестирование, интеграцию, системное тестирование и согласие пользователей.
* Типы тестирования включают в себя функциональное, нефункциональное и регрессионное тестирование.

**Релизы**

* Распространение новейшей версии программного обеспечения.
* Различные типы релизов предназначены для разных аудиторий.
* Обычно существуют версии «альфа», «бета» и «GA».

**Документирование**

* Предоставление текста или видео, объясняющих программное обеспечение техническим и нетехническим пользователям.
* Системная документация предназначена для технических пользователей и объясняет, как работает программное обеспечение или как его использовать.
* Пользовательская документация предоставляется конечным пользователям, не обладающим техническими навыками, чтобы помочь им в использовании продукта.
*/

//__Требования
/* 
**Требования**

**Процесс сбора требований**

1. Определение заинтересованных сторон
2. Определение целей и задач
3. Выявление требований
4. Документирование требований
5. Анализ и подтверждение требований
6. Приоритезация требований

**Спецификация требований к программному обеспечению (SRS)**

* Документ, в котором описываются функциональные возможности, которые должно выполнять программное обеспечение, а также устанавливаются критерии или уровни обслуживания для его производительности.
* Содержит следующие разделы:
    * Формулировка цели
    * Область применения
    * Ограничения, предположения и зависимости
    * Требования (функциональные, внешние, системные и нефункциональные)

**Спецификация требований пользователя (URS)**

* Документ, в котором описываются бизнес-потребности и ожидания конечных пользователей от программной системы.
* Представлены в виде «пользовательских историй» или «примеров использования».

**Спецификация системных требований (SYSRS)**

* Документ, в котором четко изложены требования ко всей системе.
* Содержит следующие разделы:
    * Системные возможности
    * Интерфейсы
    * Пользовательские характеристики
    * Политические требования
    * Нормативные требования
    * Требования к персоналу
    * Требования к производительности
    * Требования безопасности
    * Критерии приемлемости системы
    * Требования к аппаратному обеспечению
    * Требования к программному обеспечению

**Назначение документов по требованиям**

* SRS: документирует функциональные, внешние, системные и нефункциональные требования.
* URS: документирует истории пользователей.
* SYSRS: документирует возможности и критерии приемлемости системы, а также требования к политике, нормативным требованиям, персоналу, производительности, безопасности и аппаратному обеспечению.
*/

//__