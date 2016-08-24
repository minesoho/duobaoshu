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
    {% if showcase%}
    <div class="item__entry__info">
    {% include "./entry_cover_info.swig" with showcase only %}
    </div>
    {% endif %}
    {% endif %}
</div>
