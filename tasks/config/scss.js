module.exports = function(grunt) {

  grunt.config.set('scss', {
    dev: {
      files: [{
        expand: true,
        cwd: 'assets/styles/',
        src: ['home.scss','admin.scss'],
        dest: '.tmp/public/styles/',
        ext: '.css'
      }]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-scss');
};
