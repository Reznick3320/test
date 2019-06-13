function form() {
    let message = {
        loading: 'Загрузка',
        succes: 'Спасибо! Мы скоро с вами свяжемся',
        failure: 'Error!!'
    };

    let form = document.querySelector('.main-form'),
        input = form.getElementsByTagName('input'),
        statusMessage = document.createElement('div'),
        contactForm = document.getElementById('form');

    statusMessage.classList.add('status');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); //відміняє пере загрузку сторінки !!!
        form.appendChild(statusMessage);

        let request = new XMLHttpRequest();
        request.open('POST', 'server.php');
        request.setRequestHeader('Content-Type', 'application/json; charset=utf-8');

        let formData = new FormData(form); //Получаємо все, що відповів користувач в формі

        let obj = {}; //створюємо об'єкт в який ми помістимо всі дані

        formData.forEach(function (value, key) { //поміщаємо дані в об'єкт
            obj[key] = value;
        });
        let json = JSON.stringify(obj); //Перетворення formData в формат JSON 

        request.send(json);

        request.addEventListener('readystatechange', function () {
            if (request.readyState < 4) {
                statusMessage.innerHTML = message.loading;
            } else if (request.readyState === 4 && request.status == 200) {
                statusMessage.innerHTML = message.succes;
            } else {
                statusMessage.innerHTML = message.failure;
            }
        });

        for (let i = 0; i < input.length; i++) {
            input[i].value = '';
        }
    });
}

module.exports = form;