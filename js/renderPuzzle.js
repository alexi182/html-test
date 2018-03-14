function rednderPuzzle($container) {
    var html = "<a class=\"task-help _help\" href=\"#\">\n" +
        "                                <i class=\"icon icon_nav-question\"></i>\n" +
        "                            </a>\n" +
        "                            <a class=\"task-play _play\" href=\"#\">\n" +
        "                                <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
        "                                    <use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#icon-step-8\"></use>\n" +
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
        "                                        <!-- <img src=\"img/puzzle-main.png\" alt=\"\"> -->\n" +
        "                                        <div class=\"puzzle\" style=\"background: url(img/puzzle-main.png);width:372px;height:278px;margin:0px;padding:0px;\">\n" +
        "                                            <div class=\"puzzle-placeholder\" id=\"block_1\"></div>\n" +
        "                                            <div class=\"puzzle-placeholder\" id=\"block_2\"></div>\n" +
        "                                            <div class=\"puzzle-placeholder\" id=\"block_3\"></div>\n" +
        "                                            <div class=\"puzzle-placeholder\" id=\"block_4\"></div>\n" +
        "                                            <div class=\"puzzle-placeholder\" id=\"block_5\"></div>\n" +
        "                                            <div class=\"puzzle-placeholder\" id=\"block_6\"></div>\n" +
        "                                            <div class=\"puzzle-placeholder\" id=\"block_7\"></div>\n" +
        "                                            <div class=\"puzzle-placeholder\" id=\"block_8\"></div>\n" +
        "                                            <div class=\"puzzle-placeholder\" id=\"block_9\"></div>\n" +
        "                                        </div>\n" +
        "                                    </div>\n" +
        "                                </div>\n" +
        "\n" +
        "                            </div>";

    $container.html(html);

    var drake = dragula($(".puzzle-placeholder, .puzzle-block__item").toArray(), {
        copy: false,
        accepts: function accepts(el, target, source, sibling) {
            if(!$(target).hasClass("puzzle-placeholder")) {
                return false;
            }
            return true;
        }
    });

    drake.on("drop", function(el, target, source, sibling) {
        if($(target).hasClass("puzzle-placeholder")) {
            $(target).append($(el));
        }
    });
}