var globalAnswer = [];

function renderColoringSnowman($container){
    var html = "<a class=\"task-help _help\" href=\"#\">\n" +
        "                        <i class=\"icon icon_nav-question\"></i>\n" +
        "                     </a>\n" +
        "                     <a class=\"task-play _play\" href=\"#\">\n" +
        "                        <svg class=\"lesson-nav-item__icon i_step-8\">\n" +
        "                           <use xlink:href=\"#icon-step-8\"></use>\n" +
        "                        </svg>\n" +
        "                     </a>\n" +
        "                     <div class=\"test__task-block test__task_active\">\n" +
        "                        <div class=\"test__title\" data-intro=\"Внимательно ознакомьтесь с текстом задания\">\n" +
        "                           <p>Раскраска</p>\n" +
        "                           <p class=\"test__title-small\">\n" +
        "                              Выполни действия, и раскрась картинку</p>\n" +
        "                        </div>\n" +
        "                        <div class=\"test-words flex-test flex-test-space-between flex-test-alcenter\">\n" +
        "                           <div id='container' class=\"test-words__item\">\n" +
        "                           </div>\n" +
        "                        </div>\n" +
        "                     </div>";

    $container.html(html);

    var stage = new Konva.Stage({
        container: 'container',
        width: 960,
        height: 520
    });
    var layer = new Konva.Layer();
    var broomTop = new Konva.Line({points: [0,0],strokeWidth: 0,id:'nullPoint'});
    layer.add(broomTop);
    stage.add(layer);
    layer.find("#nullPoint").remove();


     test_242.setAnswer($('#container canvas'), layer, globalAnswer);
    $('.js-finish').off();
     $('.js-finish').on('click', function(){
         globalAnswer = test_242.getAnswer($('#container canvas'), layer);
     });
}