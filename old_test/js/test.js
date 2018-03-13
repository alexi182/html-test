(function () {

    var TestHandler = function () {
        var response = {},
            interactionHandlers = {};

        var getInteractionHandlerByType = function (interactionType) {
                var interactionHandler = interactionHandlers[interactionType];

                if (!interactionHandler) {
                    throw new Error(['Bad interaction handler type given: ', interactionType, '.'].join(''));
                }

                return interactionHandler;
            },
            addResponseUpdateHandler = function (interactionIdentifier) {
                return function (interactionResponse) {
                    response[interactionIdentifier] = interactionResponse;

                    for (var resp in testHandler.getResponse()) {
                        //console.log(resp, testHandler.getResponse()[resp]);
                    }
                };
            };

        this.addResponseUpdateHandler = addResponseUpdateHandler;

        this.registerInteractionHandler = function (interactionType, interactionHandler) {
            interactionHandlers[interactionType] = interactionHandler;
        };
        this.init = function (interactionContainerSelector) {
            $(interactionContainerSelector).each(function () {
                var $me = $(this),
                    interactionType = $me.data('interaction-type'),
                    interactionIdentifier = $me.data('interaction-identifier');

                getInteractionHandlerByType(interactionType)($me, addResponseUpdateHandler(interactionIdentifier));
            });
        };
        this.reinitOnce = function ($interactionContainer) {
            var $me = $interactionContainer,
                interactionType = $me.data('interaction-type'),
                interactionIdentifier = $me.data('interaction-identifier');

            if ($me.data('initialized')) {
                return;
            }

            getInteractionHandlerByType(interactionType)($me, addResponseUpdateHandler(interactionIdentifier));
            $me.data('initialized', true);
        };
        this.getResponse = function () {
            return response;
        }
    };

    var testHandler = new TestHandler();
    for (var interactionType in interactionHandlers) {
        testHandler.registerInteractionHandler(interactionType, interactionHandlers[interactionType]);
    }

    testHandler.init('.interaction-item');

    $('.test__tab').click(function () {
        var $currentQuestion = $('.test__task_active').find('.interaction-item');
        if ($currentQuestion.data('interaction-type') == 'two_sets_association') {
            testHandler.reinitOnce($currentQuestion);
        }
    });

    $('.run-test-check').on('click', function (e) {

        e.preventDefault();

        var $testMeta = $('.test-meta'),
            testAttempt = testHandler.getResponse(),
            $btn = $(this),
            nextUrl = $btn.attr('data-next-url'),
            isLast = ('1' == $btn.attr('data-last'));

        $.post($testMeta.data('send-attempt-url'), {testAttempt: testAttempt, isLast: isLast}, function (data) {
            if(data.btnText){
                if(2 >= parseInt(data.assessment)) {
                    swal({
                        title: "Над уроком придётся ещё поработать",
                        text: "Попробовать свои силы ещё раз можно будет завтра! До встречи!",
                    });
                }
            }
            if (data.success) {
                var keys, i, key, btnClass, assessment;
                if (undefined === nextUrl && 'object' === typeof(data.results)) {
                    assessment = data.assessment * 1;
                    switch (true) {
                        case 3 < assessment:
                            btnClass = 'test-btn--success';
                            break;
                        case 3 == assessment:
                            btnClass = 'test-btn--warn';
                            break;
                        default:
                            btnClass = 'test-btn--danger';
                            break;
                    }
                    if(data.debug != undefined)
                        data.btnText += "("+data.debug+")";
                    $btn.replaceWith($('<span class="lk-form-submit ' + btnClass + '">' + data.btnText+ '</span>'));
                    $('.reset-question-form').remove();
                } else if (undefined !== nextUrl) {
                    window.location.href = nextUrl;
                } else if(undefined !== data.tests && data.tests.length) {
                    for (i = 0; i < data.tests.length; i++) {
                        $('.js-task-num[data-test-id=' + data.tests[i] + ']').addClass('test__task-nums--with-error');
                    }
                    swal({
                        title: "<small>У вас есть еще не пройденные тесты!</small>",
                        html: true
                    });
                }
            }
        });
    });

    $('.reset-question-form').on('click', function (e) {
        e.preventDefault();
        var $container = $('.test__task.test__task_active');

        clearInteraction($container);
        $container.find('.interaction-item').each(function () {
            var $this = $(this);
            testHandler.addResponseUpdateHandler($this.attr('data-interaction-identifier')).call(null, [], $this);
        })
    })
})();

(function () {
    var intro = introJs();

    $('._help').on('click', function (e) {
        e.preventDefault();
        intro.setOptions({
            showBullets: false,
            nextLabel: 'следующий',
            prevLabel: 'предыдущий',
            doneLabel: 'завершить',
            skipLabel: 'завершить',
            overlayOpacity: 1,
            tooltipPosition: 'auto',
            showStepNumbers: false
//                    disableInteraction: true,
        }).start();
    });


    $('.introjs-skipbutton').hide();

    intro
        .onafterchange(function () {
            var $element = $(this._introItems[this._currentStep].element),
                $tab = $element.closest('.test__task'),
                is_active = (!$tab.length || $tab.length && $tab.hasClass('test__task_active'));
            if (!is_active) {
                if ('forward' == this._direction) {
                    this.nextStep();
                } else {
                    this.previousStep();
                }
            }
            if (0 == this._currentStep) {
                $('.introjs-prevbutton').hide();
            } else {
                $('.introjs-prevbutton').show();
            }
            if (this._introItems.length - 1 == this._currentStep || this._introItems.length == 1) {
                $('.introjs-skipbutton').show();
                $('.introjs-nextbutton').hide();
            } else {
                $('.introjs-skipbutton').hide();
                $('.introjs-nextbutton').show();
            }
        })
    ;
})();
