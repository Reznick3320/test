function tabs() {

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent'); //Получаємо зміні з HTML

    function hideTabContent(a) { //Функція для скривання блоку
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) { //Функція для відкривання блоку
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function (event) { //Фукція для переходу між табами
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')) { //Перевіряєми чи клікнути ми на відповідний таб
            for (let i = 0; i < tab.length; i++) { //Оброблюємо всі кліки
                if (target == tab[i]) { //Перевіряєми чи відповідає блок відповідному табу
                    hideTabContent(0); //Сктриваємо всі блоки
                    showTabContent(i); //Відкримаємо відповідний блок, відповідному табу
                    break;
                }
            }
        }
    });
}

module.exports = tabs;