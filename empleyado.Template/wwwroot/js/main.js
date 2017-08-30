$(function () {
    var nice = $("html").niceScroll({
        cursorborder: "0",
        cursorcolor: "#000",
        cursoropacitymax: 0.5,
        background: "#666"
    });  // The document page (body)

    console.log($('.login-form-page').height());

    if ($('.login-form-page').length) {
        // we are on a login page, calculate page height
        var wheight = $(window).height();
        var $formObj = $('.login-form-page');
        var fheight = $formObj.height();

        if (fheight > wheight) {
            $formObj.addClass('non-centerd-content');
        }
    }

    if ($('.header-container').length) {
        $(window).scroll(function (event) {
            checkSticky();
        });

        function checkSticky() {
            var scroll = $(window).scrollTop();

            if (scroll > 50) {
                $('body').addClass('sticky');
            } else {
                $('body').removeClass('sticky');
            }
        } checkSticky();
    }

    if ($('.all-panels').length) {
        $(".all-panels").niceScroll({
            cursorborder: "0",
            cursorcolor: "#FFF",
            cursoropacitymax: 0.05,
            background: "#222",
            oneaxismousemode: false,
            touchbehavior: true,
            grabcursorenabled: true
        });  // dashboard panels

        var panels = ($('.panels-carousel section').length * ($('.panels-carousel section').eq(1).width() + 40)) - 40;
        $(".panels-carousel").width(panels + "px");
    }

    if ($('.application-list').length) {
        $(".application-list").niceScroll({
            cursorborder: "0",
            cursorcolor: "#FFF",
            cursoropacitymax: 0.01,
            background: "#222",
            oneaxismousemode: false,
            touchbehavior: true,
            grabcursorenabled: true
        });  // dashboard panels

        $('.application-list').each(function (e) {
            // Process each application-list

            var panels = $('.app', this).length * ($('.app', this).eq(1).width() + 4);
            $('.apps-holder', this).width(panels + "px");
        });
    }

    if ($('.panel-titles-mobile').length) {
        $('.panel-titles-mobile').niceScroll({
            cursorborder: "0",
            cursorcolor: "#FFF",
            cursoropacitymax: 0.01,
            background: "#222",
            oneaxismousemode: false,
            touchbehavior: true,
            grabcursorenabled: true
        });  // panel titles

        var panels = 0;

        $('.panel-titles-mobile li').each(function (e) {
            // Process each application-list

            panels += $(this).width() + 5;
        });

        $('.panel-titles-mobile ul').width(panels + "px");
    }

    if ($('#mobile-menu-holder').length) {
        $('#mobile-menu-holder').niceScroll({
            cursorborder: "0",
            cursorcolor: "#FFF",
            cursoropacitymax: 0.5,
            background: "#222",
            oneaxismousemode: false,
            touchbehavior: true,
            grabcursorenabled: true
        });  // mobile menu
    }

    if ($('#app-nav').length) {
        $('#app-nav').niceScroll({
            cursorborder: "0",
            cursorcolor: "#FFF",
            cursoropacitymax: 0.5,
            background: "#222"
        });  // single-app nav

        $('#mobile-menu-holder .main-profile').prepend('<div class="single-app-nav">' + $('#app-nav').html() + '</div>');
    }

    if ($('#app-content').length) {
        $('#app-content').niceScroll({
            cursorborder: "0",
            cursorcolor: "#FFF",
            cursoropacitymax: 0.5,
            background: "#222"
        });  // single-app content
    }

    if ($('#content-scroll-content').length) {
        var w = $(window).height();
        var h = $('.header-container').outerHeight();
        var a = $('.app-summary-box').outerHeight();
        var rH = $('#content-scroll-content .main-header').outerHeight();

        $('.single-app-content').css('padding-top', h + 'px');

        var mHeight = w - h;

        if ($(window).width() > 600) {
            mHeight -= a;
        }

        $('#content-scroll-content').height(mHeight);
        $('#content-scroll-content .application-content-sidebar').height(mHeight);
        $('#content-scroll-content .application-content').height(mHeight);

        $('#content-scroll-content .standard-list').height(mHeight - rH);

        $('#content-scroll-content .standard-list').niceScroll({
            cursorborder: "0",
            cursorcolor: "#aaa",
            cursoropacitymax: 0.5,
            background: "#eee"
        }); // single-app sidebar content

        $('#content-scroll-content .cols-main').niceScroll({
            cursorborder: "0",
            cursorcolor: "#aaa",
            cursoropacitymax: 0.5,
            background: "#eee"
        }); // single-app content main

        $('.list-item').on('click', function (e) {
            var cText = $('.title', this).text();
            $('.cols-main').addClass('show').find('#current-title').text(cText);

            $('.list-item').removeClass('selected');
            $(this).addClass('selected');
        });

        $('#back-controller').on('click', function (e) {
            $('.cols-main').removeClass('show').find('#current-title').text('');
        });
    }

    $('#show-menu').on('click', function (e) {
        e.preventDefault();
        $('body').addClass('show-menu');
    });
    $('#close-menu').on('click', function (e) {
        e.preventDefault();
        $('body').removeClass('show-menu');
    });
});
