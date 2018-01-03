'use strict';

var config = require('./config');

var $ = require('gulp-load-plugins')();
var _ = require('lodash');
var browserSync = require('browser-sync');
var gulp = require('gulp');
var path = require('path');
var wiredep = require('wiredep').stream;

gulp.task('styles', function() {
  return buildStyles();
});

gulp.task('styles-reload', function() {
  return buildStyles().pipe(browserSync.stream({match: '**/*.css'}));
});

var buildStyles = function() {
  var injectFiles = gulp.src([
    path.join(config.paths.src, '/app/**/' + (config.sass.excludeUnderscored ? '[^_]' : '') + '*.scss'),
    path.join('!' + config.paths.src, '/app/index.scss'),
  ], {read: false});

  var injectOptions = {
    addRootSlash: false,
    transform: function(filePath) {
      filePath = filePath.replace(config.paths.src + '/app/', '');
      return '@import "' + filePath + '";';
    },
    starttag: '// injector',
    endtag: '// endinjector',
  };

  return gulp.src([
    path.join(config.paths.src, '/app/index.scss'),
  ]).
      pipe($.inject(injectFiles, injectOptions)).
      pipe(wiredep(_.extend({}, config.wiredep))).
      pipe($.sourcemaps.init()).
      pipe($.sass(config.sass.options)).
      on('error', config.errorHandler('Sass')).
      pipe($.autoprefixer()).
      on('error', config.errorHandler('Autoprefixer')).
      pipe($.sourcemaps.write('maps')).
      pipe(gulp.dest(path.join(config.paths.tmp, '/serve/app/')));
};
