function renderDrawByPoints($container) {
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
        "                                    <p>Рисуем по точкам</p>\n" +
        "                                    <p class=\"test__title-small\">\n" +
        "                                        Реши примеры и соедини точки</p>\n" +
        "                                </div>\n" +
        "\n" +
        "                                <div class=\"test-words flex-test flex-test-space-between flex-test-alcenter\">\n" +
        "                                    <div class=\"test-words__item flex-test flex-test-space-between w35 arrow\">\n" +
        "                                        <div class=\"test-words__col tar left-col\">\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                8 + 2 - 9 = <input class=\"test-words__input\" value=\"1\" />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                17 - 5 = <input class=\"test-words__input\" value=\"12\" />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                16 - 9 = <input class=\"test-words__input\" value=\"7\" />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                15 - 7 = <input class=\"test-words__input\" value=\"8\" />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                8 + 2 - 8 = <input class=\"test-words__input\" value=\"2\" />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                17 + 11 = <input class=\"test-words__input\" value=\"28\" />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                12 - 2 = <input class=\"test-words__input\" value=\"10\" />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                15 + 5 = <input class=\"test-words__input\" value=\"20\" />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                16 - 5 = <input class=\"test-words__input\" value=\"11\" />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                15 + 4= <input class=\"test-words__input\" value=\"19\" />\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "\n" +
        "                                        <div class=\"test-words__col tar right-col\">\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                8 + 2 - 9 = <input class=\"test-words__input\" value=\"1\" />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                17 - 5 = <input class=\"test-words__input\" value=\"12\" />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                16 - 9 = <input class=\"test-words__input\" value=\"7\" />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                15 - 7 = <input class=\"test-words__input\" value=\"8\" />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                8 + 2 - 8 = <input class=\"test-words__input\" value=\"2\" />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                17 + 11 = <input class=\"test-words__input\" value=\"28\" />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                12 - 2 = <input class=\"test-words__input\" value=\"10\" />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                15 + 5 = <input class=\"test-words__input\" value=\"20\" />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                16 - 5 = <input class=\"test-words__input\" value=\"11\" />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                15 + 4= <input class=\"test-words__input\" value=\"19\" />\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "\n" +
        "                                    <div class=\"test-words__item w60 tar\">\n" +
        "                                        <div id='canvas-wrapper'></div>" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "\n" +
        "                            </div>";

    $container.html(html);
}