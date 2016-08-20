$(function($,window){

    var apis = {
        title: {
            vfx: '/vfxTitles',
            animation: '/animationTitles',
            origin: '/originTitles'
        }
    };
    var $main = $('.admin__main');
    var $sidebar = $('.admin__main__sidebar');
    var $panelsBox = $('.admin__main__panels');

    var $sidebar_items = $sidebar.find('.sidebar__body .body__item');

    var $panels = $panelsBox.find('.panels__item');
    var $panel_vfx = $panelsBox.find('.panels__item__vfx');
    var $panel_animation = $panelsBox.find('.panels__item__animation');
    var $panel_origin = $panelsBox.find('.panels__item__origin');
    var $panel_about = $panelsBox.find('.panels__item__ahout');
    var $panel_concact = $panelsBox.find('.panels__item__concact');
    var $panel_jobs = $panelsBox.find('.panels__item__jobs');

    function showPanelByItem(){
        console.log('change')
        var $this = $(this);
        if($this.hasClass('current')){
            return;
        }
        var _page = $this.data('page');
        var $panel = $panelsBox.find('.panels__item[data-page='+_page+']');
        $sidebar_items.removeClass('current');
        $this.addClass('current');
        $panels.removeClass('current');
        $panel.addClass('current');

    }
    function postTitles(module){
        if(!module){
            return;
        }
        var _data = {};
        var _title,_subtitle;
        switch (module) {
            case 'vfx':
                 _title = $panel_vfx.find('.body__item__pagename .item__form__pagename .form__input[name="title"]')[0].value;
                 _subtitle = $panel_vfx.find('.body__item__pagename .item__form__pagename .form__input[name="subtitle"]')[0].value;
                break;
            case 'animation':
                 _title = $panel_animation.find('.body__item__pagename .item__form__pagename .form__input[name="title"]')[0].value;
                 _subtitle = $panel_animation.find('.body__item__pagename .item__form__pagename .form__input[name="subtitle"]')[0].value;
                break;
            case 'origin':
                 _title = $panel_origin.find('.body__item__pagename .item__form__pagename .form__input[name="title"]')[0].value;
                 _subtitle = $panel_origin.find('.body__item__pagename .item__form__pagename .form__input[name="subtitle"]')[0].value;
                break;
            default:
                break;
        }
        if(!_title&&!_subtitle){
            return;
        }
        _data.title = _title||null;
        _data.subtitle = _subtitle||null;
        $.ajax({
            url: api.title[module],
            data:_data,
            method: 'post',
            dataType: 'jsonp',
            success: function(res){
                if(!res || res.code!=='100'){
                    return alert('操作失败');
                }
                alert('操作成功');
            }
        })
    }

    function postMain(module){
        if(!module){
            return;
        }
        var _data = {};
    }

    $sidebar.on('click','.sidebar__body .body__item',showPanelByItem);

    $panel_vfx.on('click','.body__item__pagename .item__form__pagename .form__item__submit',function(){
        postTitles('vfx');
    }).on('click','.body__item__main .form__item__submit',function(){
        postMain('vfx');
    });

    $panel_animation.on('click','.body__item__pagename .item__form__pagename .form__item__submit',function(){
        postTitles('animation');
    });

    $panel_origin.on('click','.body__item__pagename .item__form__pagename .form__item__submit',function(){
        postTitles('origin');
    });

})
