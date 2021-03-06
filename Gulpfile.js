var gulp = require('gulp')
  , jshint = require('gulp-jshint')
  , nodemon = require('./index')

// gulp.task('test', function () {
//   gulp.src('./test/*-test.js')
//     .pipe(jshint({ asi: true, laxcomma: true }))
//     .pipe(mocha({ ui: 'bdd' }))
// })

gulp.task('lint', function () {
  gulp.src('./*/**.js')
    .pipe(jshint())
})

gulp.task('test', ['lint'], function () {
  nodemon({
      script: './test/server.js'
    , verbose: true
    , env: {
        'NODE_ENV': 'development'
      }
    , watch: './'
    , ext: 'js coffee'
    // , nodeArgs: ['--debug']
    })
    .on('restart', 'lint')
})
