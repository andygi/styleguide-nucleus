module.exports = function (grunt) {

    const sass = require('node-sass');

    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        sass: {
            dev: {
                options: {
                    implementation: sass,
                    sourceMap: true,
                    sourceComments: "map"
                },
                files: {
                    "css/test-cms.css": "sass/test-cms.scss",
                    "css/sizeguide.css": "sass/sizeguide.scss"
                }
            },
            dist: {
                options: {
                    implementation: sass,
                    sourceMap: true,
                    outputStyle: "compressed",
                },
                files: {
                    "css/test-cms.css": "sass/test-cms.scss",
                    "css/sizeguide.css": "sass/sizeguide.scss"
                }
            }
        },
        run: {
            tool: {
                cmd: "nucleus",
            }
        },
        clean: ["css/styles.css"],
        watch: {
            css: {
                files: ["sass/**/*.scss"],
                tasks: ["sass:dev", "clean", "run:tool"]
            }
        }
    });

    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-sass");
    grunt.loadNpmTasks("grunt-contrib-cssmin");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-run");

    grunt.registerTask("prod", ["sass:dist", "clean", "run:tool"]);
    grunt.registerTask("default", ["sass:dev", "clean", "run:tool"]);
}