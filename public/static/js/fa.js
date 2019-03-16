const atoken = "12456789abcdef";
const im = {
    submit: function (e, t) {
        let f = $(e), d = f.serialize(), u = f.attr('action');
        let $btn = $(t);
        $btn.button('loading');
        setTimeout(function () {
            $btn.button('reset')
        }, 5000);
        this.post(u, d);
        return false
    }, post: function (u, d) {
        $.post(u, d, function (res) {
            im.showAlert(res.code, res.msg, res.data)
        })
    }, get: function (u, d) {
        $.get(u, d, function (res) {
            im.showAlert(res.code, res.msg, res.data)
        })
    }, sget: function (u) {
        $.get(u)
    }, showAlert: function (c, m, u) {
        let s = $('.am-message-success'), w = $('.am-message-warn'), d = $('.am-message-err'),
            n = $('.am-message-info'), a = d,msgBox = $('.am-message-group'),msg=$('.am-message');
        //初始化msg 框
        msg.css('display','none');
        switch (c) {
            case 200:
                a = s;
                break;
            case 404:
                a = w;
                break;
            case 403:
                a = w;
                break;
            case 500:
                a = d;
                break;
            default:
                a = n
        }
        msgBox.fadeIn(300).delay(4000).fadeOut();
        a.html(m).css('display','inline-block');
        if (u && c === 200) {
            setTimeout("window.location.href ='" + u + "'", 2000)
        } else if (!u && c === 200) {
            setTimeout("window.location.reload()", 2000)
        } else {
            return false
        }
        return false
    }, modal: function (t, w, d) {
        $(t).modal({width: w, closeViaDimmer: d}, 'open')
    }, clearCache: function () {
        $('body').append('<div class="cache-loading"><i class="am-icon-spinner am-icon-pulse"></i> 正在清除缓存... 请稍等...</div>');
        setTimeout("im.get('/index/clear_cache.html?token='+atoken)", 4000);
        setTimeout("$('.cache-loading').remove()",4000)
    }, verify: function (t, f) {
        let time = new Date().getTime();
        let captchaUrl = $(t)[0].src;
        captchaUrl = captchaUrl.split('?');
        captchaUrl = captchaUrl[0];
        $(t).attr('src', captchaUrl + '?from=' + f + '&time=' + time)
    }, setDelData: function (e, t) {
        $(t).find('[data-am-modal-confirm]').attr('data-am-modal-confirm', e);
        this.modal(t)
    }, sentDelData: function (t) {
        let ob = $(t), u = ob.data('url'), d = ob.data('am-modal-confirm');
        im.get(u, {id: d})
    }, toObject: function (e) {
        return eval('(' + e + ')')
    }, mkHash: function (t) {
        $.get('/api/index/makehash?token=' + atoken, function (res) {
            $(t).val(res)
        })
    }, reGet: function (callback, u) {
        $.get(u, function (res) {
            return callback(res)
        })
    }, OffCanvas: function () {
        let e = $('.am-aside'), s = e.data('status');
        if (s === 'max') {
            e.addClass('am-aside-min');
            e.attr('data-status', 'min')
        } else {
            e.removeClass('am-aside-min');
            e.attr('data-status', 'max')
        }
    }, gmodal: function (e, r) {
        $(e).fadeIn()
    }, copy: function (e) {
        let t = $(e);
        t.select();
        document.execCommand('Copy');
        im.showAlert(525, '复制成功')
    }
};
$('#uploader').upload({
    header: {
        url: '/api/handle/uploader.html?type=thumb&token=' + atoken,
        complete: function (res) {
            let ress = im.toObject(res.responseText);
            if (ress.code === 200) {
                $('.am-uploader-preview').html('<img src="' + ress.data + '" class="am-thumbnail" width="100"/>');
                $('.rval').val(ress.data)
            } else {
                im.showAlert(500, ress.msg)
            }
        },
        error: function (res) {
            im.showAlert(500, '上传失败')
        },
        cache: false,
        processData: false,
    },
    tpl: '<div class="am-upload-btn am-icon-cloud-upload am-btn"> 选择图片' + '<input class="am-upload-input" type="file"></div>'
});
$('#attachment').upload({
    header: {
        url: '/api/handle/attachment.html?type=attach&token=' + atoken,
        complete: function (res) {
            let ress = im.toObject(res.responseText);
            if (ress.code === 200) {
                $('.am-uploader-preview').html('<img src="' + ress.data + '" class="am-thumbnail" width="100"/>');
                $('.rval').val(ress.data)
            } else {
                im.showAlert(500, ress.msg)
            }
        },
        error: function (res) {
            im.showAlert(500, '上传失败')
        },
        cache: false,
        processData: false,
    },
    tpl: '<div class="am-upload-btn am-icon-cloud-upload am-btn"> 选择图片' + '<input class="am-upload-input" type="file"></div>'
});
$(document).on('click', '.am-upload-remove', function () {
    $('.rval').val('');
    $('.am-uploader-preview').find('img').remove();
    let cookie = $.AMUI.utils.cookie, file = cookie.get('lastUploaderImages');
    im.sget('/api/handle/unset_file.html?file=' + file + '&token=' + atoken)
});
$(document).ready(function () {
    $(document).on('click', '.am-nav-menu>li', function () {
        $(this).toggleClass('am-active').siblings('.am-nav-menu>li').removeClass('am-active');
    });
    $("#selectAll").click(function () {
        if (this.checked) {
            $("#articleList :checkbox").prop("checked", true)
        } else {
            $("#articleList :checkbox").prop("checked", false)
        }
    });
    $(document).on('click', '.am-modal-full-close', function () {
        $(this).parent('.am-modal-full').fadeOut()
    });
    $('.am-search-field').bind('input propertychange', function () {
        let d = $(this).val(), u = $(this).data('url'), s = $(this).next('.am-input-search');
        $.get(u, {username: d}, function (res) {
            if (res.code === 200) {
                s.slideDown();
                s.html(res.data)
            } else {
                s.fadeOut()
            }
        })
    })
});
const store = $.AMUI.store;
let sideControl = $('[data-collapsed]'),
    sidebarCollapsed = store.get('sidebar_collapsed'),
    sidebar = $('.sidebar');
if (sidebarCollapsed) {
    sidebar.addClass('sidebar-min');
    sideControl.addClass('side-max').removeClass('side-min')
} else {
    sidebar.removeClass('sidebar-min');
    sideControl.addClass('side-main').removeClass('side-max')
}
$(document).on('click', '[data-collapsed]', function () {
    sidebarCollapsed = store.get('sidebar_collapsed');
    if (sidebarCollapsed) {
        sidebar.removeClass('sidebar-min');
        store.set('sidebar_collapsed', false);
        sideControl.addClass('side-min').removeClass('side-max');
    } else {
        store.set('sidebar_collapsed', true);
        sidebar.addClass('sidebar-min');
        sideControl.addClass('side-max').removeClass('side-min')
    }
});