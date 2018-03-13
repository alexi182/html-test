function renderCrosswordBirds($container){
    var html ="<a class=\"task-help _help\" href=\"#\">\n" +
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
        "                                    <p>Кроссворд “Птицы”</p>\n" +
        "                                    <p class=\"test__title-small\">\n" +
        "                                        Реши примеры и узнай названия птиц</p>\n" +
        "                                </div>\n" +
        "\n" +
        "                                <div class=\"test-words birds-block flex-test flex-test-space-between\">\n" +
        "                                        <div class=\"test-words__item tac\">\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                <img src=\"img/bird1.png\" alt=\"\">\n" +
        "                                                8 + 2 - 8 = <input class=\"test-words__input\" value=\"2\">\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                <img src=\"img/bird2.png\" alt=\"\">\n" +
        "                                                17 - 10 = <input class=\"test-words__input\" value=\"\">\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                <img src=\"img/bird3.png\" alt=\"\">\n" +
        "                                                16 - 10 = <input class=\"test-words__input\" value=\"\">\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                <img src=\"img/bird4.png\" alt=\"\">\n" +
        "                                                15 - 10 = <input class=\"test-words__input\" value=\"\">\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                <img src=\"img/bird5.png\" alt=\"\">\n" +
        "                                                14 - 10 - 1 = <input class=\"test-words__input\" value=\"\">\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                <img src=\"img/bird5.png\" alt=\"\">\n" +
        "                                                14 - 10 - 1 = <input class=\"test-words__input\" value=\"\">\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                <img src=\"img/bird7.png\" alt=\"\">\n" +
        "                                                3 + 7 - 9 = <input class=\"test-words__input\" value=\"\">\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                        <div class=\"test-words__item tac\">\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                <img src=\"img/crossword3.png\" alt=\"\">\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +

        "                                </div>\n" +
        "                            </div>";

    $container.html(html);
}