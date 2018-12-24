const gulp = require('gulp')
const gulpWebpack = require('gulp-webpack')
const webpack     = require('webpack')
const webpackConfig = require('./webpack.dev.js')
const nodemon     = require('gulp-nodemon')
const del         = require('del')
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
gulp.task('server', function() {
    return nodemon({
        script: 'index.js',
        watch : [ 'server'],
        ext: 'js jsx',
        ignore: [ 'node_modules', 'dist'],
        nodeArgs: [ '--inspect' ]
      })
      .on('start', function(){
        console.log('staring')
      })
      .on('restart', function(){
        console.log('restarted')
      })
})


gulp.task('default',["clean","watch",'webpack',"server" ])