# movies_library

Hello, here you can log in after a simple registration and see the most popular movies for today.
You can also search for a movie by title (to do this, enter the name in the search bar and press Enter or the search icon button)
Also feel free to use the sorting of movies by the number of your likes or rating - which you can set in your opinion)
You can also go to the movie page by selecting its name in the title of the card - where you can also change the rating by reading the description of it. And even delete this movie from the library or change the title, poster or description as you like)
If you don't need to change anything and you are interested in reading about the author - click on the author's name.
Well, enjoy reading:)

1. Страница регистрации (поля – username, password),
   зарегистрированные пользователи должны хранятся в
   localStorage браузера.
2. Страница логина
3. Страница редактирования фильма
4. Страница деталей о фильме
5. Страница деталей об Актёре
6. Главная страница со списком фильмов

Пояснения:
• Все страницы кроме логина и регистрации не доступны
для не авторизированных пользователей (должен
происходить редирект на логин страницу).
• Чтоб попасть на страницу деталей фильма – нужно
кликнуть на тайтл фильма.
• Чтоб попасть на страницу редактирования фильма нужно
нажать на кнопку Edit на странице деталей фильма.
• При нажатии на кнопку Delete происходит удаление
фильма и редирект на страницу списка.
• Чтоб перейти на страницу актёра – нужно нажать на имя
актёра на странице деталей фильма.
• Авторизированный пользователь должен видеть кнопку
log out
• Авторизированный пользователь не может попасть на
страницу логина/регистрации

1. (en/ua) - кастомный hook useTranslation - в header приложения переключатель языка.
2. Formik - форма изменения фильма.
3. classNames - для добавления/изменения css классов.
4. HOC - роуты приложения «защищены». Сами
   компоненты/страницы не должны знать о том
   авторизирован пользователь или нет (эта логика
   вынесена из них на другой уровень).