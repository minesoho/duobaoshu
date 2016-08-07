{%set vfx = data.vfx%}
<div class="index__main">
    <ul class="slider">
        <li class="slider__page slider__page__1">
            <div class="page__box">
                {% include "./vfx.swig" with vfx %}
            </div>
        </li>
    </ul>
</div>
