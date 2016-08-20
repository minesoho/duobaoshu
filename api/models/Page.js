module.exports = {
    attributes: {
        name: {
            type: 'string',
            required: true,
            unique: true
        },
        title: {
            type: 'string'
        },
        subtitle: {
            type: 'string'
        }
    }
};
