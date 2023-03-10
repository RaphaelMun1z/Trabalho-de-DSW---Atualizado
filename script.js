$(document).ready(function () {
    $(window).scroll(function () {
        $('.navbar').toggleClass("navigating", ($(window).scrollTop() > 0));
        $('aside').toggleClass("navigating", ($(window).scrollTop() > 0));
    });
});


