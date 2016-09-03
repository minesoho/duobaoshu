<div class="home__main__container">
<div class="home__main">
    <div class="main__slider__btn main__slider__btn--prev">
        <i class="tts__icon tts__icon__page--prev"></i>
    </div>
    <ul class="main__slider__pages">
        <div class="page__entry__cover">
          <div class="cover__action--close">
            <i class='tts__icon tts__icon__close'></i>
          </div>
          <div class="cover__box">

          </div>
        </div>
        {% include "_about.swig" with about only%}
        {% include "_concat.swig"  with concat only%}
        {% include "_jobs.swig"  with jobs only%}
        <div class="slider__cover step1">
            <li class="slider__page slider__page__vfx slider__page--prev" order='0'>
                <div class="page__box">
                    {% include "./_vfx.swig" with vfx %}
                </div>
            </li>
            <li class="slider__page slider__page__origin slider__page--current" order='1'>
                <div class="page__box">
                    {% include "./_origin.swig" with origin %}
                </div>
            </li>
            <li class="slider__page slider__page__animation slider__page--next" order='2'>
                <div class="page__box">
                    {% include "./_animation.swig" with animation %}
                </div>
            </li>
        </div>
    </ul>
    <ul class="slider__spots">
        <li class="spot" order='0'></li>
        <li class="spot current" order='1'></li>
        <li class="spot" order="2"></li>
    </ul>
    <div class="main__slider__btn main__slider__btn--next">
        <i class="tts__icon tts__icon__page--next"></i>
    </div>
</div>
{%include "./_footer.swig"%}
</div>
