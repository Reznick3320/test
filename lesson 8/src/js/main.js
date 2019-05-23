"use strict";
/*
1) Добавить весь функционал, повторяя за видео

2) Если программа еще не запущена( не нажали кнопку "Начать расчет") - сделать кнопки неактивными.

3) Реализовать функционал: при расчете дневного бюджета учитывать сумму обязательных трат (т. e. от бюджета на месяц отнимаем общую сумму всех обяз. трат и ее делим на 30 дней)

4) Проверить, чтобы все работало и не было ошибок в консоли

5) Добавить папку с уроком на свой GitHub
*/

let btnStart = document.getElementById("start"),
    budgetVal = document.getElementsByClassName('budget-value')[0],
    dayBudgetVal = document.getElementsByClassName('daybudget-value')[0],
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
    optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item'),
    incomeItem = document.querySelector('.choose-income'),
    checkSavings = document.querySelector('#savings'),
    sumValue = document.querySelector('.choose-sum'),
    percentValue = document.querySelector('.choose-percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


let money, time;

btnStart.addEventListener('click', function () {
    time = prompt("Введите  дату в формате YYYY-MM-DD", "");
    money = +prompt("Ваш бюджет на месяц", "");
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц", "");
    }
    appData.budget = money;
    appData.dataTime = time;
    budgetVal.textContent = money.toFixed();
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

expensesBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        let a = expensesItem[i].value,
            b = expensesItem[++i].value;

        if ((typeof (a) === 'string') && (typeof [a] != null) && (typeof [b] != null) &&
            a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            sum += +b;
        } else {
            i = i - 1;
        }
    }
    expensesVal.textContent = sum;
});

optionalExpensesBtn.addEventListener('click', function () {
    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;
        optionalexpensesVal.textContent += appData.optionalExpenses[i] + ' ';
    }
});

countBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        dayBudgetVal.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelVal.textContent = 'Минимальный уроыень достатка';
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelVal.textContent = 'Средний уровень достатка';
        } else if (appData.moneyPerDay > 2000) {
            levelVal.textContent = 'Высокий уровень достатка';
        } else {
            levelVal.textContent = 'Error';
        }
    } else {
        dayBudgetVal.textContent = 'Произошла ошибка';

    }

});

incomeItem.addEventListener('input', function () {
    let items = incomeItem.value;
    appData.income = items.split(", ");
    incomeVal.textContent = appData.income;
});

checkSavings.addEventListener('click', function () {
    if (appData.savings == true) {
        appData.savings = false;
    } else {
        appData.savings = true;
    }
});

sumValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsVal.textContent = appData.monthIncome.toFixed(1);
        yearsavingsVal.textContent = appData.yearIncome.toFixed(1);
    }
});

percentValue.addEventListener('input', function () {
    if (appData.savings == true) {
        let sum = +sumValue.value,
            percent = +percentValue.value;

        appData.monthIncome = sum / 100 / 12 * percent;
        appData.yearIncome = sum / 100 * percent;

        monthsavingsVal.textContent = appData.monthIncome.toFixed(1);
        yearsavingsVal.textContent = appData.yearIncome.toFixed(1);
    }
}); 

let appData = {
    budget: money,
    expenses: {},
    optionalExpenses: {},
    income: [],
    dataTime: time,
    savings: false,
    clooseExpenses: function () {

    },
    delectDayBudget: function () {

        alert = ("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    delectLevel: function () {

    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какая сумма накоплений"),
                percent = +prompt("Под какой процент");


            alert("Доход в месяц с вашего дипозита: " + appData.MonthIncome);
        }
    },
    clooseOptExpenses: function () {

    },
    clooseIncome: function () {
        for (let i = 1; i < 2; i++) {

            if ((typeof (items) === 'string') && (typeof (items) != null) && (items != '')) {

                appData.income.push(prompt("Что может что то ещё", ""));
                appData.income.sort();
            } else {
                i--;
            }
        }
        appData.income.forEach(function (item, i, incomeMass) {
            alert("Способы дополнительного зароботка: " + incomeMass);
        });
    }
};