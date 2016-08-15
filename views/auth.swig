<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
        <title>多宝树影视科技-管理员登录</title>
        <link rel="stylesheet" href="/styles/auth.css">
        <script src="/js/libs/jquery.min.js"></script>
    </head>
    <body>
        <div class="bak__cover"></div>
        <div class="window">
            <div class="tts__auth">
                <div class="auth__logo">
                    <img src="/images/logo.png" alt="多宝树影视科技" />
                </div>
                <div class="auth__head">
                    管理员登录
                </div>
                <form class="auth__form" action="/signin" method="post">
                    <div class="form__item form__item__name">
                        <label class="form__label form__label__name" for="name">用户名：</label>
                        <input type="text" class="form__input form__input__name" name="name" placeholder="管理员用户名">
                    </div>
                    <div class="form__item form__item__pwd">
                        <label class="form__label form__label__pwd" for="pwd">密&nbsp;&nbsp;&nbsp;&nbsp;码：</label>
                        <input type="text" class="form__input form__input__pwd" name="pwd" placeholder="管理员密码">
                    </div>
                    <div class="form__item form__item__submit">
                        <button class="form__submit" type="button" name="submit">登录</button>
                    </div>
                </form>
            </div>
        </div>
    </body>
</html>
