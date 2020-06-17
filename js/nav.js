$(window).scroll(function () {
    if ($(document).scrollTop() > 700) {
        $('.nav-icon').addClass('nav-icon-display');
    } else {
        $('.nav-icon').removeClass('nav-icon-display');
    }
});
