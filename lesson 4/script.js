"use strict";

let money, time;

function start() {
    money = +prompt("Ваш бюджет на месяц", "");
    time = prompt("Введите  дату в формате YYYY-MM-DD", "");

    while (isNaN(money) || money == "" || money == null) {
        money = +prompt("Ваш бюджет на месяц", "");
    }
}

start();

let appData = {
    budget: money,
    dataTime: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
    clooseExpenses: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
                b = prompt("Во сколько обойдется?", "");

            if ((typeof (a) === 'string') && (typeof [a] != null) && (typeof [b] != null) &&
                a != '' && b != '' && a.length < 50) {
                console.log("done");
                appData.expenses[a] = b;
            } else {
                i = i - 1;
            }
        }
    },
    delectDayBudget: function () {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
        alert = ("Ежедневный бюджет: " + appData.moneyPerDay);
    },
    delectLevel: function () {
        if (appData.moneyPerDay < 1000) {
            console.log("Минимальный уроыень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        } else {
            console.log("Error");
        }
    },
    checkSavings: function () {
        if (appData.savings == true) {
            let save = +prompt("Какая сумма накоплений"),
                percent = +prompt("Под какой процент");

            appData.MonthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего дипозита: " + appData.MonthIncome);
        }
    },
    clooseOptExpenses: function () {
        for (let i = 1; i > 3; i++) {
            let opt = prompt("Статья необезательных росходов:", "");
            appData.optionalExpenses[i] = opt;
        }
    },
    clooseIncome: function () {
        for (let i = 1; i < 2; i++) {
            let items = prompt("Что принесет дополнительные доходы? (Перечислить через запетую)", "");
            if ((typeof (items) === 'string') && (typeof (items) != null) && (items != '')) {
                appData.income = items.split(", ");
                appData.income.push(prompt("Что может что то ещё", ""));
                appData.income.sort();
            } else {
                i--;
            }
        }
        appData.income.forEach (function (item, i, incomeMass) {
            alert ("Способы дополнительного зароботка: " + incomeMass);
        });
    }
};

function outForIn(){
    for (let key in appData){
        console.log ("Наша программа включает в себя данные: " + key);
    }
}

outForIn();