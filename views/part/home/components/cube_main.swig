<div class="tts__main">
    <div class="main__thumb">
        <img src="{{img}}" alt="{{title}}" />
    </div>
    <div class="main__entry">
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
