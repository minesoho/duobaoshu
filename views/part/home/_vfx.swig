<div class="page__vfx clearfix">
    <div class="page__vfx__cover">
        <ul class="vfx__cover__list">
            <li class="vfx__cover__item">
                <img src="/images/test/vfx_item_1.jpg" alt="" />
            </li>
            <li class="vfx__cover__item">
                <img src="/images/test/vfx_item_1.jpg" alt="" />
            </li>
            <li class="vfx__cover__item">
                <img src="/images/test/vfx_item_1.jpg" alt="" />
            </li>
            <li class="vfx__cover__item">
                <img src="/images/test/vfx_item_1.jpg" alt="" />
            </li>
            <li class="vfx__cover__item">
                <img src="/images/test/vfx_item_1.jpg" alt="" />
            </li>
            <li class="vfx__cover__item">
                <img src="/images/test/vfx_item_1.jpg" alt="" />
            </li>
        </ul>
    </div>
    <div class="vfx__more">
        {%include './components/cube_more.swig' with more only%}
    </div>
    <div class="vfx__main">
        {%include './components/cube_main.swig' with main only%}
    </div>
    <ul class="vfx__list">
        {% for item in list%}
            <li class="vfx__item vfx__item--{{loop.index}}">
                {%include './components/cube_item.swig' with item only%}
            </li>
        {% endfor %}
    </ul>
    {% if showcase%}
    <div class="vfx__showcases">
        <div class="showcases__cover"></div>
        <div class="cover__action--close">
          <i class='tts__icon tts__icon__close'></i>
        </div>
        <ul class="showcases__list">
            {% for item in showcase%}
              {% include "./components/showcase.swig" with item only %}
            {% endfor %}
        </ul>
    </div>
  {% endif %}
</div>
