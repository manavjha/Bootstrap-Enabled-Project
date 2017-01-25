/**
 * Created by keshav on 18/01/2017.
 */

module.exports = function(grunt){
    /*grunt.registerTask("default", "", function(){
     grunt.log.write("This grunt task is pointless.");
     });*/
    /* configure main project settings*/
    /*grunt.initConfig({
     // Basic settings and info about our plugins
     pkg: grunt.file.readJSON('package.json'),
     // Name of plugin (plugin name without the "grunt-contrib-")
     cssmin: {
     combine: {
     files: {
     'public/css/grunt-test.min.css': ['public/css/common.css', 'public/css/form.css']
     }
     }
     },
     // css concatenation
     
     // Uglify
     uglify: {
     dist: {
     files: {
     'public/js/grunt-test.min.js':['public/js/common.js']
     }
     }
     }
     });*/
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        // conacat js files
        concat: {
            js: {
                files: {
                    'public/js/loan-pages.js': ['public/js/devsource/1.10.2-jquery-ui.js', 'public/js/devsource/autoNumeric.js', 'public/js/devsource/jquery.validate.js', 'public/js/devsource/jquery.multiselect.js', 'public/js/devsource/common_form.js'],
                    'public/js/wish-pages.js': ['public/js/devsource/modernizr.custom.js', 'public/js/devsource/common.js', 'public/js/devsource/classie.js', 'public/js/devsource/flexslider.js', 'public/js/devsource/rangeslider.js', 'public/js/devsource/wish-result-common.js', 'public/js/devsource/latest-posts.js', 'public/js/devsource/fbshare.js', 'public/js/devsource/1.10.2-jquery-ui.js'],
                    'public/js/base-jquery-bootstrap.js': ['public/js/devsource/jquery-2.2.2.js', 'public/js/devsource/bootstrap.js', 'public/js/devsource/wish-acc-modal.js'],
                    'public/js/home-pages.js': ['public/js/devsource/jqueryselect.js', 'public/js/devsource/popular-posts.js', 'public/js/devsource/home.js'],
                    'public/js/wish-account-page.js': ['public/js/devsource/flexslider.js', 'public/js/devsource/wish-result-common.js', 'public/js/devsource/track.js', 'public/js/devsource/fbshare.js'],
                },
                options:{
                    separator: ';'
                }
            },
            css:{
                files: {
                    'public/css/wish-home.css': ['public/css/devsourcecss/bootstrap.css', 'public/css/devsourcecss/wishfin-main.css', 'public/css/devsourcecss/wishfin-main-mobile.css', 'public/css/devsourcecss/font-awesome.4.6.3.css'],
                    'public/css/wish-inner-style.css': ['public/css/devsourcecss/inner_page.css', 'public/css/devsourcecss/inner_page_mobile.css', ],
                    'public/css/wish-pages-style.css': ['public/css/devsourcecss/wish-custom-styles.css', 'public/css/devsourcecss/bootstrap-theme.css', 'public/css/devsourcecss/common.css' ],
                    'public/css/loan-pages-style.css': ['public/css/devsourcecss/inner_page.css', 'public/css/devsourcecss/jquery-ui.css', 'public/css/devsourcecss/inner_page_mobile.css', 'public/css/devsourcecss/jquery.multiselect.css', 'public/css/devsourcecss/form.css', 'public/css/devsourcecss/wish-custom-styles.css' ],
                    'public/css/hl-page-style.css': ['public/css/devsourcecss/wish-custom-styles.css', 'public/css/devsourcecss/inner_page.css', 'public/css/devsourcecss/jquery-ui.css', 'public/css/devsourcecss/inner_page_mobile.css', 'public/css/devsourcecss/jquery.multiselect.css', 'public/css/devsourcecss/form.css' ],
                    'public/css/wish-account-style.css': ['public/css/devsourcecss/bootstrap-theme.css', 'public/css/devsourcecss/wishfin-main.css', 'public/css/devsourcecss/inner_page.css', 'public/css/devsourcecss/wish-custom-styles.css', 'public/css/devsourcecss/wishfin-main-mobile.css' ],
                    'public/css/404-style.css': ['public/css/devsourcecss/404-style.css'],
                }
            }
        },
        // grunt-contrib-cssmin css minification
        cssmin: {
            combine: {
                files: {
                    'public/css/wish-home.min.css': ['public/css/devsourcecss/bootstrap.css', 'public/css/devsourcecss/wishfin-main.css', 'public/css/devsourcecss/wishfin-main-mobile.css', 'public/css/devsourcecss/font-awesome.4.6.3.css'],
                    'public/css/wish-inner-style.min.css': ['public/css/devsourcecss/inner_page.css', 'public/css/devsourcecss/inner_page_mobile.css', ],
                    'public/css/wish-pages-style.min.css': ['public/css/devsourcecss/wish-custom-styles.css', 'public/css/devsourcecss/bootstrap-theme.css', 'public/css/devsourcecss/common.css' ],
                    'public/css/loan-pages-style.min.css': ['public/css/devsourcecss/inner_page.css', 'public/css/devsourcecss/jquery-ui.css', 'public/css/devsourcecss/inner_page_mobile.css', 'public/css/devsourcecss/jquery.multiselect.css', 'public/css/devsourcecss/form.css', 'public/css/devsourcecss/wish-custom-styles.css' ],
                    'public/css/hl-page-style.min.css': ['public/css/devsourcecss/wish-custom-styles.css', 'public/css/devsourcecss/inner_page.css', 'public/css/devsourcecss/jquery-ui.css', 'public/css/devsourcecss/inner_page_mobile.css', 'public/css/devsourcecss/jquery.multiselect.css', 'public/css/devsourcecss/form.css' ],
                    'public/css/wish-account-style.min.css': ['public/css/devsourcecss/bootstrap-theme.css', 'public/css/devsourcecss/wishfin-main.css', 'public/css/devsourcecss/inner_page.css', 'public/css/devsourcecss/wish-custom-styles.css', 'public/css/devsourcecss/wishfin-main-mobile.css' ],
                    'public/css/result.min.css': ['public/css/result.css'],
                    'public/css/404-style.min.css': ['public/css/devsourcecss/404-style.css'],
                }
            }
        },
        // grunt-contrib-uglify js minification
        uglify: {
            dist: {
                files: {
                    'public/js/loan-pages.min.js': ['public/js/devsource/1.10.2-jquery-ui.js', 'public/js/devsource/autoNumeric.js', 'public/js/devsource/jquery.validate.js', 'public/js/devsource/jquery.multiselect.js', 'public/js/devsource/common_form.js'],
                    'public/js/wish-pages.min.js': ['public/js/devsource/modernizr.custom.js', 'public/js/devsource/common.js', 'public/js/devsource/classie.js', 'public/js/devsource/flexslider.js', 'public/js/devsource/rangeslider.js', 'public/js/devsource/wish-result-common.js', 'public/js/devsource/latest-posts.js', 'public/js/devsource/fbshare.js'],
                    'public/js/base-jquery-bootstrap.min.js': ['public/js/devsource/jquery-2.2.2.js', 'public/js/devsource/bootstrap.js', 'public/js/devsource/wish-acc-modal.js'],
                    'public/js/home-pages.min.js': ['public/js/devsource/jqueryselect.js', 'public/js/devsource/popular-posts.js', 'public/js/devsource/home.js'],
                    'public/js/wish-account-page.min.js': ['public/js/devsource/flexslider.js', 'public/js/devsource/wish-result-common.js', 'public/js/devsource/track.js', 'public/js/devsource/fbshare.js'],
                    'public/js/nav.min.js': ['public/js/nav.js'],
                }
            }
        }
    });
    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    // Do the task
    // grunt.registerTask('default', ['concat']);
    grunt.registerTask('default', ['cssmin', 'uglify', 'concat']);
};

