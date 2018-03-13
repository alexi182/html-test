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
        "                                                8 + 2 - 9 = <input class=\"test-words__input\" data-id='1' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                17 - 5 = <input class=\"test-words__input\" data-id='2' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                16 - 9 = <input class=\"test-words__input\" data-id='3' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                15 - 7 = <input class=\"test-words__input\" data-id='4' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                8 + 2 - 8 = <input class=\"test-words__input\" data-id='5' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                17 + 11 = <input class=\"test-words__input\" data-id='6' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                12 - 2 = <input class=\"test-words__input\" data-id='7' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                15 + 5 = <input class=\"test-words__input\" data-id='8' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                16 - 5 = <input class=\"test-words__input\" data-id='9' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                15 + 4= <input class=\"test-words__input\" data-id='10' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                15 + 5 = <input class=\"test-words__input\" data-id='11' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                16 - 5 = <input class=\"test-words__input\" data-id='12' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                15 + 4= <input class=\"test-words__input\" data-id='13' />\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "\n" +
        "                                        <div class=\"test-words__col tar right-col\">\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                15 + 5 = <input class=\"test-words__input\" data-id='26' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                16 - 5 = <input class=\"test-words__input\" data-id='25' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                15 + 4= <input class=\"test-words__input\" data-id='24' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                8 + 2 - 9 = <input class=\"test-words__input\" data-id='23' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                17 - 5 = <input class=\"test-words__input\" data-id='22' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                16 - 9 = <input class=\"test-words__input\" data-id='21' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                15 - 7 = <input class=\"test-words__input\" data-id='20' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                8 + 2 - 8 = <input class=\"test-words__input\" data-id='19' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                17 + 11 = <input class=\"test-words__input\" data-id='18' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                12 - 2 = <input class=\"test-words__input\" data-id='17' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                15 + 5 = <input class=\"test-words__input\" data-id='16' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                16 - 5 = <input class=\"test-words__input\" data-id='15' />\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                15 + 4= <input class=\"test-words__input\" data-id='14' />\n" +
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

    var points = [
        {x: 0, y: 2*28, id: 1},
        {x: 140, y: 28, id: 2},
        {x: 252, y: 8*28, id: 3},
        {x: 4*28, y: 14*28, id: 4},
        {x: 5*28, y: 13*28, id: 5},
        {x: 15*28, y: 11*28, id: 6},
        {x: 3*28, y: 28, id: 7},
        {x: 4*28, y: 28, id: 8},
        {x: 6*28, y: 9*28, id: 9},
        {x: 19*28, y: 11*28, id: 10},
        {x: 18*28, y: 12*28, id: 11},
        {x: 2*28, y: 2*28, id: 12},
        {x: 12*28, y: 9*28, id: 13},
        {x: 5*28, y: 8*28, id: 14},
        {x: 8*28, y: 4*28, id: 15},
        {x: 19*28, y: 6*28, id: 17},
        {x: 18*28, y: 8*28, id: 18},
        {x: 15*28, y: 13*28, id: 19},
        {x: 14*28, y: 14*28, id: 21},
        {x: 16*28, y: 14*28, id: 22},
        {x: 17*28, y: 4*28, id: 25},
        {x: 0, y: 3*28, id: 26},
        {x: 3*28, y: 4*28, id: 27},
        {x: 5*28, y: 0, id: 28},
        {x: 6*28, y: 14*28, id: 29}
    ];

    var stage = new Konva.Stage({
        container: 'canvas-wrapper',   // id of container <div>
        width: 560,
        height: 560
    });

    var layer = new Konva.Layer();

    for (var i in points) {
        var circle = new Konva.Circle({
            x: points[i].x + 5,
            y: points[i].y + 5,
            id: 'point' + points[i].id,
            radius: 3,
            fill: 'black',
            stroke: 'black',
            strokeWidth: 1
        });
        var simpleText = new Konva.Text({
            x: points[i].x + 10,
            y: points[i].y ,
            id: 'text' + points[i].id,
            text: points[i].id,
            fontSize: 13,
            fontFamily: 'Calibri',
            fill: 'black'
        });

        layer.add(circle);
        layer.add(simpleText);
    }

    stage.add(layer);

    $('.test-words__input').on('input', function () {
        drawLinesByInputs(layer);
    });
}

function drawLinesByInputs(layer) {
    var answers = [], thisPoint, prevInputPoint, prevAnswer = null;

    layer.find('Circle').setFill('black');
    layer.find('Line').remove();

    $('.test-words__input').each(function () {
        var $this = $(this);
        answers[$this.data('id')] = $this.val();
    });

    for (var i in answers) {
        if (!prevAnswer || !answers) {
            prevAnswer = answers[i];
            continue;
        }

        thisPoint = layer.findOne('#point' + answers[i]);
        prevInputPoint = layer.findOne('#point' + prevAnswer);

        if (thisPoint && prevInputPoint) {
            thisPoint.setFill('#32d7c0');
            prevInputPoint.setFill('#32d7c0');
            var line = new Konva.Line({
                points: [thisPoint.getX(), thisPoint.getY(), prevInputPoint.getX(), prevInputPoint.getY()],
                stroke: 'black',
                strokeWidth: 3
            });
            layer.add(line);
        }

        prevAnswer = answers[i];
    }

    layer.draw();
}