const del           = require('del')
const gulp          = require('gulp')
const chalk         = require('chalk');
const symbols       = require('log-symbols');
const webpack       = require('webpack')
const nodemon       = require('gulp-nodemon')
const gulpWebpack   = require('gulp-webpack')
const browserSync   = require('browser-sync').create()
const webpackConfig = require('./webpack.dev.js')
gulp.task('webpack', function(){
    webpackConfig.watch = true;
    gulp.src('./client/index.js')
    .pipe(gulpWebpack(webpackConfig,webpack))
    .pipe(gulp.dest('./dist'))
})

gulp.task('watch', function(){
  gulp.watch('client/**/*', ['clean:js'])
})

gulp.task('clean', function() {
  del([
    './dist/**/*'
  ])
})

gulp.task('clean:js', function() {
  del([
    './dist/*.js',
    './dist/*.json'
  ])
})

gulp.task('nodemon', function() {
    return nodemon({
        script: 'index.js',
        watch : ['server'],
        ext: 'js jsx',
        ignore: [ 'node_modules', 'dist', 'client'],
        nodeArgs: [ '--inspect' ]
      })
      .on('start', function(){
        console.log(symbols.info,chalk.rgb(255,0,0).bold('Started'));
      })
      .on('restart', function(){
        console.log(symbols.info,chalk.rgb(255,0,0).bold('ReStarted'));
      })
})

gulp.task('server', ['nodemon'], function(){
  browserSync.init({
    proxy: `http://localhost:8080`,
    port: 3000
  });
});

gulp.task('default',["clean","watch",'webpack',"server" ])