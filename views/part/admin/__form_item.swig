<div class="item__form">
    <div class="form__item">
        <label class="form__label" for="title">标题：</label>
        <input class="form__input" type="text" name="title" value="">
    </div>
    <div class="form__item">
        <label class="form__label" for="title">副标题：</label>
        <input class="form__input" type="text" name="title" value="">
    </div>
    <div class="form__item">
        <label class="form__label" for="shortcut">作品简介：</label>
        <textarea  class="form__input" name="shortcut" rows="8" cols="40"></textarea>
    </div>
    <div class="form__item__image">
        <form action="/uploadImage?targetId={{ formId }}&callback=parent.alert('图片上传成功')" method="post" target='uploadImageIfr' enctype='multipart/form-data'>
            <label class="form__label" for="cover">封面图片：</label>
            <input class="form__input" type="file" name="uploadFile" placeholder="选择本地图片">
            <input type="submit" class="upload__btn tts__btn" value="上传">
        </form>
        <input id="{{ formId }}" type="text" name="coverimage" value="">
    </div>
    <div class="form__item form__item__cover">
        <div class="title">
            浮层设置
        </div>
        <div class="body">
            <div class="body__item">
                <label class="form__label" for="title">视频地址：</label>
                <input class="form__input" type="text" name="title">
                <input type="radio" name="showtype" value="video">
                <label for="showtype">显示此项</label>
            </div>
            <div class="body__item">
                <div class="form__item">
                    <label class="form__label" for="">图文混排：</label>
                    <ul class="info__list">
                        <li class="info__item info__item__vertical current" data-type='vertical'>
                            <div class="info__desc">
                                文案
                            </div>
                            <div class="info__img">
                                配图
                            </div>
                        </li>
                        <li class="info__item info__item__horizontal" data-type='horizontal'>
                            <div class="info__desc">
                                文案
                            </div>
                            <div class="info__img">
                                配图
                            </div>
                        </li>
                    </ul>
                </div>
                <div class="form__item">
                    <label class="form__label" for="infodesc">文案：</label>
                    <textarea  class="form__input" name="infodesc" rows="8" cols="40"></textarea>
                </div>
                <div class="form__item">
                    <label class="form__label" for="infoimg">图片：</label>
                    <input class="form__input" type="file" name="infoimg" placeholder="选择本地图片">
                    <input type="radio" name="showtype" value="info">
                    <label for="showtype">显示此项</label>
                </div>
            </div>
        </div>
    </div>
    <div class="form__item form__item__submit">
        <input type="button" class="tts__btn" value="保存">
    </div>
</div>
