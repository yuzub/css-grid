var gulp = require('gulp');
var browserSync = require('browser-sync').create();
gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './src'
    }
  });

  gulp.watch(['./src/*.html', './src/css/*.css']).on('change', browserSync.reload);
});