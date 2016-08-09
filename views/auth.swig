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
        <div class="window">
            <div class="tts__auth">
                <div class="auth__head">
                    管理员登录
                </div>
                <form class="auth__form" action="/signin" method="post">
                    <label for="name">用户名:</label>
                    <input type="text" name="name" placeholder="管理员用户名">
                    <label for="pwd">密码:</label>
                    <input type="text" name="pwd" placeholder="管理员密码">
                    <button type="button" name="submit">登录</button>
                </form>
            </div>
        </div>
    </body>
</html>
