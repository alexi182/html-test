function renderCrossword($container) {
    var html = "<a class=\"task-help _help\" href=\"#\">\n" +
        "                                <i class=\"icon icon_nav-question\"></i>\n" +
        "                            </a>\n" +
        "\n" +
        "                            <a class=\"task-play _play\" href=\"#\">\n" +
        "                                <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
        "                                    <use xlink:href=\"#icon-step-8\"></use>\n" +
        "                                </svg>\n" +
        "                            </a>\n" +
        "\n" +
        "                            <div class=\"test__task-block test__task_active\">\n" +
        "                                <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
        "                                    <p> Кроссворд  “Персонажи мультфильмов”</p>\n" +
        "                                    <p class=\"test__title-small\">\n" +
        "                                        Разгадайте кроссворд</p>\n" +
        "                                </div>\n" +
        "\n" +
        "                                <div class=\"test-words flex-test flex-test-space-between\">\n" +
        "                                    <div class=\"test-words__item\">\n" +
        "                                        <div class=\"test-words__block-content\">\n" +
        "                                            <div class=\"test-words__block-head js-openbar\">\n" +
        "                                                1. по вертикали <span></span>\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__block-content-item\">\n" +
        "                                                <img src=\"img/crosswords2.png\" alt=\"\">\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "\n" +
        "                                        <div class=\"test-words__block-content\">\n" +
        "                                            <div class=\"test-words__block-head js-openbar\">\n" +
        "                                                2. по вертикали <span></span>\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__block-content-item\">\n" +
        "                                                <img src=\"img/crosswords2.png\" alt=\"\">\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "\n" +
        "                                        <div class=\"test-words__block-content\">\n" +
        "                                            <div class=\"test-words__block-head js-openbar\">\n" +
        "                                                3. по вертикали <span></span>\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__block-content-item\">\n" +
        "                                                <img src=\"img/crosswords2.png\" alt=\"\">\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "\n" +
        "                                        <div class=\"test-words__block-content\">\n" +
        "                                            <div class=\"test-words__block-head js-openbar\">\n" +
        "                                                4. по вертикали <span></span>\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__block-content-item\">\n" +
        "                                                <img src=\"img/crosswords2.png\" alt=\"\">\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "\n" +
        "                                        <div class=\"test-words__block-content\">\n" +
        "                                            <div class=\"test-words__block-head js-openbar\">\n" +
        "                                                5. по горизонтали <span></span>\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__block-content-item\">\n" +
        "                                                <img src=\"img/crosswords2.png\" alt=\"\">\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "\n" +
        "                                        <div class=\"test-words__block-content\">\n" +
        "                                            <div class=\"test-words__block-head js-openbar\">\n" +
        "                                                6. по вертикали <span></span>\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__block-content-item\">\n" +
        "                                                <img src=\"img/crosswords2.png\" alt=\"\">\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "\n" +
        "                                        <div class=\"test-words__block-content\">\n" +
        "                                            <div class=\"test-words__block-head js-openbar\">\n" +
        "                                                7. по горизонтали <span></span>\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__block-content-item\">\n" +
        "                                                <img src=\"img/crosswords2.png\" alt=\"\">\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "\n" +
        "                                        <div class=\"test-words__block-content\">\n" +
        "                                            <div class=\"test-words__block-head js-openbar\">\n" +
        "                                                8. по горизонтали <span></span>\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__block-content-item\">\n" +
        "                                                <img src=\"img/crosswords2.png\" alt=\"\">\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "\n" +
        "                                        <div class=\"test-words__block-content\">\n" +
        "                                            <div class=\"test-words__block-head js-openbar\">\n" +
        "                                                9. по горизонтали <span></span>\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__block-content-item\">\n" +
        "                                                <img src=\"img/crosswords2.png\" alt=\"\">\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "\n" +
        "                                    </div>\n" +
        "\n" +
        "                                    <div class=\"test-words__item w60 tar\">\n" +
        "<div class=\"crossword\" style=\"background: url(img/crosswords.png);width:558px;height:384px;margin:0px;padding:0px;background-size: 558px 384px;\">\n" +
        "                                            <!-- 2 -->\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_2_1\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_2_2\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_2_3\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_2_4\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_2_5\"></div>\n" +
        "                                            \n" +
        "                                            <!-- 3 -->\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_3_1\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_3_2\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_3_3\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_3_4\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_3_5\"></div>\n" +
        "                                            \n" +
        "                                            <!-- 4 -->\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_4_1\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_4_2\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_4_3\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_4_4\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_4_5\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_4_6\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_4_7\"></div>\n" +
        "                                            \n" +
        "                                            <!-- 5 -->\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_5_1\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_5_2\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_5_3\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_5_4\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_5_5\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_5_6\"></div>\n" +
        "                                            <!-- <div class=\"cw-letter\" id=\"cell_5_7\"></div> -->\n" +
        "                                            \n" +
        "                                            <!-- 6 -->\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_6_1\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_6_2\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_6_3\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_6_4\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_6_5\"></div>\n" +
        "                                            \n" +
        "                                            <!-- 7 -->\n" +
        "                                            <!-- <div class=\"cw-letter\" id=\"cell_7_1\"></div> -->\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_7_2\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_7_3\"></div>\n" +
        "                                            \n" +
        "                                            <!-- 8 -->\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_8_1\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_8_2\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_8_3\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_8_4\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_8_5\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_8_6\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_8_7\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_8_8\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_8_9\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_8_10\"></div>                                            \n" +
        "                                            \n" +
        "                                            <!-- 9 -->\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_9_1\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_9_2\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_9_3\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_9_4\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_9_5\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_9_6\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_9_7\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_9_8\"></div>\n" +
        "                                            <div class=\"cw-letter\" id=\"cell_9_9\"></div>\n" +
        "                                        </div>" +
        "\n" +
        "                                        <div class=\"test-words__letter-block\">\n" +
        "                                            <div id='letter-a' class='letter-wrapper'><span>А</span></div>\n" +
        "                                            <div id='letter-b' class='letter-wrapper'><span>Б</span></div>\n" +
        "                                            <div id='letter-v' class='letter-wrapper'><span>В</span></div>\n" +
        "                                            <div id='letter-g' class='letter-wrapper'><span>Г</span></div>\n" +
        "                                            <div id='letter-d' class='letter-wrapper'><span>Д</span></div>\n" +
        "                                            <div id='letter-e' class='letter-wrapper'><span>Е</span></div>\n" +
        "                                            <div id='letter-yo' class='letter-wrapper'><span>Ё</span></div>\n" +
        "                                            <div id='letter-zh' class='letter-wrapper'><span>Ж</span></div>\n" +
        "                                            <div id='letter-z' class='letter-wrapper'><span>З</span></div>\n" +
        "                                            <div id='letter-i' class='letter-wrapper'><span>И</span></div>\n" +
        "                                            <div id='letter-y' class='letter-wrapper'><span>Й</span></div>\n" +
        "                                            <div id='letter-k' class='letter-wrapper'><span>К</span></div>\n" +
        "                                            <div id='letter-l' class='letter-wrapper'><span>Л</span></div>\n" +
        "                                            <div id='letter-m' class='letter-wrapper'><span>М</span></div>\n" +
        "                                            <div id='letter-n' class='letter-wrapper'><span>Н</span></div>\n" +
        "                                            <div id='letter-o' class='letter-wrapper'><span>О</span></div>\n" +
        "                                            <div id='letter-p' class='letter-wrapper'><span>П</span></div>\n" +
        "                                            <div id='letter-r' class='letter-wrapper'><span>Р</span></div>\n" +
        "                                            <div id='letter-s' class='letter-wrapper'><span>С</span></div>\n" +
        "                                            <div id='letter-t' class='letter-wrapper'><span>Т</span></div>\n" +
        "                                            <div id='letter-u' class='letter-wrapper'><span>У</span></div>\n" +
        "                                            <div id='letter-f' class='letter-wrapper'><span>Ф</span></div>\n" +
        "                                            <div id='letter-h' class='letter-wrapper'><span>Х</span></div>\n" +
        "                                            <div id='letter-c' class='letter-wrapper'><span>Ц</span></div>\n" +
        "                                            <div id='letter-ch' class='letter-wrapper'><span>Ч</span></div>\n" +
        "                                            <div id='letter-sh' class='letter-wrapper'><span>Ш</span></div>\n" +
        "                                            <div id='letter-shy' class='letter-wrapper'><span>Щ</span></div>\n" +
        "                                            <div id='letter-mm' class='letter-wrapper'><span>Ъ</span></div>\n" +
        "                                            <div id='letter-nn' class='letter-wrapper'><span>Ы</span></div>\n" +
        "                                            <div id='letter-bb' class='letter-wrapper'><span>Ь</span></div>\n" +
        "                                            <div id='letter-aa' class='letter-wrapper'><span>Э</span></div>\n" +
        "                                            <div id='letter-yu' class='letter-wrapper'><span>Ю</span></div>\n" +
        "                                            <div id='letter-ya' class='letter-wrapper'><span>Я</span></div>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "\n" +
        "                            </div>";

    $container.html(html);

    $('.js-openbar').on('click', function() {

        var accordion__content = $(this).next('.test-words__block-content-item');
        var accordion__block = $(this).parent('.test-words__block-content');

        if (accordion__block.hasClass('content-active')) {
            accordion__content.slideUp();
            accordion__block.removeClass('content-active');

        } else {
            accordion__content.slideDown();
            accordion__block.addClass('content-active').siblings('.content-active').removeClass('content-active').find('.test-words__block-content-item').slideUp();
        }
    });

    var containerArr = [
        document.getElementById('letter-a'),
        document.getElementById('letter-b'),
        document.getElementById('letter-v'),
        document.getElementById('letter-g'),
        document.getElementById('letter-d'),
        document.getElementById('letter-e'),
        document.getElementById('letter-yo'),
        document.getElementById('letter-zh'),
        document.getElementById('letter-z'),
        document.getElementById('letter-i'),
        document.getElementById('letter-y'),
        document.getElementById('letter-k'),
        document.getElementById('letter-l'),
        document.getElementById('letter-m'),
        document.getElementById('letter-n'),
        document.getElementById('letter-o'),
        document.getElementById('letter-p'),
        document.getElementById('letter-r'),
        document.getElementById('letter-s'),
        document.getElementById('letter-t'),
        document.getElementById('letter-u'),
        document.getElementById('letter-f'),
        document.getElementById('letter-h'),
        document.getElementById('letter-c'),
        document.getElementById('letter-ch'),
        document.getElementById('letter-sh'),
        document.getElementById('letter-shy'),
        document.getElementById('letter-mm'),
        document.getElementById('letter-nn'),
        document.getElementById('letter-bb'),
        document.getElementById('letter-aa'),
        document.getElementById('letter-yu'),
        document.getElementById('letter-ya')
    ] + document.getElementsByClassName('cw-letter');


    dragula(containerArr, {
        copy: true,
        accepts: function (el, target) {
            return !$(target).hasClass('letter-wrapper') && $(target).hasClass('cw-letter');
        }
    }).on('drop', function (el) {
        if ($(el).parent().hasClass('letter-wrapper')) {
            return;
        }

        $(el).parent().html(el);
    }).on('over', function (el, container) {
        if ($(container).hasClass('letter-wrapper')) {
            return;
        }

        $(container).find('span').each(function(){
            if (!$(this).hasClass('gu-transit')) {
                $(this).css('display', 'none');
            }
        });
    }).on('out', function (el, container) {
        $(container).find('span').each(function(){
            if (!$(this).hasClass('gu-transit')) {
                $(this).css('display', 'block');
            }
        });
    });
}