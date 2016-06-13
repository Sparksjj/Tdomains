var gulp 		= require('gulp');
var sass 		= require('gulp-sass');
var notiest 	= require('gulp-notify');
var concat		= require('gulp-concat-css');

gulp.task("sass", function(){
	return gulp.src('./sass/**/*.scss')
				.pipe(sass().on('error', sass.logError))
				.pipe(gulp.dest('./css'))
});

gulp.task("concat", ['sass'], function(){
	gulp.src('css/**/*.css')
		.pipe(concat("main.css"))
		.pipe(gulp.dest('app/css/'))
		.pipe(notiest('Main.css собран'))
})

gulp.task("watch", function(){
	gulp.watch('./sass/**/*.scss', ['concat'])
})

