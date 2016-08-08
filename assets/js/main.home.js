(function(global){
    var CLASS_CURRENT = 'slider__page--current',
    CLASS_PREV = 'slider__page--prev',
    CLASS_NEXT = 'slider__page--next';

    var lock_slide = false;
    var timer_slide = 1000;
    $(document).on('click','.main__slider__btn--prev',function(ev){
        if(lock_slide){
            return;
        }
        lock_slide = true;
        var $current = $('.'+CLASS_CURRENT),
        $prev = $('.'+CLASS_PREV);

        $current.animate({
            left: '100%'
        },timer_slide,function(){
            $current.removeClass(CLASS_CURRENT).addClass(CLASS_NEXT);
            lock_slide = false;
        });
        $prev.animate({
            left: 0
        },timer_slide,function(){
            $prev.removeClass(CLASS_PREV).addClass(CLASS_CURRENT);
            lock_slide = false;
        });
    }).on('click','.main__slider__btn--next',function(ev){
        if(lock_slide){
            return;
        }
        lock_slide = true;
        var $current = $('.'+CLASS_CURRENT),
        $next = $('.'+CLASS_NEXT);

        $current.animate({
            left: '-100%'
        },timer_slide,function(){
            $current.removeClass(CLASS_CURRENT).addClass(CLASS_PREV);
            lock_slide = false;
        });
        $next.animate({
            left: 0
        },timer_slide,function(){
            $prev.removeClass(CLASS_NEXT).addClass(CLASS_CURRENT);
            lock_slide = false;
        });
    });
})(window);
