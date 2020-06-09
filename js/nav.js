$(window).scroll(function () {
    if ($(document).scrollTop() > 700) {
        $('.nav-icon').addClass('nav-icon-display');
        $('.nav-download').addClass('nav-download-display');
    } else {
        $('.nav-icon').removeClass('nav-icon-display');
        $('.nav-download').addClass('nav-download-display');
    }
});