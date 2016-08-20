(function() {
    var SCREEN_LARGE = 1300;
    var SCREEN_NORMAL = 1080;
    var SCREEN_MINI = 800;
    // var SCREEN_H5 = 768;

    var CLASS_LARGE = 'body--large';
    var CLASS_NORMAL = 'body--normal';
    var CLASS_MINI = 'body--mini';
    var CLASS_H5 = 'body--h5';

    var $body = $(document.body);

    var _resize = function() {
        var _width = $body.width();
        switch(true) {
            case _width >= SCREEN_LARGE:
                $body.removeClass(CLASS_H5).removeClass(CLASS_MINI).removeClass(CLASS_NORMAL).addClass(CLASS_LARGE);
                break;
            case _width < SCREEN_LARGE && _width >= SCREEN_NORMAL:
                $body.removeClass(CLASS_H5).removeClass(CLASS_MINI).removeClass(CLASS_LARGE).addClass(CLASS_NORMAL);
                break;
            case _width < SCREEN_NORMAL && _width >= SCREEN_MINI:
                $body.removeClass(CLASS_H5).removeClass(CLASS_NORMAL).removeClass(CLASS_LARGE).addClass(CLASS_MINI);
                break;
            case _width < SCREEN_MINI:
                $body.removeClass(CLASS_MINI).removeClass(CLASS_NORMAL).removeClass(CLASS_LARGE).addClass(CLASS_H5);
                break;
            default:
                break;
        }
    };
    _resize();
    $(window).on('resize', _resize);
})();
