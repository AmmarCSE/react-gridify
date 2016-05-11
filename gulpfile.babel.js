import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('scripts', () => {
  return gulp.src('app/scripts-es6/*.js')
    .pipe($.sourcemaps.init())
    .pipe($.babel({presets: ["es2015", "react"]}))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('app/scripts'))
    .pipe(reload({stream: true}));
});

gulp.task('serve', [ 'scripts'], () => {
  browserSync({
    notify: false,
    port: 9000,
    server: {
      baseDir: ['app'],
      routes: {
        '/bower_components': 'bower_components'
      }
    }
  });

  gulp.watch([
    'app/*.html'
  ]).on('change', reload);

  gulp.watch('app/scripts-es6/*.js', ['scripts']);
});

gulp.task('default', () => {
});
