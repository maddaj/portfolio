$(window).scroll(function () {
    if ($(document).scrollTop() > 700) {
        $('.nav-icon').addClass('nav-icon-display');
    } else {
        $('.nav-icon').removeClass('nav-icon-display');
    }
});

const sections = [...document.querySelectorAll('section')];
const link = (id) => document.querySelector('a[href="#${ id }"]');

const inView = (element) => {
    let top = element.offsetTop;
    let height = element.offsetHeight;

    while (element.offsetParent) {
        element = element.offsetParent;
        top = element.offsetTop;
    }

    return (
        top < (window.pageYOffset + window.innerHeight) && (top + height) > window.pageYOffset
    );
}

const init = () => {
    function update() {
        let next = false;

        sections.forEach(section => {
            const current = link(section.id);

            if (inView(section) && !next) {
                current.classList.add('current');
                next = true;
            } else {
                current.classList.remove('current');
            }
        });
    }
    update();
    window.addEventListener('scroll', update);
}

init();