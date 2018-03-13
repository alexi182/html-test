function renderRestoringTheSequenceVertical($container){

    var html ="<a class=\"task-help _help\" href=\"#\">\n" +
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
        "                                    <p>Восстановление последовательности\n" +
        "                                    </p>\n" +
        "                                    <p class=\"test__title-small\">Расположите часы в порядке возрастания времени</p>\n" +
        "                                </div>\n" +
        "\n" +
        "                                <div id='sortDiv' class=\"test-words\">\n" +
        "                                    <div class=\"test-words__item\">\n" +
        "                                        <div class=\"test-words__content test-border w30\">\n" +
        "                                            <img class=\"test-words__img\" src=\"img/clock1.png\" alt=\"\">\n" +
        "                                            <img class=\"svg-sun\" src=\"img/svg/sun.svg\" alt=\"\">\n" +
        "                                        </div>\n" +
        "\n" +
        "                                    </div>\n" +
        "                                    <div class=\"test-words__item\">\n" +
        "                                        <div class=\"test-words__content test-border w30\">\n" +
        "                                            <img class=\"test-words__img\" src=\"img/clock2.png\" alt=\"\">\n" +
        "                                            <img class=\"svg-sun\" src=\"img/svg/sun.svg\" alt=\"\">\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                    <div class=\"test-words__item\">\n" +
        "                                        <div class=\"test-words__content test-border w30\">\n" +
        "                                            <img class=\"test-words__img\" src=\"img/clock3.png\" alt=\"\">\n" +
        "                                            <img class=\"svg-sun\" src=\"img/svg/sun.svg\" alt=\"\">\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "\n" +
        "                            </div>";
    $container.html(html);

    var $sort =  $("#sortDiv");

    dragula([$sort[0]], {
        direction: 'vertical'
    });
}