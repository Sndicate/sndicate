/**
 * Sndicate development tasks
 */

module.exports = function(grunt) {

  // Time our tasks and no more loadGruntTask'ing
  require('time-grunt')(grunt);
  require('load-grunt-tasks')(grunt);

  // Initialize Grunt config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    app: {
      core: 'core',
      dist: 'dist',
      docs: 'docs',
      public: 'core/public',
      vendor: 'core/public/vendor',
      codename: 'Plastic Icicle'
    },

    // watch files, run tasks on changes
    watch: {
      options: {
        reload: true
      },
      core: {
        files: ['<%= app.core %>/**/*.js'],
        tasks: ['jshint:core']
      },
      config: {
        files: ['Gruntfile.js'],
        tasks: ['jshint:config']
      }
    },

    // local server
    express: {
      dev: {
        options: {
          script: '<%= app.core %>/index.js'
        }
      }
    },

    // jshint
    jshint: {
      core: ['<%= app.core %>/**/*.js'],
      config: ['Gruntfile.js']
    },

    // warn about todo's
    todos: {
      options: {
        verbose: false
      },
      src: ['README.md', 'Gruntfile.js', '<%= app.core %>/**/*.{js,html,css,less}']
    }
  });

  // Register default task (develop task)
  grunt.registerTask('default', ['develop']);

  // Develop task
  grunt.registerTask('develop', [
    'express',
    'watch'
    ]);
};