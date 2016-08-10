(function(global){
    var CLASS_CURRENT = 'slider__page--current',
    CLASS_PREV = 'slider__page--prev',
    CLASS_NEXT = 'slider__page--next';

    var lock_slide = false;
    var timer_slide = 500;

    var $pageBox = $('.main__slider__pages');
    var $pages = $('.slider__page');
    var page_sum = $pages.length;

    var $spotBox = $('.slider__spots');
    var $spots = $spotBox.find('.spot');

    $(document).on('click','.main__slider__btn--prev',function(ev){
        console.log('prev');
        if(lock_slide){
            return;
        }
        lock_slide = true;
        var $current = $('.'+CLASS_CURRENT);
        var curOrder = parseInt($current.attr('order'));
        var prevOrder = curOrder === 0?page_sum-1:curOrder-1;
        $prev = $pageBox.find('.slider__page[order='+prevOrder+']');
        $prev.removeClass(CLASS_NEXT).addClass(CLASS_PREV).css("left","-100%");

        $spots.removeClass('current');
        $spotBox.find('.spot[order='+prevOrder+']').addClass('current');

        $current.animate({
            left: '100%'
        },timer_slide,function(){
            $current.removeClass(CLASS_CURRENT).removeClass(CLASS_PREV).addClass(CLASS_NEXT);
            lock_slide = false;
        });
        $prev.addClass(CLASS_CURRENT).animate({
            left: 0
        },timer_slide,function(){
            $prev.removeClass(CLASS_PREV).removeClass(CLASS_NEXT);
            lock_slide = false;
        });
    }).on('click','.main__slider__btn--next',function(ev){
        console.log('next');
        if(lock_slide){
            return;
        }
        lock_slide = true;
        var $current = $('.'+CLASS_CURRENT);
        var curOrder = parseInt($current.attr('order'));
        var nextOrder = curOrder === page_sum-1?0:curOrder+1;
        $next = $pageBox.find('.slider__page[order='+nextOrder+']');
        $next.removeClass(CLASS_PREV).addClass(CLASS_NEXT).css("left","100%");

        $spots.removeClass('current');
        $spotBox.find('.spot[order='+nextOrder+']').addClass('current');

        $current.animate({
            left: '-100%'
        },timer_slide,function(){
            $current.removeClass(CLASS_CURRENT).removeClass(CLASS_NEXT).addClass(CLASS_PREV);
            lock_slide = false;
        });
        $next.addClass(CLASS_CURRENT).animate({
            left: 0
        },timer_slide,function(){
            $next.removeClass(CLASS_NEXT).removeClass(CLASS_PREV);
            lock_slide = false;
        });
    });
})(window);