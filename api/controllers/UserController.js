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
        // 使用本地验证策略对登录进行验证
        passport.authenticate('local', function(err, user, info) {
            if (err) {
                return res.json({
                    code: rescode.error,
                    msg: '操作失败，请重试'
                });
            }
            if (!user) {
                return res.json({
                    code: rescode.notfound,
                    msg: '用户不存在'
                });
            }
            req.logIn(user, function(err) {
                if (err) {
                    res.json({
                        code: rescode.error,
                        msg: '操作失败，请重试'
                    });
                }
                if (info.code === '100') {
                    req.session.login = true;
                    return res.redirect('/admin');
                } else {
                    res.json({
                        code: rescode.error,
                        msg: '操作失败，请重试'
                    });
                }
            });

        })(req, res);
    }
};
