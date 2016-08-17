(function($,window){
    $('.auth__form').on('click','.form__submit',function(event){
        var _name = $('.form__input__name')[0].value;
        var _pwd = $('.form__input__pwd')[0].value;
        $.ajax({
            url: '/signin',
            data: {
                name: _name,
                pwd: _pwd
            },
            method: 'post',
            dataType: 'jsonp',
            success: function(res){
                if(!res){
                    alert('服务器错误');
                    return;
                }
                if(res.code !== '100'){
                    alert(res.msg);
                }else{
                    window.location.pathname='/admin'
                }
            }
        })
    });
})(jQuery,window);
