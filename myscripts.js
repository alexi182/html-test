$( document ).ready(function() {
    createRightMenu();
    createTest(1);
});

function createRightMenu(){
    var html="";
    for(var i=1;i<18;i++){
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
    switch(num){
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
            html+="<a class=\"task-help _help\" href=\"#\">\n" +
                "                        <i class=\"icon icon_nav-question\"></i>\n" +
                "                     </a>\n" +
                "                     <a class=\"task-play _play\" href=\"#\">\n" +
                "                        <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
                "                           <use xlink:href=\"#icon-step-8\"></use>\n" +
                "                        </svg>\n" +
                "                     </a>\n" +
                "\n" +
                "                     <div class=\"test__task-block test__task_active\">\n" +
                "                        <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
                "                           <p>Раскраска</p>\n" +
                "                           <p class=\"test__title-small\">\n" +
                "                              Выполни действия, и раскрась картинку</p>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"test-words flex-test flex-test-space-between flex-test-alcenter\">\n" +
                "                           <div class=\"test-words__item\">\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <span>1 - </span>\n" +
                "                                 <div class=\"test-choise test-choise__brown\">\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <span>2 - </span>\n" +
                "                                 <div class=\"test-choise test-choise__dark-blue\">\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <span>3 - </span>\n" +
                "                                 <div class=\"test-choise test-choise__red\">\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <span>4 - </span>\n" +
                "                                 <div class=\"test-choise test-choise__dark-purple\">\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <span>5 - </span>\n" +
                "                                 <div class=\"test-choise test-choise__white-green\">\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "\n" +
                "                           <div class=\"test-words__item\">\n" +
                "                              <img src=\"img/paint2.png\" alt=\"\">\n" +
                "                           </div>\n" +
                "\n" +
                "                           <div class=\"test-words__item\">\n" +
                "\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <span>6 -</span>\n" +
                "                                 <div class=\"test-choise test-choise__pink\">\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <span>7 -</span>\n" +
                "                                 <div class=\"test-choise test-choise__white-blue\">\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <span>8 -</span>\n" +
                "                                 <div class=\"test-choise test-choise__purple\">\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <span>9 -</span>\n" +
                "                                 <div class=\"test-choise test-choise__green\">\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "\n" +
                "                              <div class=\"test-word__item-block flex-test\">\n" +
                "                                 <div class=\"test-choise test-choise__cancel\">\n" +
                "                                    <span>СБРОС</span>\n" +
                "                                 </div>\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "                        </div>\n" +
                "\n" +
                "                     </div>";
            $("#testContainer").html(html);
            break;
        case 5:
            renderColoringApple($("#testContainer"));
            break;
        case 6:
            renderFindWords($("#testContainer"));
            break;
        case 7:
            html+="<a class=\"task-help _help\" href=\"#\">\n" +
                "                        <i class=\"icon icon_nav-question\"></i>\n" +
                "                     </a>\n" +
                "                     <a class=\"task-play _play\" href=\"#\">\n" +
                "                        <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
                "                           <use xlink:href=\"#icon-step-8\"></use>\n" +
                "                        </svg>\n" +
                "                     </a>\n" +
                "\n" +
                "                     <div class=\"test__task-block test__task_active\">\n" +
                "                        <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
                "                           <p>Лабиринт\n" +
                "                           </p>\n" +
                "                           <p class=\"test__title-small\">\n" +
                "                              Помоги обезьянке добраться до бананов</p>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"test-words\">\n" +
                "                           <div class=\"test-words__item\">\n" +
                "                              <div class=\"test-words__content tac\">\n" +
                "                                 <img class=\"test-words__img\" src=\"img/labyrint.png\" alt=\"\">\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "                        </div>\n" +
                "\n" +
                "                     </div>";
            $("#testContainer").html(html);
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
            html+="<a class=\"task-help _help\" href=\"#\">\n" +
                "                        <i class=\"icon icon_nav-question\"></i>\n" +
                "                     </a>\n" +
                "                     <a class=\"task-play _play\" href=\"#\">\n" +
                "                        <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
                "                           <use xlink:href=\"#icon-step-8\"></use>\n" +
                "                        </svg>\n" +
                "                     </a>\n" +
                "\n" +
                "                     <div class=\"test__task-block test__task_active\">\n" +
                "                        <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
                "                           <p>Соединение линий, прокладка маршрута\n" +
                "                           </p>\n" +
                "                           <p class=\"test__title-small\">\n" +
                "                              Соедини начальные буквы слова с соответствующими картинками</p>\n" +
                "                        </div>\n" +
                "\n" +
                "                        <div class=\"test-words\">\n" +
                "                           <div class=\"test-words__item\">\n" +
                "                              <div class=\"test-words__content tac\">\n" +
                "                                 <img class=\"test-words__img\" src=\"img/line2.png\" alt=\"\">\n" +
                "                              </div>\n" +
                "                           </div>\n" +
                "                        </div>\n" +
                "\n" +
                "                     </div>";
            $("#testContainer").html(html);
            break;
        case 12:
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
                "                                    <p>Соединение линий, прокладка маршрута</p>\n" +
                "                                    <p class=\"test__title-small\">\n" +
                "                                        Построй разные отрезки с концами в данных точках так, чтобы на каждом рисунке  было 5 треугольников</p>\n" +
                "                                </div>\n" +
                "\n" +
                "                                <div class=\"test-words flex-test flex-test-space-between\">\n" +
                "\n" +
                "                                    <div class=\"test-words__item\">\n" +
                "                                        <img src=\"img/line3.png\" alt=\"\">\n" +
                "                                    </div>\n" +
                "\n" +
                "                                    <div class=\"test-words__item\">\n" +
                "                                        <img src=\"img/line4.png\" alt=\"\">\n" +
                "                                    </div>\n" +
                "\n" +
                "                                </div>\n" +
                "\n" +
                "                            </div>";
            $("#testContainer").html(html);
            break;
        case 13:
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
                "                                    <p>Мозайка</p>\n" +
                "                                    <p class=\"test__title-small\">\n" +
                "                                        Соберите изоображение из частей</p>\n" +
                "                                </div>\n" +
                "\n" +
                "                                <div class=\"test-words flex-test flex-test-space-between flex-test-alcenter\">\n" +
                "                                    <div class=\"test-words__item w60\">\n" +
                "                                        <div class=\"puzzle-block\">\n" +
                "                                            <div class=\"puzzle-block__item\">\n" +
                "                                                <img src=\"img/puzzle-1.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                            <div class=\"puzzle-block__item\">\n" +
                "                                                <img src=\"img/puzzle-2.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                            <div class=\"puzzle-block__item\">\n" +
                "                                                <img src=\"img/puzzle-3.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                            <div class=\"puzzle-block__item\">\n" +
                "                                                <img src=\"img/puzzle-4.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                            <div class=\"puzzle-block__item\">\n" +
                "                                                <img src=\"img/puzzle-5.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                            <div class=\"puzzle-block__item\">\n" +
                "                                                <img src=\"img/puzzle-6.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                            <div class=\"puzzle-block__item\">\n" +
                "                                                <img src=\"img/puzzle-7.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                            <div class=\"puzzle-block__item\">\n" +
                "                                                <img src=\"img/puzzle-8.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                            <div class=\"puzzle-block__item\">\n" +
                "                                                <img src=\"img/puzzle-9.png\" alt=\"\">\n" +
                "                                            </div>\n" +
                "                                        </div>\n" +
                "                                    </div>\n" +
                "\n" +
                "                                    <div class=\"test-words__item w40\">\n" +
                "                                        <img src=\"img/puzzle-main.png\" alt=\"\">\n" +
                "                                    </div>\n" +
                "                                </div>\n" +
                "\n" +
                "                            </div>";
            $("#testContainer").html(html);
            break;
        case 14:
            renderDrawByPoints($("#testContainer"));
            break;
        case 15:
            renderCrosswordBirds($("#testContainer"));
            break;
        case 16:
            html+="<a class=\"task-help _help\" href=\"#\">\n" +
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
                "                                        <img src=\"img/crosswords.png\" alt=\"\">\n" +
                "\n" +
                "                                        <div class=\"test-words__letter-block\">\n" +
                "                                            <span>А</span>\n" +
                "                                            <span>Б</span>\n" +
                "                                            <span>В</span>\n" +
                "                                            <span>Г</span>\n" +
                "                                            <span>Д</span>\n" +
                "                                            <span>Е</span>\n" +
                "                                            <span>Ё</span>\n" +
                "                                            <span>Ж</span>\n" +
                "                                            <span>З</span>\n" +
                "                                            <span>И</span>\n" +
                "                                            <span>Й</span>\n" +
                "                                            <span>К</span>\n" +
                "                                            <span>Л</span>\n" +
                "                                            <span>М</span>\n" +
                "                                            <span>Н</span>\n" +
                "                                            <span>О</span>\n" +
                "                                            <span>П</span>\n" +
                "                                            <span>Р</span>\n" +
                "                                            <span>С</span>\n" +
                "                                            <span>Т</span>\n" +
                "                                            <span>У</span>\n" +
                "                                            <span>Ф</span>\n" +
                "                                            <span>Х</span>\n" +
                "                                            <span>Ц</span>\n" +
                "                                            <span>Ч</span>\n" +
                "                                            <span>Ш</span>\n" +
                "                                            <span>Щ</span>\n" +
                "                                            <span>Ъ</span>\n" +
                "                                            <span>Ы</span>\n" +
                "                                            <span>Ь</span>\n" +
                "                                            <span>Э</span>\n" +
                "                                            <span>Ю</span>\n" +
                "                                            <span>Я</span>\n" +
                "                                        </div>\n" +
                "                                    </div>\n" +
                "                                </div>\n" +
                "\n" +
                "                            </div>";
            $("#testContainer").html(html);

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

            break;

        case 17:
            renderSelectAPicture($("#testContainer"));
            break;
    }
}


