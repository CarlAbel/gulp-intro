/* ES6 Modules*/
import gulp from "gulp"
import uglifycss from "gulp-uglifycss"
import concat from "gulp-concat"
import uglifyjs from "gulp-uglify"
import imagemin from "gulp-imagemin"
import connect from "gulp-connect"
import sourcemaps from "gulp-source"

function html() {
    return gulp.src("src/html/*.html")
        .pipe(sourcemaps.init())
        .pipe(fileinclude())
        .pipe(htmlmin({

        }))

        .pipe(sourcemaps.write("."))
        .pipe(gulp.dest("build"))
}
function watchHtml() {
    gulp.watch("src/html/*.html", { events: "all", ignoreInitial: false }, function () {
        html()
    })
}
/*"gulp-uglify" - "gulp-concat"*/
function css() {
    return gulp.src("src/styles/*.css")
        .pipe(concat("all.css"))
        .pipe(uglifycss())
        .pipe(gulp.dest("build/styles"))
}
function watchCss() {
    gulp.watch("src/styles/*.css", { events: "all", ignoreInitial: false }, function () {
        css()
    })
}
/*"gulp-uglify" - "gulp-concat"*/
function js() {
    return gulp.src("src/js/*.js")
        .pipe(concat("all.js"))
        .pipe(uglifyjs())
        .pipe(gulp.dest("build/js"))
}
function watchJs() {
    gulp.watch("src/js/*.js", { events: "all", ignoreInitial: false }, function () {
        js()
    })
}
/*"gulp-imagemin"*/
function images() {
    return gulp.src("src/images/*")
        .pipe(imagemin())
        .pipe(gulp.dest("build/images"))
}
function watchImages() {
    gulp.watch("src/images/*", { events: "all", ignoreInitial: false }, function () {
        images()
    })
}
/*"gulp-connect"*/
function server() {
    connect.server({
        root: "build",
        livereload: true
    })
}

//export const dims = gulp.series(js, images)

export const watcher = gulp.parallel(watchHtml, watchCss, watchJs, watchImages)
export { html, css, js, images }
export default gulp.parallel(watcher, server)
//export default gulp.parallel(css, js, images)


/*Common JS*/
/*const { src, dest, parallel} = require("gulp")
const uglifycss = require("gulp-uglifycss")
const concat = require("gulp-concat")
const uglifyjs = require("gulp-uglify")
const imagemin = require("gulp-imagemin")

function css() {
    return src("src/styles/*.css")
        .pipe(concat("all.css"))
        .pipe(uglifycss())
        .pipe(dest("build/styles"))
}
function js() {
    return src("src/js/*.js")
        .pipe(concat("all.js"))
        .pipe(uglifyjs())
        .pipe(dest("build/js"))
}
function images() {
    return src("src/images/*")
        .pipe(imagemin())
        .pipe(dest("build/images"))
}

exports.css = css
exports.js = js
exports.images = images
exports.default = parallel(css, js, images)*/