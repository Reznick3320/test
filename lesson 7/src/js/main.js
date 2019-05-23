/*
1) Скачать архив, прикрепленный к уроку

2) Задание по проекту

·        Получить кнопку "Начать расчет" через id

·        Получить все блоки в правой части программы через классы (которые имеют класс название-value, начиная с <div class="budget-value"></div> и заканчивая <div class="yearsavings-value"></div>)

·        Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)

·        Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной. 

·        Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll

·        Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

3) Проверить, чтобы все работало и не было ошибок в консоли

4) Добавить папку с уроком на свой GitHub
*/

let btnStart = document.getElementById("start")[0],
    budgetVal = document.getElementsByClassName('budget-value')[0],
    daybudgetVal = document.getElementsByClassName('daybudget-value')[0],
    levelVal = document.getElementsByClassName('level-value')[0],
    expensesVal = document.getElementsByClassName('expenses-value')[0],
    optionalexpensesVal = document.getElementsByClassName('optionalexpenses-value')[0],
    incomeVal = document.getElementsByClassName('income-value')[0],
    monthsavingsVal = document.getElementsByClassName('monthsavings-value')[0],
    yearsavingsVal = document.getElementsByClassName('yearsavings-value')[0],

    expensesItem = document.getElementsByClassName('expenses-item'),
    expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1],
    countBtn = document.getElementsByTagName('button')[2],
    optionalExpensesItem = document.querySelectorAll('optionalexpenses-item'),
    incomeItem = document.querySelectorAll('choose-income'),
    checkSavings = document.querySelectorAll('#savings'),
    sumValue = document.querySelectorAll('choose-sum'),
    percentValue = document.querySelectorAll('choose-percent'),
    yearValue = document.querySelectorAll('year-value'),
    monthValue = document.querySelectorAll('month-value'),
    dayValue = document.querySelectorAll('day-value');


    /*
let money, time;

function start(){
    money = +prompt("Ваш бюджет на месяц: ", "");
    time = prompt("Введите дату в формате XX-MM-YYYY", "");

    while (isNaN(money) || money == '' || money == null){
        money = prompt("Ваш бюджет?", "");
    }
}

start();
*/
