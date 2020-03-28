const gulp = require("gulp");
const browsersync = require("browser-sync").create();

function watch() {
  browsersync.init({
    server: {
      baseDir: "./source/"
    },
    port: 3000
  });
  gulp.watch("./source/*.html").on('change', browsersync.reload);
}

exports.watch = watch;
