// pnpm i --save hulp gulp-sourcemaps gulp-babel gulp-concat @babel/core @babel/preset-env
// pnpm install --save-dev @babel/plugin-transform-runtime
// pnpm install --save @babel/runtime
// pnpm install node-sass gulp-sass --save-dev
const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
var pug = require('gulp-pug');
sass.compiler = require('node-sass');

gulp.task('default', function () {
  gulp.parallel('nodejs','publicjs','sass','views')();
  gulp.watch("src/**/*.js",   gulp.parallel(['nodejs']  ));
  gulp.watch("public/**/*.js",   gulp.parallel(['publicjs']  ));
  gulp.watch('public/**/*.scss', gulp.parallel(['sass']));
  gulp.watch('public/**/*.pug', gulp.parallel(['views']));
});

gulp.task('nodejs', () =>
    gulp.src('src/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env'],
            plugins: ['@babel/transform-runtime']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist'))
);
gulp.task('publicjs', () =>
    gulp.src('public/**/*.js')
        .pipe(sourcemaps.init())
        .pipe(babel({
            presets: ['@babel/env'],
            plugins: ['@babel/transform-runtime']
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest('dist/rendered'))
);
gulp.task('sass', function () {
  return gulp.src('public/**/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest('dist/rendered'));
});
gulp.task('views', function buildHTML() {
  return gulp.src('public/**/*.pug')
  .pipe(pug({
    // Your options in here.
  }))
  .pipe(gulp.dest('dist/rendered'));
});