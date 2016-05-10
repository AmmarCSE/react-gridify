import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

const $ = gulpLoadPlugins();

gulp.task('scripts', () => {
  return gulp.src('app/scripts-es6/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.babel({presets: ["es2015", "react"]}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('app/scripts'))
});

gulp.task('default', () => {
});
