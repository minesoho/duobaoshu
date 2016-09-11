<div class="tts__main">
    <div class="main__thumb">
        <img class="thumb__cover" src='/images/bg_cover.png'/>
        <img src="{{img}}" alt="{{title}}" />
    </div>
    <div class="main__entry">
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
    {% if detail%}
      {% if detail.type == 'video' %}
        <div class="item__entry__video" data-videoId='{{detail.videoId}}'></div>
      {% else%}
      <div class="item__entry__info">
        {% include "./entry_cover_info.swig" with detail only %}
      </div>
    {%endif%}
    {% endif %}
</div>
