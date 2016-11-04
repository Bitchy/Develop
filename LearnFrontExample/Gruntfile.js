module.exports = function(grunt) {
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    watch: {
        sass: {
            files: ['sass/*.scss','share/sass/*.scss','common/*/*.scss','common/**/*.scss'],
            tasks: ['sass']
        }
    },
    sass: {
        default: {
            files: [
                {
                    expand: true,
                    cwd: 'sass/',
                    src: ['**/style.scss'],
                    dest: 'css/',
                    ext: '.css'
                }
            ]
        }
    }
});
 
  // Plugins
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // Default task(s).
  grunt.registerTask('default', ['sass']);

};
