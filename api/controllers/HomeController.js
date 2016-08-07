'use strict';

var swig = require('swig');

var _mock = require('./mock.json');

module.exports = {
    index: function(req,res){
        let html = swig.renderFile('./views/home.swig',{
            title: "多宝树影视科技",
            data: _mock
        });
        res.send(html);
    }
};
