'use strict';

module.exports = {
  /**
   * 展示首页大图
   */
  setMain: function(req, res) {
    if (Object.keys(req.params) === 0) {
      return res.jsonp({
        code: '102',
        msg: '参数为空'
      });
    }
    let _module = req.param('module');
    let _data = {};
    req.param('title') && (_data.title = req.param('title'));
    req.param('subtitle') && (_data.subtitle = req.param('subtitle'));
    req.param('desc') && (_data.desc = req.param('desc'));
    req.param('coverImg') && (_data.img = req.param('coverImg'));
    req.param('detail') && (_data.detail = req.param('detail'));

    Main.find({
      moduleType: _module
    }).exec(function(err, items) {
      if (items && items.length !== 0) {
        Main.update({
          moduleType: _module
        }, _data).exec(function(err, updated) {
          if (err) {
            return res.send(err);
          }
          return res.jsonp({
            code: '100',
            msg: '操作成功'
          })
        });
      } else {
        let __data = Object.assign({}, {
          moduleType: _module
        }, _data);
        Main.create(__data).exec(function(err, created) {
          if (err) {
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
  setItem: function(req, res) {
    let _module = req.param('module');
    let _index = req.param('index');
    if (req.param('index')) {
      Item.find({
        index: _index,
        moduleType: _module
      }).exec(function(err, items) {
        if (err) {
          return res.send(err);
        }
        let _data = {};
        req.param('title') && (_data.title = req.param('title'));
        req.param('subtitle') && (_data.subtitle = req.param('subtitle'));
        req.param('desc') && (_data.desc = req.param('desc'));
        req.param('coverImg') && (_data.img = req.param('coverImg'));
        req.param('detail') && (_data.detail = req.param('detail'));

        if (items && items.length !== 0) {
          Item.update({
            index: _index,
            moduleType: _module
          }, _data).exec(function(err, updated) {
            if (err) {
              return res.send(err);
            }
            return res.jsonp({
              code: '100',
              msg: '操作成功'
            })
          });
        } else {
          let __data = Object.assign({}, {
            moduleType: _module,
            index: _index
          }, _data);
          Item.create(__data).exec(function(err, created) {
            if (err) {
              return res.send(err);
            }
            return res.jsonp({
              code: '100',
              msg: '操作成功'
            });
          });
        }
      });
    } else {
      return res.jsonp({
        code: '102',
        msg: '参数为空'
      });
    }
  },
  /**
   * 设置标题/副标题
   */
  setTitles: function(req, res) {
    if (!req.param('title') || !req.param('subtitle')) {
      return res.jsonp({
        code: '102',
        msg: '参数为空'
      });
    }
    let _module = req.param('module');
    let _data = Object.assign({}, {
      title: req.param('title') || '视觉特效',
      subtitle: req.param('subtitle') || 'VFX'
    });

    Page.find({
      name: _module
    }, function(err, page) {
      if (err) {
        return res.send(err);
      }
      if (!page || page.length === 0) {
        Page.create({
          name: _module,
          title: req.param('title') || '视觉特效',
          subtitle: req.param('subtitle') || 'VFX'
        }, function(err, created) {
          if (err) {
            return res.send(err);
          }
          res.jsonp({
            code: '100',
            msg: '操作成功'
          });
        });
      } else {
        Page.update({
          name: _module
        }, {
          title: req.param('title') || '视觉特效',
          subtitle: req.param('subtitle') || 'VFX'
        }, function(err, page) {
          if (err) {
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
  setShowcase: function(req, res) {
    let _id = req.param('id');
    let _moduleType = req.param('module');

    if (_id) {
      Showcase.find({
        id: _id,
        moduleType: _moduleType
      }).exec(function(err, showcase) {
        if (err) {
          return res.send(err);
        }

        if (showcase && showcase.length !== 0) {
          let _data = {};
          req.param('title') && (_data.title = req.param('title'));
          req.param('desc') && (_data.desc = req.param('desc'));
          req.param('coverImg') && (_data.img = req.param('coverImg'));
          req.param('detail') && (_data.detail = req.param('detail'));

          Showcase.update({
            id: _id,
            moduleType: _moduleType
          }, _data).exec(function(err, updated) {
            if (err) {
              return res.jsonp(err);
            }

            return res.jsonp({
              code: '100',
              msg: 'ok',
              data: updated[0]
            });
          });
        } else {
          return res.jsonp({
            code: '404',
            msg: 'not find'
          });
        }
      });
    } else {
      let _data = {};
      _data.moduleType = req.param('module');
      req.param('title') && (_data.title = req.param('title'));
      req.param('desc') && (_data.desc = req.param('desc'));
      req.param('coverImg') && (_data.img = req.param('coverImg'));
      req.param('detail') && (_data.detail = req.param('detail'));

      Showcase.create(_data).exec(function(err, created) {
        if (err) {
          return res.jsonp(err);
        }
        return res.jsonp({
          code: '100',
          msg: '操作成功',
          data: created
        });
      });
    }
  },
  /**
   * 获取弹层展示items
   */
  getShowcases: function(req, res) {
    let _moduleType = req.param('module');
    if (!_moduleType) {
      return res.jsonp({
        code: '404',
        msg: 'not find'
      });
    }
    Showcase.find({
      moduleType: _moduleType
    }).exec(function(err, showcases) {
      if (err) {
        return res.jsonp(err);
      }
      return res.jsonp({
        code: '100',
        msg: '请求成功',
        data: showcases
      });
    })
  },
  /**
   * 删除单个showcase
   */
  deleteShowcase: function(req, res) {
    var _moduleType = req.param('module');
    var _id = req.param('id');
    Showcase.destroy({
      moduleType: _moduleType,
      id: _id
    }).exec(function(err,showcase){
      if (err) {
        return res.jsonp(err);
      }
      return res.jsonp({
        code: '100',
        msg: '请求成功'
      });
    })
  },

  /**
  * 设置文本信息
  */
  setContentModule: function(req,res){
    var _moduleType = req.param('module');
    var _content = req.param('content');
    Context.find({
      moduleType: _moduleType
    }).exec(function(err,data){
      if (err) {
        return res.jsonp(err);
      }
      if(data&&data.length!==0){
        console.log('1')
        Context.update({
          moduleType: _moduleType
        },{
          content: _content
        }).exec(function(err,data){
          if (err) {
            return res.jsonp(err);
          }
          return res.jsonp({
            code: '100',
            msg: '请求成功'
          });
        });
      }else{
        console.log('2')
        Context.create({
          moduleType: _moduleType,
          content: _content
        }).exec(function(err,data){
          if (err) {
            return res.jsonp(err);
          }
          return res.jsonp({
            code: '100',
            msg: '请求成功'
          });
        });
      }
    })
  }
};
