$('.js-openbar').on('click', function() {

    openBar();
});

function openBar(){
    var accordion__content = $(this).next('.test-words__block-content-item');
    var accordion__block = $(this).parent('.test-words__block-content');

    if (accordion__block.hasClass('content-active')) {
        accordion__content.slideUp();
        accordion__block.removeClass('content-active');

    } else {
        accordion__content.slideDown();
        accordion__block.addClass('content-active').siblings('.content-active').removeClass('content-active').find('.test-words__block-content-item').slideUp();
    }
}


