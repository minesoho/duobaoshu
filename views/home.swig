<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no">
        <title>{{ title }}</title>
        <link rel="stylesheet" href="/styles/home.css">
        <script src="/js/libs/jquery.min.js"></script>
    </head>
    <body>
        <div class="bak__cover"></div>
        <script src="js/common/resize.js"></script>
        <div class="window">
            {%include "./part/header/index.swig"%}
            {%include "./part/home/main.swig" with data%}
        </div>
        <script src="/js/main.home.js" charset="utf-8"></script>
    </body>
</html>
