<li class="showcases__item" data-dtype="{{type}}" {% if type=="video" %}data-videoid="{{videoId}}"{%endif%}>
  <div class="showcase__entry">
    {%if title%}
    <div class="entry__title">
      {{title}}
    </div>
    {%endif%}
    <div class="entry__action" data-action="">
        <i class="tts__icon tts__icon__play"></i>
    </div>
  </div>
  <div class="showcase__thumb">
      <img src="{{img}}" alt="{{title}}" />
  </div>
</li>
