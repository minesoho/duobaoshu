'use strict';

var swig = require('swig');

module.exports = {
    index: function(req,res){
        let html = swig.renderFile('./views/home.swig',{
            title: "多宝树影视科技"
        });
        res.send(html);
    }
};
