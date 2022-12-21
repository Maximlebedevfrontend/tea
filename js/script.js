window.onload = function () {
    $('.single-item').slick({
        infinite: true,
        // speed: 500,
        // fade: true,
        // cssEase: 'linear'
        slidesToShow: 1,
    });

    new WOW({
        animateClass: 'animate__animated',
    }).init();

    $("#accordion").accordion({
        heightStyle: "content"
    });

        $('.image-popup-fit-width').magnificPopup({type:'image'});




    let name = document.getElementById('name');
    let lastname = document.getElementById('lastname');
    let phone = document.getElementById('phone');
    let country = document.getElementById('country');

    let index = document.getElementById('index');
    let numbers = /[/\D/]/g;
    index.oninput = function () {
        this.value = this.value.replace(numbers, '');
    }

    let address = document.getElementById('address');
    let button = document.getElementById('button');
    let form = document.getElementById('form');
    let modal = document.getElementById('modal');


    button.onclick = function (e) {
        e.preventDefault();
        if (!name.value) {
            alert('Заполните поле Имя!');
            return;
        }
        if (!lastname.value) {
            alert('Заполните поле Фамилия!');
            return;
        }
        if (!phone.value) {
            alert('Заполните поле Телефон!');
            return;
        }
        if (!country.value) {
            alert('Заполните поле Страна!');
            return;
        }
        if (!index.value) {
            alert('Заполните поле Индекс!');
            return;
        }
        if (index.value.length !== 6) {
            alert('Индекс должен содержать 6 символов');
            return;
        }
        if (!address.value) {
            alert('Заполните поле Адрес');
            return;
        }

        form.style.display = 'none';

        modal.style.display = 'block';
    }
}