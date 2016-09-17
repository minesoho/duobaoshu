<div class="page__origin clearfix">
    <div class="page__origin__cover">
        <ul class="origin__cover__list">
            <li class="origin__cover__item">
                <img src="/images/test/origin_item_1.jpg" alt="" />
            </li>
            <li class="origin__cover__item">
                <img src="/images/test/origin_item_1.jpg" alt="" />
            </li>
            <li class="origin__cover__item">
                <img src="/images/test/origin_item_1.jpg" alt="" />
            </li>
            <li class="origin__cover__item">
                <img src="/images/test/origin_item_1.jpg" alt="" />
            </li>
            <li class="origin__cover__item">
                <img src="/images/test/origin_item_1.jpg" alt="" />
            </li>
            <li class="origin__cover__item">
                <img src="/images/test/origin_item_1.jpg" alt="" />
            </li>
        </ul>
    </div>
    <div class="origin__more">
        {%include './components/cube_more.swig' with more only%}
    </div>
    <div class="origin__main">
        {%include './components/cube_main.swig' with main only%}
    </div>
    <ul class="origin__list">
        {% for item in list%}
            <li class="origin__item origin__item--{{loop.index}}">
                {%include './components/cube_item.swig' with item only%}
            </li>
        {%endfor%}
    </ul>
    <div class="origin__showcases">
        <div class="showcases__cover"></div>
        <ul class="showcases__list">
            {% for item in showcases%}
                {% include "./components/showcase.swig" with item only %}
            {%endfor%}
        </ul>
    </div>
</div>
