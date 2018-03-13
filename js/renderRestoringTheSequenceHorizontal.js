function renderRestoringTheSequenceHorizontal($container) {
    var html = "<a class=\"task-help _help\" href=\"#\">\n" +
        "                                <i class=\"icon icon_nav-question\"></i>\n" +
        "                            </a>\n" +
        "                            <a class=\"task-play _play\" href=\"#\">\n" +
        "                                <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
        "                                    <use xlink:href=\"#icon-step-8\"></use>\n" +
        "                                </svg>\n" +
        "                            </a>\n" +
        "\n" +
        "                            <div class=\"test__task-block test__task_active\" style='width:100%'>\n" +
        "                                <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
        "                                    <p>Восстановление последовательности\n" +
        "                                    </p>\n" +
        "                                    <p class=\"test__title-small\">\n" +
        "                                        Расставьте правильно картинки</p>\n" +
        "                                </div>\n" +
        "\n" +
        "                                <div id='sortDiv' class=\"test-words flex-test flex-test-space-between\" style='width:100%'>\n" +
        "                                    <div class=\"test-words__item ui-state-default\" style='width:25%;border:none;text-align: center'>\n" +
        "                                        <img src=\"img/tree.png\" alt=\"\">\n" +
        "                                        <div class=\"test-words__num\">1</div>\n" +
        "                                    </div>\n" +
        "                                    <div class=\"test-words__item ui-state-default\" style='width:25%;border:none;text-align: center'>\n" +
        "                                        <img src=\"img/tree2.png\" alt=\"\">\n" +
        "                                        <div class=\"test-words__num\">2</div>\n" +
        "                                    </div>\n" +
        "                                    <div class=\"test-words__item ui-state-default\" style='width:25%;border:none;text-align: center'>\n" +
        "                                        <img src=\"img/tree3.png\" alt=\"\">\n" +
        "                                        <div class=\"test-words__num\">3</div>\n" +
        "                                    </div>\n" +
        "                                    <div class=\"test-words__item ui-state-default\" style='width:25%;border:none;text-align: center'>\n" +
        "                                        <img src=\"img/tree4.png\" alt=\"\">\n" +
        "                                        <div class=\"test-words__num\">4</div>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "\n" +
        "                            </div>";

    $container.html(html);

    var $sort = $("#sortDiv");
    dragula([$sort[0]], {
        direction: 'horizontal'
    });
}