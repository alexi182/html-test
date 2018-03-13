var AssociationResponseHandler = function (onResponseUpdateCallback, $container) {
    var response = {},
        extractResponse = function () {
            return $.map(response, function (val, key) {
                return key;
            });
        },
        extractKey = function (gapkey, choiceKey) {
            return [gapkey, choiceKey].join(' ');
        };

    this.setAnswer = function (gapkey, choiceKey) {
        response[extractKey(gapkey, choiceKey)] = null;
        onResponseUpdateCallback(extractResponse(), $container);
    };
    this.removeAnswer = function (gapkey, choiceKey) {
        delete response[extractKey(gapkey, choiceKey)];
        onResponseUpdateCallback(extractResponse(), $container);
    };

    this.clear = function (){
        response = {};
    };
};

var addStyledGapMatchHandler = function (getClassNameByGapId) {
    return function ($container, onResponseUpdateCallback) {
        var chosenColor = null,
            responseHandler = new AssociationResponseHandler(onResponseUpdateCallback, $container),
            $choices = $('.interaction-choice'),
            $gaps = $container.find('.interaction-gap');

        $choices.on('click', $container, function () {
            chosenColor = $(this).data('id');
            $choices.removeClass('active');
            $(this).addClass('active');

        });

        $gaps.on('click', function () {
            if (!chosenColor) {
                return;
            }

            var $me = $(this),
                gapId = $me.attr('data-id'),
                previousChoiceId = $me.attr('data-choice-id');

            if (previousChoiceId) {
                $me.removeClass(getClassNameByGapId(previousChoiceId));
                responseHandler.removeAnswer(gapId, previousChoiceId);
                $me.removeAttr('data-choice-id');

                if (previousChoiceId === chosenColor) {
                    return;
                }
            }

            responseHandler.setAnswer(gapId, chosenColor);
            $me.addClass(getClassNameByGapId(chosenColor));
            $me.attr('data-choice-id', chosenColor);
        });

        $container.on('clear', function(){
            responseHandler.clear();
            $choices.removeClass('active');
            $gaps.each(function(){
                var $this = $(this),
                    choiceId = $this.attr('data-choice-id');
                if(undefined !== choiceId){
                    $this.removeAttr('data-choice-id');
                    $this.removeClass(getClassNameByGapId(choiceId));
                }
            });
        });
    }
};

var jsPlumbInit = function ($container, onResponseUpdateCallback) {
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
        },
        extractAnswerFromConnection = function (conn) {
            var $gap = $(conn.source),
                $choice = $(conn.target);

            if (!$gap.hasClass('interaction-gap-container__gap')) {
                // swap variables
                $choice = [$gap, $gap = $choice][0];
            }
            return [$gap.data('id'), $choice.data('id')];
        },
        responseHandler = new AssociationResponseHandler(onResponseUpdateCallback, $container);

    var instance = jsPlumb.getInstance({
        Container: 'canvas'
    });
    instance.bind('connection', function (info) {
        var answer = extractAnswerFromConnection(info.connection);
        responseHandler.setAnswer(answer[0], answer[1]);
        info.connection.bind('click', function (conn) {
            instance.detach(conn);
        });
    });

    instance.bind('beforeDrop', function(connection){
        var $source = $('#' + connection.sourceId),
            $target = $('#' + connection.targetId),
            $sourceContainer = $source.closest('.interaction-gap-container').length ? $source.closest('.interaction-gap-container') : $source.closest('.interaction-choice-container'),
            $targetContainer = $target.closest('.interaction-gap-container').length ? $target.closest('.interaction-gap-container') : $target.closest('.interaction-choice-container');
        return $sourceContainer.attr('class') != $targetContainer.attr('class');
    });

    instance.bind('connectionDetached', function (info) {
        var answer = extractAnswerFromConnection(info.connection);
        responseHandler.removeAnswer(answer[0], answer[1]);
    });

    $container.find('.interaction-gap-container__gap').each(function () {
        instance.addEndpoint($(this).attr('id'), {anchor: 'RightMiddle'}, endpointOptions);
    });

    $container.find('.interaction-choice-container__choice').each(function () {
        instance.addEndpoint($(this).attr('id'), {anchor: 'LeftMiddle'}, endpointOptions);
    });

    $container.on('clear', function(){
        instance.detachEveryConnection();
        responseHandler.clear();
    })
};

var addGapMatchHandler = function (onlyOneChoiceAllowed) {
    return function ($container, onResponseUpdateCallback) {
        var responseHandler = new AssociationResponseHandler(onResponseUpdateCallback, $container),
            moveOtherChoicesFromGap = function (elem, target, responseHandler) {
                var $target = $(target);
                var choiceIdentifier = $(elem).data('id');

                if ($target.hasClass('interaction-gap')) {
                    var gapIdenitifier = $target.data('id');

                    $target.find('.interaction-choice[data-id="' + choiceIdentifier + '"]:first').siblings().each(function () {
                        responseHandler.removeAnswer(gapIdenitifier, $(this).data('id'));
                        $(this).remove();
                    });
                }
            },
            drake = dragula([$container.find('.choices-set')[0]], {
                copy: function () {
                    return true;
                }
            });

        var afterCallback = onlyOneChoiceAllowed && moveOtherChoicesFromGap;

        drake.on('drop', (function (responseHandler, afterCallback) {
            return function (elem, target, source) {
                var $source = $(source),
                    $target = $(target);

                if (!$target.length) {
                    return;
                }

                $source.hasClass('interaction-gap') && $source.html('');

                if ($target.hasClass('choices-set')) {
                    responseHandler.removeAnswer($source.data('id'), $(elem).data('id'));
                    $(elem).remove();
                    return false;
                }

                if ($(target).hasClass('choices-set')) {
                    responseHandler.removeAnswer($source.data('id'), $(elem).data('id'));
                    return false;
                }

                if ($source.hasClass('interaction-gap')) {
                    responseHandler.removeAnswer($source.data('id'), $(elem).data('id'));
                }

                responseHandler.setAnswer($target.data('id'), $(elem).data('id'));

                afterCallback && afterCallback(elem, target, responseHandler);
            }
        }(responseHandler, afterCallback)));

        $container.find('.interaction-gap').each(function () {
            var $gap = $(this);
            $($gap).on('click', '.interaction-choice', function () {
                $(this).remove();
                responseHandler.removeAnswer($gap.data('id'), $(this).data('id'));
            });
            drake.containers.push($gap[0]);
        });
    };
};

var interactionHandlers = {
    single_choice: function ($container, onResponseUpdateCallback) {
        $container.find('.interaction-choice').on('click', function () {
            onResponseUpdateCallback([$(this).val()], $container);
        });
    },
    multiple_choice: function ($container, onResponseUpdateCallback) {
        $container.find('.interaction-choice').on('click', function () {
            var response = [];
            $container.find('.interaction-choice:checked').each(function (i, elem) {
                response.push($(elem).val());
            });
            onResponseUpdateCallback(response, $container);
        });
    },
    text_entry: function ($container, onResponseUpdateCallback) {
        $container.keyup(function () {
            var $this = $(this),
                response = [],
                $textContainer = $this.closest('.test__task'),
                id = $this.attr('data-interaction-identifier'),
                $interactions = $textContainer.find('.interaction-item[data-interaction-identifier=' + id + ']');
            $interactions.each(function(){
                response.push($(this).val());
            });
            onResponseUpdateCallback(response, $container);
        });
    },
    images_text_entries: function ($container, onResponseUpdateCallback) {
        $container.keyup(function () {
            var $this = $(this),
                response = [],
                $textContainer = $this.closest('.test__task'),
                id = $this.attr('data-interaction-identifier'),
                $interactions = $textContainer.find('.interaction-item[data-interaction-identifier=' + id + ']');
            $interactions.each(function(){
                response.push($(this).val());
            });
            onResponseUpdateCallback(response, $container);
        });
    },
    order: function ($container, onResponseUpdateCallback) {
        var drake = dragula([$container[0]]);
        drake.on('drop', function () {
            var response = [];
            $container.find('.interaction-choice').each(function (i, container) {
                response.push($(container).data('interaction-choice-identifier'));
            });
            onResponseUpdateCallback(response, $container);
        });

        var response = [];
        $container.find('.interaction-choice').each(function (i, container) {
            response.push($(container).data('interaction-choice-identifier'));
        });
        onResponseUpdateCallback(response, $container);
    },
    order_vertical: function ($container, onResponseUpdateCallback) {
        var drake = dragula([$container[0]], {
            direction: 'vertical'
        });
        drake.on('drop', function () {
            var response = [];
            $container.find('.interaction-choice').each(function (i, container) {
                response.push($(container).data('interaction-choice-identifier'));
            });
            onResponseUpdateCallback(response, $container);
        });
    },
    gap_match_table: function ($container, onResponseUpdateCallback) {
        var drakeArray = [
            $container.find('.js-interaction-item-list').get(0)
        ];
        $container.find('td').each(function () {
            drakeArray.push($(this).get(0));
        });
        var drake = dragula(drakeArray);
        drake.on('drop', function () {
            dropHandler();
        });

        $container.find('.js-interaction-choice-container').each(function () {
            var $gap = $(this);
            $($gap).on('click', '.interaction-choice', function () {
                $container.find('.choices-set').append($(this));
                dropHandler();
            });
            drake.containers.push($gap[0]);
        });

        dropHandler = function () {
            var response = [];
            $container.find('.js-interaction-choice-container').each(function () {
                var id = $(this).attr('data-identifier');
                $(this).find('.interaction-choice').each(function () {
                    var itemId = $(this).attr('data-id');
                    response.push(id + ' ' + itemId);
                });
            });
            onResponseUpdateCallback(response, $container);
        }
    },
    gap_match_image_text: addGapMatchHandler(true),
    two_sets_association: function ($container, onResponseUpdateCallback) {
        jsPlumb.ready(function () {
            var $images = $('.interaction-item img');
            var initJsPlumb = function () {
                jsPlumbInit($container, onResponseUpdateCallback);
            };
            var initTimeout = setTimeout(initJsPlumb, 300);

            if ($images.length > 0) {
                var loadedImages = 0;
                $('.interaction-item img').on('load', function () {
                    clearTimeout(initTimeout);
                    loadedImages += 1;

                    if (loadedImages === $images.length) {
                        jsPlumbInit($container, onResponseUpdateCallback);

                        return;
                    }

                    initTimeout = setTimeout(initJsPlumb, 400);
                });

                return;
            }

            clearTimeout(initTimeout);

            jsPlumbInit($container, onResponseUpdateCallback);
        });
    },
    gap_match_text: addGapMatchHandler(true),
    gap_match_multiple_choice: addGapMatchHandler(false),
    inline_choice: function ($container, onResponseUpdateCallback) {
        $container.on('change', function () {
        //$container.find('.interaction-item').on('change', function () {
            onResponseUpdateCallback([$(this).val()], $container);
        });
        $container.trigger('change');
    },
    gap_match_color: (function () {
        var getGapColorClassNameByGapId = function (identifier) {
            return [identifier.toLowerCase(), '-gap-color'].join('').replace('_', '-');
        };

        return addStyledGapMatchHandler(getGapColorClassNameByGapId);
    }()),
    gap_match_underline: (function () {
        var getGapColorClassNameByGapId = function (identifier) {
            return [identifier.toLowerCase(), '-gap-underline'].join('').replace('_', '-');
        };

        return addStyledGapMatchHandler(getGapColorClassNameByGapId);
    }())
};