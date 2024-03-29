// do when access web
(function() {

})();

// do st after ready
$(document).ready(function() {
    searchClick(false);
    $('.carousel').carousel({
        interval: 2000
    });
    $('.content-introduce-detail__content').hover(
        function() {
            $(this).addClass('active');
        },
        function() {
            $(this).removeClass('active');
        }
    );
    scrollPage();
    autoPlayCarousel('.my-projects-slide', 3000, true, 3);
    autoPlayCarousel('.my-partners-slides', 3000, false, 4);
    autoPlayCarousel('.my-feedback-slide', 3000, false, 3);
});

// press esc to exit search form
$(document).on('keydown', function(e) {
    if (e.keyCode === 27) {
        $('.search-function').show();
        $('.search-function__input').hide();
    }
});

// change bg navrbar after scroll
$(function() {
    $(document).scroll(function() {
        var $nav = $(".navbar-fixed-top");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });
});

// scroll down to hide / up to show
function scrollPage() {
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
            $('#navbar').css('top', '0');
        } else {
            $('#navbar').css('top', '-5rem');
        }
        prevScrollpos = currentScrollPos;
    }
}

// search
function searchClick(e) {
    if (e === true) {
        $('.search-function').hide();

        if ($(window).width() >= 1900) {
            $('.nav').addClass('display-none');
            $('.navbar-brand').addClass('display-none');
            $('.collapse').addClass('padding-1rem');
            $('.form-inline').css('width', '100%').css('left', '26rem');
            $('.search-function__input').css('width', '100%');
            $('.nav-search').css('width', '55.5%');
        }

        $('.search-function__input').show();
        $('.nav-search').focus();
    } else {
        $('.search-function').show();

        if ($(window).width() >= 1900) {
            $('.nav').removeClass('display-none');
            $('.navbar-brand').removeClass('display-none');
            $('.collapse').removeClass('padding-1rem');
            $('.form-inline').css('width', '').css('left', '');
            $('.search-function__input').css('width', '');
            $('.nav-search').css('width', '');
        }

        $('.search-function__input').hide();
    }
}

// override function owl carousel
function autoPlayCarousel(className, time, check, item) {
    var owl = $(className);

    owl.owlCarousel({
        margin: 10,
        loop: true,
        center: true,
        autoplay: true,
        autoplayTimeout: time,
        autoplayHoverPause: true,
        navText: check ? ["<div class='nav-btn prev-slide'></div>", "<div class='nav-btn next-slide'></div>"] : [],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            480: {
                items: 1,
                nav: false
            },
            768: {
                items: 1,
                nav: false
            },
            992: {
                items: 1,
                nav: false
            },
            1024: {
                items: item,
                nav: false
            },
            1170: {
                items: item,
                nav: true
            },
            1366: {
                items: item,
                nav: true
            },
            1920: {
                items: item,
                nav: true
            }
        }
    });
    owl.on('changed.owl.carousel', function() {
        hoverToDiaplayContent(className);
    });
}

// hover to display content owl causel
function hoverToDiaplayContent(className) {
    if (className === '.my-feedback-slide') {
        return;
    }
    var item = $('.my-projects-slide .center').children();
    item.on('mouseover', function() {
        $(item).children('.item__img').addClass('display-none');
        $(item).children('.item__detail').removeClass('display-none');
    });
    item.on('mouseout', function() {
        $(item).children('.item__img').removeClass('display-none');
        $(item).children('.item__detail').addClass('display-none');
    });
}