function renderSelectAPicture($container){
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
        "                           <p>Выполни задание\n" +
        "                           </p>\n" +
        "                           <p class=\"test__title-small\">\n" +
        "                              Выдели картинки, в названиях которых есть звук [ А ]</p>\n" +
        "                        </div>\n" +
        "\n" +
        "                        <div class=\"test-words flex-test flex-test-space-between flex-wrap\">\n" +
        "                           <div class=\"test-words__item mb30\">\n" +
        "                              <div class=\"test-words__sound test-border\">\n" +
        "                                 <img class=\"test-words__img\" src=\"img/pic1.png\" alt=\"\">\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                           <div class=\"test-words__item mb30\">\n" +
        "                              <div class=\"test-words__sound test-border\">\n" +
        "                                 <img class=\"test-words__img\" src=\"img/pic2.png\" alt=\"\">\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                           <div class=\"test-words__item mb30\">\n" +
        "                              <div class=\"test-words__sound test-border\">\n" +
        "                                 <img class=\"test-words__img\" src=\"img/pic3.png\" alt=\"\">\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                           <div class=\"test-words__item mb30\">\n" +
        "                              <div class=\"test-words__sound test-border\">\n" +
        "                                 <img class=\"test-words__img\" src=\"img/pic4.png\" alt=\"\">\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "\n" +
        "                           <div class=\"test-words__item mb30\">\n" +
        "                              <div class=\"test-words__sound test-border\">\n" +
        "                                 <img class=\"test-words__img\" src=\"img/pic5.png\" alt=\"\">\n" +
        "                              </div>\n" +
        "\n" +
        "                           </div>\n" +
        "                           <div class=\"test-words__item mb30\">\n" +
        "                              <div class=\"test-words__sound test-border\">\n" +
        "                                 <img class=\"test-words__img\" src=\"img/pic6.png\" alt=\"\">\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                           <div class=\"test-words__item mb30\">\n" +
        "                              <div class=\"test-words__sound test-border\">\n" +
        "                                 <img class=\"test-words__img\" src=\"img/pic7.png\" alt=\"\">\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                           <div class=\"test-words__item mb30\">\n" +
        "                              <div class=\"test-words__sound test-border\">\n" +
        "                                 <img class=\"test-words__img\" src=\"img/pic8.png\" alt=\"\">\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                        </div>\n" +
        "\n" +
        "                     </div>";
    $container.html(html);

    $(".test-border").on("click",function(){
        var $this = $(this);
        $this.hasClass("border-active") ? $this.removeClass("border-active") : $this.addClass("border-active");

    });
}