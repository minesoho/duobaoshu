module.exports = {
    attributes: {
        moduleType: {
            type: 'string',
            unique: true
        },
        title: {
            type: 'string',
            defaultsTo: '更多特效'
        },
        subtitle: {
            type: 'string',
            defaultsTo: 'VFX'
        },
        more: {
            type: 'boolean',
            defaultsTo: true
        }
    }
};
