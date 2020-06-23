// https://kenwheeler.github.io/slick/

$(document).ready(function () {
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
});
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

/*---------------------------------------------------- */
/*	contact form
------------------------------------------------------ */

/* local validation */
$('#contactForm').validate({

    /* submit via ajax */
    submitHandler: function (form) {

        var sLoader = $('#submit-loader');

        $.ajax({

            type: "POST",
            url: "../inc/sendEmail.php",
            data: $(form).serialize(),
            beforeSend: function () {

                sLoader.fadeIn();

            },
            success: function (msg) {

                // Message was sent
                if (msg == 'OK') {
                    sLoader.fadeOut();
                    $('#message-warning').hide();
                    $('#contactForm').fadeOut();
                    $('#message-success').fadeIn();
                }
                // There was an error
                else {
                    sLoader.fadeOut();
                    $('#message-warning').html(msg);
                    $('#message-warning').fadeIn();
                }

            },
            error: function () {

                sLoader.fadeOut();
                $('#message-warning').html("Something went wrong. Please try again.");
                $('#message-warning').fadeIn();

            }

        });
    }

});