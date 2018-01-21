const gulp = require("gulp");
const tslint = require("gulp-tslint");
const clean = require("gulp-clean");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
const sourcemaps = require('gulp-sourcemaps');

gulp.task("clean", function() {
    return gulp.src("dist/*", {
        read: false
    })
        .pipe(clean());
});

gulp.task("build", function() {
    return tsProject.src()
        .pipe(sourcemaps.init())
        .pipe(tsProject()).js
        .pipe(sourcemaps.write('.', { includeContent: false, sourceRoot: '../src' }))
        .pipe(gulp.dest("dist"));
});
