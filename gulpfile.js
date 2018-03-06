var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');

//1.定义路径
var app = {
    srcPath: 'src/',
    prdPath: 'dist/'
};

gulp.task('html', function () {
    gulp.src(app.srcPath + '**/*.html')
        .pipe(gulp.dest(app.prdPath))
        .pipe($.connect.reload());
});

gulp.task('publicJs', function () {
    gulp.src(app.srcPath + 'public/**/*.js')
        .pipe($.uglify())
        .pipe(gulp.dest(app.prdPath + 'public'))
        .pipe($.connect.reload());
});

gulp.task('publicCss', function () {
    gulp.src(app.srcPath + 'public/**/*.less')
        .pipe($.less())
        .pipe($.cssmin())
        .pipe(gulp.dest(app.prdPath + 'public'))
        .pipe($.connect.reload());
});

gulp.task('img', function () {
    gulp.src(app.srcPath + 'img/**/*')
        .pipe($.imagemin())
        .pipe(gulp.dest(app.prdPath + 'img'))
        .pipe($.connect.reload());
});

gulp.task('less', function () {
    gulp.src(app.srcPath + 'str/**/*.less')
        .pipe($.less())
        .pipe($.cssmin())
        .pipe(gulp.dest(app.prdPath + 'str'))
        .pipe($.connect.reload());
});

gulp.task('js', function () {
    gulp.src(app.srcPath + 'str/**/*.js')
        .pipe($.uglify())
        .pipe(gulp.dest(app.prdPath + 'str'))
        .pipe($.connect.reload());
});

gulp.task('build', ['html', 'less', 'js', 'publicJs', 'publicCss', 'img']);

gulp.task('serve', ['build'], function () {
    $.connect.server({
        root: [app.srcPath],
        livereload: true,
        port: 1234
    });
    open('http://localhost:1234');

    gulp.watch(app.srcPath + '**/*.html', ['html']);
    gulp.watch(app.srcPath + 'str/**/*.less', ['less']);
    gulp.watch(app.srcPath + 'str/**/*.js', ['js']);
    gulp.watch(app.srcPath + 'public/**/*.js', ['publicJs']);
    gulp.watch(app.srcPath + 'public/**/*.less', ['publicCss']);
    gulp.watch(app.srcPath + 'img/**/*', ['img']);
});

gulp.task('default', ['serve']);
