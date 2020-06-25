// https://kenwheeler.github.io/slick/

$(document).ready(function () {
    $('.caroussel-wheeler').slick({
        dots: false,
        infinite: false,
        speed: 2000,
        slidesToShow: 6,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false,
                    prevArrow: false,
                    nextArrow: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.caroussel').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        slidesToShow: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: false,
        nextArrow: false
    });
    $('.caroussel-cpt').slick({
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 2000,
        fade: true,
        cssEase: 'linear',
        prevArrow: false,
        nextArrow: false
    });

});
