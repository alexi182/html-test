(function ($container) {

    function TestHandler () {
        this.response = {};
        this.interactionHandlers = {};
        this.debug = true;

        return this;
    }

    TestHandler.prototype.getInteractionHandlerByType = function (interactionType) {
        var interactionHandler = interactionHandlers[interactionType];

        if (!interactionHandler) {
            throw new Error(['Bad interaction handler type given: ', interactionType, '.'].join(''));
        }

        return interactionHandler;
    };

    TestHandler.prototype.addResponseUpdateHandler = function (interactionIdentifier) {
        var _self = this;
        return function (interactionResponse, $element) {
            if ($element.closest('.js-active').length) {
                var handler = getTestHandlerByElement($element);
                handler.response[interactionIdentifier] = interactionResponse;
                if (_self.debug) {
                    var keys = Object.keys(handler.getResponse()),
                        i, key;
                    for (i = 0; i < keys.length; i++) {
                        key = keys[i];
                        //console.log(key, handler.getResponse()[key]);
                    }
                }
            }
        };
    };

    TestHandler.prototype.registerInteractionHandler = function (interactionType, interactionHandler) {
        this.interactionHandlers[interactionType] = interactionHandler;
    };

    TestHandler.prototype.reinitOnce = function ($interactionContainer) {
        var $me = $interactionContainer,
            interactionType = $me.data('interaction-type'),
            interactionIdentifier = $me.data('interaction-identifier');

        if(!$me.is(':visible')){
            return;
        }
        if ($me.attr('data-initialized')) {
            return;
        }

        this.getInteractionHandlerByType(interactionType)($me, this.addResponseUpdateHandler(interactionIdentifier));
        $me.attr('data-initialized', '1');
    };

    TestHandler.prototype.getResponse = function () {
        return this.response;
    };

    var handlers = {};

    function getItems () {
        return $container.find('.js-test-item');
    }

    function getItem (id) {
        if (!id || undefined === id) {
            console.error('Попытка получения несуществующего контейнера теста');
            return undefined;
        }
        return $container.find('.js-test-item[data-id=' + id + ']');
    }

    function getItemByElement ($element) {
        if ($element.hasClass('js-test-item')) {
            return $element;
        }
        var $closest = $element.closest('.js-test-item');
        if ($closest.length) {
            return $closest;
        }
        return null;
    }

    function getCurrentItem () {
        return $container.find('.js-test-item.js-active');
    }

    function getInitialItem () {
        var hash = window.location.hash,
            $item = $container.find('.js-test-item:first'),
            id, $tmpItem;
        if (hash) {
            id = parseInt(hash.replace('#', ''));
            if (!isNaN(id)) {
                $tmpItem = getItem(id);
                if ($tmpItem.length) {
                    $item = $tmpItem;
                }
            }
        }
        return $item;
    }

    function setCurrentItem (id) {
        var $item = getItem(id),
            $items = getItems(),
            $current = getCurrentItem();

        if (undefined !== $item && $item.length && $current != $item) {
            $items.removeClass('js-active').hide();
            $item.addClass('js-active').show();
            initIntroJs();
            initTestHandler();
            toggleDirectionControls();
            initTabs();
            window.location.hash = id;
            return true;
        }
        console.error('Попытка включить несуществующий тест');
    }

    function initTabs () {
        var $current = getCurrentItem(),
            $tabs = $current.find('.test__tab:not(.js-init)'),
            handler = getTestHandlerByElement($current);

        $tabs
            .on('click', function () {
                var $currentQuestion = $current.find('.test__task_active .interaction-item');
                if ('two_sets_association' == $currentQuestion.attr('data-interaction-type')) {
                    handler.reinitOnce($currentQuestion);
                }
            })
            .addClass('js-init');

    }

    function initTestHandler () {
        var $current = getCurrentItem(),
            currentId = getId($current);
        if (!getTestHandlerByElement($current)) {
            handlers[currentId] = new TestHandler();
            $current.find('.interaction-item').each(function () {
                var $this = $(this),
                    type = $this.attr('data-interaction-type');
                handlers[currentId].registerInteractionHandler(type, interactionHandlers[type]);
                handlers[currentId].reinitOnce($this);
            });
        }
    }

    function getTestHandler (id) {
        id = parseInt(id);
        if ('object' === typeof(handlers[id])) {
            return handlers[id];
        }
        return null;
    }

    function getTestHandlerByElement ($element) {
        if ($element.hasClass('js-test-item')) {
            return getTestHandler(getId($element));
        }
        var $closest = $element.closest('.js-test-item');
        if ($closest.length) {
            return getTestHandlerByElement($closest);
        }
        console.error('Попытка получения отсутствующего элемента');
        return false;
    }

    function toggleDirectionControls () {
        var $nextBtn = $('.js-go-to-next-test'),
            $prevBtn = $('.js-go-to-prev-test'),
            $nextTestBtn = $('.js-go-to-next-test-btn'),
            $finishBtn = $('.js-finish'),
            $clearBtn = $('.js-clear:visible'),
            $resultBtn = $('.js-result:visible'),
            $currentItem = getCurrentItem(),
            currentId = getId($currentItem);
        if ($container.hasClass('js-finished')) {
            $nextTestBtn.hide();
            $finishBtn.show();
            $resultBtn.show();
        } else {
            $resultBtn.hide();
            if (getNextId()) {
                $nextTestBtn.show();
                $finishBtn.hide();
            } else {
                $nextTestBtn.hide();
                $finishBtn.show();
            }
        }
        if (getNextId()) {
            $nextBtn.show();
        } else {
            $nextBtn.hide();
        }
        if (getPrevId()) {
            $prevBtn.show();
        } else {
            $prevBtn.hide();
        }

        if (isPassedTest(currentId)) {
            $finishBtn.hide();
            $clearBtn.hide();
        }
        if(isWithErrorTest(currentId)){
            $clearBtn
                .show()
                .trigger('click');
        }
    }

    function getIntroJsSteps () {
        var $current = getCurrentItem(),
            $hints = $current.find('[data-intro]'),
            steps = [];
        $hints.each(function () {
            if ($(this).is(':visible')) {
                steps.push({
                    element: $(this).get(0),
                    intro: $(this).attr('data-intro')
                });
            }
        });

        return steps;

    }

    function initIntroJs () {

        var intro = introJs(),
            $current = getCurrentItem();

        $current.find('._help')
            .on('click', function (e) {
                var steps = getIntroJsSteps();
                if(!steps.length){
                    return false;
                }
                e.preventDefault();
                intro.setOptions({
                    showBullets: false,
                    nextLabel: 'следующий',
                    prevLabel: 'предыдущий',
                    doneLabel: 'завершить',
                    skipLabel: 'завершить',
                    overlayOpacity: 1,
                    tooltipPosition: 'auto',
                    showStepNumbers: false,
                    steps: steps
                }).start();
            });

        $('.introjs-skipbutton').hide();

        intro
            .onafterchange(function () {
                var $element = $(this._introItems[this._currentStep].element),
                    $tab = $element.closest('.test__task'),
                    is_active = (!$tab.length || $tab.length && $tab.hasClass('test__task_active'));
                if (getId($element.closest('.js-test-item')) !== getId($current)) {
                    is_active = false;
                }
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
    }

    function getId ($element) {
        return parseInt($element.attr('data-id'));
    }

    function finish (e) {
        e.preventDefault();

        var postData = {},
            testIds = Object.keys(handlers),
            $this = $(this),
            i, testId, handler,
            _this = this;
        for (i = 0; i < testIds.length; i++) {
            testId = testIds[i];
            handler = handlers[testId];
            postData[testId] = handler.getResponse();
        }

        $.post($container.attr('data-attempt-url'), postData, function (data) {
            if (true == data.success) {
                var withErrors = data.data.withError,
                    passed = data.data.passed,
                    $resultBtn = $('.js-result'),
                    i;
                for (i = 0; i < withErrors.length; i++) {
                    setWithErrorTest(withErrors[i]);
                }
                for (i = 0; i < passed.length; i++) {
                    setPassedTest(passed[i]);
                }
                $resultBtn
                    .text('Пройдено ' + passed.length + ' из ' + (withErrors.length + passed.length))
                    .show();
            } else {
                alert('произошла ошибка при проверке');
            }

            if(undefined !== $this && $this.length){
                var $item = getItemByElement($this),
                    itemId = getId($item);
                if(isWithErrorTest(itemId)){
                    clear.call(_this, e);
                }else{
                    $item.find('.js-clear').hide();
                }

            }
        });


        $container.addClass('js-finished');
    }

    function setPassedTest (id) {
        id = parseInt(id);
        var $tab = $('.js-task-num[data-id=' + id + ']');

        if ($tab.length) {
            $tab
                .removeClass('test__task-nums--with-error')
                .addClass('test__task-nums--passed');
            getItem(id).find('.js-finish').hide();
        }
    }

    function isPassedTest (id) {
        id = parseInt(id);
        var $tab = $('.js-task-num[data-id=' + id + ']');

        if ($tab.length) {
            return $tab.hasClass('test__task-nums--passed');
        }
        return false;
    }

    function setWithErrorTest (id) {
        id = parseInt(id);
        var $tab = $('.js-task-num[data-id=' + id + ']');

        if ($tab.length) {
            $tab.addClass('test__task-nums--with-error');
        }
    }

    function isWithErrorTest (id) {
        id = parseInt(id);
        var $tab = $('.js-task-num[data-id=' + id + ']:visible');

        if ($tab.length) {
            return $tab.hasClass('test__task-nums--with-error');
        }
        return false;
    }

    function getNextId () {
        var $current = getCurrentItem(),
            $next = $current.next('.js-test-item'),
            id = getId($next);

        if ($next.length && id) {
            return id;
        }
        return null;
    }

    function getPrevId () {
        var $current = getCurrentItem(),
            $prev = $current.prev('.js-test-item'),
            id = getId($prev);

        if ($prev.length && id) {
            return id;
        }
        return null;
    }

    function showNext (e) {
        e.preventDefault();
        var nextId = getNextId(),
            $current = getCurrentItem(),
            $tabs = $current.find('.test__tabs');
        if($tabs.length){
            var cntTabs = $tabs.find('.test__tab').length,
                currentTab = $tabs.find('.test__tab_active').index();

            if((cntTabs -1) > currentTab){
                var $nextTab = $tabs.find('.test__tab:nth-child('+(currentTab + 2)+')');
                $nextTab.trigger('click');
                return false;
            }
        }
        if (nextId) {
            setCurrentItem(nextId);
            return true;
        }
        finish.call(this, e);
    }

    function showPrev (e) {
        e.preventDefault();
        var prevId = getPrevId();
        if (prevId) {
            setCurrentItem(prevId);
            return true;
        }
        return false;
    }

    function clear (e) {
        if(undefined !== e){
            e.preventDefault();
        }
        var $container = getItemByElement($(this)),
            test = new TestHandler();
        clearInteraction($container);

        if(undefined !== $container && $container && $container.length){
            $container.find('.interaction-item').each(function () {
                var $this = $(this);
                test.addResponseUpdateHandler($this.attr('data-interaction-identifier')).call(null, [], $this);
            })
        }
    }

    this.init = function () {
        var currentItem = getCurrentItem();
        if (!currentItem.length) {
            setCurrentItem(getId(getInitialItem()));
        }

        $('.js-task-num')
            .off('click')
            .on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();
                var id = getId($(this));
                setCurrentItem(id);
            });

        $('.js-go-to-next-test, .js-go-to-next-test-btn')
            .off('click')
            .on('click', showNext);

        $('.js-go-to-prev-test')
            .off('click')
            .on('click', showPrev);
        $('.js-finish')
            .off('click')
            .on('click', finish);

        $('.js-clear')
            .off('click')
            .on('click', clear);
    };

    init();

})($('.js-test-container'));