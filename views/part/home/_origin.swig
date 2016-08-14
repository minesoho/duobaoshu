<div class="page__origin clearfix">
    <div class="page__origin__cover">
        <div class="origin__cover__desc">
            多宝猴是我们公司制作的微信表情之一，目前已推出了第二套表情包。我们团队会在将来推出更多的优秀的动画形象。 这是一只淘气，古灵精怪又可爱的小猴子。他的猴生信条就是“不捣蛋，不成活”
        </div>
        <div class="origin__cover__thumb">
            <img src="/images/test/origin_alert.png" alt="" />
        </div>
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
                <li class="showcases__item">
                    <div class="showcase__thumb">
                        <img src="{{item.img}}" alt="{{item.title}}" />
                    </div>
                </li>
            {%endfor%}
        </ul>
    </div>
</div>
