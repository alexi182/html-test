function renderColoringApple($container){

    var html="<a class=\"task-help _help\" href=\"#\">\n" +
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
        "                           <p>Раскраска\n" +
        "                           </p>\n" +
        "                           <p class=\"test__title-small\">\n" +
        "                              Выполни действия, написанные на яблоках, и ты узнаешь,в какой цвет тебе надо раскрасить каждое из них</p>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"test-words flex-test flex-test-space-between flex-wrap\">\n" +
        "                           <div class=\"test-words__item\">\n" +
        "                              <div class=\"test-words__content apple_div\">\n" +
        "                                 <img class=\"test-words__img test-border apple-img\" src=\"img/apple.png\" alt=\"\">" +
        "                                 <span class='apple-number-black'>3+0</span>" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                           <div class=\"test-words__item\">\n" +
        "                              <div class=\"test-words__content apple_div\">\n" +
        "                                 <img class=\"test-words__img test-border apple-img\" src=\"img/apple.png\" alt=\"\">\n" +
        "                                 <span class='apple-number-black'>4-1</span>" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                           <div class=\"test-words__item\">\n" +
        "                              <div class=\"test-words__content apple_div\">\n" +
        "                                 <img class=\"test-words__img test-border apple-img\" src=\"img/apple.png\" alt=\"\">\n" +
        "                                 <span class='apple-number-black'>2+1</span>" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                           <div class=\"test-words__item\">\n" +
        "                              <div class=\"test-words__content test-border apple_div\">\n" +
        "                                 <img class=\"test-words__img test-border apple-img\" src=\"img/apple.png\" alt=\"\">\n" +
        "                                 <span class='apple-number-black'>1+2</span>" +
        "                              </div>\n" +
        "                           </div>\n" +
        "\n" +
        "                           <div class=\"test-words__item\">\n" +
        "                              <div class=\"test-words__content apple_div\">\n" +
        "                                 <img class=\"test-words__img test-border apple-img\" src=\"img/apple.png\" alt=\"\">\n" +
        "                                 <span class='apple-number-black'>3+1</span>" +
        "                              </div>\n" +
        "\n" +
        "                           </div>\n" +
        "                           <div class=\"test-words__item\">\n" +
        "                              <div class=\"test-words__content apple_div\">\n" +
        "                                 <img class=\"test-words__img test-border\" src=\"img/apple.png\" alt=\"\">\n" +
        "                                 <span class='apple-number-black'>5-1</span>" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                           <div class=\"test-words__item\">\n" +
        "                              <div class=\"test-words__content apple_div\">\n" +
        "                                 <img class=\"test-words__img test-border\" src=\"img/apple.png\" alt=\"\">\n" +
        "                                 <span class='apple-number-black'>1+1</span>" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                           <div class=\"test-words__item\">\n" +
        "                              <div class=\"test-words__content apple_div\">\n" +
        "                                 <img class=\"test-words__img test-border\" src=\"img/apple.png\" alt=\"\">\n" +
        "                                 <span class='apple-number-black'>1+3</span>" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"test-choise-block flex-test flex-test-just-even\">\n" +
        "                           <div class=\"test-word__item-block\">\n" +
        "                              <div data-color='red' class=\"test-choise test-choise-color test-choise__red\">\n" +
        "                              </div>\n" +
        "                              <span>2</span>\n" +
        "                           </div>\n" +
        "\n" +
        "                           <div class=\"test-word__item-block\">\n" +
        "                              <div data-color='#662d91' class=\"test-choise test-choise-color test-choise__purple\">\n" +
        "                              </div>\n" +
        "                              <span>3</span>\n" +
        "                           </div>\n" +
        "\n" +
        "                           <div class=\"test-word__item-block\">\n" +
        "                              <div data-color='darkblue' class=\"test-choise test-choise-color test-choise__dark-blue\">\n" +
        "                              </div>\n" +
        "                              <span>4</span>\n" +
        "                           </div>\n" +
        "                        </div>\n" +
        "\n" +
        "\n" +
        "                     </div>";
    $container.html(html);

    testChoiceHandler();

    $(".apple_div").on("click",function(){
        var color = getActiveTestChoiceColor();
        if(color!=null){
            $(this).css("background-color",color);
            $(this).find( "span" ).css( "color", "#fff" );
        }
    });
}