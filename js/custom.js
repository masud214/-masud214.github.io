$(function () {
    "use strict";
//    about part slied
  $('.about-slider').slick({
     slidesToShow: 1,
     slidesToScroll: 1,
     autoplay: true,
      arrows: false,
      dots: true,
      speed: 2000,
     autoplaySpeed: 2000,
    });

    //    wow js
    new WOW().init();

    //preloader-part js

    $(window).on('load', function () {
        $(".preloader").delay(1000).fadeOut(1000);
    });

    // back2top js
    var back2top = $(".back-2-top");
    var html_body = $("html, body");

    back2top.on('click', function () {
        html_body.animate({
            scrollTop: 0
        }, 500);
    });

    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        if (scrolling > 200) {
            back2top.fadeIn(500);
        } else {
            back2top.fadeOut(500);
        }

        if (scrolling > 200) {
            $(".main-menu").addClass("bg");
        } else {
            $(".main-menu").removeClass("bg");
        }
    });


    //smooth scroll
    $('.navbar-nav a').on('click', function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                html_body.animate({
                    scrollTop: target.offset().top - 0
                }, 1500);
                return false;
            }
        }
    });


    //   filter js
    var $grid = $('.grid').isotope({
        itemSelector: '.element-item',
        layoutMode: 'fitRows',
        getSortData: {
            name: '.name',
            symbol: '.symbol',
            number: '.number parseInt',
            category: '[data-category]',
            weight: function (itemElem) {
                var weight = $(itemElem).find('.weight').text();
                return parseFloat(weight.replace(/[\(\)]/g, ''));
            }
        }
    });

    // filter functions
    var filterFns = {
        // show if number is greater than 50
        numberGreaterThan50: function () {
            var number = $(this).find('.number').text();
            return parseInt(number, 10) > 50;
        },
        // show if name ends with -ium
        ium: function () {
            var name = $(this).find('.name').text();
            return name.match(/ium$/);
        }
    };

    // bind filter button click
    $('#filters').on('click', 'button', function () {
        var filterValue = $(this).attr('data-filter');
        // use filterFn if matches value
        filterValue = filterFns[filterValue] || filterValue;
        $grid.isotope({
            filter: filterValue
        });
    });

    // bind sort button click
    $('#sorts').on('click', 'button', function () {
        var sortByValue = $(this).attr('data-sort-by');
        $grid.isotope({
            sortBy: sortByValue
        });
    });

    // change is-checked class on buttons
    $('.button-group').each(function (i, buttonGroup) {
        var $buttonGroup = $(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $(this).addClass('is-checked');
        });
    });

    //    teacher slider js

    $('.teacher-slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: '.right',
        nextArrow: '.left',
        autoplay: true,
        speed: 1500,
        centerMode: true,
        centerPadding: false,
        autoplaySpeed: 2000,
        asNavFor: '.teacher-text-slider',

        responsive: [
            {
                breakpoint: 481,
                settings: {
                slidesToShow: 1,
                slidesToScroll: 1,

                }

           }],

        
        

    });
    $('.teacher-text-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        fade: true,
        speed: 1000,
        asNavFor: '.teacher-slider',


    });


    //type js
    $(".typer").typed({
        strings: ["the student", "the Bsc third batch", "the Bsc first year"],
        typeSpeed: 150,
        contentType: 'html',
        loop: true,
    });
    


});
