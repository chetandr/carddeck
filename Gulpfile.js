/**
 * Gulp configuration for Wynward Tech Refresh
 * Defines a set of tasks to
 * 1. Compile react code
 * 2. Compile SASS
 * 3. Maintain Images
 * 
 * @TODO : Add code for testing before compiling
 */
var gulp = require('gulp');
var source = require('vinyl-source-stream'); // Used to stream bundle for further handling
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify'); 
var concat = require('gulp-concat');
var sass = require('gulp-ruby-sass');
var notify = require("gulp-notify");
var bower = require('gulp-bower');
var disc = require('disc');
var jsHint = require('gulp-jshint');
var jsxHint = require('jshint-jsx').JSXHINT;
var map = require('map-stream');
 
// Config paths used in the code.

var config = {
    sourcePath : './src', // The root directory for the source files
    sassPath: './src/sass', // The Directory to read the sass files
    bowerDir: './;', // path to the bower root directory
    imgPath: './src/images/*', // path to the images from source
    bootstrapBase :'./bower_components/bootstrap-sass-official/bootstrap-sass-3.3.6', // include path to the bootstrao sass directory
    fontawesomeBase : './bower_components/fontawesome', // Directory path if fontawesome.
    fontawesomeAnimation : './bower_components/font-awesome-animation/dist', // Directory path if fontawesome.
    build : {
        path : './build', // destination forlder for build.
        jsFie : 'main.js' // file name for the built code
    },
    browserify : {
            paths : ['./src/react/App.js'], // start point for browserify
            debug : true, // Debug option for browserify
            fullpaths : true // Include full paths for debugging
            }
}


// run bower to download the frontend libraries using bower
gulp.task('bower', function() {
    return bower()
        .pipe(gulp.dest(config.bowerDir))
});

// Task to copy all the font files to the respective directories
gulp.task('fonts', function() {
    return gulp.src([config.bootstrapBase + 'assets/fonts/**/*',config.sassPath+'/fonts/**/*'])
        .pipe(gulp.dest(config.build.path+'/fonts'));
})

// Task to copy all the images to the build directory
gulp.task('images', function() {
    return gulp.src(config.imgPath)
        .pipe(gulp.dest(config.build.path+'/images'));
})

// Browserify task to compile react code.
gulp.task('browserify', function() {
   return browserify({
        entries: config.browserify.paths, // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: config.browserify.debug,
        fullPaths: config.browserify.fullpaths
    })
    .bundle()
    .pipe(source(config.build.jsFie))
    .pipe(gulp.dest(config.buildPath+'/js/'));
});


//Task to convert sass to css
gulp.task('css', function() {
  return sass(config.sassPath+'/stylesheets/style.scss',{
            style: 'expanded',
            loadPath: [
                config.bootstrapBase + '/assets/stylesheets',
                config.fontawesomeBase + '/scss',
                config.sassPath,
                config.fontawesomeAnimation
            ]
        })
            .on("error", notify.onError(function (error) {
                return error;
            }))
        .pipe(gulp.dest(config.build.path+'/css'));
});

var myReporter = map(function (file, cb) {
    console.log(file);
  if (!file.jshint.success) {
    console.log('JSHINT fail in '+file.path);
    file.jshint.results.forEach(function (err) {
      if (err) {
        console.log(' '+file.path + ': line ' + err.line + ', col ' + err.character + ', code ' + err.code + ', ' + err.reason);
      }
    });
  }
  cb(null, file);
});


// task to lint JSX code
gulp.task('lint',function(){
    console.log(config.sourcePath+'/react/**/*.js');
    return gulp.src(config.srcPath+'/react/**/*.js')
            .pipe(jsHint({linter: jsxHint}))
            .pipe(myReporter)
    
})

// Just running the two tasks
gulp.task('build', ['images','fonts','css','browserify']);