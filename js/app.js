const SECTIONS = ["video", "product", "reasons", "pizza", "calculator"];
var position = 0;
var isScroll = false;

var PIZZA_REASONS = ["Інвестиції від 170 000 євро", "Франчайзинговий платіж від 5000 євро", "Площа від 200 м&sup2;", "Окупність від 24 до 36 мсяців", "Рояліті 1,5% від обігу"];

$(function () {
    scrolling(isScroll);

    $(window).on('wheel', function (e) {

        var delta = e.originalEvent.deltaY;

        scrolling(delta > 0);
    });

    $('#menu').click(function () {
        $('.tap-target').tapTarget('open');
    });

    showDomWithDelay($("#video-arrow"), 3, ["animated", "bounceInUp"]);

    startCalculator();

    $('.pizza img').mouseleave(function (e) {
        onPizzaPartLeave(e);
    });

    $('.pizza img').mouseenter(function (e) {
        onPizzaPartEnter(e);
    });

    $('.q-left')
        .addClass('a-hide')
        .viewportChecker({
            classToAdd: 'a-show magictime spaceInLeft',
            classToRemove: 'a-hide',
            offset: 200
        });

    $('.q-right')
        .addClass('a-hide')
        .viewportChecker({
            classToAdd: 'a-show magictime spaceInRight',
            classToRemove: 'a-hide',
            offset: 200
        });
});

var scrolling = function (isUp) {
    if (!isScroll && position >= 0 && position < SECTIONS.length) {
        isScroll = true;

        // console.log(position);
        if (isUp) {
            position += 1;
        } else {
            position -= 1;
        }

        if(position >= SECTIONS.length) position = SECTIONS.length - 1;
        if(position < 0) position = 0;

        // console.log(position);

        $('html, body').animate({
            scrollTop: $("#s-" + SECTIONS[position]).offset().top
        }, 700, function () {
            isScroll = false;
        });
    }
};

var showDomWithDelay = function (dom, delay, classes) {
    dom = $(dom);
    setTimeout(function () {
        dom.show();

        classes.forEach(function (item) {
            dom.addClass(item);
        });

    }, delay * 1000); // check again in a second
};

var onPizzaPartLeave = function (e) {
    var self = $(e.target);

    setTimeout(function () {
        self.parent().removeClass('p-hover');
    }, 300);
};

var onPizzaPartEnter = function (e) {
    var self = $(e.target);
    self.css({filter: 'grayscale(100%)'});

    addPizzaReason();
};

var addPizzaReason = function () {
    if (PIZZA_REASONS.length > 0) {
        var dom = $('<div class="pizza-reason animated bounceInRight">' + PIZZA_REASONS.pop() + '</div>');
        dom.addClass('icon' + (PIZZA_REASONS.length + 1));

        $('#pizza-reasons').append(dom);
    }


};

