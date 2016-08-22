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

    var swipe_start = null,swipe_end = null;

    var SWIPE_STEP = 30;

    function nextSwipePage(){
        if(lock_slide){
            return;
        }
        lock_slide = true;
        var $cover = $('.main__slider__pages .slider__cover');
        if($cover.hasClass('step0')){
            $cover.removeClass('step0').addClass('step1');
            $pages.removeClass(CLASS_CURRENT);
            $pageBox.find('.slider__page[order="1"]').addClass(CLASS_CURRENT);
            $spots.removeClass('current');
            $spotBox.find('.spot[order="1"]').addClass('current');
            lock_slide = false;
        }else if($cover.hasClass('step1')){
            $cover.removeClass('step1').addClass('step2');
            $pages.removeClass('current');
            $pageBox.find('.slider__page[order="2"]').addClass(CLASS_CURRENT);
            $spots.removeClass('current');
            $spotBox.find('.spot[order="2"]').addClass('current');
            $('.main__slider__btn--next').hide();
            lock_slide = false;
        }else{
            lock_slide = false;
            return;
        }
    }

    function prevSwipePage(){
        if(lock_slide){
            return;
        }
        lock_slide = true;
        var $cover = $('.main__slider__pages .slider__cover');
        if($cover.hasClass('step2')){
            $cover.removeClass('step2').addClass('step1');
            $pages.removeClass(CLASS_CURRENT);
            $pageBox.find('.slider__page[order="1"]').addClass(CLASS_CURRENT);
            $spots.removeClass('current');
            $spotBox.find('.spot[order="1"]').addClass('current');
            $('.main__slider__btn--next').show();
            lock_slide = false;
        }else if($cover.hasClass('step1')){
            $cover.removeClass('step1').addClass('step0');
            $pages.removeClass(CLASS_CURRENT);
            $pageBox.find('.slider__page[order="0"]').addClass(CLASS_CURRENT);
            $spots.removeClass('current');
            $spotBox.find('.spot[order="0"]').addClass('current');
            lock_slide = false;
        }else{
            lock_slide = false;
            return;
        }
    }

    $(document).on('touchmove','.body--h5',function(e){
        e.preventDefault();
        return false;
    }).on('click','.main__slider__btn--prev',function(ev){
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
        if(lock_slide){
            return;
        }
        lock_slide = true;

        if($(this).parents('.body--h5').length !==0){
            var $cover = $('.main__slider__pages .slider__cover');
            if($cover.hasClass('step0')){
                $cover.removeClass('step0').addClass('step1');
                $spots.removeClass('current');
                $spotBox.find('.spot[order="1"]').addClass('current');
                lock_slide = false;
            }else if($cover.hasClass('step1')){
                $cover.removeClass('step1').addClass('step2');
                $spots.removeClass('current');
                $spotBox.find('.spot[order="2"]').addClass('current');
                $(this).hide();
                lock_slide = false;
            }
        }else{
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
        }

    }).on('click','.origin__item--1',function(){
        $('.page__origin__cover').show();
    }).on('click','.page__origin__cover',function(){
        $(this).hide();
    }).on('click','.vfx__more',function(){
        $('.page__vfx__cover').show();
    }).on('click','.page__vfx__cover',function(){
        $(this).hide();
    }).on('touchstart','.slider__cover',function(event){
        var ev = event||window.event;
        swipe_start = ev.originalEvent.touches[0].screenY;
    }).on('touchend','.slider__cover',function(event){
        var ev = event||window.event;
        swipe_end = ev.originalEvent.changedTouches[0].screenY;
        if(swipe_end > swipe_start && swipe_end - swipe_start >= SWIPE_STEP){
            prevSwipePage();
        }else if(swipe_end < swipe_start && swipe_start - swipe_end >= SWIPE_STEP){
            nextSwipePage();
        }else{
            swipe_start = null;
            swipe_end = null;
        }
    });
})(window);
