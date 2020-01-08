$(document).ready(function () {
    
    // Bootstrap Tooltip
    $('[data-toggle="tooltip"]').tooltip();
    
    // Add Class to Header on Scroll
    function scrollHeaderClass() {
        if ($('header').length !== 0) {
            var header = $("header");
            var scroll = $(window).scrollTop();
            if (scroll >= 50) {
                header.addClass("fixedHeader");
            } else {
                header.removeClass("fixedHeader");
            }
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll >= 50) {
                    header.addClass("fixedHeader");
                } else {
                    header.removeClass("fixedHeader");
                }
            });
        }
    }
    scrollHeaderClass();
    
    $('body').on('click', '.v-tab-wrapper .nav-pills .nav-link', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top - 100
        }, 500);
    });
    
    $(window).resize(function () {
        scrollHeaderClass();
    });

});