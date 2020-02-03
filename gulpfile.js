const gulp = require("gulp");
const jshint = require("gulp-jshint");
const sass = require("gulp-sass");
const sourcemaps = require("gulp-sourcemaps");

gulp.task("jshint", function() {
    return gulp.src("js/*.js")
        .pipe(jshint())
        .pipe(jshint.reporter("default"))
});

gulp.task("sass", function () {
    return gulp.src("scss/style.scss")
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'expanded',
        }).on("error", sass.logError))
        .pipe(sourcemaps.write())
        .pipe(gulp.dest("css"))
});

gulp.task("watch", function() {
    gulp.watch("scss/**/*.scss", gulp.series("sass"));
});