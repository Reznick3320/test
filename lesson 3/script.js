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
    savings: true
};

function clooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
            b = prompt("Во сколько обойдется?", "");

        if ((typeof (a) === 'string') && (typeof [a] != null) && (typeof [b] != null) &&
            a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
            i = i + 1;
        }
    }
}

clooseExpenses();
appData.moneyPerDay = (appData.budget / 30).toFixed(1);

alert("Ежедневный бюджет: " + appData.moneyPerDay);


if (appData.moneyPerDay < 1000) {
    console.log("Минимальный уроыень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
} else {
    console.log("Error");
}

function checkSavings(){
    if (appData.savings == true){
        let save = +prompt("Какая сумма накоплений"),
            percent = +prompt("Под какой процент");

        appData.MonthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего дипозита: " + appData.MonthIncome);
    }
}

checkSavings();