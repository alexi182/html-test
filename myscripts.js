$( document ).ready(function() {
    createRightMenu();
    createTest(1);
    $('.js-task-num').each(function(){
        $(this).removeClass("selected-li");
    });
    $($('.js-task-num')[0]).addClass("selected-li");
});

function createRightMenu(){
    var html="";
    for(var i=1;i<16;i++){
        html += "<li class=\"js-task-num\" onclick='createTest("+i+")'>" +
            "    <a href=\"#\">" +
            "    <b>"+i+"</b>" +
            "    </a>" +
            "    </li>";
    }
    $('#rightMenu').html(html);
    $('.js-task-num').on('click',function(){
        $('.js-task-num').each(function(){
            $(this).removeClass("selected-li");
        });
        $(this).addClass("selected-li");
    });
}

function testChoiceHandler(callback) {
    $('.test-choise').on('click', function() {
        var $this = $(this);

        $('.test-choise').removeClass('active').css('background-color', 'transparent');
        $this.addClass('active').css('background-color', $this.data('color'));

        if (callback && {}.toString.call(callback) === '[object Function]') {
            callback();
        }
    });
}

function getActiveTestChoiceColor() {
    var $activeTestChoice = $('.test-choise.active');

    return $activeTestChoice.length ? $activeTestChoice.data('color') : null;
}

function createTest(num){
    var html ="";
    switch (num) {
        case 1:
            renderRestoringTheSequenceVertical($("#testContainer"));
            break;
        case 2:
            renderRestoringTheSequenceHorizontal($("#testContainer"));
            break;
        case 3:
            html+="<a class=\"task-help _help\" href=\"#\">\n" +
                "                                <i class=\"icon icon_nav-question\"></i>\n" +
                "                            </a>\n" +
                "                            <a class=\"task-play _play\" href=\"#\">\n" +
                "                                <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
                "                                    <use xlink:href=\"#icon-step-8\"></use>\n" +
                "                                </svg>\n" +
                "                            </a>\n" +
                "\n" +
                "                            <div class=\"test__task-block test__task_active\">\n" +
                "                                <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
                "                                    <p>Раскраска</p>\n" +
                "                                    <p class=\"test__title-small\">\n" +
                "                                        Выполни действия, и раскрась картинку</p>\n" +
                "                                </div>\n" +
                "\n" +
                "                                <div class=\"test-words flex-test flex-test-space-between flex-test-alcenter\">\n" +
                "                                    <div class=\"test-words__item\">\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__brown\">\n" +
                "                                                <span>8+2</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__dark-blue\">\n" +
                "                                                <span>17-5</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__red\">\n" +
                "                                                <span>16-9</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__dark-purple\">\n" +
                "                                                <span>15-7</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__white-green\">\n" +
                "                                                <span>8+3</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                    </div>\n" +
                "                                    <div class=\"test-words__item\">\n" +
                "                                        <img src=\"img/paint1.png\" alt=\"\">\n" +
                "                                    </div>\n" +
                "                                    <div class=\"test-words__item\">\n" +
                "\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__pink\">\n" +
                "                                                <span>8+2</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__white-blue\">\n" +
                "                                                <span>17-5</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__purple\">\n" +
                "                                                <span>16-9</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__green\">\n" +
                "                                                <span>15-7</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "\n" +
                "                                        <div class=\"test-word__item-block\">\n" +
                "                                            <div class=\"test-choise test-choise__cancel\">\n" +
                "                                                <span>СБРОС</span>\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                    </div>\n" +
                "                                </div>\n" +
                "\n" +
                "                            </div>";
            $("#testContainer").html(html);
            break;
        case 4:
            renderColoringSnowman($("#testContainer"));
            break;
        case 5:
            renderColoringApple($("#testContainer"));
            break;
        case 6:
            renderFindWords($("#testContainer"));
            break;
        case 7:
            renderLabyrinth($("#testContainer"));
            break;
        case 8:
            renderRebusFour($("#testContainer"));
            break;
        case 9:
            renderRebusThree($("#testContainer"));
            break;
        case 10:
            renderRebusRoundAndSquare($("#testContainer"));
            break;
        case 11:
            rednderPuzzle($("#testContainer"));
            break;
        case 12:
            renderDrawByPoints($("#testContainer"));
            break;
        case 13:
            renderCrosswordBirds($("#testContainer"));
            break;
        case 14:
            renderCrossword($("#testContainer"));
            break;
        case 15:
            renderSelectAPicture($("#testContainer"));
            break;
    }

    if (num < 15) {
        $('.js-go-to-next-test-btn').css('display', 'inline-block').on('click', function () {
            createTest(num + 1);
            $('.js-task-num').each(function(){
                $(this).removeClass("selected-li");
            });
            $($('.js-task-num')[num]).addClass("selected-li");
        });

        $('.js-go-to-next-test').css('display', 'block').on('click', function() {
            createTest(num + 1);
            $('.js-task-num').each(function(){
                $(this).removeClass("selected-li");
            });
            $($('.js-task-num')[num]).addClass("selected-li");
        });
    } else {
        $('.js-go-to-next-test-btn').css('display', 'none');
        $('.js-go-to-next-test').css('display', 'none');
    }

    $('.js-clear').on('click', function() {
        createTest(num);
    });

    if (num === 1) {
        $('.js-go-to-prev-test').css('display', 'none');
    } else {
        $('.js-go-to-prev-test').css('display', 'block').on('click', function() {
            createTest(num - 1);
            $('.js-task-num').each(function(){
                $(this).removeClass("selected-li");
            });
            $($('.js-task-num')[num - 2]).addClass("selected-li");
        });
    }
}


