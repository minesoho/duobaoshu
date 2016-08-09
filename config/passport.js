var passport = require('passport'),
  LocalStragegy = require('passport-local').Strategy,
  bcrypt = require('bcryptjs');

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findOne({
    id: id
  }, function(err, user) {
    done(err, user);
  });
});

passport.use(new LocalStragegy({
    usernameField: 'signname',
    passwordField: 'password'
  },
  function(signname, password, done) {
    var reg_isemail = /[@]/;
    var _user = {};
    if (reg_isemail.test(signname)) {
      _user = {
        email: signname
      };
    } else {
      _user = {
        authname: signname
      };
    }
    User.findOne(_user, function(err, user) {
      if (err) {
        return done(err);
      }
      if (!user) {
        return done(null, false, {
          msg: '用户不存在'
        });
      }
      bcrypt.compare(password, user.password, function(err, res) {
        if (!res) {
          return done(null, false, {
            msg: '密码不正确'
          });
        }

        var returnUser = {
          nickname: user.nickname,
          createdAt: user.createdAt,
          id: user.id
        };

        return done(null, returnUser, {
          code: '100',
          msg: 'Logged In Successfully'
        });
      });
    });
  }
));
