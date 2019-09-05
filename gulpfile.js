var gulp       = require('gulp'), // Подключаем Gulp
    sass         = require('gulp-sass'), //Подключаем Sass пакет,
    concat       = require('gulp-concat'), // Подключаем gulp-concat (для конкатенации файлов)
    includer     = require("gulp-x-includer"),
    uglify 		 = require('gulp-uglify'), // Подключаем gulp-uglifyjs (для сжатия JS)
    cssnano      = require('gulp-cssnano'), // Подключаем пакет для минификации CSS
    rename       = require('gulp-rename'), // Подключаем библиотеку для переименования файлов
    del          = require('del'), // Подключаем библиотеку для удаления файлов и папок
    tinypng      = require('gulp-tinypng-compress'), // Подключаем библиотеку для работы с изображениями
    pngquant     = require('imagemin-pngquant'), // Подключаем библиотеку для работы с png
    cache        = require('gulp-cache'), // Подключаем библиотеку кеширования
    autoprefixer = require('gulp-autoprefixer'),// Подключаем библиотеку для автоматического добавления префиксов
    livereload = require('gulp-livereload'),
    babel = require('gulp-babel'),
    svgSprite = require('gulp-svg-sprites'),
    svgMin = require('gulp-svgmin'),
    cheerio = require('gulp-cheerio'),
    replace = require('gulp-replace'),
    browserSync = require('browser-sync');



gulp.task('server', function () {
    browserSync.init({
        server: {
            baseDir: './dist/',
            directory: true
        },
        notify: false
    });

    // gulp.watch('src/styles/**/*.styl', ['styles']);
});


gulp.task('sass', function(){ // Создаем таск Sass
    return gulp.src('app/plain/sass/*.sass') // Берем источник
        .pipe(sass()) // Преобразуем Sass в CSS посредством gulp-sass
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))

        .pipe(gulp.dest('app/plain/css')); // Выгружаем результата в папку app/css
 // Обновляем CSS на странице при изменении

});


gulp.task('svg', function () {
    return gulp.src('app/plain/svg/*.svg')
    // minify svg
        .pipe(svgMin({
            js2svg: {
                pretty: true
            }
        }))
        // remove all fill and style declarations in out shapes
        .pipe(cheerio({
            run: function ($) {
                // $('[fill]').removeAttr('fill');
                $('[style]').removeAttr('style');
            },
            parserOptions: { xmlMode: true }
        }))
        // cheerio plugin create unnecessary string '>', so replace it.
        .pipe(replace('&gt;', '>'))
        // build svg sprite
        .pipe(svgSprite({
                mode: "symbols",
                preview: false,
                // selector: "icon-%f",
                svg: {
                    symbols: 'sprite.svg'
                }
            }
        ))
        .pipe(gulp.dest('dist/plain/svg/'));
});

gulp.task("include", function(){
    gulp.src(["app/*.html"])
        .pipe(includer())
        .pipe(gulp.dest("dist/"));
        // .pipe(livereload());


});

gulp.task('scripts', () =>
    gulp.src('app/plain/js/*.js')
        .pipe(babel({
            presets: ["es2015"]
        }))
        // .pipe(replace('translate3d', 'translateX'))
        .pipe(uglify()) // Сжимаем JS файл
        .pipe(gulp.dest('dist/plain/js')) // Выгружаем в папку app/js

);



gulp.task('css', function() {
    return gulp.src('app/plain/css/*.css') // Выбираем файл для минификации
        .pipe(cssnano({
            reduceIdents: false,

        })) // Сжимаем
        .pipe(gulp.dest('dist/plain/css')) // Выгружаем в папку dist/css
        .pipe(browserSync.stream());
});

gulp.task('watch', ['css', 'scripts', 'include'], function() {

    gulp.watch('app/plain/sass/*.sass', ['sass']); // Наблюдение за sass файлами в папке sass
    gulp.watch('app/plain/css/*.css', ['css']); // Наблюдение за sass файлами в папке sass
    // gulp.watch("app/**/*.html", ['include']);
    gulp.watch('app/**/*.html', ['include']).on('change', browserSync.reload); // Наблюдение за HTML файлами в корне проекта
    gulp.watch('app/plain/js/*.js',['scripts']);  // Наблюдение за JS файлами в папке js
    gulp.watch('app/plain/svg/*.svg', ['svg']);
    gulp.watch('app/img/*', ['tinypng']);
    gulp.watch('dist/plain/css/*.css');
    // livereload.listen();

});

gulp.task('clean', function() {
    return del.sync('dist'); // Удаляем папку dist перед сборкой
});

// gulp.task('img', () =>
//     gulp.src('app/img/*')
//         .pipe(imagemin([
//             imagemin.gifsicle({interlaced: true}),
//             imagemin.jpegtran({progressive: true}),
//             imagemin.optipng({optimizationLevel: 5}),
//         ]))
//         .pipe(gulp.dest('dist/img'))
// );

gulp.task('tinypng', function () {
    gulp.src('app/img/*.{png,jpg,jpeg}')
        .pipe(tinypng({
            key: 'y4jVksSnWcMBv8el8RQMjFpU9RdQ6z9d',
            log: true
        }))
        .pipe(gulp.dest('dist/img'));
});


gulp.task('build', ['img', 'sass', 'scripts'], function() {

    var buildCss = gulp.src([ // Переносим библиотеки в продакшен
        'app/plain/css/*.css'
    ])
        .pipe(gulp.dest('dist/plain/css'))

    var buildFonts = gulp.src('app/plain/fonts/**/*') // Переносим шрифты в продакшен
        .pipe(gulp.dest('dist/plain/fonts'))

    var buildJs = gulp.src('app/plain/js/**/*') // Переносим скрипты в продакшен
        .pipe(gulp.dest('dist/plain/js'))

    var buildHtml = gulp.src('app/*.html') // Переносим HTML в продакшен
        .pipe(gulp.dest('dist'));

});

gulp.task('clear', function (callback) {
    return cache.clearAll();
});

gulp.task('default', ['watch', 'server','svg', 'tinypng']);
