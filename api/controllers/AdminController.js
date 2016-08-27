'use strict';

module.exports = {
    /************* vfx ***************/
    setVfxMain: function(req,res){
      if(Object.keys(req.params)===0){
        return res.jsonp({
            code: '102',
            msg: '参数为空'
        });
      }
      let _data = {};
      req.param('title')&&(_data.title = req.param('title'));
      req.param('subtitle')&&(_data.subtitle = req.param('subtitle'));
      req.param('desc')&&(_data.desc = req.param('desc'));

      Main.find({
        moduleType: 'vfx'
      }).exec(function(err,items){
        if(items&&items.length!==0){
          Main.update({
            moduleType: 'vfx'
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
            moduleType: 'vfx'
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
    setVfxItem: function(req,res){
      if(req.param('index')){
        Item.find({
          index: req.param('index'),
          moduleType: 'vfx'
        }).exec(function(err,items){
          if(err){
            return res.send(err);
          }
          let _data = Object.assign({},req.params);

          if(items&&items.length!==0){
            Item.update({
              index: req.param('index'),
              moduleType: 'vfx'
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
              moduleType: 'vfx',
              index: req.param('index')
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
    setVfxTitles: function(req,res){
        if(!req.param('title')||!req.param('subtitle')){
            return res.jsonp({
                code: '102',
                msg: '参数为空'
            });
        }
        let _data = Object.assign({},{
            title: req.param('title')||'视觉特效',
            subtitle: req.param('subtitle')|| 'VFX'
        });

        Page.find({
            name: 'vfx'
        },function(err,page){
            if(err){
                return res.send(err);
            }
            if(!page||page.length===0){
                Page.create({
                    name: 'vfx',
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
                    name: 'vfx'
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
    setVfxShowcase: function(req,res){
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

    getVfxShowcases: function(req,res){
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
    },

    /************* animation ***************/
    setAnimationMain: function(req,res){},
    setAnimationItem: function(req,res){},
    setAnimationTitles: function(req,res){
        if(!req.param('title')||!req.param('subtitle')){
            return res.jsonp({
                code: '102',
                msg: '参数为空'
            });
        }
        let _data = Object.assign({},{
            title: req.param('title')||'视觉特效',
            subtitle: req.param('subtitle')|| 'VFX'
        });

        Page.find({
            name: 'animation'
        },function(err,page){
            if(err){
                return res.send(err);
            }
            if(!page||page.length===0){
                Page.create({
                    name: 'animation',
                    title: req.param('title')||'动画作品',
                    subtitle: req.param('subtitle')||'ANIMATION'
                },function(err,created){
                    if(err){
                        return res.send(err);
                    }
                    res.jsonp({
                        code: '100',
                        msg: '操作成功'
                    })
                });
            }
        });
    },

    /************* origin ***************/
    setOriginMain: function(req,res){},
    setOriginItem: function(req,res){},
    setOriginTitles: function(req,res){
        if(!req.param('title')||!req.param('subtitle')){
            return res.jsonp({
                code: '102',
                msg: '参数为空'
            });
        }
        let _data = Object.assign({},{
            title: req.param('title')||'视觉特效',
            subtitle: req.param('subtitle')|| 'VFX'
        });

        Page.find({
            name: 'origin'
        },function(err,page){
            if(err){
                return res.send(err);
            }
            if(!page||page.length===0){
                Page.create({
                    name: 'origin',
                    title: req.param('title')||'视觉特效',
                    subtitle: req.param('subtitle')||'VFX'
                },function(err,created){
                    if(err){
                        return res.send(err);
                    }
                    res.jsonp({
                        code: '100',
                        msg: '操作成功'
                    })
                });
            }
        });
    }
};
