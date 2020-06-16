$(document).ready(function() {
    $('.  img-slide').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        adaptiveHeight: true
    });

    // $('.img-slide').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     arrows: false,
    //     fade: true,
    //     asNavFor: '.text-slide'
    // });
    // $('.text-slide').slick({
    //     slidesToShow: 1,
    //     slidesToScroll: 1,
    //     asNavFor: '.img-slide',
    //     dots: true,
    //     arrows: false,
    //     centerMode: true,
    //     focusOnSelect: true
    // });
})