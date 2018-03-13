$(function () {
    var text_vuz;
    var text_pos;
    var notification = [];

    if ($("#application_sonata_user_registration_country option:selected").val() != 183 && $("#fos_user_registration_form_country option:selected").val() != 183) {
        $('#region').hide();
    } else {
        $('#region').show();
    }

    $('#vz').change(function () {
        text_vuz = $(this).val();
    });

    $('#spec').change(function () {
        text_pos = $(this).val();
    });

    $('#ajax-vz_add_btn').click(function () {
        if (text_vuz.length && text_pos.length) {
            $.post('/office/user/setting/ajax-add-university', {vz: text_vuz, spec: text_pos}, function (v) {

            }, 'json');
        } else {
            return false;
        }
    });

    $('.ajax-vuz-delete').click(function () {
        $.post('/office/user/setting/ajax-remove-university', {val: $(this).data('id')}, function (v) {

        }, 'json');
    });

    $('.profile-photo-delete').click(function () {
        $.post('/office/user/setting/ajax-photo-delete', {}, function (v) {

        }, 'json');
    });
    $('#add-new-children').click(function () {
        $.post('/office/user/setting/ajax-new-children', {}, function (v) {
            $('#qid').html(v);
            $('#new_children').show();
        }, 'json');
    });

    $('#add-parent-ok').click(function () {
        var parentQuid = $('.my-id__add-child__input').val();
        if (parentQuid.length) {
            $.post('/office/user/setting/ajax-new-parent', {
                val: parentQuid
            }, function (v) {
                $('#add-parent-text').html(v);
                $('.my-id__add-child__input').hide();
                $('.my-id__add-child__ok').hide();
                $('.my-id__add-child__btn').show();
            }, 'json');
        } else {
            $('.my-id__add-child__input').focus();
            return false;
        }
    });

    $('.ajax-del-parent').click(function () {
        $.post('/office/user/setting/ajax-del-parent', {val: $(this).data('id')}, function (v) {

        }, 'json');
    });

    $('.ajax-del-pupil').click(function () {
        $.post('/office/user/setting/ajax-del-pupil', {val: $(this).data('id')}, function (v) {

        }, 'json');
    });

    $('._tabs__tab').click(function () {
        var type = $(this).data('type');
        if ($(this).data('href')) {
            $.post($(this).data('href'), {ajax: true}, function (v) {
                if (type == 'print') {
                    $('.tabs_content').html(v);
                    $('.icon_print').click(function () {
                        var printing_css = '<style media=print>tr:nth-child(even) td{background: #f0f0f0;}</style>';
                        $.post('conspectus/?print=1', null, function (v) {
                            var html_to_print = printing_css + v;
                            var iframe = $('<iframe id="print_frame">');
                            $('body').append(iframe);
                            var doc = $('#print_frame')[0].contentDocument || $('#print_frame')[0].contentWindow.document;
                            var win = $('#print_frame')[0].contentWindow || $('#print_frame')[0];
                            doc.getElementsByTagName('body')[0].innerHTML = html_to_print;
                            win.print();
                            $('iframe').remove();
                        });

                    });
                } else {
                    $('.tabs_content').html(v);
                }
            });
        }
    });

    $(".lesson-teachers__button").on("click", function () {
        if ($('.none').data('clicked')) {
            location.href = $(this).data('href');
        }
        else {
            $('.none').data('clicked', 'yes');
        }
    });

    $('#add-parent-cancel').click(function () {
        $('.my-id__add-child__input').hide();
        $('.my-id__add-child__ok').hide();
        $('.my-id__add-child__btn').show();
    });

    $("form[name=resh_search_widget]:nth-child(2)").submit(function (event) {
        var schoolClass = [];
        $(".lk-chk:checked").each(function () {
            schoolClass.push($(this).val());
        });
        $('#resh_search_widget_class').val(schoolClass);
    });

    $('#fos_user_registration_form_type').change(function () {
        if ($(this).val() == 9) {
            $('#schoolTitle').parent().hide();
        } else {
            $('#schoolTitle').parent().show();
        }
    });
    $('.notification-select').change(function () {
        if ($(this).is(":checked")) {
            notification.push($(this).data('id'));
        } else {
            id = notification.indexOf($(this).data('id'));
            delete notification[id];
        }
    });

    $('.diary-datepicker-diary').change(function () {
        changeUrlParam($(this).data('type'), $(this).val());
    });

    $('.change-pupils').change(function () {
        $.post($(this).data('href'), {val: $(this).val()}, function (v) {
            location.reload();
        }, 'json');
    });

    $('.chosen-select-diary').change(function () {
        changeUrlParam($(this).data('type'), $(this).val());
    });

    $('.table-diary th').click(function () {
        if (getURLParameter($(this).data('type')) && getURLParameter($(this).data('type')) == $(this).data('sort') + '-asc') {
            changeUrlParam($(this).data('type'), $(this).data('sort') + '-desc');
        } else {
            changeUrlParam($(this).data('type'), $(this).data('sort') + '-asc');
        }
    });

    $('.subjects-list-teacher').change(function () {
        window.location = '/teacher/' + parseInt($('select[name=subject]').val()) + '/' + parseInt($('select[name=class]').val()) + '/';
    });

    $('.lesson-video__link').click(function () {
        var $players = $('.lesson-video__player-block .lesson-video__player'),
        $player = $('.lesson-video__player-block .' + $(this).data('class'));

        $players.hide();
        $player.show();

        $players.each(function(){
            $(this).find('iframe').get(0).contentWindow.postMessage('pause', '*');
        });

        $('.lesson-video__link_active').removeClass('lesson-video__link_active');
        $(this).addClass('lesson-video__link_active');
    });

    $('.class-list-teacher').change(function () {
        window.location = '/teacher/' + parseInt($('select[name=subject]').val()) + '/' + parseInt($('select[name=class]').val()) + '/';
    });

    $('.msg-delete-all').click(function () {
        $.post('/office/user/notification/ajax', {type: 'delete', val: notification}, function (v) {

        }, 'json');
    });

    $('.lk-block-opts .icon_delete-cross').click(function () {

        $.post($(this).data('href'), {val: $(this).data('type')}, function (v) {

        }, 'json');
    });


    $('form[name=application_sonata_user_registration]').submit(function (event) {
        if ($('#application_sonata_user_registration_country').val() == '') {
            $('#application_sonata_user_registration_country').parent().parent().find('.lk-t-orange').html('Пожалуйста, заполните страну');
            event.preventDefault();
        }
    });

    $('.search-more').click(function () {
        var allVars = getUrl();
        console.log(allVars);
        $.post('/search/ajax/', {
            'resh_search_widget[type]': allVars['resh_search_widget[type]'],
            'resh_search_widget[search]': allVars['resh_search_widget[search]'],
            'resh_search_widget[class]': allVars['resh_search_widget[class]'],
            'resh_search_widget[subject]': allVars['resh_search_widget[subject]'],
            'page': $(this).data('now') + 1
        }, function (v) {
            var count = $('.search-more').data('now') + 1;
            if (((parseInt($('#count').html())) - count * 6) <= 0) {
                $('.search-more').hide();
            }
            $('.search-more').data('now', count);
            $('.search-result').append(v);
        });
    });

    $('._msgs-select').click(function () {
        if ($(this).is(":checked")) {
            notification = [];
            $(".notification-select").each(function () {
                notification.push($(this).data('id'));
            });
            notification.push($(this).data('id'));
        } else {
            notification = [];
        }
    });

    $('#thumbs').delegate('img', 'click', function () {
        $('#largeImage').attr('src', $(this).attr('src').replace('thumb', 'large'));
        $('#description').html($(this).attr('alt'));
    });

    $(document).on('click', '.lesson-video__userbar-icons .icon_thumb-down', function () {
        var link = $(this);
        $.post('/office/user/lessonlike/ajax', {type: 'unlike', val: $(this).data('id')}, function (v) {
            if (v === true) {
                link.removeClass('icon_thumb-down').addClass('icon_sidebar-checked').removeAttr('href');
                link.next().removeClass('icon_sidebar-checked').addClass('icon_thumb-up').attr('href', '#');
            }
        }, 'json');
        return false;
    });
    $(document).on('click', '.lesson-video__userbar-icons .icon_thumb-up', function () {
        var link = $(this);
        $.post('/office/user/lessonlike/ajax', {type: 'like', val: $(this).data('id')}, function (v) {
            if (v === true) {
                link.removeClass('icon_thumb-up').addClass('icon_sidebar-checked').removeAttr('href');
                link.prev().removeClass('icon_sidebar-checked').addClass('icon_thumb-down').attr('href', '#');
            }
        }, 'json');
        return false;
    });

    $('.popular-lessons select').on('change', function () {
        $.get('/class/popularlessons/ajax', {subject: $(this).val()}, function (data) {
            $('.popular-lessons__more').remove();
            $('.popular-lessons__box').replaceWith(data);
        }, 'html');
    });
    $(document).on('click', '.popular-lessons__more', function () {
        if ($(this).hasClass('sys_loading')) {
            return false;
        }
        $(this).text('Загружается...').addClass('sys_loading');
        $.get($(this).data('href'), function (data) {
            var block = $('<div>' + data + '</div>');
            $('.popular-lessons__box').append(block.find('.popular-lessons__box').html());
            if (block.find('.popular-lessons__more').length > 0) {
                $('.popular-lessons__more').replaceWith(block.find('.popular-lessons__more'));
            } else {
                $('.popular-lessons__more').remove();
            }
        }, 'html');
        return false;
    });

    var $frame = $('.lesson-video__player iframe');
    $frame.iframeTracker({
        blurCallback: function () {
            var url = $frame.attr('data-url');
            if (undefined !== url) {
                $.post(url, function () {

                });
            }
        }
    });
});

function addLessons(elem) {
    $.post(null, {now: $(elem).data('now')}, function (v) {
        $('.teacher-lessons__box').html(v);
        $(elem).hide();
    });
}

function setCountry(elem) {
    if ($(elem).val() != 183) {
        $('#region').fadeOut(300);
    } else {
        $('#region').fadeIn(300);
    }
}

function getNetworks(pageuri) {
    $.getJSON('http://graph.facebook.com/?id=' + pageuri, function (data) {
        // вставляем в DOM
        console.log(data);
        $('#fb_sharer').text(data.share.share_count);
    });

    VK = {};
    VK.Share = {};
    VK.Share.count = function (index, count) {
        $('#vk_sharer').text(count);
    };
    $.getJSON('https://vk.com/share.php?act=count&index=1&url=' + pageuri + '&format=json&callback=?');
}
function selectClass(elem) {
    var subj = $('#subject');
    subj.next().addClass('_visible');
    $.post('/office/user/notes/ajax', {type: 'class', val: $(elem).val()}, function (v) {
        subj.html('<option disabled selected>Выбери предмет</option>');
        v.forEach(function (item) {
            subj.append('<option value="' + item.id + '">' + item.title + '</option>');
        });
        subj.trigger("chosen:updated");
    }, 'json');
}

function selectSubject(elem) {
    var lesson = $('#lesson');
    lesson.next().addClass('_visible');
    $.post('/office/user/notes/ajax', {type: 'lesson', val: $(elem).val()}, function (v) {
        lesson.html('<option disabled selected>Выбери урок</option>');
        v.forEach(function (item) {
            $('#lesson').append('<option value="' + item.id + '">' + item.title + '</option>');
        });
        lesson.trigger("chosen:updated");
    }, 'json');
}

function getUrl() {
    var vars = [];
    var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
    for (var i = 0; i < hashes.length; i++) {
        hash = hashes[i].split('=');
        vars[decodeURIComponent(hash[0])] = decodeURIComponent(hash[1]);
    }
    return vars;
}

function selectLesson(elem) {
    if ($('#link:checked').length > 0) {
        $('#resh_private_notes_lesson').val($(elem).val());
    } else {
        $('#resh_private_notes_lesson').val(0);
    }
}

function selectInFavorite() {
    $('#form-favorite').submit();
}

function addFavorite(elem) {
    var elem = elem;
    if ($(elem).data('fav') == true) {
        $.post('/office/user/notes/ajax', {type: 'normal', val: $(elem).data('id')}, function (v) {
            if (v == true) {
                $(elem).removeClass('icon_sidebar-checked').addClass('icon_pushpin');
                $(elem).data('fav', false);
            }
        }, 'json');
    } else {
        $.post('/office/user/notes/ajax', {type: 'favorite', val: $(elem).data('id')}, function (v) {
            if (v == true) {
                $(elem).removeClass('icon_pushpin').addClass('icon_sidebar-checked');
                $(elem).data('fav', true);
            }
        }, 'json');
    }
}

function addFavoriteLesson(elem) {
    var elem = elem;
    if ($(elem).data('fav') == true) {
        $.post('/office/user/favorite/ajax', {type: 'normal', val: $(elem).data('id')}, function (v) {
            if (v == true) {
                $(elem).removeClass('icon_sidebar-checked').addClass('icon_star');
                $(elem).data('fav', false);
            }
        }, 'json');
    } else {
        $.post('/office/user/favorite/ajax', {type: 'favorite', val: $(elem).data('id')}, function (v) {
            if (v == true) {
                $(elem).removeClass('icon_star').addClass('icon_sidebar-checked');
                $(elem).data('fav', true);
            }
        }, 'json');
    }
}

function getURLParameter(name) {
    return decodeURIComponent((new RegExp('[?|&]' + name + '=' + '([^&;]+?)(&|#|;|$)').exec(location.search) || [, ""])[1].replace(/\+/g, '%20')) || null;
}

function changeUrlParam(param, value) {
    var currentURL = window.location.href + '&';
    var change = new RegExp('(' + param + ')=(.*)&', 'g');
    var newURL = currentURL.replace(change, '$1=' + value + '&');

    if (getURLParameter(param) !== null) {
        try {
            window.history.replaceState('', '', newURL.slice(0, -1));
        } catch (e) {
            console.log(e);
        }
    } else {
        var currURL = window.location.href;
        if (currURL.indexOf("?") !== -1) {
            newURL = window.history.replaceState('', '', currentURL.slice(0, -1) + '&' + param + '=' + value);
        } else {
            newURL = window.history.replaceState('', '', currentURL.slice(0, -1) + '?' + param + '=' + value);
        }
    }
    document.location.reload();
    //window.location.href = newURL;
}

function noteDelete(elem) {
    var elem = elem;
    $.post('/office/user/notes/ajax', {type: 'delete', val: $(elem).data('id')}, function (v) {

    }, 'json');
}

$('#link').change(function () {
    if ($('#link:checked').length > 0) {
        $('#resh_private_notes_lesson').val($('#lesson').val());
    } else {
        $('#resh_private_notes_lesson').val(0);
    }
});


Share = {
    vkontakte: function (purl, ptitle, pimg, text) {
        url = 'http://vkontakte.ru/share.php?';
        url += 'url=' + encodeURIComponent(purl);
        url += '&title=' + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&image=' + encodeURIComponent(pimg);
        url += '&noparse=true';
        Share.popup(url);
    },
    odnoklassniki: function (purl, text) {
        url = 'http://www.odnoklassniki.ru/dk?st.cmd=addShare&st.s=1';
        url += '&st.comments=' + encodeURIComponent(text);
        url += '&st._surl=' + encodeURIComponent(purl);
        Share.popup(url);
    },
    facebook: function (purl, ptitle, pimg, text) {
        url = 'http://www.facebook.com/sharer.php?s=100';
        url += '&p[title]=' + encodeURIComponent(ptitle);
        url += '&p[summary]=' + encodeURIComponent(text);
        url += '&p[url]=' + encodeURIComponent(purl);
        url += '&p[images][0]=' + encodeURIComponent(pimg);
        Share.popup(url);
    },
    twitter: function (purl, ptitle) {
        url = 'http://twitter.com/share?';
        url += 'text=' + encodeURIComponent(ptitle);
        url += '&url=' + encodeURIComponent(purl);
        url += '&counturl=' + encodeURIComponent(purl);
        Share.popup(url);
    },
    mailru: function (purl, ptitle, pimg, text) {
        url = 'http://connect.mail.ru/share?';
        url += 'url=' + encodeURIComponent(purl);
        url += '&title=' + encodeURIComponent(ptitle);
        url += '&description=' + encodeURIComponent(text);
        url += '&imageurl=' + encodeURIComponent(pimg);
        Share.popup(url)
    },

    popup: function (url) {
        var w = Math.min($(window).width() - 40, 630),
            h = Math.min($(window).height() - 40, 436);

        window.open(url, '', 'toolbar=0,status=0,width=' + w + ',height=' + h);
    }
};

(function () {
    $('.js-load-lessons-more').on('click', function () {
        var $this = $(this),
            base_url = $this.attr('data-base-url'),
            next = $this.attr('data-next-page'),
            $container = $('.js-lesson-block-wrapper');

        $.get(base_url, {page: next}, function (data) {
            if ('success' == data.result) {
                $container.append(data.html);
                if (!data.nextPage) {
                    $this.hide();
                } else {
                    $this.attr('data-next-page', data.nextPage);
                }
            }
        });
    })
})();

(function () {
    $('.js-journal-subject-select').on('change', function () {
        var $this = $(this),
            val = $this.val(),
            $list = $('.js-journal-subject'),
            $current = $('.js-journal-subject[data-id=' + val + ']');

        if (val && $current.length) {
            $list.hide();
            $current.show();
        } else {
            $list.show();
        }

    })
})();
