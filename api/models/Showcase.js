module.exports = {
  attributes: {
    moduleType: {
      type: 'string'
    },
    title: {
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
