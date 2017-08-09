var menu = [{
    title: "Title 1",
    items: [{
        price: 100,
        fullPrice: 200,
        src: "http://pngimg.com/uploads/pizza/pizza_PNG7149.png",
        title: "text"
    }, {
        price: 100,
        fullPrice: 200,
        src: "http://pngimg.com/uploads/pizza/pizza_PNG7149.png",
        title: "text2"
    }, {
        price: 100,
        fullPrice: 200,
        src: "http://pngimg.com/uploads/pizza/pizza_PNG7149.png",
        title: "text3"
    }]
}, {
    title: "Title 2",
    items: [{
        price: 300,
        fullPrice: 700,
        src: "http://pngimg.com/uploads/pizza/pizza_PNG7149.png",
        title: "text"
    }, {
        price: 500,
        fullPrice: 1400,
        src: "http://pngimg.com/uploads/pizza/pizza_PNG7149.png",
        title: "text2"
    }]
}, {
    title: "Title 3",
    items: [{
        price: 300,
        fullPrice: 700,
        src: "http://pngimg.com/uploads/pizza/pizza_PNG7149.png",
        title: "text"
    }, {
        price: 500,
        fullPrice: 1400,
        src: "http://pngimg.com/uploads/pizza/pizza_PNG7149.png",
        title: "text2"
    }, {
        price: 500,
        fullPrice: 1400,
        src: "http://pngimg.com/uploads/pizza/pizza_PNG7149.png",
        title: "text3"
    }]
}];

var counter = 0;
var price = 0;
var fullPrice = 0;

var startCalculator = function () {
    onMenuItem(null);
};

var renderMenuPart = function (part) {
    $('#c-title').text(part.title);

    $('#c-container').empty();
    part.items.forEach(function (item) {
        $('#c-container').append(createMenuItem(item));
    });
};

var createMenuItem = function (item) {
    var dom = $('<div class="c-item" data-price="' + item.price + '"  data-full-price="' + item.fullPrice + '"></div>');
    var image = $('<img src="' + item.src + '"/>');
    var title = $('<span>' + item.title + '</span>');

    dom.append(image);
    dom.append(title);

    dom.click(function (e) {
        onMenuItem(e);
    });

    return dom;
};

var onMenuItem = function (e) {
    $('#c-steps').text((counter + 1) + "/" + menu.length);

    if (e) {
        // console.log($(e.target).parent().attr('data-price'));
        var item = $(e.target).parent();

        price += parseInt(item.attr('data-price'));
        fullPrice += parseInt(item.attr('data-full-price'));
    }

    if (counter < menu.length) renderMenuPart(menu[counter++]);
    else renderBill();
};

var renderBill = function () {
    $('#calculator').hide();

    $('#bill .b-price').text(price);
    $('#bill .b-fullPrice').text(fullPrice);
    $('#bill .b-diff').text(fullPrice - price);
    $('#bill').show();
};