(function(){
    var SCREEN_MINI = 1650;
    var SCREEN_H5 = 1025;

    var CLASS_MINI = 'body--mini';
    var CLASS_H5 = 'body--h5';

    var $body = $(document.body);

    var _resize = function(){
        var _width = $body.width();
        if(_width < SCREEN_MINI && _width > SCREEN_H5){
            $body.removeClass(CLASS_H5).addClass(CLASS_MINI);
        }else if(_width <= SCREEN_H5){
            $body.removeClass(CLASS_MINI).addClass(CLASS_H5);
        }else{
            $body.removeClass(CLASS_MINI).removeClass(CLASS_H5);
        }
    };
    _resize();
    $(window).on('resize',_resize);
})();
