var InteractionClear = {
    single_choice: function ($container) {
        $container
            .find('input[type=radio]')
            .removeProp('checked')
            .removeAttr('checked');
    },
    multiple_choice: function ($container) {
        $container
            .find('input[type=checkbox]')
            .removeProp('checked')
            .removeAttr('checked');
    },
    text_entry: function ($container) {
        if($container.hasClass('interaction-item')){
            $container.val('');
        }else{
            $container.find('.interaction-item').val('');
        }
    },
    images_text_entries: function ($container) {

    },
    order: function ($container) {
    },
    order_vertical: function ($container) {
    },
    gap_match_table: function ($container) {
        $container.find('.js-interaction-choice-container .interaction-choice').trigger('click');
        $container.trigger('clear');
    },
    gap_match_image_text: function ($container) {
        InteractionClear.gap_match_text($container);
    },
    two_sets_association: function ($container) {
        $container.trigger('clear');
    },
    gap_match_text: function ($container) {
        $container.find('.interaction-gap .interaction-choice').trigger('click');
        $container.trigger('clear');
    },
    gap_match_multiple_choice: function ($container) {
    },
    inline_choice: function ($container) {
    },
    gap_match_color: function ($container) {
        $container.trigger('clear');
    },
    gap_match_underline: function ($container) {
        $container.trigger('clear');
    }
};