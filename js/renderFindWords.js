function renderFindWords($container) {
    var html = "<a class=\"task-help _help\" href=\"#\">\n" +
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
        "                           <p>Игра “Найди слова”\n" +
        "                           </p>\n" +
        "                           <p class=\"test__title-small\">\n" +
        "                              Найдите 5 слов, обозначающие животных и выделите  разными цветами</p>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"test-words\">\n" +
        "                           <div class=\"test-words__item\">\n" +
        "                              <div class=\"test-words__content tac\">\n" +
        "                                 <img class=\"test-words__img\" src=\"img/find-words.png\" alt=\"\">" +
        "                                 <table class='test-words__table-find-words'>" +
        "                                    <tr><td>o</td><td>f</td><td>a</td><td>t</td><td>h</td><td>e</td><td>r</td><td>z</td></tr>" +
        "                                    <tr><td>s</td><td>i</td><td>u</td><td>t</td><td>e</td><td>r</td><td>x</td><td>t</td></tr>" +
        "                                    <tr><td>d</td><td>b</td><td>n</td><td>o</td><td>t</td><td>h</td><td>e</td><td>r</td></tr>" +
        "                                    <tr><td>w</td><td>m</td><td>t</td><td>t</td><td>h</td><td>e</td><td>r</td><td>q</td></tr>" +
        "                                    <tr><td>c</td><td>x</td><td>f</td><td>r</td><td>i</td><td>e</td><td>n</td><td>d</td></tr>" +
        "                                    <tr><td>w</td><td>m</td><td>o</td><td>t</td><td>h</td><td>e</td><td>r</td><td>q</td></tr>" +
        "                                 </table>" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"test-choise-block flex-test flex-test-just-even\">\n" +
        "                           <div class=\"test-word__item-block\">\n" +
        "                              <div class=\"test-choise test-choise__red\">\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "\n" +
        "                           <div class=\"test-word__item-block\">\n" +
        "                              <div class=\"test-choise test-choise__purple\">\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "\n" +
        "                           <div class=\"test-word__item-block\">\n" +
        "                           <div class=\"test-choise test-choise__dark-blue\">\n" +
        "                           </div>\n" +
        "                        </div>\n" +
        "\n" +
        "                           <div class=\"test-word__item-block\">\n" +
        "                              <div class=\"test-choise test-choise__cancel\">\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "\n" +
        "                           <div class=\"test-word__item-block\">\n" +
        "                              <div class=\"test-choise test-choise__white-blue\">\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "\n" +
        "                           <div class=\"test-word__item-block\">\n" +
        "                              <div class=\"test-choise test-choise__green\">\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                        </div>\n" +
        "\n" +
        "                     </div>";
    $container.html(html);
}