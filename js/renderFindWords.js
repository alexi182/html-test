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
        "                              <div class='selectable-table-wrapper'>" +
        "                                 <table class='test-words__table-find-words'>" +
        "                                    <tr><td>o</td><td>f</td><td>a</td><td>t</td><td>h</td><td>e</td><td>r</td><td>z</td></tr>" +
        "                                    <tr><td>s</td><td>i</td><td>u</td><td>t</td><td>e</td><td>r</td><td>x</td><td>t</td></tr>" +
        "                                    <tr><td>d</td><td>b</td><td>n</td><td>o</td><td>t</td><td>h</td><td>e</td><td>r</td></tr>" +
        "                                    <tr><td>w</td><td>m</td><td>t</td><td>t</td><td>h</td><td>e</td><td>r</td><td>q</td></tr>" +
        "                                    <tr><td>c</td><td>x</td><td>f</td><td>r</td><td>i</td><td>e</td><td>n</td><td>d</td></tr>" +
        "                                    <tr><td>w</td><td>m</td><td>o</td><td>t</td><td>h</td><td>e</td><td>r</td><td>q</td></tr>" +
        "                                 </table>" +
        "                              </div>\n" +
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
    generateColorChoices(colors, $('#color-choose-wrapper'));

    var allotments = [];
    for (var i in colors) {
        var color = colors[i];
        allotments.push({
            id: i,
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

        for (var j = 0; j < $rowColumns.length; j++) {
            $($rowColumns[j]).attr('data-x', i).attr('data-y', j);
        }
    }

    $('.test-words__table-find-words td').on('mousedown', function () {
        var $element = $(this);
        var color = getActiveTestChoiceColor();

        if (!color) {
            return;
        }

        var allotment = null;

        for (var i in allotments) {
            if (allotments[i].color === color) {
                allotment = allotments[i];
                break;
            }
        }

        if (!allotment) {
            return;
        }

        var $table = $('.test-words__table-find-words');

        if (!$table.hasClass('inAction')) {
            $table.addClass('inAction');
            allotment.isExist = true;
            allotment.startX = $element.data('x');
            allotment.startY = $element.data('y');
            allotment.endX = null;
            allotment.endY = null;

            renderAllotment(allotment);
        }
    }).on('mouseup', function () {
        var $element = $(this);
        var color = getActiveTestChoiceColor();

        if (!color) {
            return;
        }

        var allotment = null;

        for (var i in allotments) {
            if (allotments[i].color === color) {
                allotment = allotments[i];
                break;
            }
        }

        if (!allotment) {
            return;
        }

        var $table = $('.test-words__table-find-words');

        if ($table.hasClass('inAction')) {
            allotment.endX = $element.data('x');
            allotment.endY = $element.data('y');

            if (!canBuildAllotment(allotment)) {
                allotment.endX = null;
                allotment.endY = null
            }

            renderAllotment(allotment);

            $table.removeClass('inAction');
        }
    }).on('mouseover', function(){
        var $element = $(this);
        var color = getActiveTestChoiceColor();

        if (!color) {
            return;
        }

        var allotment = null;

        for (var i in allotments) {
            if (allotments[i].color === color) {
                allotment = allotments[i];
                break;
            }
        }

        if (!allotment) {
            return;
        }

        var $table = $('.test-words__table-find-words');

        if ($table.hasClass('inAction')) {
            allotment.endX = $element.data('x');
            allotment.endY = $element.data('y');

            if (!canBuildAllotment(allotment)) {
                allotment.endX = null;
                allotment.endY = null
            }

            renderAllotment(allotment);
        }
    });
}

function generateColorChoices(colors, $container) {
    for (var i in colors) {
        $container.append(
            '<div class="test-word__item-block">' +
            '   <div class="test-choise" data-color="' + colors[i] + '" style="border-color:' + colors[i] + '"></div>' +
            '</div>'
        );
    }

    testChoiceHandler(function () {
        $('.test-words__table-find-words').removeClass('inAction');
    });
}

function renderAllotment(allotment) {
    var leftMargin = parseInt($('.test-words__table-find-words').css('margin-left'));
    var height = 0, width = 0, left = 0, top = 0, boxConst = 57, allotmentId = 'allotment-' + allotment.id, startX, startY;

    $('#' + allotmentId).remove();

    if (allotment.endX === null || allotment.endY === null) {
        startX = allotment.startX;
        startY = allotment.startY;
        width = 40;
        height = 40;
    } else {
        startX = (allotment.startX < allotment.endX) ? allotment.startX : allotment.endX;
        startY = (allotment.startY < allotment.endY) ? allotment.startY : allotment.endY;

        if (allotment.startX === allotment.endX) {
            width = (Math.abs(allotment.startY - allotment.endY) + 1) * 57 - 17;
            height = 40;
        }

        if (allotment.startY === allotment.endY) {
            height = (Math.abs(allotment.startX - allotment.endX) + 1) * 57 - 17;
            width = 40;
        }
    }

    top = 9 + startX * boxConst;
    left = 9 + leftMargin + startY * boxConst;

    var html = '' +
        '<div ' +
        '   id="' + allotmentId + '" ' +
        '   style="width: '+ width + 'px; height: ' + height + 'px; top: ' + top + 'px; left: ' + left +'px; position: absolute;border-radius: 15px; border: 2px dashed ' + allotment.color + '">' +
        '</div>';
    $('.test-words__table-find-words').parent().append(html);
}

function canBuildAllotment(allotment) {
    return allotment.startX === allotment.endX || allotment.startY === allotment.endY;
}