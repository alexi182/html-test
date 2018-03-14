function renderCrosswordBirds($container){
    var html ="<a class=\"task-help _help\" href=\"#\">\n" +
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
        "                                    <p>Кроссворд “Птицы”</p>\n" +
        "                                    <p class=\"test__title-small\">\n" +
        "                                        Реши примеры и узнай названия птиц</p>\n" +
        "                                </div>\n" +
        "\n" +
        "                                <div class=\"test-words birds-block flex-test flex-test-space-between\">\n" +
        "                                        <div class=\"test-words__item tac\">\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                <img src=\"img/bird1.png\" alt=\"\">\n" +
        "                                                8 + 2 - 8 = <input data-number='2' class=\"test-words__input\" value=\"\">\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                <img src=\"img/bird2.png\" alt=\"\">\n" +
        "                                                17 - 10 = <input data-number='7' class=\"test-words__input\" value=\"\">\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                <img src=\"img/bird3.png\" alt=\"\">\n" +
        "                                                16 - 10 = <input data-number='6' class=\"test-words__input\" value=\"\">\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                <img src=\"img/bird4.png\" alt=\"\">\n" +
        "                                                15 - 10 = <input data-number='5' class=\"test-words__input\" value=\"\">\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                <img src=\"img/bird5.png\" alt=\"\">\n" +
        "                                                14 - 10 - 1 = <input data-number='3' class=\"test-words__input\" value=\"\">\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                <img src=\"img/bird6.png\" alt=\"\">\n" +
        "                                                14 - 10 = <input data-number='4' class=\"test-words__input\" value=\"\">\n" +
        "                                            </div>\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                <img src=\"img/bird7.png\" alt=\"\">\n" +
        "                                                3 + 7 - 9 = <input data-number='1' class=\"test-words__input\" value=\"\">\n" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                        <div class=\"test-words__item tac\">\n" +
        "                                            <div class=\"test-words__cell\">\n" +
        "                                                <table id='birdCrosswordTable'>" +
        "                                                   <tr>" +
        "                                                       <td>" +
        "                                                           <span>1</span>" +
        "                                                       </td>" +
        "                                                       <td style='border:none !important'></td><td>А</td><td>И</td><td>С</td><td>Т</td>" +
        "                                                   </tr>" +
        "                                                   <tr>" +
        "                                                       <td>" +
        "                                                           <span>2</span>" +
        "                                                       </td>" +
        "                                                       <td>Г</td><td>О</td><td>Л</td><td>У</td><td>Б</td><td>Ь</td>" +
        "                                                   </tr>" +
        "                                                   <tr>" +
        "                                                       <td>" +
        "                                                           <span>3</span>" +
        "                                                       </td>" +
        "                                                       <td>П</td><td>О</td><td>П</td><td>У</td><td>Г</td><td>А</td><td>Й</td>" +
        "                                                   </tr>" +
        "                                                   <tr>" +
        "                                                       <td>" +
        "                                                           <span>4</span>" +
        "                                                       </td>" +
        "                                                       <td>С</td><td>О</td><td>Р</td><td>О</td><td>К</td><td>А</td>" +
        "                                                   </tr>" +
        "                                                   <tr>" +
        "                                                       <td>" +
        "                                                           <span>5</span>" +
        "                                                       </td>" +
        "                                                       <td>П</td><td>А</td><td>В</td><td>Л</td><td>И</td><td>Н</td>" +
        "                                                   </tr>" +
        "                                                   <tr>" +
        "                                                       <td>" +
        "                                                           <span>6</span>" +
        "                                                       </td>" +
        "                                                       <td>С</td><td>Т</td><td>Р</td><td>А</td><td>У</td><td>С</td>" +
        "                                                   </tr>" +
        "                                                   <tr>" +
        "                                                       <td>" +
        "                                                           <span>7</span>" +
        "                                                       </td>" +
        "                                                       <td>П</td><td>И</td><td>Н</td><td>Г</td><td>В</td><td>И</td><td>Н</td>" +
        "                                                   </tr>" +
        "                                               </table>" +
        "                                            </div>\n" +
        "                                        </div>\n" +
        "                                </div>\n" +
        "                            </div>";

    $container.html(html);

    $(".test-words__input").on("input",function(){
        var $this = $(this);
        var lenNumber = $this.data("number");

        if($this.val()==lenNumber){
            $("#birdCrosswordTable tbody").children().each(function(index){
                if((index+1)==lenNumber) {
                    $(this).children().css("color", "black");
                }
            });
        }else{
            $("#birdCrosswordTable tbody").children().each(function(index){
                if((index+1)==lenNumber) {
                    $(this).children().css("color", "white");
                }
            });
        }
    });

    var divHeight = document.getElementsByClassName('tac')[0].offsetHeight;
    var tableHeight = document.getElementById('birdCrosswordTable').offsetHeight;

    var tableY = getOffsetSum(document.getElementById('birdCrosswordTable'));
    var divY = getOffsetSum(document.getElementsByClassName('tac')[0]);



    window.onscroll = function() {
        var scrolled = window.pageYOffset || document.documentElement.scrollTop;
        var marginTopTable = tableY-scrolled;
        var bool = divHeight + divY < tableHeight + scrolled + 10;

        if (marginTopTable > 0) {
            document.getElementById('birdCrosswordTable').style.marginTop = "0px";
        } else {
            if (!bool) {
                document.getElementById('birdCrosswordTable').style.marginTop = Math.abs(marginTopTable)+10+"px";
            }
        }
    }
}

function getOffsetSum(elem) {
    var top=0;
    while(elem) {
        top = top + parseFloat(elem.offsetTop);
        elem = elem.offsetParent;
    }

    return Math.round(top);
}


