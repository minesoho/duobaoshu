<div class="page__animation clearfix">
    <div class="page__animation__cover">
        <ul class="animation__cover__list">
            <li class="animation__cover__item">
                <img src="/images/test/animation_item_1.jpg" alt="" />
            </li>
            <li class="animation__cover__item">
                <img src="/images/test/animation_item_1.jpg" alt="" />
            </li>
            <li class="animation__cover__item">
                <img src="/images/test/animation_item_1.jpg" alt="" />
            </li>
            <li class="animation__cover__item">
                <img src="/images/test/animation_item_1.jpg" alt="" />
            </li>
            <li class="animation__cover__item">
                <img src="/images/test/animation_item_1.jpg" alt="" />
            </li>
            <li class="animation__cover__item">
                <img src="/images/test/animation_item_1.jpg" alt="" />
            </li>
        </ul>
    </div>
    <div class="animation__main">
        {%include './components/cube_main.swig' with main only%}
    </div>
    <div class="animation__more">
        {%include './components/cube_more.swig' with more only%}
    </div>
    <ul class="animation__list">
        {% for item in list%}
            <li class="animation__item animation__item--{{loop.index}}">
                {%include './components/cube_item.swig' with item only%}
            </li>
        {%endfor%}
    </ul>
    <div class="animation__showcases slider__page__showcases">
        <div class="showcases__cover"></div>
        <div class="cover__action--close">
          <i class='tts__icon tts__icon__close'></i>
        </div>
        <ul class="showcases__list">
            {% for item in showcases%}
                {% include "./components/showcase.swig" with item only %}
            {%endfor%}
        </ul>
    </div>
</div>
