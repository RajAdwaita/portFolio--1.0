$(document).ready(function () {
    $(window).scroll(function () {
        if (this.scrollY > 20) {
            $(' .navbar').addClass(' sticky');
        } else {
            $(' .navbar').removeClass(' sticky');
        }
    });

    $('.toggler').click(function () {
        $(this).toggleClass('active');
        $('.menu').toggleClass('active');
    });

    var typed = new Typed('.typing', {
        strings: ['Duine', 'Forbróir', 'Coder', 'Gamer'],
        typeSpeed: 100,
        backSpace: 80,
        loop: true,
    });
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    })
});
