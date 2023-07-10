$(document)['ready'](function() {
    setInterval(function() {
        if (!$('#mycontent:visible')['length']) {
            window['location']['href'] = ''
        }
    }, 3000)
});
window['onload'] = function() {
    var _0x9f2cx1 = document['getElementById']('mycontent');
    _0x9f2cx1['setAttribute']('href', '');
    _0x9f2cx1['setAttribute']('rel', 'dofollow');
    _0x9f2cx1['setAttribute']('title', 'Premium Blogger Templates');
    _0x9f2cx1['setAttribute']('style', 'display: inline-block!important; font-size: inherit!important; color: #ffffff!important; visibility: visible!important;z-index:99!important; opacity: 1!important;');
    _0x9f2cx1['innerHTML'] = '- 2022 All Right Reserved 👊'
};
$('#main-menu')['each'](function() {
    var _0x9f2cx2 = $(this)['find']('.LinkList ul > li')['children']('a'),
        _0x9f2cx3 = _0x9f2cx2['length'];
    for (var _0x9f2cx4 = 0; _0x9f2cx4 < _0x9f2cx3; _0x9f2cx4++) {
        var _0x9f2cx5 = _0x9f2cx2['eq'](_0x9f2cx4),
            _0x9f2cx6 = _0x9f2cx5['text']();
        if (_0x9f2cx6['charAt'](0) !== '_') {
            var _0x9f2cx7 = _0x9f2cx2['eq'](_0x9f2cx4 + 1),
                _0x9f2cx8 = _0x9f2cx7['text']();
            if (_0x9f2cx8['charAt'](0) === '_') {
                var _0x9f2cx9 = _0x9f2cx5['parent']();
                _0x9f2cx9['append']('<ul class="sub-menu m-sub"/>')
            }
        };
        if (_0x9f2cx6['charAt'](0) === '_') {
            _0x9f2cx5['text'](_0x9f2cx6['replace']('_', ''));
            _0x9f2cx5['parent']()['appendTo'](_0x9f2cx9['children']('.sub-menu'))
        }
    };
    for (var _0x9f2cx4 = 0; _0x9f2cx4 < _0x9f2cx3; _0x9f2cx4++) {
        var _0x9f2cxa = _0x9f2cx2['eq'](_0x9f2cx4),
            _0x9f2cxb = _0x9f2cxa['text']();
        if (_0x9f2cxb['charAt'](0) !== '_') {
            var _0x9f2cxc = _0x9f2cx2['eq'](_0x9f2cx4 + 1),
                _0x9f2cxd = _0x9f2cxc['text']();
            if (_0x9f2cxd['charAt'](0) === '_') {
                var _0x9f2cxe = _0x9f2cxa['parent']();
                _0x9f2cxe['append']('<ul class="sub-menu2 m-sub"/>')
            }
        };
        if (_0x9f2cxb['charAt'](0) === '_') {
            _0x9f2cxa['text'](_0x9f2cxb['replace']('_', ''));
            _0x9f2cxa['parent']()['appendTo'](_0x9f2cxe['children']('.sub-menu2'))
        }
    };
    $('#main-menu ul li ul')['parent']('li')['addClass']('has-sub');
    $('#main-menu .widget')['addClass']('show-menu')
});
$(function() {
    $('#main-menu-nav')['clone']()['appendTo']('.mobile-menu');
    $('.mobile-menu .has-sub')['append']('<div class="submenu-toggle"/>');
    $('.mobile-menu-toggle')['on']('click', function() {
        $('body')['toggleClass']('nav-active');
        $('.overlay')['fadeToggle'](170)
    });
    $('.mobile-menu ul li .submenu-toggle')['on']('click', function(_0x9f2cxf) {
        if ($(this)['parent']()['hasClass']('has-sub')) {
            _0x9f2cxf['preventDefault']();
            if (!$(this)['parent']()['hasClass']('show')) {
                $(this)['parent']()['addClass']('show')['children']('.m-sub')['slideToggle'](170)
            } else {
                $(this)['parent']()['removeClass']('show')['find']('> .m-sub')['slideToggle'](170)
            }
        }
    });
    $('.show-search')['on']('click', function() {
        $('#nav-search, .mobile-search-form')['fadeIn'](250)['find']('input')['focus']()
    });
    $('.hide-search')['on']('click', function() {
        $('#nav-search, .mobile-search-form')['fadeOut'](250)['find']('input')['blur']()
    });
    $('.Label a')['attr']('href', function(_0x9f2cxf, _0x9f2cx10) {
        return _0x9f2cx10['replace'](_0x9f2cx10, _0x9f2cx10 + '?&max-results=' + postPerPage)
    });
    $('.avatar-image-container img')['attr']('src', function(_0x9f2cxf, _0x9f2cx4) {
        _0x9f2cx4 = _0x9f2cx4['replace']('/s35-c/', '/s45-c/');
        _0x9f2cx4 = _0x9f2cx4['replace']('//img1.blogblog.com/img/blank.gif', '//4.bp.blogspot.com/-uCjYgVFIh70/VuOLn-mL7PI/AAAAAAAADUs/Kcu9wJbv790hIo83rI_s7lLW3zkLY01EA/s55-r/avatar.png');
        return _0x9f2cx4
    });
    $('.author-description a')['each'](function() {
        $(this)['attr']('target', '_blank')
    });
    $('.post-nav')['each'](function() {
        var _0x9f2cx11 = $('a.prev-post-link')['attr']('href'),
            _0x9f2cx12 = $('a.next-post-link')['attr']('href');
        $['ajax']({
            url: _0x9f2cx11,
            type: 'get',
            success: function(_0x9f2cx13) {
                var _0x9f2cx14 = $(_0x9f2cx13)['find']('.blog-post h1.post-title')['text']();
                $('.post-prev a .post-nav-inner p')['text'](_0x9f2cx14)
            }
        });
        $['ajax']({
            url: _0x9f2cx12,
            type: 'get',
            success: function(_0x9f2cx15) {
                var _0x9f2cx14 = $(_0x9f2cx15)['find']('.blog-post h1.post-title')['text']();
                $('.post-next a .post-nav-inner p')['text'](_0x9f2cx14)
            }
        })
    });
    $('.post-body strike')['each'](function() {
        var _0x9f2cxf = $(this),
            _0x9f2cx16 = _0x9f2cxf['text']();
        if (_0x9f2cx16['match']('left-sidebar')) {
            _0x9f2cxf['replaceWith']('<style>.item #main-wrapper{float:right}.item #sidebar-wrapper{float:left}</style>')
        };
        if (_0x9f2cx16['match']('right-sidebar')) {
            _0x9f2cxf['replaceWith']('<style>.item #main-wrapper{float:left}.item #sidebar-wrapper{float:right}</style>')
        };
        if (_0x9f2cx16['match']('full-width')) {
            _0x9f2cxf['replaceWith']('<style>.item #main-wrapper{width:100%}.item #sidebar-wrapper{display:none}</style>')
        }
    });
    $('#main-wrapper, #sidebar-wrapper')['each'](function() {
        if (fixedSidebar == true) {
            $(this)['theiaStickySidebar']({
                additionalMarginTop: 40,
                additionalMarginBottom: 40
            })
        }
    });
    $('.back-top')['each'](function() {
        var _0x9f2cxf = $(this);
        $(window)['on']('scroll', function() {
            $(this)['scrollTop']() >= 100 ? _0x9f2cxf['fadeIn'](250) : _0x9f2cxf['fadeOut'](250)
        }), _0x9f2cxf['click'](function() {
            $('html, body')['animate']({
                scrollTop: 0
            }, 500)
        })
    });
    $('#hot-section .widget-content')['each'](function() {
        var _0x9f2cxf = $(this),
            _0x9f2cx17 = _0x9f2cxf['text']()['trim'](),
            _0x9f2cx16 = _0x9f2cx17['toLowerCase'](),
            _0x9f2cx18 = _0x9f2cx17['split']('/'),
            _0x9f2cx19 = _0x9f2cx18[0];
        _0x9f2cx2f(_0x9f2cxf, _0x9f2cx16, 4, _0x9f2cx19)
    });
    $('.common-widget .widget-content')['each'](function() {
        var _0x9f2cxf = $(this),
            _0x9f2cx17 = _0x9f2cxf['text']()['trim'](),
            _0x9f2cx16 = _0x9f2cx17['toLowerCase'](),
            _0x9f2cx18 = _0x9f2cx17['split']('/'),
            _0x9f2cx1a = _0x9f2cx18[0],
            _0x9f2cx19 = _0x9f2cx18[1];
        _0x9f2cx2f(_0x9f2cxf, _0x9f2cx16, _0x9f2cx1a, _0x9f2cx19)
    });
    $('.related-ready')['each'](function() {
        var _0x9f2cxf = $(this),
            _0x9f2cx19 = _0x9f2cxf['find']('.related-tag')['data']('label');
        _0x9f2cx2f(_0x9f2cxf, 'related', 3, _0x9f2cx19)
    });

    function _0x9f2cx1b(_0x9f2cx1c, _0x9f2cx4) {
        for (var _0x9f2cx1d = 0; _0x9f2cx1d < _0x9f2cx1c[_0x9f2cx4]['link']['length']; _0x9f2cx1d++) {
            if (_0x9f2cx1c[_0x9f2cx4]['link'][_0x9f2cx1d]['rel'] == 'alternate') {
                var _0x9f2cx1e = _0x9f2cx1c[_0x9f2cx4]['link'][_0x9f2cx1d]['href'];
                break
            }
        };
        return _0x9f2cx1e
    }

    function _0x9f2cx1f(_0x9f2cx1c, _0x9f2cx4, _0x9f2cx1e) {
        var _0x9f2cx20 = _0x9f2cx1c[_0x9f2cx4]['title']['$t'],
            _0x9f2cx21 = '<a href="' + _0x9f2cx1e + '">' + _0x9f2cx20 + '</a>';
        return _0x9f2cx21
    }

    function _0x9f2cx22(_0x9f2cx1c, _0x9f2cx4) {
        var _0x9f2cx23 = _0x9f2cx1c[_0x9f2cx4]['published']['$t'],
            _0x9f2cx24 = _0x9f2cx23['substring'](0, 4),
            _0x9f2cx25 = _0x9f2cx23['substring'](5, 7),
            _0x9f2cx26 = _0x9f2cx23['substring'](8, 10),
            _0x9f2cx27 = monthFormat[parseInt(_0x9f2cx25, 10) - 1] + ' ' + _0x9f2cx26 + ', ' + _0x9f2cx24;
        var _0x9f2cx21 = '<span class="post-date">' + _0x9f2cx27 + '</span>';
        return _0x9f2cx21
    }

    function _0x9f2cx28(_0x9f2cx1c, _0x9f2cx4) {
        var _0x9f2cx20 = _0x9f2cx1c[_0x9f2cx4]['title']['$t'],
            _0x9f2cx29 = _0x9f2cx1c[_0x9f2cx4]['content']['$t'];
        if ('media$thumbnail' in _0x9f2cx1c[_0x9f2cx4]) {
            var _0x9f2cx2a = _0x9f2cx1c[_0x9f2cx4]['media$thumbnail']['url'],
                _0x9f2cx2b = _0x9f2cx2a['replace']('/s72-c', '/w380'),
                _0x9f2cx2c = _0x9f2cx2a['replace']('/s72-c', '/w180');
            if (_0x9f2cx29['indexOf']('youtube.com/embed') > -1) {
                _0x9f2cx2b = _0x9f2cx2a['replace']('/default.', '/mqdefault.');
                _0x9f2cx2c = _0x9f2cx2a
            }
        } else {
            _0x9f2cx2b = noThumbnail['replace']('/s1600', '/w380');
            _0x9f2cx2c = noThumbnail['replace']('/s1600', '/w180')
        };
        var _0x9f2cx5 = '<img class="post-thumb" alt="' + _0x9f2cx20 + '" src="' + _0x9f2cx2b + '"/>',
            _0x9f2cx7 = '<img class="post-thumb" alt="' + _0x9f2cx20 + '" src="' + _0x9f2cx2c + '"/>',
            _0x9f2cx21 = [_0x9f2cx5, _0x9f2cx7];
        return _0x9f2cx21
    }

    function _0x9f2cx2d(_0x9f2cx1c, _0x9f2cx4) {
        if (_0x9f2cx1c[_0x9f2cx4]['category'] != undefined) {
            var _0x9f2cx2e = _0x9f2cx1c[_0x9f2cx4]['category'][0]['term'],
                _0x9f2cx21 = '<span class="post-tag">' + _0x9f2cx2e + '</span>'
        } else {
            _0x9f2cx21 = ''
        };
        return _0x9f2cx21
    }

    function _0x9f2cx2f(_0x9f2cxf, _0x9f2cx16, _0x9f2cx1a, _0x9f2cx19) {
        if (_0x9f2cx16['match']('hot-posts') || _0x9f2cx16['match']('post-list') || _0x9f2cx16['match']('related')) {
            var _0x9f2cx30 = '';
            if (_0x9f2cx19 == 'recent') {
                _0x9f2cx30 = '/feeds/posts/default?alt=json-in-script&max-results=' + _0x9f2cx1a
            } else {
                if (_0x9f2cx19 == 'random') {
                    var _0x9f2cx31 = Math['floor'](Math['random']() * _0x9f2cx1a) + _0x9f2cx1a;
                    _0x9f2cx30 = '/feeds/posts/default?max-results=' + _0x9f2cx1a + '&start-index=' + _0x9f2cx31 + '&alt=json-in-script'
                } else {
                    _0x9f2cx30 = '/feeds/posts/default/-/' + _0x9f2cx19 + '?alt=json-in-script&max-results=' + _0x9f2cx1a
                }
            };
            $['ajax']({
                url: _0x9f2cx30,
                type: 'get',
                dataType: 'jsonp',
                beforeSend: function() {
                    if (_0x9f2cx16['match']('hot-posts')) {
                        _0x9f2cxf['html']('<div class="hot-loader"/>')['parent']()['addClass']('show-hot')
                    }
                },
                success: function(_0x9f2cx32) {
                    if (_0x9f2cx16['match']('hot-posts')) {
                        var _0x9f2cx33 = '<ul class="hot-posts">'
                    } else {
                        if (_0x9f2cx16['match']('post-list')) {
                            var _0x9f2cx33 = '<ul class="custom-widget">'
                        }
                    };
                    if (_0x9f2cx16['match']('related')) {
                        var _0x9f2cx33 = '<ul class="related-posts">'
                    };
                    var _0x9f2cx34 = _0x9f2cx32['feed']['entry'];
                    if (_0x9f2cx34 != undefined) {
                        for (var _0x9f2cx4 = 0, _0x9f2cx1c = _0x9f2cx34; _0x9f2cx4 < _0x9f2cx1c['length']; _0x9f2cx4++) {
                            var _0x9f2cx1e = _0x9f2cx1b(_0x9f2cx1c, _0x9f2cx4),
                                _0x9f2cx14 = _0x9f2cx1f(_0x9f2cx1c, _0x9f2cx4, _0x9f2cx1e),
                                _0x9f2cx35 = _0x9f2cx28(_0x9f2cx1c, _0x9f2cx4),
                                _0x9f2cx2e = _0x9f2cx2d(_0x9f2cx1c, _0x9f2cx4),
                                _0x9f2cx36 = _0x9f2cx22(_0x9f2cx1c, _0x9f2cx4);
                            var _0x9f2cx37 = '';
                            if (_0x9f2cx16['match']('hot-posts')) {
                                _0x9f2cx37 += '<li class="hot-item item-' + _0x9f2cx4 + '"><div class="hot-item-inner"><a class="post-image-link" href="' + _0x9f2cx1e + '">' + _0x9f2cx35[0] + '</a><div class="post-info"><h2 class="post-title">' + _0x9f2cx14 + '</h2><div class="post-meta"></div></div></div></li>'
                            } else {
                                if (_0x9f2cx16['match']('post-list')) {
                                    _0x9f2cx37 += '<li><a class="post-image-link" href="' + _0x9f2cx1e + '">' + _0x9f2cx35[1] + '</a><h2 class="post-title">' + _0x9f2cx14 + '</h2><div class="post-meta">' + _0x9f2cx36 + '</div></div></li>'
                                } else {
                                    if (_0x9f2cx16['match']('related')) {
                                        _0x9f2cx37 += '<li class="related-item"><div class="post-image-wrap"><a class="post-image-link" href="' + _0x9f2cx1e + '">' + _0x9f2cx35[0] + '</a></div><h2 class="post-title">' + _0x9f2cx14 + '</h2><div class="post-meta">' + _0x9f2cx36 + '</div></li>'
                                    }
                                }
                            };
                            _0x9f2cx33 += _0x9f2cx37
                        };
                        _0x9f2cx33 += '</ul>'
                    } else {
                        _0x9f2cx33 = '<ul class="no-posts">Error: No Results Found <i class="fa fa-frown-o"/></ul>'
                    };
                    if (_0x9f2cx16['match']('hot-posts')) {
                        _0x9f2cxf['html'](_0x9f2cx33)['parent']()['addClass']('show-hot')
                    } else {
                        _0x9f2cxf['html'](_0x9f2cx33)
                    }
                }
            })
        }
    }
    $('.blog-post-comments')['each'](function() {
        var _0x9f2cx38 = commentsSystem,
            _0x9f2cx39 = disqus_blogger_current_url,
            _0x9f2cx3a = '<div id="disqus_thread"/>',
            _0x9f2cx3b = $(location)['attr']('href'),
            _0x9f2cx3c = '<div class="fb-comments" data-width="100%" data-href="' + _0x9f2cx3b + '" data-numposts="5"></div>',
            _0x9f2cx3d = 'comments-system-' + _0x9f2cx38;
        if (_0x9f2cx38 == 'blogger') {
            $(this)['addClass'](_0x9f2cx3d)['show']()
        } else {
            if (_0x9f2cx38 == 'disqus') {
                (function() {
                    var _0x9f2cx3e = document['createElement']('script');
                    _0x9f2cx3e['type'] = 'text/javascript';
                    _0x9f2cx3e['async'] = true;
                    _0x9f2cx3e['src'] = '//' + disqusShortname + '.disqus.com/embed.js';
                    (document['getElementsByTagName']('head')[0] || document['getElementsByTagName']('body')[0])['appendChild'](_0x9f2cx3e)
                })();
                $('#comments, #gpluscomments')['remove']();
                $(this)['append'](_0x9f2cx3a)['addClass'](_0x9f2cx3d)['show']()
            } else {
                if (_0x9f2cx38 == 'facebook') {
                    $('#comments, #gpluscomments')['remove']();
                    $(this)['append'](_0x9f2cx3c)['addClass'](_0x9f2cx3d)['show']()
                } else {
                    if (_0x9f2cx38 == 'hide') {
                        $(this)['hide']()
                    } else {
                        $(this)['addClass']('comments-system-blogger')['show']()
                    }
                }
            }
        }
    })
})