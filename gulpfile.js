var gulp = require('gulp');
var gls = require('gulp-live-server');
var ts = require('gulp-typescript');

gulp.task('server', ['build'], function () {
  var server = gls.new('.tmp/app.js');
  server.start();
});

gulp.task('build', function () {
  var tsResult = gulp.src(['typings/tsd.d.ts','server/**/*ts'])
    .pipe(ts({
      sortOutput: true,
      module: 'commonjs'
    }));
  return tsResult.js.pipe(gulp.dest('.tmp/'));
});
