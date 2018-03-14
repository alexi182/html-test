function renderColoringSnowman($container){
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
        "                           <p>Раскраска</p>\n" +
        "                           <p class=\"test__title-small\">\n" +
        "                              Выполни действия, и раскрась картинку</p>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"test-words flex-test flex-test-space-between flex-test-alcenter\">\n" +
        "                           <div class=\"test-words__item\">\n" +
        "                              <div class=\"test-word__item-block flex-test\">\n" +
        "                                 <span>1 - </span>\n" +
        "                                 <div class=\"test-choise test-choise__brown\">\n" +
        "                                 </div>\n" +
        "                              </div>\n" +
        "\n" +
        "                              <div class=\"test-word__item-block flex-test\">\n" +
        "                                 <span>2 - </span>\n" +
        "                                 <div class=\"test-choise test-choise__dark-blue\">\n" +
        "                                 </div>\n" +
        "                              </div>\n" +
        "\n" +
        "                              <div class=\"test-word__item-block flex-test\">\n" +
        "                                 <span>3 - </span>\n" +
        "                                 <div class=\"test-choise test-choise__red\">\n" +
        "                                 </div>\n" +
        "                              </div>\n" +
        "\n" +
        "                              <div class=\"test-word__item-block flex-test\">\n" +
        "                                 <span>4 - </span>\n" +
        "                                 <div class=\"test-choise test-choise__dark-purple\">\n" +
        "                                 </div>\n" +
        "                              </div>\n" +
        "\n" +
        "                              <div class=\"test-word__item-block flex-test\">\n" +
        "                                 <span>5 - </span>\n" +
        "                                 <div class=\"test-choise test-choise__white-green\">\n" +
        "                                 </div>\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "\n" +
        "                           <div id='container' class=\"test-words__item\">\n" +
        "                           </div>\n" +
        "\n" +
        "                           <div class=\"test-words__item\">\n" +
        "\n" +
        "                              <div class=\"test-word__item-block flex-test\">\n" +
        "                                 <span>6 -</span>\n" +
        "                                 <div class=\"test-choise test-choise__pink\">\n" +
        "                                 </div>\n" +
        "                              </div>\n" +
        "\n" +
        "                              <div class=\"test-word__item-block flex-test\">\n" +
        "                                 <span>7 -</span>\n" +
        "                                 <div class=\"test-choise test-choise__white-blue\">\n" +
        "                                 </div>\n" +
        "                              </div>\n" +
        "\n" +
        "                              <div class=\"test-word__item-block flex-test\">\n" +
        "                                 <span>8 -</span>\n" +
        "                                 <div class=\"test-choise test-choise__purple\">\n" +
        "                                 </div>\n" +
        "                              </div>\n" +
        "\n" +
        "                              <div class=\"test-word__item-block flex-test\">\n" +
        "                                 <span>9 -</span>\n" +
        "                                 <div class=\"test-choise test-choise__green\">\n" +
        "                                 </div>\n" +
        "                              </div>\n" +
        "\n" +
        "                              <div class=\"test-word__item-block flex-test\">\n" +
        "                                 <div class=\"test-choise test-choise__cancel\">\n" +
        "                                    <span>СБРОС</span>\n" +
        "                                 </div>\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                        </div>\n" +
        "\n" +
        "                     </div>";

    $container.html(html);

    $("#container").css("width","70%").css("border","1px solid black");
    createPicture();

}

function createPicture(){
    var stage = new Konva.Stage({
        container: 'container',
        width: 650,
        height: 487
    });

    var layer = new Konva.Layer();

    var imageObj = new Image();
    imageObj.onload = function() {
        var yoda = new Konva.Image({
            x: 0,
            y: 0,
            image: imageObj,
            width: 650,
            height: 487
        });

        yoda.on('click', function () {
            var mousePos = stage.getPointerPosition();
            var x = parseInt(mousePos.y);
            var y = parseInt(mousePos.x);
            writeMessage('y: ' + y + ', x: ' + x);
        });

        // add the shape to the layer
        layer.add(yoda);
        yoda.moveToBottom();
        layer.draw();
    };
    imageObj.src = './img/snowmen.jpg';

    // for (var i = 0; i < 487; i = i + 10) {
    //     var line = new Konva.Line({
    //         points: [0, i, 650, i],
    //         stroke: '#cecece',
    //         strokeWidth: 1
    //     });
    //     var simpleText = new Konva.Text({
    //         x: 0,
    //         y: i - 5,
    //         text: i,
    //         fontSize: 12,
    //         fontFamily: 'Calibri',
    //         fill: 'blue'
    //     });
    //     line.on('mouseover', function () {
    //         $(this).setStroke('black');
    //     });
    //     layer.add(line);
    //     layer.add(simpleText);
    // }
    //
    // for (var j = 0; j < 650; j = j + 10) {
    //     var line = new Konva.Line({
    //         points: [j, 0, j, 487],
    //         stroke: '#cecece',
    //         strokeWidth: 1
    //     });
    //     var simpleText = new Konva.Text({
    //         x: j + 7,
    //         y: 0,
    //         text: j,
    //         fontSize: 12,
    //         fontFamily: 'Calibri',
    //         fill: 'blue',
    //         rotation: 90
    //     });
    //
    //     line.on('mouseover', function () {
    //         console.log(12);
    //         this.stroke('black');
    //         layer.draw();
    //     });
    //
    //     layer.add(line);
    //     layer.add(simpleText);
    // }

    function writeMessage(message) {
        text.setText(message);
        layer.draw();
    }

    var text = new Konva.Text({
        x: 10,
        y: 10,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '',
        fill: 'black'
    });

    var broomTop = new Konva.Line({
        points: [
            35, 105,35, 105,
            46,81,
            80, 55,
            135,45,
            170,50, 170,50,
            148,153, 148,153,


            160,170,
            190,185,
            190,185,
            178,204,
            150,218,
            130,222,
            130,222,
            127,180,127,180,


            120,163, 120,163,
            37, 107
            ],
        fill: '#00D2FF',
        stroke: 'red',
        strokeWidth: 2,
        closed : true,
        tension : 0.4
    });
    var broomMiddle = new Konva.Line({
        points: [
            121,166,
            150,155,
            157,167,
            126,177

        ],
        fill: '#00D2FF',
        stroke: 'red',
        strokeWidth: 2,
        closed : true,
        tension : 0.1
    });

    var pompon = new Konva.Line({
        points: [
            207,88,
            191,78,
            201,60,201,60,201,60,
            203,45,
            220,40,220,40,220,40,
            240,30,
            253,42,253,42,253,42,
            267,50,
            267,62,
            256,77,
            237,84

        ],
        fill: '#00D2FF',
        stroke: 'red',
        strokeWidth: 2,
        closed : true,
        tension : 0.5
    });

    var capTop = new Konva.Line({
        points: [
            194,160,
            191,120,
            230,75,
            295,73,
            328,109,
            267,143
        ],
        fill: '#00D2FF',
        stroke: 'red',
        strokeWidth: 2,
        closed : true,
        tension : 0.4
    });

    var capBottom = new Konva.Line({
        points: [
            203,196,203,196,
            191,180,
            191,164,191,164,
            221,142,
            275,120,
            335,110,335,110,
            346,125,
            346,144,346,144,
            300,150,
            240,174
        ],
        fill: '#00D2FF',
        stroke: 'red',
        strokeWidth: 2,
        closed : true,
        tension : 0.4
    });

    var face = new Konva.Line({
        points: [
            218,202,
            212,190,
            222,144,
            280,120,
            330,145,
            340,180,
            330,211,
            270,223
        ],
        fill: '#00D2FF',
        stroke: 'red',
        strokeWidth: 2,
        closed : true,
        tension : 0.4
    });

    var nose = new Konva.Line({
        points: [
            363,174,363,174,363,174,
            337,190,
            307,196,
            295,190,
            293,178,
            295,168,
            307,164,
            330,165,
            335,166
        ],
        fill: '#00D2FF',
        stroke: 'red',
        strokeWidth: 2,
        closed : true,
        tension : 0.4
    });

    var smile = new Konva.Line({
        points: [
            270,190,
            295,210,
            325,197
        ],
        fill: '#00D2FF',
        stroke: 'red',
        strokeWidth: 2,
        closed : false,
        tension : 0.4
    });

    var leftEye = new Konva.Circle({
        x: 283,
        y: 161,
        radius: 9,
        fill: '#000',
        stroke: '#000',
        strokeWidth: 2
    });
    var rightEye = new Konva.Circle({
        x: 319,
        y: 158,
        radius: 9,
        fill: '#000',
        stroke: '#000',
        strokeWidth: 2
    });

    var leftPupil = new Konva.Circle({
        x: 279,
        y: 158,
        radius: 2,
        fill: '#fff',
        stroke: '#fff',
        strokeWidth: 2
    });
    var rightPupil = new Konva.Circle({
        x: 316,
        y: 156,
        radius: 2,
        fill: '#fff',
        stroke: '#fff',
        strokeWidth: 2
    });

    var scarfTop = new Konva.Line({
        points: [
            207,228,207,228,
            220,204,220,204,
            250,212,
            287,222,
            300,220,
            330,211,330,211,
            332,234,332,234,
            322,257,
            295,271,
            255,262,
            225,244
        ],
        fill: '#00D2FF',
        stroke: 'red',
        strokeWidth: 2,
        closed : true,
        tension : 0.4
    });

    var scarfBottom = new Konva.Line({
        points: [
            285,418,285,418,
            295,373,
            300,324,
            287,271,
            279,255,
            320,230,
            331,238,
            347,263,
            360,305,
            360,360,
            355,392,355,392,

        ],
        fill: '#00D2FF',
        stroke: 'red',
        strokeWidth: 2,
        closed : true,
        tension : 0.4
    });

    var rightHand = new Konva.Circle({
        x: 344,
        y: 260,
        radius: 37,
        fill: '#fff',
        stroke: 'red',
        strokeWidth: 2
    });

    var leftHand = new Konva.Circle({
        x: 192,
        y: 264,
        radius: 37,
        fill: '#fff',
        stroke: 'red',
        strokeWidth: 2
    });

    var stickTop = new Konva.Line({
        points: [
            161,217,
            172,210,
            184,244,
            175,248
        ],
        fill: '#00D2FF',
        stroke: 'red',
        strokeWidth: 2,
        closed : true,
        tension : 0.1
    });

    var stickBottom = new Konva.Line({
        points: [
            202,300,
            213,296,
            286,435,
            276,440
        ],
        fill: '#00D2FF',
        stroke: 'red',
        strokeWidth: 2,
        closed : true,
        tension : 0.1
    });

    var middleBody = new Konva.Line({
        points: [
            300,330,
            260,333,
            230,322,
            202,281,
            223,230,
            313,240,
            327,307
        ],
        fill: '#00D2FF',
        stroke: 'red',
        strokeWidth: 2,
        closed : true,
        tension : 0.3
    });

    var bottomBody = new Konva.Line({
        points: [
            360,330,
            372,357,
            362,400,
            290,435,
            207,417,
            179,360,
            208,309,
            286,300
        ],
        fill: '#00D2FF',
        stroke: 'red',
        strokeWidth: 2,
        closed : true,
        tension : 0.3
    });

    var line1 = new Konva.Line({points: [127,163,51,96], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});
    var line2 = new Konva.Line({points: [130,162,63,81], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});
    var line3 = new Konva.Line({points: [133,161,77,69], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});
    var line4 = new Konva.Line({points: [136,160,95,61], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});
    var line5 = new Konva.Line({points: [139,159,116,56], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});
    var line6 = new Konva.Line({points: [142,158,135,54], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});
    var line7 = new Konva.Line({points: [145,157,151,55], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});

    var line8 = new Konva.Line({points: [135,176,116,56], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});
    var line9 = new Konva.Line({points: [142,158,135,54], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});
    var line10 = new Konva.Line({points: [145,157,151,55], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});


    layer.add(text);
    // layer.add(bottomBody);
    // layer.add(middleBody);
    // layer.add(rightHand);
    // layer.add(leftHand);
    // layer.add(stickTop);
    // layer.add(stickBottom);
    // layer.add(face);
    //  layer.add(leftEye);
    //  layer.add(rightEye);
    // layer.add(smile);
    // layer.add(nose);
    // layer.add(pompon);
    // layer.add(capTop);
    // layer.add(capBottom);
    //  layer.add(broomTop);
    //  layer.add(broomMiddle);
    // layer.add(scarfTop);
    // layer.add(scarfBottom);
    // layer.add(leftPupil);
    // layer.add(rightPupil);
    layer.add(line1);
    layer.add(line2);
    layer.add(line3);
    layer.add(line4);
    layer.add(line5);
    layer.add(line6);
    layer.add(line7);

    layer.add(line8);
    layer.add(line9);
    layer.add(line10);

    stage.add(layer);
}