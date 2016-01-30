'use strict';

import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

gulp.task("transpile", () => {

  return browserify("./public/js/src/app.js")
    .transform("babelify")
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("./public/js/dist"))

});

gulp.task("watch", ["transpile"], () => {
  gulp.watch("./public/js/src/**/*.js", ["transpile"]);
});

gulp.task("default", ["transpile"]);
