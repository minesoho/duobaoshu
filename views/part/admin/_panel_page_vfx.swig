<div class="panels__item panels__item__vfx current" data-page='vfx'>
    <div class="panel__head">
        页面配置 > 首页1-视觉特效
    </div>
    <div class="panel__body">
        <ul class="body__list">
            <li class="body__item body__item__pagename">
                <form class="item__form item__form__pagename" action="index.html" method="post" onsubmit='return false;'>
                    <div class="form__item">
                        <label class="form__label" for="title">标题：</label>
                        <input class="form__input" type="text" name="title" value="">
                    </div>
                    <div class="form__item">
                        <label class="form__label" for="subtitle">副标题：</label>
                        <input class="form__input" type="text" name="subtitle" value="">
                    </div>
                    <div class="form__item form__item__submit">
                        <input type="submit" class="tts__btn" value="保存">
                    </div>
                </form>
            </li>
            <li  class="body__item body__item__main">
                <div class="item__head">
                    头部大图
                </div>
                <div class="item__body">
                    {% include "./__form_item.swig" with {formId:'vfxmain' } only %}
                </div>
            </li>
            <li  class="body__item body__item__1">
                <div class="item__head">
                    展示项目1
                </div>
                <div class="item__body">
                    {% include "./__form_item.swig" with {action: "/vfxItems" } only %}
                </div>
            </li>
            <li  class="body__item body__item__2">
                <div class="item__head">
                    展示项目2
                </div>
                <div class="item__body">
                    {% include "./__form_item.swig" with {action: "/vfxItems" } only %}
                </div>
            </li>
            <li  class="body__item body__item__3">
                <div class="item__head">
                    展示项目3
                </div>
                <div class="item__body">
                    {% include "./__form_item.swig" with {action: "/vfxItems" } only %}
                </div>
            </li>
        </ul>
    </div>
</div>
