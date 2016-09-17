'use strict';

let swig = require('swig');
let _ = require('lodash');

let _mock = require('./mock.json');

module.exports = {
    index: function(req,res){
        let locals = {};
        let vfx = {
          more: null,
          main: null,
          list:[],
          showcases: []
        };
        let animation = {
          more: null,
          main: null,
          list:[],
          showcases: []
        };
        let origin = {
          more: null,
          main: null,
          list:[],
          showcases: []
        };


        Page.find().exec(function(err,data){
            if(err){
                throw err;
            }
            for(let i=0,len=data.length;i<len;i++){
              switch (data[i].name) {
                case 'vfx':
                    vfx.more= {
                      title: data[i].title,
                      subtitle: data[i].subtitle
                    }
                  break;
                case 'animation':
                    animation.more= {
                      title: data[i].title,
                      subtitle: data[i].subtitle
                    }
                  break;
                case 'origin':
                    origin.more= {
                      title: data[i].title,
                      subtitle: data[i].subtitle
                    }
                  break;
                default:
                  break;
              }
            }
            Main.find().exec(function(err,data){
                if(err){
                    throw err;
                }
                data.forEach(function(value){
                  switch (value.moduleType) {
                    case 'vfx':
                      vfx = Object.assign(vfx,{
                          main: value
                      });
                      break;
                    case 'animation':
                      animation = Object.assign(animation,{
                          main: value
                      });
                      break;
                    case 'origin':
                      origin = Object.assign(origin,{
                          main: value
                      });
                      break;
                    default:
                      break;
                  }
                });
                Item.find().exec(function(err,data){
                    if(err){
                        throw err;
                    }
                    data.forEach(function(value){
                      switch (value.moduleType) {
                        case 'vfx':
                          vfx.list.push(value);
                          break;
                        case 'animation':
                          animation.list.push(value);
                          break;
                        case 'origin':
                          origin.list.push(value);
                          break;
                        default:
                      }
                    });
                    Showcase.find().exec(function(err,data){
                      if(err){
                          throw err;
                      }
                      data.forEach(function(value){
                        switch (value.moduleType) {
                          case 'vfx':
                            vfx.showcases.push(value);
                            break;
                          case 'animation':
                            animation.showcases.push(value);
                            break;
                          case 'origin':
                            origin.showcases.push(value);
                            break;
                          default:
                        }
                      });
                      Context.find().exec(function(err,data){
                        if(err){
                            throw err;
                        }
                        data.forEach(function(value){
                          locals[value.moduleType]={
                            desc: value.content
                          };
                        });
                        locals = Object.assign({},locals,{
                          vfx: vfx,
                          animation: animation,
                          origin: origin
                        });
                        // locals = _mock;
                        for(let key in locals){
                            if(locals[key].list&&locals[key].list.length < 3){
                                for(let i=0,len=3-locals[key].list.length;i<len;i++){
                                    locals[key].list.push({
                                        img:'/images/blank.jpg',
                                        blank: true
                                    });
                                }
                            }
                            if(!locals[key].main||!locals[key].main.img){
                              locals[key].main = {
                                img:'/images/blank.jpg',
                                blank: true
                              }
                            }
                        }
                        let html = swig.renderFile('./views/home.swig',{
                            title: "多宝树影视科技",
                            data: locals
                        });
                        return res.send(html);
                      });

                    });
                });
            });
        });
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
