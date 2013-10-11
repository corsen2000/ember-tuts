module.exports = function(grunt) {

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-ember-templates');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        emberTemplates: {
            options: {
                templateBasePath: /templates\//
            },
            compile: {
                files: {
                    "js/templates.js": "templates/*.hbs"
                }
            }
        },
        watch: {
            emberTemplates: {
                files: 'templates/**/*.hbs',
                tasks: ['emberTemplates']
            }
        }
    });

    grunt.registerTask('default', ['emberTemplates']);

};