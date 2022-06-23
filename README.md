## Final project - news-explorer - Zemira Kehati

## Project Name: news-explorer

### Project description and its functionality:

- main page contains:

1. header - logo, nav-bar, search-form.
2. main - about the author - image and description.
3. footer - logo, nav-bar, social-links, copyright.

- saved news page contains:

1. header - logo, nav-bar, some articles details.
2. main - saved articles.
3. footer - logo, nav-bar, social-links, copyright.

- functionality:

1. clicking on login openes popup form. if you are not a member yet you can choose register link, that will open a register popup.
2. all forms are validated. if you fill the form correctly - the submit button becomes active. else - validation error appears.
3. when submitting register form - api request is sent - if somthing is wrong - you see a messege. if everything is ok - you get success messege.
4. when submitting login form - api request is sent - if everything is ok - you see a diffrent nav-bar options - "saned articles" and exit icon with your name.
5. you can search for news by search form. insert a key-word, api request is sent - a list of articles is resieved.
6. preloader appears until you resieve result.
7. if nothing is found - "nothing found" page is displayd.
8. on page you see maximum 3 articles. and "show-more" button. clicking it will load 3 more articles.
9. when all articles from list are desplayd - "show-more" button dissapears.
10. article functionality: save/unsave, open full article in new page.
11. clicking the "Saved articles" from header-nav-bar opens Saved articles page.
12. on Saved articles page you can see all saved articles, amount of saved articles and their keywords.
13. Saved articles page functionality: delete a saved article, open full article in new page.

### Technologies and techniques used:

- BEM metodologi.
- Popup windows.
- import and export.
- Api requests.
- hooks
- states

### In css I used -

- Grid
- Media queries
- The pseudo class "hover" for links.
- Transition for opening and closing forms images etc.

### In JS I used -

- Function for opening, closing and submiting all the forms.
- A keyHandler for closing popups by clicking outside the popup or by clicking escape.
- Several JS classes, and instances for them.
- Api requests.

## deployed link: kehati10@myNews.students.nomoreparties.sbs:/home/kehati10/frontend
