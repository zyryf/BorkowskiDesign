$("header button").click(function () {
    $('html,body').animate({
            scrollTop: $(".main").offset().top
        },
        1200);
});

const $distanceAboutFromTop = $('.about').offset().top;
const $distanceMeFromTop = $('.me').offset().top;
const $pageHeight = $(window).height();

$(document).on('scroll', function () {
    if ($(window).scrollTop() > $distanceAboutFromTop - $pageHeight / 2) {
        $('.about').addClass('active');
    }

    if ($(window).scrollTop() > $distanceMeFromTop - $pageHeight) {
        $('.me').addClass('active');
    }



})

$('div.moreIcon').on('click', function () {
    $('.info').toggleClass('active');
    $('div.all').toggleClass('blur');
    $('i.fa-info-circle').toggleClass('active');
    $('i.fa-home').toggleClass('active');
})