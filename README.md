## Выпускной проект  
 ### Автор
  * Карасев Алексей Сергеевич
  * E-mail: karasev.dev@gmail.com
 ### Portfolio  
  * Школа Loftschool
  * 3 курс
  * Макет Forest
  * Сентябрь-Ноябрь 2018
 ### Наставник 
  * Ольга Болотова
 ### Сайт
  * https://classicpower.github.io/portfolio/dist/ 
 ### Как установить проект
  1. Проверьте последнюю версию Node.js [последняя версия Node.js & NPM](https://nodejs.org/en/download/current/)
  2. Установить gulp-cli, node.js, npm 6+
  3. Клонировать проект
  4. npm i
  #### Скрипты package.json:
    | Скрипт  | Назначение |
    | ------- | ---------- |
    | dev:mpa              | Разработка основного сайта. Страницы **обо мне**, **блог** и т.п. Запустит dev сценарии **Gulp**. |
    | dev:spa              | Разработка админ панели в стиле **SPA** на **Vue.js**                                             |
    | build                | Сборка обоеих частей проекта. Все файлы будут доступны из директории **dist**                     |
    | reg                  | Консольная утилита для регистрации. Использовать перед началом работы над **админ-панелью**.      |
  #### Чтобы запустить скрипт:
    ```sh
    $ npm run имя_скрипта
    ```
 ### Содержание
  #### Каталог src - точка входа: 
   ##### Каталог admin:
    * Vue HTML JS для админки
   ##### Каталог assets:
    * Font - шрифты
    * Images - изображения, svg
    * Scripts - все модули js
    * Styles - все файлы scss, разделенные по каталогам block и layout. Основной файл - main.scss
   ##### Каталог views - pug файлы:
    * Pages - страницы проекты
    * / - шаблоны
  #### Каталог dist - готовый вариант
    * Все Файлы минифицированы
    * PUG => HTML
    * Все скрипты собраны в main.bundle.js
    * Все стили собраны в main.min.css
 ### Технологии  
  HTML5, PUG, SCSS, SVG, Node.js, Vue.js, GULP, Webpack, Git, WebGL, Parallax
