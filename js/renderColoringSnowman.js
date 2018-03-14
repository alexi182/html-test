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
        "                                 <div data-color='brown' class=\"test-choise test-choise__brown\">\n" +
        "                                 </div>\n" +
        "                              </div>\n" +
        "\n" +
        "                              <div class=\"test-word__item-block flex-test\">\n" +
        "                                 <span>2 - </span>\n" +
        "                                 <div data-color='darkblue' class=\"test-choise test-choise__dark-blue\">\n" +
        "                                 </div>\n" +
        "                              </div>\n" +
        "\n" +
        "                              <div class=\"test-word__item-block flex-test\">\n" +
        "                                 <span>3 - </span>\n" +
        "                                 <div data-color='red' class=\"test-choise test-choise__red\">\n" +
        "                                 </div>\n" +
        "                              </div>\n" +
        "\n" +
        "                              <div class=\"test-word__item-block flex-test\">\n" +
        "                                 <span>4 - </span>\n" +
        "                                 <div data-color='purple' class=\"test-choise test-choise__dark-purple\">\n" +
        "                                 </div>\n" +
        "                              </div>\n" +
        "\n" +
        "                              <div class=\"test-word__item-block flex-test\">\n" +
        "                                 <span>5 - </span>\n" +
        "                                 <div data-color='lightgreen' class=\"test-choise test-choise__white-green\">\n" +
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
        "                                 <div data-color='lightpink' class=\"test-choise test-choise__white-pink\">\n" +
        "                                 </div>\n" +
        "                              </div>\n" +
        "\n" +
        "                              <div class=\"test-word__item-block flex-test\">\n" +
        "                                 <span>7 -</span>\n" +
        "                                 <div data-color='lightblue' class=\"test-choise test-choise__white-blue\">\n" +
        "                                 </div>\n" +
        "                              </div>\n" +
        "\n" +
        "                              <div class=\"test-word__item-block flex-test\">\n" +
        "                                 <span>8 -</span>\n" +
        "                                 <div data-color='#662d91' class=\"test-choise test-choise__purple\">\n" +
        "                                 </div>\n" +
        "                              </div>\n" +
        "\n" +
        "                              <div class=\"test-word__item-block flex-test\">\n" +
        "                                 <span>9 -</span>\n" +
        "                                 <div data-color='#186723' class=\"test-choise test-choise__green\">\n" +
        "                                 </div>\n" +
        "                              </div>\n" +
        "\n" +
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

    // var imageObj = new Image();
    // var arrRes = [];
    // imageObj.onload = function() {
    //     var yoda = new Konva.Image({
    //         x: 0,
    //         y: 0,
    //         image: imageObj,
    //         width: 650,
    //         height: 487
    //     });
    //
    //     yoda.on('click', function () {
    //         var mousePos = stage.getPointerPosition();
    //         var x = parseInt(mousePos.y);
    //         var y = parseInt(mousePos.x);
    //          arrRes.push(y);
    //          arrRes.push(x);
    //          console.log(arrRes.join());
    //         writeMessage(y + ', ' +  x);
    //     });
    //
    //     // add the shape to the layer
    //     layer.add(yoda);
    //     yoda.moveToBottom();
    //     layer.draw();
    // };
    // imageObj.src = './img/snowmen.jpg';
    //
    //
    // function writeMessage(message) {
    //     text.setText(message);
    //     layer.draw();
    // }
    //
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
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 2,
        closed : true,
        tension : 0.4,
        name: 'activeElement'
    });
    var broomMiddle = new Konva.Line({
        points: [
            121,166,
            150,155,
            157,167,
            126,177

        ],
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 2,
        closed : true,
        tension : 0.1,
        name: 'activeElement'
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
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 2,
        closed : true,
        tension : 0.5,
        name: 'activeElement'
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
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 2,
        closed : true,
        tension : 0.4,
        name: 'activeElement'
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
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 2,
        closed : true,
        tension : 0.4,
        name: 'activeElement'
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
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 2,
        closed : true,
        tension : 0.4,
        name: 'activeElement'
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
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 2,
        closed : true,
        tension : 0.4,
        name: 'activeElement'
    });

    var smile = new Konva.Line({
        points: [
            270,190,
            295,210,
            325,197
        ],
        fill: '#fff',
        stroke: '#000',
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
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 2,
        closed : true,
        tension : 0.4,
        name: 'activeElement'
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
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 2,
        closed : true,
        tension : 0.4,
        name: 'activeElement'
    });

    var rightHand = new Konva.Circle({
        x: 344,
        y: 260,
        radius: 37,
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 2,
        name: 'activeElement'
    });

    var leftHand = new Konva.Circle({
        x: 192,
        y: 264,
        radius: 37,
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 2,
        name: 'activeElement'
    });

    var stickTop = new Konva.Line({
        points: [
            161,217,
            172,210,
            184,244,
            175,248
        ],
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 2,
        closed : true,
        tension : 0.1,
        name: 'activeElement'
    });

    var stickBottom = new Konva.Line({
        points: [
            202,300,
            213,296,
            286,435,
            276,440
        ],
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 2,
        closed : true,
        tension : 0.1,
        name: 'activeElement'
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
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 2,
        closed : true,
        tension : 0.3,
        name: 'activeElement'
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
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 2,
        closed : true,
        tension : 0.3,
        name: 'activeElement'
    });

    var line1 = new Konva.Line({points: [127,163,51,96], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});
    var line2 = new Konva.Line({points: [130,162,63,81], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});
    var line3 = new Konva.Line({points: [133,161,77,69], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});
    var line4 = new Konva.Line({points: [136,160,95,61], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});
    var line5 = new Konva.Line({points: [139,159,116,56], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});
    var line6 = new Konva.Line({points: [142,158,135,54], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});
    var line7 = new Konva.Line({points: [145,157,151,55], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});

    var line8 = new Konva.Line({points: [135,176,143,214], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});
    var line9 = new Konva.Line({points: [140,174,157,207], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});
    var line10 = new Konva.Line({points: [148,171,168,203], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});
    var line11 = new Konva.Line({points: [150,170,178,192], stroke: '#000', strokeWidth: 2, closed : false, tension : 1});

    var line12 = new Konva.Line({points: [233,73,214,105,213,146], stroke: '#000', strokeWidth: 2, closed : false, tension : 0.4});
    var line13 = new Konva.Line({points: [233,73,234,106,240,130], stroke: '#000', strokeWidth: 2, closed : false, tension : 0.4});
    var line14 = new Konva.Line({points: [233,73,257,95,270,120], stroke: '#000', strokeWidth: 2, closed : false, tension : 0.4});
    var line15 = new Konva.Line({points: [233,73,275,80,310,112], stroke: '#000', strokeWidth: 2, closed : false, tension : 0.4});

    var horizontalLine = new Konva.Line({points: [31,316,82,308,165,340,400,305,630,323], stroke: '#000', strokeWidth: 2, closed : false, tension : 0.4});

    // var cloud = new Konva.Line({
    //     points: [
    //         404,88,404,88,404,88,
    //         368,81,
    //         378,65,
    //         405,56,
    //         430,63,430,63,430,63,
    //         426,50,
    //         453,40,
    //         480,44,
    //         490,55,490,55,490,55,
    //         504,44,
    //         535,44,
    //         555,50,
    //         550,66,550,66,550,66,
    //         580,66,
    //         607,77,
    //         590,90,
    //         576,94,576,94,576,94,
    //         596,100,
    //         605,115,
    //         577,122,
    //         553,116,553,116,553,116,
    //         554,132,
    //         536,140,
    //         511,140,
    //         495,128,495,128,495,128,
    //         472,133,
    //         432,132,
    //         426,120,
    //         433,112,433,112,433,112,
    //         403,114,
    //         375,100,
    //         384,90
    //     ],
    //     fill: '#fff',
    //     stroke: 'red',
    //     strokeWidth: 2,
    //     closed : true,
    //     tension : 0.5
    // });

    var cloud = new Konva.Line({
        points: [
            395,86,382,77,376,70,378,66,381,62,391,58,398,57,408,58,417,59,427,61,425,52,434,43,443,39,456,39,470,41,479,44,487,50,489,50,496,49,507,45,521,43,537,44,548,47,556,53,557,57,554,63,560,64,568,65,583,66,595,69,604,73,605,80,602,86,594,90,583,91,592,96,599,100,605,108,598,117,589,121,570,121,555,117,555,127,546,137,534,139,519,139,507,137,501,134,493,127,482,133,468,137,452,137,431,132,424,121,427,115,408,114,391,113,379,106,375,97,383,90,399,86
        ],
        fill: '#fff',
        stroke: 'black',
        strokeWidth: 2,
        closed : true,
        tension : 0.5,
        name: 'activeElement'
    });

    var tree = new Konva.Line({
        points: [
            512,189,
            433,256,
            475,256,
            433,312,
            475,312,
            433,363,
            588,364,
            546,312,
            588,312,
            546,256,
            588,256

        ],
        fill: '#fff',
        stroke: '#000',
        strokeWidth: 2,
        closed : true,
        name: 'activeElement'
    });


    layer.add(text);
    layer.add(horizontalLine);
    layer.add(bottomBody);
    layer.add(middleBody);
    layer.add(rightHand);
    layer.add(leftHand);
    layer.add(stickTop);
    layer.add(stickBottom);
    layer.add(face);
    layer.add(leftEye);
    layer.add(rightEye);
    layer.add(smile);
    layer.add(nose);
    layer.add(pompon);
    layer.add(capTop);
    layer.add(capBottom);
    layer.add(broomTop);
    layer.add(broomMiddle);
    layer.add(scarfTop);
    layer.add(scarfBottom);
    layer.add(leftPupil);
    layer.add(rightPupil);
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
    layer.add(line11);
    layer.add(line12);
    layer.add(line13);
    layer.add(line14);
    layer.add(line15);

    layer.add(cloud);
    layer.add(tree);

    var text1 = new Konva.Text({
        x: 80,
        y: 91,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '9-8',
        fill: 'black'
    });
    layer.add(text1);
    var text2 = new Konva.Text({
        x: 213,
        y: 49,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '7-5',
        fill: 'black'
    });
    layer.add(text2);
    var text3 = new Konva.Text({
        x: 227,
        y: 90,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '1+1',
        fill: 'black'
    });
    layer.add(text3);
    var text4 = new Konva.Text({
        x: 240,
        y: 133,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '3-1',
        fill: 'black'
    });
    layer.add(text4);
    var text5 = new Konva.Text({
        x: 303,
        y: 166,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '1+2',
        fill: 'black'
    });
    layer.add(text5);




    var text6 = new Konva.Text({
        x: 235,
        y: 178,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '3+4',
        fill: 'black'
    });
    layer.add(text6);
    var text7 = new Konva.Text({
        x: 167,
        y: 261,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '1+6',
        fill: 'black'
    });
    layer.add(text7);
    var text8 = new Konva.Text({
        x: 345,
        y: 246,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '10-3',
        fill: 'black'
    });
    layer.add(text8);
    var text9 = new Konva.Text({
        x: 228,
        y: 287,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '7-0',
        fill: 'black'
    });
    layer.add(text9);
    var text10 = new Konva.Text({
        x: 188,
        y: 364,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '8-1',
        fill: 'black'
    });
    layer.add(text10);

    var text11 = new Konva.Text({
        x: 460,
        y: 86,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '12-5',
        fill: 'black'
    });
    layer.add(text11);
    var text12 = new Konva.Text({
        x: 487,
        y: 285,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '8+1',
        fill: 'black'
    });
    layer.add(text12);

    var text13 = new Konva.Text({
        x: 255,
        y: 229,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '5-1',
        fill: 'black'
    });
    layer.add(text13);
    var text14 = new Konva.Text({
        x: 305,
        y: 328,
        fontFamily: 'Calibri',
        fontSize: 24,
        text: '3+1',
        fill: 'black'
    });
    layer.add(text14);



    testChoiceHandler();

    layer.find('.activeElement').on('click', function() {
        var color = getActiveTestChoiceColor();

        if(color != null){
            this.fill(color);
        }

        layer.draw();
    });

    stage.add(layer);
}