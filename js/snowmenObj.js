var test_242 = {

    initTest: function($canvas,layer) {

        var color_arr=["brown", "darkblue", "red", "purple", "lightgreen", "lightpink", "lightblue", "#662d91", "#186723"],
            color_letter_arr=["O", "P", "Q", "R", "S", "T", "U", "V", "W"],
            conva_object = {};

        for(var i = 0; i < color_arr.length; i++) {
            conva_object['rectColor' + i] = new Konva.Rect({
                x: 730,
                y: 5 + 58 * i ,
                width: 90,
                height: 38,
                fill: '#fff',
                stroke: color_arr[i],
                strokeWidth: 3,
                cornerRadius: 20,
                name: "test-choise",
                id: color_letter_arr[i]
            });

            conva_object['textColor' + i] = new Konva.Text({
                x: 680,
                y: 5 + 58 * i,
                fontFamily: 'Calibri',
                fontSize: 32,
                text: (i + 1) + " - ",
                fill: 'black'
            });
        }

        conva_object.horizontalLine = new Konva.Line({
            points: [
                31,316,
                82,308,
                165,340,
                400,305,
                630,323
            ],
            stroke: '#000',
            strokeWidth: 2,
            closed : false,
            tension : 0.4
        });
        conva_object.bottomBody = new Konva.Line({
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
            name: 'activeElement',
            id: "J"
        });
        conva_object.middleBody = new Konva.Line({
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
            name: 'activeElement',
            id: "I"
        });
        conva_object.rightHand = new Konva.Circle({
            x: 344,
            y: 260,
            radius: 37,
            fill: '#fff',
            stroke: '#000',
            strokeWidth: 2,
            name: 'activeElement',
            id: "H"
        });
        conva_object.leftHand = new Konva.Circle({
            x: 192,
            y: 264,
            radius: 37,
            fill: '#fff',
            stroke: '#000',
            strokeWidth: 2,
            name: 'activeElement',
            id: "G"
        });
        conva_object.stickTop = new Konva.Line({
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
            tension : 0.1
        });
        conva_object.stickBottom = new Konva.Line({
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
            tension : 0.1
        });
        conva_object.face = new Konva.Line({
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
            name: 'activeElement',
            id: "F"
        });
        conva_object.leftEye = new Konva.Circle({
            x: 283,
            y: 161,
            radius: 9,
            fill: '#000',
            stroke: '#000',
            strokeWidth: 2
        });
        conva_object.rightEye = new Konva.Circle({
            x: 319,
            y: 158,
            radius: 9,
            fill: '#000',
            stroke: '#000',
            strokeWidth: 2
        });
        conva_object.smile = new Konva.Line({
            points: [
                270,190,
                295,210,
                325,197
            ],
            fill: '#fff',
            stroke: '#000',
            strokeWidth: 2,
            closed : false,
            tension : 0.4,
            name: "numberText"
        });
        conva_object.nose = new Konva.Line({
            points: [
                363,174, 363,174, 363,174,
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
            name: 'activeElement',
            id: "E"
        });
        conva_object.pompon = new Konva.Line({
            points: [
                207,88,
                191,78,
                201,60, 201,60, 201,60,
                203,45,
                220,40, 220,40, 220,40,
                240,30,
                253,42, 253,42, 253,42,
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
            name: 'activeElement',
            id: "B"
        });
        conva_object.capTop = new Konva.Line({
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
            name: 'activeElement',
            id: "C"
        });
        conva_object.capBottom = new Konva.Line({
            points: [
                203,196, 203,196,
                191,180,
                191,164, 191,164,
                221,142,
                275,120,
                335,110, 335,110,
                346,125,
                346,144, 346,144,
                300,150,
                240,174
            ],
            fill: '#fff',
            stroke: '#000',
            strokeWidth: 2,
            closed : true,
            tension : 0.4,
            name: 'activeElement',
            id: "D"
        });
        conva_object.broomTop = new Konva.Line({
            points: [
                35,105, 35,105,
                46,81,
                80,55,
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
                127,180, 127,180,
                120,163, 120,163,
                37,107
            ],
            fill: '#fff',
            stroke: '#000',
            strokeWidth: 2,
            closed : true,
            tension : 0.4,
            name: 'activeElement',
            id: "A"
        });
        conva_object.broomMiddle = new Konva.Line({
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
            tension : 0.1
        });
        conva_object.scarfTop = new Konva.Line({
            points: [
                207,228, 207,228,
                220,204, 220,204,
                250,212,
                287,222,
                300,220,
                330,211, 330,211,
                332,234, 332,234,
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
            name: 'activeElement',
            id: "M"
        });
        conva_object.scarfBottom = new Konva.Line({
            points: [
                285,418, 285,418,
                295,373,
                300,324,
                287,271,
                279,255,
                320,230,
                331,238,
                347,263,
                360,305,
                360,360,
                355,392, 355,392
            ],
            fill: '#fff',
            stroke: '#000',
            strokeWidth: 2,
            closed : true,
            tension : 0.4,
            name: 'activeElement',
            id: "N"
        });
        conva_object.leftPupil = new Konva.Circle({
            x: 279,
            y: 158,
            radius: 2,
            fill: '#fff',
            stroke: '#fff',
            strokeWidth: 2
        });
        conva_object.rightPupil = new Konva.Circle({
            x: 316,
            y: 156,
            radius: 2,
            fill: '#fff',
            stroke: '#fff',
            strokeWidth: 2
        });
        conva_object.cloud = new Konva.Line({
            points: [
                395,86,
                382,77,
                376,70,
                378,66,
                381,62,
                391,58,
                398,57,
                408,58,
                417,59,
                427,61,
                425,52,
                434,43,
                443,39,
                456,39,
                470,41,
                479,44,
                487,50,
                489,50,
                496,49,
                507,45,
                521,43,
                537,44,
                548,47,
                556,53,
                557,57,
                554,63,
                560,64,
                568,65,
                583,66,
                595,69,
                604,73,
                605,80,
                602,86,
                594,90,
                583,91,
                592,96,
                599,100,
                605,108,
                598,117,
                589,121,
                570,121,
                555,117,
                555,127,
                546,137,
                534,139,
                519,139,
                507,137,
                501,134,
                493,127,
                482,133,
                468,137,
                452,137,
                431,132,
                424,121,
                427,115,
                408,114,
                391,113,
                379,106,
                375,97,
                383,90,
                399,86
            ],
            fill: '#fff',
            stroke: 'black',
            strokeWidth: 2,
            closed : true,
            tension : 0.5,
            name: 'activeElement',
            id: "K"
        });
        conva_object.tree = new Konva.Line({
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
            closed: true,
            name: 'activeElement',
            id: "L"
        });

        conva_object.line1 = new Konva.Line({
            points: [
                127,163,
                51,96
            ],
            stroke: '#000',
            strokeWidth: 2,
            closed : false,
            tension : 1,
            name: "numberText"
        });
        conva_object.line2 = new Konva.Line({
            points: [
                130,162,
                63,81
            ],
            stroke: '#000',
            strokeWidth: 2,
            closed : false,
            tension : 1,
            name: "numberText"
        });
        conva_object.line3 = new Konva.Line({
            points: [
                133,161,
                77,69
            ],
            stroke: '#000',
            strokeWidth: 2,
            closed : false,
            tension : 1,
            name: "numberText"
        });
        conva_object.line4 = new Konva.Line({
            points: [
                136,160,
                95,61
            ],
            stroke: '#000',
            strokeWidth: 2,
            closed : false,
            tension : 1,
            name: "numberText"
        });
        conva_object.line5 = new Konva.Line({
            points: [
                139,159,
                116,56
            ],
            stroke: '#000',
            strokeWidth: 2,
            closed : false,
            tension : 1,
            name: "numberText"
        });
        conva_object.line6 = new Konva.Line({
            points: [
                142,158,
                135,54
            ],
            stroke: '#000',
            strokeWidth: 2,
            closed : false,
            tension : 1,
            name: "numberText"
        });
        conva_object.line7 = new Konva.Line({
            points: [
                145,157,
                151,55
            ],
            stroke: '#000',
            strokeWidth: 2,
            closed : false,
            tension : 1,
            name: "numberText"
        });
        conva_object.line8 = new Konva.Line({
            points: [
                135,176,
                143,214
            ],
            stroke: '#000',
            strokeWidth: 2,
            closed : false,
            tension : 1,
            name: "numberText"
        });
        conva_object.line9 = new Konva.Line({
            points: [
                140,174,
                157,207
            ],
            stroke: '#000',
            strokeWidth: 2,
            closed : false,
            tension : 1,
            name: "numberText"
        });
        conva_object.line10 = new Konva.Line({
            points: [
                148,171,
                168,203
            ],
            stroke: '#000',
            strokeWidth: 2,
            closed : false,
            tension : 1,
            name: "numberText"
        });
        conva_object.line11 = new Konva.Line({
            points: [
                150,170,
                178,192
            ],
            stroke: '#000',
            strokeWidth: 2,
            closed : false,
            tension : 1,
            name: "numberText"
        });
        conva_object.line12 = new Konva.Line({
            points: [
                233,73,
                214,105,
                213,146
            ],
            stroke: '#000',
            strokeWidth: 2,
            closed : false,
            tension : 0.4,
            name: "numberText"
        });
        conva_object.line13 = new Konva.Line({
            points: [
                233,73,
                234,106,
                240,130
            ],
            stroke: '#000',
            strokeWidth: 2,
            closed : false,
            tension : 0.4,
            name: "numberText"
        });
        conva_object.line14 = new Konva.Line({
            points: [
                233,73,
                257,95,
                270,120
            ],
            stroke: '#000',
            strokeWidth: 2,
            closed : false,
            tension : 0.4,
            name: "numberText"
        });
        conva_object.line15 = new Konva.Line({
            points: [
                233,73,
                275,80,
                310,112
            ],
            stroke: '#000',
            strokeWidth: 2,
            closed : false,
            tension : 0.4,
            name: "numberText"
        });

        conva_object.text1 = new Konva.Text({
            x: 80,
            y: 91,
            fontFamily: 'Calibri',
            fontSize: 24,
            text: '9-8',
            fill: 'black',
            name: "numberText"
        });
        conva_object.text2 = new Konva.Text({
            x: 213,
            y: 49,
            fontFamily: 'Calibri',
            fontSize: 24,
            text: '7-5',
            fill: 'black',
            name: "numberText"
        });
        conva_object.text3 = new Konva.Text({
            x: 227,
            y: 90,
            fontFamily: 'Calibri',
            fontSize: 24,
            text: '1+1',
            fill: 'black',
            name: 'numberText'
        });
        conva_object.text4 = new Konva.Text({
            x: 240,
            y: 133,
            fontFamily: 'Calibri',
            fontSize: 24,
            text: '3-1',
            fill: 'black',
            name: 'numberText'
        });
        conva_object.text5 = new Konva.Text({
            x: 303,
            y: 166,
            fontFamily: 'Calibri',
            fontSize: 24,
            text: '1+2',
            fill: 'black',
            name: "numberText"
        });
        conva_object.text6 = new Konva.Text({
            x: 235,
            y: 178,
            fontFamily: 'Calibri',
            fontSize: 24,
            text: '3+4',
            fill: 'black',
            name: "numberText"
        });
        conva_object.text7 = new Konva.Text({
            x: 167,
            y: 261,
            fontFamily: 'Calibri',
            fontSize: 24,
            text: '1+6',
            fill: 'black',
            name: 'numberText'
        });
        conva_object.text8 = new Konva.Text({
            x: 345,
            y: 246,
            fontFamily: 'Calibri',
            fontSize: 24,
            text: '10-3',
            fill: 'black',
            name: 'numberText'
        });
        conva_object.text9 = new Konva.Text({
            x: 228,
            y: 287,
            fontFamily: 'Calibri',
            fontSize: 24,
            text: '7-0',
            fill: 'black',
            name: 'numberText'
        });
        conva_object.text10 = new Konva.Text({
            x: 188,
            y: 364,
            fontFamily: 'Calibri',
            fontSize: 24,
            text: '8-1',
            fill: 'black',
            name: 'numberText'
        });
        conva_object.text11 = new Konva.Text({
            x: 460,
            y: 86,
            fontFamily: 'Calibri',
            fontSize: 24,
            text: '12-5',
            fill: 'black',
            name: 'numberText'
        });
        conva_object.text12 = new Konva.Text({
            x: 487,
            y: 285,
            fontFamily: 'Calibri',
            fontSize: 24,
            text: '8+1',
            fill: 'black',
            name: 'numberText'
        });
        conva_object.text13 = new Konva.Text({
            x: 255,
            y: 229,
            fontFamily: 'Calibri',
            fontSize: 24,
            text: '5-1',
            fill: 'black',
            name: 'numberText'
        });
        conva_object.text14 = new Konva.Text({
            x: 305,
            y: 328,
            fontFamily: 'Calibri',
            fontSize: 24,
            text: '3+1',
            fill: 'black',
            name: 'numberText'
        });

        conva_object.smile.setAttr("elementName", "F");

        conva_object.line1.setAttr("elementName", "A");
        conva_object.line2.setAttr("elementName", "A");
        conva_object.line3.setAttr("elementName", "A");
        conva_object.line4.setAttr("elementName", "A");
        conva_object.line5.setAttr("elementName", "A");
        conva_object.line6.setAttr("elementName", "A");
        conva_object.line7.setAttr("elementName", "A");
        conva_object.line8.setAttr("elementName", "A");
        conva_object.line9.setAttr("elementName", "A");
        conva_object.line10.setAttr("elementName", "A");

        conva_object.line12.setAttr("elementName", "C");
        conva_object.line13.setAttr("elementName", "C");
        conva_object.line14.setAttr("elementName", "C");
        conva_object.line15.setAttr("elementName", "C");

        conva_object.text1.setAttr("elementName", "A");
        conva_object.text2.setAttr("elementName", "B");
        conva_object.text3.setAttr("elementName", "C");
        conva_object.text4.setAttr("elementName", "D");
        conva_object.text5.setAttr("elementName", "E");
        conva_object.text6.setAttr("elementName", "F");
        conva_object.text7.setAttr("elementName", "G");
        conva_object.text8.setAttr("elementName", "H");
        conva_object.text9.setAttr("elementName", "I");
        conva_object.text10.setAttr("elementName", "J");
        conva_object.text11.setAttr("elementName", "K");
        conva_object.text12.setAttr("elementName", "L");
        conva_object.text13.setAttr("elementName", "M");
        conva_object.text14.setAttr("elementName", "N");

        for(var element in conva_object){
            layer.add(conva_object[element]);
        }

        layer.find('.numberText').on('click', function() {
            var elementName = this.getAttr('elementName'),
                color = layer.findOne('.active-color').stroke(),
                color_letter = layer.findOne('.active-color').getId();
            if(color != null){
                layer.findOne('#'+elementName).fill(color);
                layer.findOne('#'+elementName).setAttr("color-letter", color_letter);
            }
            layer.draw();
        });

        layer.find('.test-choise').on('click', function() {
            layer.find('.test-choise').map(function(el){
                el.removeName('active-color').fill('transparent');
            });
            this.addName('active-color').fill(this.stroke());
            layer.draw();
        });

        layer.find('.activeElement').on('click', function() {
            var color = layer.findOne('.active-color').stroke(),
                color_letter = layer.findOne('.active-color').getId();
            if(color != null){
                this.fill(color);
                this.setAttr("color-letter", color_letter);
            }
            layer.draw();
        });

        layer.draw();
    },

    getAnswer: function ($canvas,layer) {
        var arr = [], elLetter, colLetter;

        layer.find('.activeElement').map(function(el) {
            elLetter = el.getId();
            colLetter = el.getAttr("color-letter");
            arr.push(elLetter + (typeof colLetter === "undefined" ? "" : " " + colLetter));
        });
        
        return arr;
    },

    setAnswer: function ($canvas, layer, answer) {

        if(answer === []) {
            return;
        }

        answer.map(function(el) {
            var letter_arr = el.split(" ");
            if(letter_arr.length == 2){
                var color = layer.findOne("#" + letter_arr[1]).stroke();
                layer.findOne("#" + letter_arr[0]).fill(color);
                layer.findOne("#" + letter_arr[0]).setAttr("color-letter", el[2]);
            }
        });

        layer.draw();
    }
};