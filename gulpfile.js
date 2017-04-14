var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Static server
gulp.task('browsersync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    
    //gulp.watch("*.*").on('change',function(){console.log("gulp watched")});  //reload
});

// Default task
gulp.task('default',['browsersync','watch']);
// gulp.task('default', function() {
//     gulp.start('browsersync');
//     gulp.start('watch');
// });

// Watch
gulp.task('watch', function() {

    // Watch .scss files
    gulp.watch('./*.*', reload);

});