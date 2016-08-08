<div class="home__main">
    <div class="main__slider__btn main__slider__btn--prev">
        <i class="tts__icon tts__icon__page--prev"></i>
    </div>
    <ul class="main__slider__pages">
        <li class="slider__page slider__page__vfx slider__page--prev">
            <div class="page__box">
                {% include "./_vfx.swig" with vfx %}
            </div>
        </li>
        <li class="slider__page slider__page__origin slider__page--current">
            <div class="page__box">
                {% include "./_origin.swig" with origin %}
            </div>
        </li>
        <li class="slider__page slider__page__animation slider__page--next">
            <div class="page__box">
                {% include "./_animation.swig" with animation %}
            </div>
        </li>
    </ul>
    <div class="main__slider__btn main__slider__btn--next">
        <i class="tts__icon tts__icon__page--next"></i>
    </div>
</div>
