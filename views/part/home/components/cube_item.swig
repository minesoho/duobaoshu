<div class="tts__item">
    <div class="item__thumb">
        <img class="thumb__cover" src='/images/bg_cover.png'/>
        <img src="{{img}}" alt="{{title}}" />
    </div>
    {% if !blank %}
    <div class="item__entry">
        <div class="entry__cover"></div>
        {% if title%}
        <div class="entry__title">
            {{title}}
        </div>
        {% endif %}
        {% if subtitle%}
        <div class="entry__subtitle">
            {{subtitle}}
        </div>
        {% endif %}
        {% if desc%}
        <div class="entry__desc">
            {{desc}}
        </div>
        {% endif %}
        <div class="entry__action" data-action="{{href}}">
            <i class="tts__icon tts__icon__play"></i>
        </div>
    </div>
    <div class="item__entry__info">
    {% include "./entry_cover_info.swig" with {
        type: 'info--updown',
        desc:'多宝猴是我们公司制作的微信表情之一，目前已推出了第二套表情包。我们团队会在将来推出更多的优秀的动画形象。 这是一只淘气，古灵精怪又可爱的小猴子。他的猴生信条就是“不捣蛋，不成活”',
        img:'/images/test/origin_alert.png'
    } only %}
    </div>
    {% endif %}
</div>
