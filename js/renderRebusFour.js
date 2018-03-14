function renderRebusFour($container){
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
        "                           <p>Ребус\n" +
        "                           </p>\n" +
        "                           <p class=\"test__title-small\">\n" +
        "                              Расставь недостающие картинки</p>\n" +
        "                        </div>\n" +
        "                        <div class=\"test-words\">\n" +
        "                           <div class=\"test-words__item\">\n" +
        "                              <div class=\"test-words__content tac\">\n" +
        "                                 <table class=\"test-words__rebus-table\">\n" +
        "                                    <tr>\n" +
        "                                       <td>\n" +
        "                                          <img src=\"img/rebus1.png\" alt=\"\">\n" +
        "                                       </td>\n" +
        "                                       <td id='droppable-td1'></td>\n" +
        "                                       <td>\n" +
        "                                          <img src=\"img/rebus2.png\" alt=\"\">\n" +
        "                                       </td>\n" +
        "                                       <td>\n" +
        "                                          <img src=\"img/rebus3.png\" alt=\"\">\n" +
        "                                       </td>\n" +
        "                                    </tr>\n" +
        "                                    <tr>\n" +
        "                                       <td>\n" +
        "                                          <img src=\"img/rebus2.png\" alt=\"\">\n" +
        "                                       </td>\n" +
        "                                       <td>\n" +
        "                                          <img src=\"img/rebus4.png\" alt=\"\">\n" +
        "                                       </td>\n" +
        "                                       <td id='droppable-td2'></td>\n" +
        "                                       <td id='droppable-td3'></td>\n" +
        "                                    </tr>\n" +
        "                                    <tr>\n" +
        "                                       <td id='droppable-td4'></td>\n" +
        "                                       <td id='droppable-td5'></td>\n" +
        "                                       <td id='droppable-td6'></td>\n" +
        "                                       <td>\n" +
        "                                          <img src=\"img/rebus1.png\" alt=\"\">\n" +
        "                                       </td>\n" +
        "                                    </tr>\n" +
        "                                    <tr>\n" +
        "                                       <td>\n" +
        "                                          <img src=\"img/rebus4.png\" alt=\"\">\n" +
        "                                       </td>\n" +
        "                                       <td>\n" +
        "                                          <img src=\"img/rebus1.png\" alt=\"\">\n" +
        "                                       </td>\n" +
        "                                       <td>\n" +
        "                                          <img src=\"img/rebus3.png\" alt=\"\">\n" +
        "                                       </td>\n" +
        "                                       <td id='droppable-td7'></td>\n" +
        "                                    </tr>\n" +
        "                                 </table>\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                        </div>\n" +
        "                        <div class=\"test-choise-block flex-test flex-test-alcenter flex-test-just-even\">\n" +
        "                           <div class=\"test-word__item-block\">\n" +
        "                              <div id='druggable-img1' class=\"test-choise test-choise__rebus\">\n" +
        "                                 <img  src=\"img/rebus1.png\" alt=\"\">\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                           <div class=\"test-word__item-block\">\n" +
        "                              <div id='druggable-img2' class=\"test-choise test-choise__rebus\">\n" +
        "                                 <img  src=\"img/rebus4.png\" alt=\"\">\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                           <div class=\"test-word__item-block\">\n" +
        "                              <div id='druggable-img3' class=\"test-choise test-choise__rebus\">\n" +
        "                                 <img  src=\"img/rebus2.png\" alt=\"\">\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                           <div class=\"test-word__item-block\">\n" +
        "                              <div id='druggable-img4' class=\"test-choise test-choise__rebus\">\n" +
        "                                 <img  src=\"img/rebus3.png\" alt=\"\">\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                        </div>\n" +
        "                     </div>";

    $container.html(html);

    var containerArr = [
        document.getElementById('druggable-img1'),
        document.getElementById('druggable-img2'),
        document.getElementById('druggable-img3'),
        document.getElementById('druggable-img4'),

        document.getElementById('droppable-td1'),
        document.getElementById('droppable-td2'),
        document.getElementById('droppable-td3'),
        document.getElementById('droppable-td4'),
        document.getElementById('droppable-td5'),
        document.getElementById('droppable-td6'),
        document.getElementById('droppable-td7')
    ];

    dragula(containerArr, {
        copy: true,
        accepts: function (el, target) {
            return !$(target).hasClass('test-choise__rebus');
        }
    }).on('drop', function (el) {
        $(el).parent().html(el);
    }).on('over', function (el, container) {
        $(container).find('img').each(function(){
            if (!$(this).hasClass('gu-transit')) {
                $(this).css('display', 'none');
            }
        });
    }).on('out', function (el, container) {
        $(container).find('img').each(function(){
            if (!$(this).hasClass('gu-transit')) {
                $(this).css('display', 'inline');
            }
        });
    });
}