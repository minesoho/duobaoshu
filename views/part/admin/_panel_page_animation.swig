<div class="panels__item panels__item__animation" data-page='animation'>
    <div class="panel__head">
        页面配置 > 动画作品 - 首页
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
                    {% include "./__form_item.swig" with {formId: "animationMain",sizecover:'534 x 240',sizeshowcase:'880 x 415'  } only %}
                </div>
            </li>
            <li  class="body__item body__item__normal" data-index='1'>
                <div class="item__head">
                    展示项目1
                </div>
                <div class="item__body">
                    {% include "./__form_item.swig" with {formId: "animationItems_1",sizecover:'267 x 240',sizeshowcase:'880 x 415'  } only %}
                </div>
            </li>
            <li  class="body__item body__item__normal" data-index='2'>
                <div class="item__head">
                    展示项目2
                </div>
                <div class="item__body">
                    {% include "./__form_item.swig" with {formId: "animationItems_2",sizecover:'267 x 240',sizeshowcase:'880 x 415'  } only %}
                </div>
            </li>
            <li  class="body__item body__item__normal" data-index='3'>
                <div class="item__head">
                    展示项目3
                </div>
                <div class="item__body">
                    {% include "./__form_item.swig" with {formId: "animationItems_3",sizecover:'267 x 240',sizeshowcase:'880 x 415'  } only %}
                </div>
            </li>
        </ul>
    </div>
</div>
