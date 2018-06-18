var gulp = require('gulp');
    concat = require('gulp-concat');
    sass = require('gulp-sass');
    connect = require('gulp-connect');


gulp.task('styles',function(){
    gulp.src('assets-dev/css/**/*')
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(concat('main.css'))
    .pipe(gulp.dest('assets/css/'))
    .pipe(connect.reload());
});

gulp.task('html',function(){
    gulp.src('index.html')
        .pipe(connect.reload());
});

gulp.task('connect',function(){
    connect.server({
        livereload: true
    });
})

gulp.task('watch',function(){
    gulp.watch('assets-dev/css/**/*',['styles']);
    gulp.watch('index.html',['html']);
});

gulp.task('default',['styles','html','connect','watch']);
