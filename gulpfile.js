// Gulp
var gulp = require('gulp');

// Dependencies
var concat_json = require("gulp-concat-json");

// Concat JSON
gulp.task('jsonIP', function() {
    return gulp.src("dev/cards/in_progress/*.json")
        .pipe(concat_json("cardsInProgress.json"))
        .pipe(gulp.dest("dist/cards/"));
});

gulp.task('jsonReady', function() {
    return gulp.src("dev/cards/ready/*.json")
        .pipe(concat_json("cardsReady.json"))
        .pipe(gulp.dest("dist/cards/"));
});

// Watch Files For Changes
gulp.task('watch', function() {
    gulp.watch('dev/cards/in_progress/*.json', ['jsonIP']);
    gulp.watch('dev/cards/ready/*.json', ['jsonReady']);
});

// Default Task
gulp.task('default', ['watch', 'jsonIP', 'jsonReady']);
