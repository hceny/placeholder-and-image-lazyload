/**
 * This is just a demo use.
 * 此处只是演示使用。
 */
'use strict';
$(function () {
    var node = $('<div class="box"></div>');
    var loginBox = $('.login-box');
    var index = 0;
    var randomNumber = function (type) {
        if (type === 'width')
            return Math.ceil(Math.random() * $(window).width());
        else
            return Math.ceil(Math.random() * $(window).height());
    }
    for (; index < 100; index++) {
        node = node.clone();
        node.css({
            'top': randomNumber('height') + 'px',
            'left': randomNumber('width') + 'px'
        });
        $(document.body).append(node);
    }
    loginBox.css({
        'top': 0,
        'left': $(window).width() / 2 - loginBox.width() / 2
    }).show().animate({
        'top': $(window).height() / 2 - loginBox.height() / 1.5
    }, 200);

    $placeholder.init({all:true,color:true});
    $(document).on('click', '.input-btn', function () {
        $('#input-hidden').show();
        $placeholder.refresh();
    });
});