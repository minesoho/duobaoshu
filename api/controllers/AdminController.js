'use strict';

module.exports = {
    /************* vfx ***************/
    setVfxMain: function(req,res){
        // let _main = req.
    },
    setVfxItems: function(req,res){},
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
    createVfxItem: function(){},
    updateVfxItem: function(){},
    createVfxMain: function(){},
    updateVfxMain: function(){},

    /************* animation ***************/
    setAnimationMain: function(req,res){},
    setAnimationItems: function(req,res){},
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
    },
    createAnimationItem: function(){},
    updateAnimationItem: function(){},
    createAnimationMain: function(){},
    updateAnimationMain: function(){},
    /************* origin ***************/
    setOriginMain: function(req,res){},
    setOriginItems: function(req,res){},
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
    },
    createOriginItem: function(){},
    updateOriginItem: function(){},
    createOriginMain: function(){},
    updateOriginMain: function(){}
};
