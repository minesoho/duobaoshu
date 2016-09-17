'use strict';
/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
var passport = require('passport');
var rescode = sails.config.rescode;
module.exports = {
    signin: function(req, res) {
      var name = req.param('name');
      var pwd = req.param('pwd');
      if(!name||!pwd){
        return res.jsonp({
            code: '403',
            msg: '信息不完整'
        });
      }
      User.findOne({
        username: name,
        password: pwd
      }).exec(function(err,user){
        if (err) {
            return res.jsonp({
                code: rescode.error,
                msg: '操作失败，请重试'
            });
        }
        if (!user) {
            return res.jsonp({
                code: rescode.notfound,
                msg: '用户不存在'
            });
        }
        req.session.login = true;
        return res.jsonp({
            code: '100',
            msg: '登录成功'
        });
      });

    },
    signup: function(req,res){
        User.find().exec(function(err,users){
            if(users&&users.length>0){
                return res.json({
                    code: '002',
                    msg: '用户已存在'
                });
            }else{
                var _user = {
                    username: 'admin',
                    password: 'Duobaoshu*2016'
                };
                User.create(_user).exec(function(err,user){
                    if(err){
                        console.log(err);
                        return res.json({
                            code: '500',
                            msg: '数据库错误'
                        });
                    }
                    console.log('用户创建成功');
                });
            }
        });
    }
};
