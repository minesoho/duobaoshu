'use strict';

module.exports = {
    /**
     * 展示首页大图
     */
    setMain: function(req,res){
      if(Object.keys(req.params)===0){
        return res.jsonp({
            code: '102',
            msg: '参数为空'
        });
      }
      let _module = req.param('module');
      let _data = {};
      req.param('title')&&(_data.title = req.param('title'));
      req.param('subtitle')&&(_data.subtitle = req.param('subtitle'));
      req.param('desc')&&(_data.desc = req.param('desc'));
      req.param('coverImg')&&(_data.img = req.param('coverImg'));
      req.param('detail')&&(_data.detail = req.param('detail'));

      Main.find({
        moduleType: _module
      }).exec(function(err,items){
        if(items&&items.length!==0){
          Main.update({
            moduleType: _module
          },_data).exec(function(err,updated){
            if(err){
              return res.send(err);
            }
            return res.jsonp({
              code: '100',
              msg: '操作成功'
            })
          });
        }else{
          let __data = Object.assign({},{
            moduleType: _module
          },_data);
          Main.create(__data).exec(function(err,created){
            if(err){
              return res.send(err);
            }
            return res.jsonp({
              code: '100',
              msg: '操作成功'
            });
          });
        }
      });
    },
    /**
     * 展示首页展示普通item
     */
    setItem: function(req,res){
      let _module = req.param('module');
      let _index = req.param('index');
      if(req.param('index')){
        Item.find({
          index: _index,
          moduleType: _module
        }).exec(function(err,items){
          if(err){
            return res.send(err);
          }
          let _data = {};
          req.param('title')&&(_data.title = req.param('title'));
          req.param('subtitle')&&(_data.subtitle = req.param('subtitle'));
          req.param('desc')&&(_data.desc = req.param('desc'));
          req.param('coverImg')&&(_data.img = req.param('coverImg'));
          req.param('detail')&&(_data.detail = req.param('detail'));

          if(items&&items.length!==0){
            Item.update({
              index: _index,
              moduleType: _module
            },_data).exec(function(err,updated){
              if(err){
                return res.send(err);
              }
              return res.jsonp({
                code: '100',
                msg: '操作成功'
              })
            });
          }else{
            let __data = Object.assign({},{
              moduleType: _module,
              index: _index
            },_data);
            Item.create(__data).exec(function(err,created){
              if(err){
                return res.send(err);
              }
              return res.jsonp({
                code: '100',
                msg: '操作成功'
              });
            });
          }
        });
      }else{
        return res.jsonp({
            code: '102',
            msg: '参数为空'
        });
      }
    },
    /**
     * 设置标题/副标题
     */
    setTitles: function(req,res){
        if(!req.param('title')||!req.param('subtitle')){
            return res.jsonp({
                code: '102',
                msg: '参数为空'
            });
        }
        let _module = req.param('module');
        let _data = Object.assign({},{
            title: req.param('title')||'视觉特效',
            subtitle: req.param('subtitle')|| 'VFX'
        });

        Page.find({
            name: _module
        },function(err,page){
            if(err){
                return res.send(err);
            }
            if(!page||page.length===0){
                Page.create({
                    name: _module,
                    title: req.param('title')||'视觉特效',
                    subtitle: req.param('subtitle')||'VFX'
                },function(err,created){
                    if(err){
                        return res.send(err);
                    }
                    res.jsonp({
                        code: '100',
                        msg: '操作成功'
                    });
                });
            }else{
                Page.update({
                    name: _module
                },{
                    title: req.param('title')||'视觉特效',
                    subtitle: req.param('subtitle')||'VFX'
                },function(err,page){
                    if(err){
                        return res.send(err);
                    }
                    res.jsonp({
                        code: '100',
                        msg: '操作成功'
                    });
                });
            }
        });
    },
    /**
     * 设置弹层展示item
     */
    setShowcase: function(req,res){
      if(req.param('id')){
        Showcase.find({
          id: req.param('id')
        }).exec(function(err,showcase){
          if(err){
            return res.send(err);
          }
          let _data = Object.assign({},req.params);

          if(showcase&&showcase.length!==0){
            Showcase.update({
              id: req.param('id')
            },_data).exec(function(err,updated){
              if(err){
                  return res.send(err);
              }
              res.jsonp({
                  code: '100',
                  msg: '操作成功'
              });
            });
          }else{
            let __data = Object.assign({
              moduleType: 'vfx'
            },_data);
            Showcase.create(__data).exec(function(err,created){
              if(err){
                  return res.send(err);
              }
              res.jsonp({
                  code: '100',
                  msg: '操作成功'
              });
            });
          }
        });
      }
    },
    /**
     * 获取弹层展示items
     */
    getShowcases: function(req,res){
      let _limit = 20;
      let _page = req.param('page')||0;
      Showcase.find({
        moduleType: 'vfx'
      }).skip(_limit*_page).exec(function(err,showcases){
        if(err){
            return res.send(err);
        }
        return res.json({
          code: '100',
          msg: '请求成功',
          data: showcases
        });
      })
    }
};
