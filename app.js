// фильтр на мобилках
const sidibarToggleBtn = document.querySelector('.menu-icon-wrapper');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');
// клик по кнопке для показа фильтра и изменения иконки
sidibarToggleBtn.onclick = function () {
    menuIcon.classList.toggle('menu-icon-active');
    sidebar.classList.toggle('sidebar--mobile-active');
}
// показать еще 3 карточки
const btnShowMoreCards = document.querySelector('.btn__more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');
// клик по кнопке и показ 3 скрытых карточек
btnShowMoreCards.addEventListener('click', function () {
    
    hiddenCards.forEach(function (card) {
        card.classList.toggle('card-link--hidden');
    })
});
// Показать/скрыть виджеты в сайдбаре
const widgets = document.querySelectorAll('.widget');
//Находим все виджеты на странице
widgets.forEach(function (widget) {
    //слушаем клик внутри виджета
    widget.addEventListener('click', function (e) {
        //если клик по заголовку тогда скрываем тело виджета
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }

    })
})

// работа с чек-боксами кнопка-любая
const checkBoxAny = document.querySelector('#location-05');
const topLocationCheck = document.querySelectorAll('[data-location-param]');

//клик по кнопке любая и отключение всех чек боксов
checkBoxAny.addEventListener('change', function (e){

    if (checkBoxAny.checked) {
        topLocationCheck.forEach(function (item) {
            item.checked = false;
        });
        

    } 
});
// клик по чебкосам верхней строки и отключение чекбокса любая
topLocationCheck.forEach(function (item) {
    item.addEventListener('change', function () {
       if (checkBoxAny.checked) {
        checkBoxAny.checked = false;     
      }
    });
});
// клик по доп параметрам и показ 3 доп опций
const showMoreOptions = document.querySelector('.widget__show-hidden');
const hiddenCheckboxses = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function (e) {
    e.preventDefault(e);
    //если блоки были скрыты значит показываем
    if (showMoreOptions.dataset.options == 'hidden') {

        hiddenCheckboxses.forEach(function (item) {
            item.style.display = 'block';
    });
    showMoreOptions.innerText = 'Скрыть доп. опции';
    showMoreOptions.dataset.options = 'visible';
    } else if(showMoreOptions.dataset.options == 'visible') {
        hiddenCheckboxses.forEach(function (item) {
            item.style.display = 'none';
    });
    showMoreOptions.innerText = 'Показать ещё';
    showMoreOptions.dataset.options = 'hidden';
    
    }
}
// сброс всех фильтров по нажатию на кнопку сброса автоматом так как обертка форма
