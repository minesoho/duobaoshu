$(function() {
  window.onFileUploaded = function(res){
    console.log('onFileUploaded')
    if(!res||!res.targetId){
      return;
    }

    var $box = $('#'+res.targetId);
    $box.addClass('done');
    $box.find('.form__area__hidden').attr('imgsrc',res.fd);
  }
  var apis = {
    title: {
      vfx: '/vfxTitles',
      animation: '/animationTitles',
      origin: '/originTitles'
    },
    main: {
      vfx: '/vfxMain'
    },
    showcase: {
      get: {
        'vfx': '/vfxShowcases',
        'animation': '/animationShowcases',
        'origin': '/originShowcases',
      }
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

  function showcaseHtml(data, module) {
    var html = [];
    for (var i = 0, len = data.length; i < len; i++) {
      var _li = [
        '<li class="showcase__item showcase__item__normal" data-module=\'' + module + '\' data-id=\'' + data[i].id + '\'>',
        '<div class="showcase__thumb">',
        '<img src="' + data[i].img + '" />',
        '</div>',
        '<div class="showcase__entry">',
        data[i].title,
        '</div>',
        '<div class="showcase__cover">',
        '<div class="cover__action cover__actio--edit">编辑</div>',
        '<div class="cover__action cover__actio--del">删除</div>',
        '</div>',
        '</li>'
      ].join('');
      html.push(_li);
    }
    return html.join('');
  }

  function showPanelByItem() {
    var $this = $(this);
    if ($this.hasClass('current')) {
      return;
    }
    var _page = $this.data('page');
    var $panel = $panelsBox.find('.panels__item[data-page=' + _page + ']');
    $sidebar_items.removeClass('current');
    $this.addClass('current');
    $panels.removeClass('current');
    $panel.addClass('current');
    if ($this.attr('showcase')) {
      var api = apis.showcase.get[$this.attr('showcase')];
      renderShowcases($panel.find('.showcase__list'), api, $this.attr('showcase'));
    }
  }

  function renderShowcases($box, api, module, query) {
    $.ajax({
      url: api,
      dataType: 'jsonp',
      data: query || {},
      success: function(res) {
        if (!res || res.code !== '100') {
          return alert('请求失败');
        }
        var _data = res.data;
        var _html = showcaseHtml(_data, module);
        $box.append($(_html));
      }
    });
  }

  function postTitles(module) {
    if (!module) {
      return;
    }
    var _data = {};
    var _title, _subtitle;
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
    if (!_title && !_subtitle) {
      return;
    }
    _data.title = _title || null;
    _data.subtitle = _subtitle || null;
    $.ajax({
      url: api.title[module],
      data: _data,
      method: 'post',
      dataType: 'jsonp',
      success: function(res) {
        if (!res || res.code !== '100') {
          return alert('操作失败');
        }
        alert('操作成功');
      }
    })
  }

  function postMain(module) {
    if (!module) {
      return;
    }
    var $box = $('.panels__item__'+module+' .body__item__main');
    var _data = {};
    var _title = $box.find('.form__input[name="title"]')[0].value,
    _subtitle = $box.find('.form__input[name="subtitle"]')[0].value,
    _desc = $box.find('.form__input[name="shortcut"]')[0].value,
    _coverImg = $box.find('.form__item__image .form__area__hidden').attr('imgsrc');

    _data.title = _title || null;
    _data.subtitle = _subtitle || null;
    _data.desc = _desc || null;
    _data.coverImg = _coverImg || null;

    $.ajax({
      url: apis.main[module],
      dataType: 'jsonp',
      method: 'post',
      data: _data,
      seccess: function(res){
        if(!res||res.code !== '100'){
          alert('操作失败');
        }else{
          alert('保存成功');
        }
      },
      error: function(){
        alert('保存成功');
      }
    });
  }

  $sidebar.on('click', '.sidebar__body .body__item', showPanelByItem);

  $panel_vfx.on('click', '.body__item__pagename .item__form__pagename .form__item__submit', function() {
    postTitles('vfx');
  }).on('click', '.body__item__main .form__item__submit', function() {
    postMain('vfx');
  });

  $panel_animation.on('click', '.body__item__pagename .item__form__pagename .form__item__submit', function() {
    postTitles('animation');
  });

  $panel_origin.on('click', '.body__item__pagename .item__form__pagename .form__item__submit', function() {
    postTitles('origin');
  });

  $(document).on('click', '.panel__body__showcase .showmore', function(e) {
        return;
        var $this = $(this);
        var module = $this.data('module');
        var $box = $this.parents('.panel__body__showcase').find('.showcase__list');
        var page = $this.data('page') && parseInt($this.data('page')) || 0;
        var query = page === 0 ? null : {
          page: page
        };
        renderShowcases($box, apis.showcase.get[module], query);
        $this.data('page', ++page);
    }).on('click','.panel__body__showcase .showcase__item',function(){
        var $this = $(this);
        var module = $this.data('module');
        var id=$this.data('id');
        $('.showcase__edit__panel').attr('_module',module).attr('_id',id).addClass('show');
    }).on('click','.showcase__edit__panel .close__btn',function(){
        $('.showcase__edit__panel').removeClass('show').attr('_module','').attr('_id','');
    }).on('click','.form__item__cover .info__item',function(){
      if($(this).hasClass('current')){
        return;
      }
      $(this).addClass('current');
      $(this).siblings('.info__item').removeClass('current');
    });
});
