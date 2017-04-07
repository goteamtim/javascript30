var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// Static server
gulp.task('test', function() {
    browserSync.init({
        server: {
            baseDir: "./drumkit"
        }
    });
    
    gulp.watch("/drumkit/*.*").on('change',reload);
});