$(document).ready(function() {
    $(window).scroll(function() {
        if (this.scrollY > 20) {
            $('.navbar').addClass('sticky');
        } else {
            $('.navbar').removeClass('sticky');
        }
        if (this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        } else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    /* Slide Up Script */
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });

    /* Typing animation Script */

    var typed = new Typed(".typing-1", {
        strings: ["Student @MMMUT", "Developer", "competitive Coder"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Student @MMMUT", "Developer", "competitive Coder"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    /* Toggle Menu/Navbar script */
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass('active')
        $('.menu-btn i').toggleClass('active')
    });

    /* Owl Carousel Script */
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayhoverPause: true,
        Responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    })
});