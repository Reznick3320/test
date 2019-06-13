//document.getElementById('id') - получення елемента в JS
// $('#id'); получення елемента в jQuery

$(document).ready(function() {
    $('.list-item:first').hover(function () { //перший елемент
        $(this).toggleClass('active');
    });

    $('.list-item:eq(1)').on('click', function() { //другий елемент
        $('.image:even').fadeToggle('slow');
    });

    $('.list-item:eq(2)').on('click', function() {
        $('.image:odd').animate(
            {
                opacity: 'toggle',
                height: 'toggle',
            }, 1000
        );
    });
});