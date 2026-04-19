'use strict';

window.addEventListener('load', () => {
    const loadingElement = document.querySelector('#loading');
    setTimeout(() => {
        loadingElement.classList.add('loaded');
        document.body.classList.remove('loading');
    }, 2000);
});


// jQuery
$(function () {
    $('.header__btn').on('click', function() {
        $('.nav').toggleClass('active');
        $('.scrollStop').toggleClass('stop');
    });

    $('.nav__btn, .nav__item a').on('click', function() {
        $('.scrollStop').removeClass('stop');
        $('.nav').removeClass('active');
    });

    // fadein
    $(window).on('load scroll', function () {
        const fadein = $('.fadein');
        fadein.each(function () {
            const boxOffset = $(this).offset().top;
            const scrollPos = $(window).scrollTop();
            const wh = $(window).height();

            if (scrollPos > boxOffset - wh + 130) {
                $(this).addClass('animated');
            }
        });
    });
});
