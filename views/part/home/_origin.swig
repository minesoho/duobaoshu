<div class="page__origin clearfix">
    <div class="origin__more">
        {%include './components/cube_more.swig' with more only%}
    </div>
    <div class="origin__main">
        {%include './components/cube_main.swig' with main only%}
    </div>
    <ul class="origin__list">
        {% for item in list%}
            <li class="list__item">
                <div class="list__thumb">
                    <img src="{{item.img}}" alt="{{item.title}}" />
                </div>
                <div class="list__entry">
                    <div class="entry__cover"></div>
                    <p class="entry__title">{{item.title}}</p>
                    <p class="entry__subtitle">{{item.subtitle}}</p>
                    <p class="entry__desc">{{item.desc}}</p>
                    <div class="entry__action">
                        <i class="tts__icon tts__icon__play"></i>
                    </div>
                </div>
            </li>
        {%endfor%}
    </ul>
    <div class="origin__showcases">
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
    </div>
</div>
