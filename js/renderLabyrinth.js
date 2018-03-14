function renderLabyrinth($container) {
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
        "                           <p>Лабиринт\n" +
        "                           </p>\n" +
        "                           <p class=\"test__title-small\">\n" +
        "                              Помоги обезьянке добраться до бананов</p>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"test-words\">\n" +
        "                           <div class=\"test-words__item\">\n" +
        "                              <div id='canvas-wrapper'></div>" +
        "                              <div class=\"test-words__content tac\">\n" +
        "                                 <img class=\"test-words__img\" src=\"img/labyrint.png\" alt=\"\">\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                        </div>\n" +
        "\n" +
        "                     </div>";

    $container.html(html);

    var labirint = [
        [
            {top:true,right:false,bottom:true,left:false,point:true},
            {top:true,right:true,bottom:false,left:false,point:true},
            {top:true,right:false,bottom:false,left:true,point:true},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:true,right:true,bottom:false,left:false,point:true},
            {top:true,right:false,bottom:true,left:true,point:true},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:true,right:true,bottom:false,left:false,point:true}
        ],
        [
            {top:true,right:true,bottom:false,left:true,point:true},
            {top:false,right:true,bottom:false,left:true,point:false},
            {top:false,right:false,bottom:true,left:true,point:true},
            {top:true,right:true,bottom:false,left:false,point:true},
            {top:false,right:false,bottom:true,left:true,point:true},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:true,right:true,bottom:false,left:false,point:true},
            {top:false,right:true,bottom:false,left:true,point:false}
        ],
        [
            {top:false,right:true,bottom:false,left:true,point:false},
            {top:false,right:true,bottom:false,left:true,point:false},
            {top:true,right:false,bottom:false,left:true,point:true},
            {top:false,right:true,bottom:true,left:false,point:true},
            {top:true,right:false,bottom:false,left:true,point:true},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:true,right:true,bottom:false,left:false,point:true},
            {top:true,right:false,bottom:true,left:true,point:false},
            {top:false,right:true,bottom:true,left:false,point:true},
            {top:false,right:true,bottom:false,left:true,point:false}
        ],
        [
            {top:false,right:true,bottom:false,left:true,point:false},
            {top:false,right:false,bottom:true,left:false,point:true},
            {top:false,right:false,bottom:true,left:false,point:true},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:false,right:true,bottom:true,left:false,point:true},
            {top:true,right:true,bottom:false,left:true,point:true},
            {top:false,right:false,bottom:false,left:true,point:true},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:false,right:true,bottom:false,left:false,point:true}
        ],
        [
            {top:false,right:false,bottom:false,left:true,point:true},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:true,right:true,bottom:true,left:false,point:true},
            {top:true,right:false,bottom:false,left:true,point:true},
            {top:true,right:true,bottom:false,left:false,point:true},
            {top:false,right:false,bottom:false,left:true,point:true},
            {top:false,right:true,bottom:true,left:false,point:true},
            {top:true,right:false,bottom:false,left:true,point:true},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:false,right:true,bottom:false,left:false,point:true}
        ],
        [
            {top:false,right:false,bottom:true,left:true,point:true},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:false,right:true,bottom:true,left:false,point:true},
            {top:false,right:false,bottom:false,left:true,point:true},
            {top:false,right:true,bottom:true,left:false,point:true},
            {top:true,right:true,bottom:false,left:true,point:true},
            {top:false,right:true,bottom:false,left:true,point:false},
            {top:true,right:false,bottom:false,left:true,point:true},
            {top:false,right:true,bottom:true,left:false,point:true}
        ],
        [
            {top:true,right:false,bottom:false,left:true,point:true},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:true,right:false,bottom:false,left:false,point:true},
            {top:true,right:true,bottom:true,left:false,point:true},
            {top:false,right:false,bottom:true,left:true,point:true},
            {top:true,right:false,bottom:false,left:false,point:true},
            {top:false,right:true,bottom:true,left:false,point:true},
            {top:false,right:true,bottom:false,left:true,point:false},
            {top:false,right:false,bottom:true,left:true,point:true},
            {top:true,right:true,bottom:false,left:false,point:true}
        ],
        [
            {top:false,right:true,bottom:false,left:true,point:false},
            {top:true,right:true,bottom:false,left:true,point:true},
            {top:false,right:false,bottom:true,left:true,point:true},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:true,right:false,bottom:false,left:false,point:true},
            {top:false,right:false,bottom:true,left:false,point:false},
            {top:true,right:true,bottom:false,left:true,point:true},
            {top:false,right:false,bottom:true,left:true,point:true},
            {top:true,right:true,bottom:false,left:false,point:true},
            {top:false,right:true,bottom:false,left:true,point:false}
        ],
        [
            {top:false,right:false,bottom:false,left:true,point:true},
            {top:false,right:true,bottom:true,left:false,point:true},
            {top:true,right:false,bottom:false,left:true,point:true},
            {top:true,right:true,bottom:false,left:false,point:true},
            {top:false,right:false,bottom:true,left:true,point:true},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:false,right:true,bottom:true,left:false,point:true},
            {top:true,right:true,bottom:false,left:true,point:true},
            {top:false,right:true,bottom:true,left:true,point:true},
            {top:false,right:true,bottom:false,left:true,point:false}
        ],
        [
            {top:false,right:false,bottom:true,left:true,point:true},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:false,right:true,bottom:true,left:false,point:true},
            {top:false,right:false,bottom:true,left:true,point:true},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:true,right:false,bottom:true,left:false,point:false},
            {top:false,right:true,bottom:true,left:false,point:true},
            {top:true,right:false,bottom:true,left:true,point:false},
            {top:false,right:false,bottom:true,left:false,point:true}
        ]
    ];

    var stage = new Konva.Stage({
        container: 'canvas-wrapper',   // id of container <div>
        width: 566,
        height: 566
    });

    var layer = new Konva.Layer();

    for (var i = 0; i < labirint.length; i++) {
        for (var j = 0; j < labirint[i].length; j++) {
            var element = labirint[i][j];
            var pointTopLeftX = j * 56 + 3;
            var pointTopLeftY = i * 56 + 3;

            if (element.top) {
                layer.add(new Konva.Line({
                    points: [pointTopLeftX, pointTopLeftY, pointTopLeftX + 56, pointTopLeftY],
                    stroke: 'black',
                    strokeWidth: 3
                }));
            }

            if (element.right) {
                layer.add(new Konva.Line({
                    points: [pointTopLeftX + 56, pointTopLeftY, pointTopLeftX + 56, pointTopLeftY + 56],
                    stroke: 'black',
                    strokeWidth: 3
                }));
            }

            if (element.bottom) {
                layer.add(new Konva.Line({
                    points: [pointTopLeftX + 56, pointTopLeftY + 56, pointTopLeftX, pointTopLeftY + 56],
                    stroke: 'black',
                    strokeWidth: 3
                }));
            }

            if (element.left) {
                layer.add(new Konva.Line({
                    points: [pointTopLeftX, pointTopLeftY + 56, pointTopLeftX, pointTopLeftY],
                    stroke: 'black',
                    strokeWidth: 3
                }));
            }

            if (element.point) {
                layer.add(new Konva.Circle({
                    x: pointTopLeftX + 28,
                    y: pointTopLeftY + 28,
                    id: 'point_' + i + '_' + j,
                    radius: 4,
                    fill: 'black',
                    stroke: 'white',
                    strokeWidth: 20
                }));
            }
        }
    }

    layer.find('Circle').on('click', function() {
        var id = this.getId(), newPath = [];
        for (var i = 0; i < path.length; i++) {
            newPath.push(path[i]);
            if (id == path[i]) {
                path = newPath;
                renderPath(path, layer);
                return;
            }
        }

        if (canBeAddedToPath(id)) {
            path.push(id);
            renderPath(path, layer);
        }
    });

    stage.add(layer);

    var path = [];
    path.push('point_0_0');
    renderPath(path, layer);
}

function renderPath(path, layer) {
    layer.find('Circle').setStroke('white').setStrokeWidth('20').setFill('black').setRadius(4);
    layer.find('.active').remove();

    var prevCircle = null;
    for (var i = 0; i < path.length; i++) {
        layer.findOne('#' + path[i]).setStroke('#32d7c0').setStrokeWidth('3').setFill('white').setRadius(10);

        if (prevCircle) {
            layer.add(new Konva.Line({
                points: [prevCircle.getX(), prevCircle.getY(), layer.findOne('#' + path[i]).getX(), layer.findOne('#' + path[i]).getY()],
                stroke: '#32d7c0',
                name: 'active',
                strokeWidth: 2
            }));
        }

        prevCircle = layer.findOne('#' + path[i]);
    }

    layer.find('.active').moveToBottom();

    layer.draw();
}

function canBeAddedToPath(id) {
    return true;
}