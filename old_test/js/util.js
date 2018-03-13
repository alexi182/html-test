$('.show-question-hint').click(function () {
    $(this).siblings('.question-hint').toggle();
});

audiojs.events.ready(function () {
    var as = audiojs.createAll();
});



function clearInteraction($container){
    if(undefined !== $container && $container && $container.length){
        if($container.hasClass('interaction-item')){
            var type = $container.attr('data-interaction-type'),
                handler = InteractionClear[type];
            if(undefined !== handler){
                console.info('DEBUG: clear ' + type, $container);
                handler.call(null, $container);
            }
        }else{
            $container.find('.interaction-item').each(function(){
                console.info('DEBUG: finded item ', $(this));
                clearInteraction($(this));
            });
        }
    }
}

!(function ($, undefined) {

    $('.test-meta img').on('click', function () {
        $.fancybox({
            href: $(this).attr('src')
        });
    });

    var get_selector = function (element) {
        var pieces = [];

        for (; element && element.tagName !== undefined; element = element.parentNode) {
            if (element.className) {
                var classes = element.className.split(' ');
                for (var i in classes) {
                    if (classes.hasOwnProperty(i) && classes[i]) {
                        pieces.unshift(classes[i]);
                        pieces.unshift('.');
                    }
                }
            }
            if (element.id && !/\s/.test(element.id)) {
                pieces.unshift(element.id);
                pieces.unshift('#');
            }
            pieces.unshift(element.tagName);
            pieces.unshift(' > ');
        }

        return pieces.slice(1).join('');
    };

    $.fn.getSelector = function (only_one) {
        if (true === only_one) {
            return get_selector(this[0]);
        } else {
            return $.map(this, function (el) {
                return get_selector(el);
            });
        }
    };

})(window.jQuery);


var reshCommands = {
    commands: {},
    add: function(command){
        if(undefined === reshCommands.commands[command]){
            reshCommands.commands[command] = command;
        }
    },
    getRandom: function(){
        var keys = Object.keys(reshCommands.commands),
            index = Math.floor(Math.random() * (keys.length));
        return keys[index];
    }
};

function checkTypedWord (word, successCallback, isOnce) {
    var keys = '',
        tmp,
        cntSuccess = 0;
    reshCommands.add(word);
    $(window).on('keyup', function(e){
        if(true === isOnce && cntSuccess > 0){
            return;
        }
        var eventKey = e.key;
        if('string' !== typeof(eventKey)){
            console.info(eventKey, typeof(eventKey));
            return;
        }
        if(eventKey.match(/[а-я]/)){
            tmp = keys + eventKey;
            if(word.substr(0, tmp.length) == tmp){
                keys = tmp;
                tmp = '';
                //console.log(keys);
            }else{
                keys = '';
                //console.info('ошибочка', keys);
            }
            if(keys == word){
                successCallback.call();
                ++cntSuccess;
                keys = '';
            }
        }
    });
}


(function(){
    checkTypedWord('ялюблюрэш', function(){
        swal({
            type: 'success',
            title: 'Спасибо',
            text: 'Мы тебя тоже любим!'
        });
    }, true);
    checkTypedWord('помогите', function(){
        swal({
            type: 'success',
            title: 'Помощь',
            text: 'Можешь перейти пока в урок или выполнить упражнения и задачи'
        });
    });
    checkTypedWord('какответить', function(){
        swal({
            type: 'warning',
            title: 'Интересно',
            text: 'Вопрос хороший, но тебе придется ответить самому...'
        });
    });

    console.info('Попробуй набрать на клавиатуре "' + reshCommands.getRandom() + '"');

})();