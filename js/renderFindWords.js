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
        "                        <div id='color-choose-wrapper' class=\"test-choise-block flex-test flex-test-just-even\">\n" +
        "                        </div>\n" +
        "\n" +
        "                     </div>";
    $container.html(html);

    var colors = ['#e9a503', '#e93e03', '#6147e5', '#32d7c0', '#b1f1fa'];
    generateColoChoices(colors, $('#color-choose-wrapper'));

    var allotments = [];
    for (var i in colors) {
        var color = colors[i];
        allotments.push({
            color: color,
            isExist: false,
            direction: null,
            startX: null,
            startY: null,
            endX: null,
            endY: null
        });
    }

    var $table = $('.test-words__table-find-words');
    var $tableRows = $table.find('tr');

    for (var i = 0; i < $tableRows.length; i++) {
        var $tableRow = $($tableRows[i]);
        var $rowColumns = $tableRow.find('td');
        console.log($rowColumns);

        for (var j = 0; j < $rowColumns.length; j++) {
            var $element = $($rowColumns[j]);
            $element.attr('data-x', i);
            $element.attr('data-y', j);
        }
    }

    $('.test-words__table-find-words td').on('click', function () {
        var color = getActiveTestChoiceColor();

        if (!color) {
            return;
        }


    });
}

function generateColoChoices(colors, $container) {
    for (var i in colors) {
        $container.append(
            '<div class="test-word__item-block">' +
            '   <div class="test-choise" data-color="' + colors[i] + '" style="border-color:' + colors[i] + '"></div>' +
            '</div>'
        );
    }

    testChoiceHandler();
}