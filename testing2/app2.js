
$(window).on('scroll', function () {

    if ($(document).scrollTop() >= $("#one").position().top && $(document).scrollTop() < $("#two").position().top) {
        $('body').css('background-image', 'url(https://images.unsplash.com/photo-1640778925439-0969d08b0576?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80)')
    };
    if ($(document).scrollTop() >= $("#two").position().top && $(document).scrollTop() < $("#three").position().top) {
        $('body').css('background-image', 'url(https://images.unsplash.com/photo-1640648599618-39bb7b0b7302?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)')
    };
    if ($(document).scrollTop() >= $("#three").position().top && $(document).scrollTop() < $("#four").position().top) {
        $('body').css('background-image', 'url(https://images.unsplash.com/photo-1640650396464-02e8da7bcb75?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80)')
    };
    if ($(document).scrollTop() >= $("#four").position().top) {
        $('body').css('background-image', 'url(https://images.unsplash.com/photo-1614082164181-ff8380557f60?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1744&q=80)')
    };

});

