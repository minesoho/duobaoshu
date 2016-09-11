module.exports = {
    attributes: {
        moduleType: {
            type: 'string',
            unique: true
        },
        title: {
            type: 'string'
        },
        subtitle: {
            type: 'string'
        },
        img: {
            type: 'string'
        },
        desc: {
            type: 'string'
        },
        detail: {
          type: 'object'
        }
    }
};
