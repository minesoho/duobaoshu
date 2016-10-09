<li class="showcases__item" data-dtype="{{detail.type}}" {% if detail.type=="video" %}data-videoid="{{videoId}}"{%endif%}>
  <div class="showcase__entry">
    {%if title%}
    <div class="entry__title">
      {{title}}
    </div>
    {%endif%}
    {# <div class="entry__action" data-action="">
        <i class="tts__icon tts__icon__play"></i>
    </div> #}
  </div>
  <div class="showcase__thumb">
      <img src="{{img}}" alt="{{title}}" />
  </div>
  {# {% if detail.type !== 'video' %}
    <div class="showcase__entry__info" style='display:none;'>
      {% include "./entry_cover_info.swig" with detail only %}
    </div>
  {% endif %} #}
</li>
