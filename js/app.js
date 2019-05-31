;
(function ($) {
    "use strict";

    /*--------- PreLoader init ---------*/
    function initPreLoader() {
        jQuery('.loader-container').delay(400).fadeOut();
    }
    jQuery(window).on('load', function () {
        "use strict";
        initPreLoader();
    });

    /*--------- Animations on scroll ---------*/
    new WOW().init();

    /*--------- Header slider ---------*/
    $(document).ready(function () {
        $('.slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            mobileFirst: true,

            responsive: [{

                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }

            }, {

                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }

            }, {

                breakpoint: 250,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }]
        }).slickAnimation();
    });

    /*--------- Menu scroller ---------*/
    $(".scroller").on("click", function () {
        "use strict";
        var the_id = $(this).attr("href");
        $("html, body").animate({
                scrollTop: $(the_id).offset().top + 1
            },
            "slow"
        );
        return false;
    });

    $(".navbar .nav li a").on("click", function () {
        $(".nav")
            .find(".active")
            .removeClass("active");
        $(this).addClass("active");
    });

    /* active button on scroll menu */
    $(".navbar-nav").singlePageNav({
        speed: 1e3,
        currentClass: "active",
        offset: 80
    });

    /* fixed menu on scroll */
    $(window).scroll(function () {
        var bodyScroll = $(window).scrollTop(),
            menu = $(".menu");
        if (bodyScroll > 0) {
            menu.addClass("nav-scroll");
        } else {
            menu.removeClass("nav-scroll");
        }
    });

    /*--------- Mobile menu ---------*/
    if (window.matchMedia('(max-width: 823px)').matches) {
        $("#menu-button, .navbar-nav a").on("click", function (e) {
            e.preventDefault();

            $("#menu-button, .navbar").toggleClass("pushed-left");
            $(".navbar").slideToggle("block");
        });
    }

    /*--------- Mobile menu ---------*/
    // $("#menu-button, .navbar-nav a").on("click", function (e) {
    //     e.preventDefault();

    //     $("#menu-button, .navbar").toggleClass("pushed-left");
    //     $(".navbar").slideToggle("block");
    // });

    /*--------- Teams section ---------*/
    function initTeamTab() {
        jQuery(".text-box.team3 , .team3-img , .box1").hide();
        jQuery(".text-box.team2 , .team2-img").hide();
        jQuery(".team2-opener").click(function (event) {
            event.preventDefault();
            jQuery(".text-box.team2 , .team2-img , .box1 , .box3").show();
            jQuery(".text-box.team3 , .team3-img , .box2").hide();
            jQuery(".text-box.team1 , .team1-img").hide();
        });
        jQuery(".team3-opener").click(function (event) {
            event.preventDefault();
            jQuery(".text-box.team3 , .team3-img , .box2 , .box1").show();
            jQuery(".text-box.team2 , .team2-img , .box3").hide();
            jQuery(".text-box.team1 , .team1-img").hide();
        });
        jQuery(".team1-opener").click(function (event) {
            event.preventDefault();
            jQuery(".text-box.team1 , .team1-img , .box3 , .box2").show();
            jQuery(".text-box.team2 , .team2-img , .box1").hide();
            jQuery(".text-box.team3 , .team3-img").hide();
        });
    }

    initTeamTab();


    /*--------- Portfolio isotope ---------*/
    var $grid = $(".grid").isotope({});

    $(".filters").on("click", "span", function () {
        var filterValue = $(this).attr("data-filter");
        $grid.isotope({
            filter: filterValue,
            layoutMode: 'masonry'
        });
    });

    $("#works .filters span").on("click", function () {
        $(".filters")
            .find(".active")
            .removeClass("active");
        $(this).addClass("active");
    });


    /*--------- Testimonials slider ---------*/
    $(document).ready(function () {
        $('.testim-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: true,
            arrows: false,
            infinite: true,
            speed: 500,
            fade: true,
            cssEase: 'linear',
            mobileFirst: true,

            responsive: [{

                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true
                }

            }, {

                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true
                }

            }, {

                breakpoint: 250,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            }]
        });
    });



    /*--------- Number counting ---------*/
    var a = 0;
    $(window).scroll(function () {

        var oTop = $('#clients').offset().top - window.innerHeight;
        if (a == 0 && $(window).scrollTop() > oTop) {
            $('.counter').each(function () {
                var $this = $(this),
                    countTo = $this.attr('data-count');
                $({
                    countNum: $this.text()
                }).animate({
                        countNum: countTo
                    },

                    {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.floor(this.countNum));
                        },
                        complete: function () {
                            $this.text(this.countNum);
                        }
                    });
            });
            a = 1;
        }
    });


})(jQuery)