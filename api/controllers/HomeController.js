'use strict';

var swig = require('swig');
let _ = require('lodash');

var _mock = require('./mock.json');

module.exports = {
    index: function(req,res){
        let locals = null;
        let vfx = {};
        let animation = {};
        let origin = {};

        // More.find().exec(function(err,data){
        //     if(err){
        //         throw err;
        //     }
        //     vfx = _.assign(vfx,{
        //         more: data.vfx
        //     });
        //     animation = _.assign(animation.{
        //         more: data.animation
        //     });
        //     origin = _.assign(origin,{
        //         more: data.origin
        //     });
        // });
        // Main.find().exec(function(err,data){
        //     if(err){
        //         throw err;
        //     }
        //     vfx = _.assign(vfx,{
        //         main: data.vfx
        //     });
        //     animation = _.assign(animation.{
        //         main: data.animation
        //     });
        //     origin = _.assign(origin,{
        //         main: data.origin
        //     });
        // });
        // Item.find().exec(function(err,data){
        //     if(err){
        //         throw err;
        //     }
        //     let vfxItems = data.filter(function(value){
        //         return value.moduleType == 'vfx';
        //     });
        //     let animationItems = data.filter(function(value){
        //         return value.moduleType == 'animation';
        //     });
        //     let originItems = data.filter(function(value){
        //         return value.moduleType == 'origin';
        //     });
        //     vfx = _.assign(vfx,{
        //         list: vfxItems
        //     });
        //     animation = _.assign(animation.{
        //         list: animationItems
        //     });
        //     origin = _.assign(origin,{
        //         list: originItems
        //     });
        // });
        //
        // locals = _.assign({},{
        //     vfx,
        //     animation,
        //     origin
        // });
        locals = _mock;
        let html = swig.renderFile('./views/home.swig',{
            title: "多宝树影视科技",
            data: locals
        });
        res.writeHead(200, {'content-type': 'text/html'});
        res.send(html);
    },
    admin: function(req,res){
        let html = '';
        if(!req.session.login){
            html = swig.renderFile('./views/auth.swig');
        }else{
            html = swig.renderFile('./views/admin.swig');
        }
        res.send(html);
    }
};
