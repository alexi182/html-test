function renderRebusRoundAndSquare($container) {
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
        "                              Образуйте пары: круг - квадрат</p>\n" +
        "                        </div>\n" +
        "                        <div class=\"test-words\">\n" +
        "                           <div class=\"test-words__item\">\n" +
        "                              <div class=\"test-words__content tac\">\n" +
        "                                 <div class=\"test-words__figures\">\n" +
        "                                    <div id='A' class=\"figure figure1 interaction-gap-container__gap jsplumb-endpoint-anchor\">\n" +
        "                                    </div>\n" +
        "                                    <div id='B' class=\"figure figure2 interaction-gap-container__gap jsplumb-endpoint-anchor\">\n" +
        "                                    </div>\n" +
        "                                    <div id='C' class=\"figure figure3 interaction-gap-container__gap jsplumb-endpoint-anchor\">\n" +
        "                                    </div>\n" +
        "                                    <div id='D' class=\"figure figure4 interaction-gap-container__gap jsplumb-endpoint-anchor\">\n" +
        "                                    </div>\n" +
        "                                    <div id='E' class=\"figure figure5 interaction-gap-container__gap jsplumb-endpoint-anchor\">\n" +
        "                                    </div>\n" +
        "                                    <div id='F' class=\"figure figure6 interaction-gap-container__gap jsplumb-endpoint-anchor\">\n" +
        "                                    </div>\n" +
        "                                    <div id='G' class=\"figure figure7 interaction-gap-container__gap jsplumb-endpoint-anchor\">\n" +
        "                                    </div>\n" +
        "                                    <div id='H' class=\"figure figure8 interaction-gap-container__gap jsplumb-endpoint-anchor\">\n" +
        "                                    </div>\n" +
        "                                 </div>\n" +
        "                              </div>\n" +
        "                           </div>\n" +
        "                        </div>\n" +
        "                     </div>";
    $container.html(html);

    var endpointOptions = {
        isSource: true,
        isTarget: true,
        connector: ["Straight"],
        maxConnections: 100,
        endpoint: ["Dot", {radius: 14}],
        paintStyle: {
            fillStyle: '#32D7C0'
        },
        hoverPaintStyle: {
            fillStyle: "#009F8A"
        },
        scope: $container.data('id')
    };

    var instance = jsPlumb.getInstance({
        Container: 'canvas'
    });

    instance.bind('connection', function (info) {
        info.connection.bind('click', function (conn) {
            instance.detach(conn);
        });
    });

    $container.find('.interaction-gap-container__gap').each(function () {
        instance.addEndpoint($(this).attr('id'), {anchor: 'Center'}, endpointOptions);
    });
}