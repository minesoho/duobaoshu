<div class="tts__item">
    <div class="item__thumb">
        <img src="{{img}}" alt="{{title}}" />
    </div>
    <div class="item__entry">
        <div class="entry__cover"></div>
        <div class="entry__title">
            {{title}}
        </div>
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
</div>
