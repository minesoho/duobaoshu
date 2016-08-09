<div class="page__animation clearfix">
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
    {# <div class="animation__showcases">
        <div class="showcases__cover"></div>
        <ul class="showcases__list">
            {% for item in showcases%}
                <li class="showcases__item">
                    <div class="showcase__thumb">
                        <img src="{{item.img}}" alt="{{item.title}}" />
                    </div>
                </li>
            {%endfor%}
        </ul>
    </div> #}
</div>
