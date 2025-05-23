import gulp from "gulp";
import shell from "gulp-shell";

gulp.task("unit test", shell.task("mocha"));

gulp.task("default", gulp.series("unit test"));