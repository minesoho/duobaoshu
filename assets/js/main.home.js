(function(global){
    var CLASS_CURRENT = 'slider__page--current',
    CLASS_PREV = 'slider__page--prev',
    CLASS_NEXT = 'slider__page--next';

    var locked = false;
    var lock_slide = false;
    var timer_slide = 500;

    var $pageBox = $('.main__slider__pages');
    var $pages = $('.slider__page');
    var page_sum = $pages.length;

    var $spotBox = $('.slider__spots');
    var $spots = $spotBox.find('.spot');

    var $pageEntryCover = $('.page__entry__cover');
    var $pageEntryCoverBox = $pageEntryCover.find(".cover__box");

    var $sliderBtns = $('.main__slider__btn');

    var swipe_start = null,swipe_end = null;

    var SWIPE_STEP = 30;

    function nextSwipePage(){
        if(lock_slide){
            return;
        }
        lock_slide = true;
        $pageEntryCover.hide();
        $spotBox.show();
        var $cover = $('.main__slider__pages .slider__cover');
        if($cover.hasClass('step0')){
            $cover.removeClass('step0').addClass('step1');
            $pages.removeClass(CLASS_CURRENT);
            $pageBox.find('.slider__page[order="1"]').addClass(CLASS_CURRENT);
            $spots.removeClass('current');
            $spotBox.find('.spot[order="1"]').addClass('current');
            lock_slide = false;
        // }else if($cover.hasClass('step1')){
        //     $cover.removeClass('step1').addClass('step2');
        //     $pages.removeClass('current');
        //     $pageBox.find('.slider__page[order="2"]').addClass(CLASS_CURRENT);
        //     $spots.removeClass('current');
        //     $spotBox.find('.spot[order="2"]').addClass('current');
        //     $('.main__slider__btn--next').addClass('hide');
        //     lock_slide = false;
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
        $pageEntryCover.hide();
        $sliderBtns.show();
        $spotBox.show();
        var $cover = $('.main__slider__pages .slider__cover');
        // if($cover.hasClass('step2')){
        //     $cover.removeClass('step2').addClass('step1');
        //     $pages.removeClass(CLASS_CURRENT);
        //     $pageBox.find('.slider__page[order="1"]').addClass(CLASS_CURRENT);
        //     $spots.removeClass('current');
        //     $spotBox.find('.spot[order="1"]').addClass('current');
        //     $('.main__slider__btn--next').removeClass('hide');
        //     lock_slide = false;
        // }else
        if($cover.hasClass('step1')){
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
        $pageEntryCover.hide();
        $sliderBtns.show();
        $spotBox.show();
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
        $pageEntryCover.hide();
        $sliderBtns.show();
        $spotBox.show();
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
                $(this).addClass('hide');
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

    }).on('click','.cover__action--close',function(e){
      var ev = e||window.event;
      ev.stopPropagation();
        $(this).parents('.page__entry__cover').hide();
        $(this).parents('.page__nav__cover').hide();
        $(this).parents('.vfx__showcases').hide();
        $(this).parents('.animation__showcases').hide();
        $(this).parents('.origin__showcases').hide();
        $sliderBtns.show();
        $spotBox.show();
        locked = false;
    // }).on('touchend','.cover__action--close',function(e){
    //   var ev = e||window.event;
    //   ev.stopPropagation();
    //     $(this).parents('.page__entry__cover').hide();
    //     $(this).parents('.page__nav__cover').hide();
    //     $(this).parents('.vfx__showcases').hide();
    //     $(this).parents('.animation__showcases').hide();
    //     $(this).parents('.origin__showcases').hide();
    //     $sliderBtns.show();
    //     $spotBox.show();
    //     locked = false;
    }).on('click','.tts__item',function(){
        var $this = $(this);
        var _type = $this.data('dtype');
        if(_type == 'video'){
          var _vid = $this.find('.item__entry__video').data('videoid');
          $pageEntryCoverBox.html('<div id="youkuplayer" style=""></div>');
          $pageEntryCover.show();
          $sliderBtns.hide();
          $spotBox.hide();
          player = new YKU.Player('youkuplayer',{
            styleid: '0',
            client_id: '58fa8f58142b191f',
            vid: _vid,
            newPlayer: true
          });
        }else{
          if($(this).find('.item__entry').length === 0){
              return;
          }
          var _entry = $(this).find('.item__entry__info');
          if(_entry.length!==0){
              var _html = _entry.html();
              $pageEntryCoverBox.html(_html);
              $pageEntryCover.show();
              $sliderBtns.hide();
              $spotBox.hide();
          }
        }

    }).on('click','.tts__main',function(){
        var $this = $(this);
        var _type = $this.data('dtype');
        if(_type == 'video'){
          var _vid = $this.find('.item__entry__video').data('videoid');
          $pageEntryCoverBox.html('<div id="youkuplayer" style=""></div>');
          $pageEntryCover.show();
          $sliderBtns.hide();
          $spotBox.hide();
          player = new YKU.Player('youkuplayer',{
            styleid: '0',
            client_id: '58fa8f58142b191f',
            vid: _vid,
            newPlayer: true
          });
        }else{
          var _entry = $(this).find('.item__entry__info');
          if(_entry.length!==0){
              var _html = _entry.html();
              $pageEntryCoverBox.html(_html);
              $pageEntryCover.show();
              $sliderBtns.hide();
              $spotBox.hide();
          }
        }

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
    }).on('touchend','.slider__cover .slider__page__showcases',function(){
      return false;
    }).on('click','.tts__more',function(){
      var $module = $(this).parent();
      var _module = $module.attr('class').split('__more')[0];
      if($('.'+_module+'__showcases').length!==0){
        $('.'+_module+'__showcases').show();
        $sliderBtns.toggle();
        $spotBox.toggle();
      }
    // }).on('click','.showcases__item',function(e){
    //   var ev = e||window.event;
    //   ev.stopPropagation();
    //   var $item = $(this);
    //   var _type = $item.data('dtype');
    //   if(_type == 'video'){
    //     var _vid = $item.data('videoid');
    //     $pageEntryCoverBox.html('<div id="youkuplayer" style=""></div>');
    //     $pageEntryCover.show();
    //     $sliderBtns.hide();
    //     $spotBox.hide();
    //     player = new YKU.Player('youkuplayer',{
    //       styleid: '0',
    //       client_id: '58fa8f58142b191f',
    //       vid: _vid,
    //       newPlayer: true
    //     });
    //   }else{
    //     var _entry = $(this).find('.showcase__entry__info');
    //     if(_entry.length!==0){
    //         var _html = _entry.html();
    //         $pageEntryCoverBox.html(_html);
    //         $pageEntryCover.show();
    //         $sliderBtns.hide();
    //         $spotBox.hide();
    //     }
    //   }
    }).on('click','.tts__head .nav__item',function(){
      // if(locked){
      //   return;
      // }
      var $this = $(this);
      var _page = $this.data('page');
      var $page = $('.page__nav__cover--'+_page);
      $('.page__nav__cover').hide();
      $pageEntryCover.hide();
      $sliderBtns.hide();
      $spotBox.hide();
      $page.find('.content').html($page.find('.content__hidden').text());
      $page.show();

      // locked = true;
    });
})(window);
