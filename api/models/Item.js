module.exports = {
    attributes: {
        moduleType: {
            type: 'string'
        },
        index: {
            type: 'integer'
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
            type: 'object',
            // defaultTo: {
            //     type: '', //video OR info
            // }
        }
    }
};
