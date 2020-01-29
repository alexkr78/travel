$(document).ready(function () {
    $('.ba-hero-slider').slick({
        speed: 2000,
        autoplay: true,
        arrows: false,
        dots: true,
        fade: true,
        cssEase: 'linear',
    });

    $('.ba-photos-slider').slick({
        speed: 1000,
        autoplay: true,
        dots: true,
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
    });
})


$(".ba-menu__link").click(function () {
    var elementClick = $(this).attr("href");
    var destination = $(elementClick).offset().top;
    $('html').animate({ scrollTop: destination }, 1500);
});

