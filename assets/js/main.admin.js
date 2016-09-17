$(function() {
  window.onFileUploaded = function(res) {
    console.log('onFileUploaded')
    if (!res || !res.targetId) {
      return;
    }

    var $box = $('#' + res.targetId);
    $box.addClass('done');
    $box.find('.form__area__hidden').attr('data-src', res.fd);
  }
  var apis = {
    settitles: '/settitles',
    setmain: '/setmain',
    setitem: '/setitem',
    showcase: {
      get: '/getshowcases',
      set: '/setshowcase',
      del: '/delshowcase'
    },
    content: '/setContentModule'
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
    console.log('showcaseHtml')
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
        '<div class="cover__action cover__action--edit">编辑</div>',
        '<div class="cover__action cover__action--del">删除</div>',
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
      var _module = $panel.data('module');
      renderShowcases($panel.find('.showcase__list'),_module);
    }
  }

  function renderShowcases($box, module) {
    $.ajax({
      url: apis.showcase.get,
      dataType: 'jsonp',
      data: {
        module: module
      },
      success: function(res) {
        if (!res || res.code !== '100') {
          return alert('请求失败');
        }
        var _data = res.data;
        var _html = '';
        _html += showcaseHtml(_data, module);
        $box.append($(_html));
      }
    });
  }

  function setShowcase($panel,module,id){
    if(!$panel||!module){
      return;
    }
    var _data = {};
    _data.module = module;
    if(id){
      _data.id=id;
    }

    var _title = $panel.find('.form__input[name="title"]')[0].value,
      _subtitle = $panel.find('.form__input[name="subtitle"]')[0].value,
      _desc = $panel.find('.form__input[name="shortcut"]')[0].value,
      _coverImg = $panel.find('.form__item__image--cover .form__area__hidden').data('src');

    _data.module = module;
    _data.title = _title || null;
    _data.subtitle = _subtitle || null;
    _data.desc = _desc || null;
    _data.coverImg = _coverImg || null;

    var $radio = $panel.find('.form__input__radio:checked');
    if($radio.length!==0){
      var _value = $radio.val();
      if(_value === 'video'){
        var _vid = $radio.siblings('.form__input[name="vid"]').val();
        if(_vid){
          _data.detail = {
            type: 'video',
            videoid: _vid
          };
        }
      }else if(_value === 'info'){
        var $bodyItem = $($radio.parents('.body__item')[0]);
        var _type = $bodyItem.find('.info__list .info__item.current').data('type');
        var _desc = $bodyItem.find('.form__input[name="infodesc"]').val();
        var _img = $bodyItem.children('.form__item__image').find('.form__area__hidden').data('src');
        if(!_type||!_desc||!_img){
          alert('图文混排内容不完整');
          return;
        }else{
          _data.detail = {
            type: _type,
            desc: _desc,
            img: _img
          };
        }
      }
    }

    $.ajax({
      url: apis.showcase.set,
      dataType: 'jsonp',
      data: _data,
      method: 'post',
      success: function(res){
        console.log('sdf')
        if(!res||res.code !== '100'){
          alert('操作失败');
          return;
        }
        var _data = res.data;
        var _arr = [];
        _arr.push(_data);
        var _html = showcaseHtml(_arr,_data.module);
        var id = _data.id;
        var $list = $('.panels__item[data-page='+module+'-more]').find('.showcase__list');
        if($list.find('.showcase__item[data-id='+id+']').length===0){
          $list.append($(_html));
        }else{
          $list.find('.showcase__item[data-id='+id+']')[0].outerHTML = _html;
        }
      },
      complete: function(){
        $panel.removeClass('show');
        $panel.find('form').removeClass('done');
      }
    })
  }

  function deleteShowcase(id,module){
    if(!module||!id){
      return;
    }
    var _data = {
      module: module,
      id: id
    };
    $.ajax({
      url: apis.showcase.del,
      dataType: 'jsonp',
      data: _data,
      success: function(res){
        if(!res||res.code !== '100'){
          alert('操作失败');
          return;
        }
        var $list = $('.panels__item[data-page='+module+'-more]').find('.showcase__list');
        $list.find('.showcase__item[data-id='+id+']').remove();
      }
    })
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
    _data.module = module;
    _data.title = _title || null;
    _data.subtitle = _subtitle || null;
    $.ajax({
      url: apis.settitles,
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
    var $box = $('.panels__item__' + module + ' .body__item__main');
    var _data = {};
    var _title = $box.find('.form__input[name="title"]')[0].value,
      _subtitle = $box.find('.form__input[name="subtitle"]')[0].value,
      _desc = $box.find('.form__input[name="shortcut"]')[0].value,
      _coverImg = $box.find('.form__item__image--cover .form__area__hidden').data('src');

    _data.module = module;
    _data.title = _title || null;
    _data.subtitle = _subtitle || null;
    _data.desc = _desc || null;
    _data.coverImg = _coverImg || null;

    var $radio = $box.find('.form__input__radio:checked');
    if($radio.length!==0){
      var _value = $radio.val();
      if(_value === 'video'){
        var _vid = $radio.siblings('.form__input[name="vid"]').val();
        if(_vid){
          _data.detail = {
            type: 'video',
            videoid: _vid
          };
        }
      }else if(_value === 'info'){
        var $bodyItem = $($radio.parents('.body__item')[0]);
        var _type = $bodyItem.find('.info__list .info__item.current').data('type');
        var _desc = $bodyItem.find('.form__input[name="infodesc"]').val();
        var _img = $bodyItem.children('.form__item__image').find('.form__area__hidden').data('src');
        if(!_type||!_desc||!_img){
          alert('图文混排内容不完整');
          return;
        }else{
          _data.detail = {
            type: _type,
            desc: _desc,
            img: _img
          };
        }
      }
    }

    $.ajax({
      url: apis.setmain,
      dataType: 'jsonp',
      method: 'post',
      data: _data,
      success: function(res) {
        if (!res || res.code !== '100') {
          alert('操作失败');
        } else {
          alert('保存成功');
        }
      },
      error: function() {
        alert('操作失败');
      }
    });
  }

  function postItem(module,index){
    if(!module||!index){
      return;
    }
    var $box = $('.panels__item__' + module + ' .body__item__normal[data-index='+index+']');
    var _data = {
      index: index
    };
    var _title = $box.find('.form__input[name="title"]')[0].value,
      _subtitle = $box.find('.form__input[name="subtitle"]')[0].value,
      _desc = $box.find('.form__input[name="shortcut"]')[0].value,
      _coverImg = $box.find('.form__item__image--cover .form__area__hidden').data('src');

    _data.module = module;
    _data.title = _title || null;
    _data.subtitle = _subtitle || null;
    _data.desc = _desc || null;
    _data.coverImg = _coverImg || null;

    var $radio = $box.find('.form__input__radio:checked');
    if($radio.length!==0){
      var _value = $radio.val();
      if(_value === 'video'){
        var _vid = $radio.siblings('.form__input[name="vid"]').val();
        if(_vid){
          _data.detail = {
            type: 'video',
            videoid: _vid
          };
        }
      }else if(_value === 'info'){
        var $bodyItem = $($radio.parents('.body__item')[0]);
        var _type = $bodyItem.find('.info__list .info__item.current').data('type');
        var _desc = $bodyItem.find('.form__input[name="infodesc"]').val();
        var _img = $bodyItem.children('.form__item__image').find('.form__area__hidden').data('src');
        if(!_type||!_desc||!_img){
          alert('图文混排内容不完整');
          return;
        }else{
          _data.detail = {
            type: _type,
            desc: _desc,
            img: _img
          };
        }
      }
    }

    $.ajax({
      url: apis.setitem,
      dataType: 'jsonp',
      method: 'post',
      data: _data,
      success: function(res) {
        if (!res || res.code !== '100') {
          alert('操作失败');
        } else {
          alert('保存成功');
        }
      },
      error: function() {
        alert('操作失败');
      }
    });
  }

  function setContentModule(module,content){
    if(!module||!content){
      return alert('参数错误');
    }
    $.ajax({
      url: apis.content,
      data: {
        module: module,
        content: content
      },
      dataType: 'jsonp',
      success: function(res){
        if(!res||res.code !== '100'){
          alert('操作失败');
          return;
        }
        alert('操作成功');
      }
    })
  }
  $sidebar.on('click', '.sidebar__body .body__item', showPanelByItem);

  $panel_vfx.on('click', '.body__item__pagename .item__form__pagename .form__item__submit', function() {
    postTitles('vfx');
  }).on('click', '.body__item__main .form__item__submit', function() {
    postMain('vfx');
  }).on('click','.body__item .form__item__submit',function(){
    var _index = $(this).parents('.body__item__normal').data('index');
    postItem('vfx',_index);
  });

  $panel_animation.on('click', '.body__item__pagename .item__form__pagename .form__item__submit', function() {
    postTitles('animation');
  }).on('click', '.body__item__main .form__item__submit', function() {
    postMain('animation');
  }).on('click','.body__item .form__item__submit',function(){
    var _index = $(this).parents('.body__item__normal').data('index');
    postItem('animation',_index);
  });;

  $panel_origin.on('click', '.body__item__pagename .item__form__pagename .form__item__submit', function() {
    postTitles('origin');
  }).on('click', '.body__item__main .form__item__submit', function() {
    postMain('origin');
  }).on('click','.body__item .form__item__submit',function(){
    var _index = $(this).parents('.body__item__normal').data('index');
    postItem('origin',_index);
  });;

  $(document).on('click', '.panel__body__showcase .showmore', function(e) {
    return;
    var $this = $(this);
    var module = $this.data('module');
    var $box = $this.parents('.panel__body__showcase').find('.showcase__list');
    // var page = $this.data('page') && parseInt($this.data('page')) || 0;
    // var query = page === 0 ? null : {
    //   page: page
    // };
    renderShowcases($box, apis.showcase.get[module]);
    $this.data('page', ++page);
  }).on('click', '.panel__body__showcase .showcase__item .cover__action--edit', function() {
    // 编辑
    var $item = $(this).parents('.showcase__item');
    var module = $item.data('module');
    var id = $item.data('id')||'';
    var $form_cover = $('.showcase__edit__panel').find('.form__item__image--cover form');
    var $form_showcase = $('.showcase__edit__panel').find('.form__item__image--showcase');
    $form_cover.attr('id','sc_'+id).attr('action','/uploadImage?targetId=sc_'+id+'&callback=parent.onFileUploaded');
    $form_showcase.attr('id','sc_'+id+'_showcase').attr('action','/uploadImage?targetId=sc_'+id+'_showcase&callback=parent.onFileUploaded');
    $('.showcase__edit__panel').attr('_module', module).attr('_id', id).addClass('show');
  }).on('click', '.panel__body__showcase .showcase__item .cover__action--del', function() {
    var $item = $(this).parents('.showcase__item');
    var module = $item.data('module');
    var id = $item.data('id')||'';
    deleteShowcase(id,module);
  }).on('click', '.panel__body__showcase .showcase__item .showcase__action__add', function() {
    // 添加
    var $item = $(this).parents('.showcase__item');
    var module = $item.data('module');
    var id = 'add';
    var $form_cover = $('.showcase__edit__panel').find('.form__item__image--cover form');
    var $form_showcase = $('.showcase__edit__panel').find('.form__item__image--showcase');
    $form_cover.attr('id','sc_'+id).attr('action','/uploadImage?targetId=sc_'+id+'&callback=parent.onFileUploaded');
    $form_showcase.attr('id','sc_'+id+'_showcase').attr('action','/uploadImage?targetId=sc_'+id+'_showcase&callback=parent.onFileUploaded');
    $('.showcase__edit__panel').attr('_module', module).addClass('show');
  }).on('click', '.showcase__edit__panel .close__btn', function() {
    $('.showcase__edit__panel').removeClass('show').attr('_module', '').attr('_id', '');
    $('.showcase__edit__panel').find('form').removeClass('done');
  }).on('click','.showcase__edit__panel .form__item__submit',function(){
    var $panel = $(this).parents('.showcase__edit__panel');
    var _id = $panel.attr('_id');
    var _module = $panel.attr('_module');
    setShowcase($panel,_module,_id);
  }).on('click', '.form__item__cover .info__item', function() {
    if ($(this).hasClass('current')) {
      return;
    }
    var $body = $(this).parents('.body__item');
    var $hint = $body.find('.hint__showcase');
    if($(this).hasClass('info__item__vertical')){
      $hint.html('建议尺寸:415 x 800');
    }else{
      $hint.html('建议尺寸:880 x 415');
    }
    $(this).addClass('current');
    $(this).siblings('.info__item').removeClass('current');
  }).on('click','.form__simple__area .tts__btn',function(){
    var module = $(this).parents('.form__simple__area').data('module');
    var content = $(this).parents('.form__simple__area').find('textarea').val();
    if(!content){
      alert('内容不能为空');
    }else{
      setContentModule(module,content);
    }
  });
});
