/*!
 * Themeix Gulp Package (https://themeix.com/)
 * Copyright 2016-2020 themeix team
 * Licensed under MIT
 * Available Main Task Command : production, gulp, zip
 */
(function () {
    'use strict';
    /*
    =============================
        Let's see all CSS/JS Plugin into [package.json]
    =============================
    */
    var File_Name = 'html-brandflow';
    var CSS_Files = [
    './node_modules/slick-carousel/slick/slick.css',
    './node_modules/aos/dist/aos.css', 
    './assets/css/ghost.typofix.css', 
    './assets/css/ghost.card.min.css', 
    ];
    var JS_Files = [
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/jquery.easing/jquery.easing.min.js',
    './node_modules/slick-carousel/slick/slick.min.js',
    './node_modules/aos/dist/aos.js', 
    './assets/js/app.js'   
    ];
 
 
    var Production_CSS_Files = [ 
   

        './dist/production/assets/css/slick.css',
        './dist/production/assets/css/aos.css', 
        './dist/production/assets/css/ghost.typofix.css', 
        './dist/production/assets/css/ghost.card.min.css',  
        './dist/production/assets/css/tailwind.min.css',
        './dist/production/assets/css/custom.css'
    ]; 
    var Production_JS_Files = [ 
        './dist/production/assets/js/jquery.min.js',
        './dist/production/assets/js/jquery.easing.min.js',
        './dist/production/assets/js/slick.min.js',
        './dist/production/assets/js/aos.js', 
        './dist/production/assets/js/app.js'  
    ];

/*
=============================
    Include Gulp & Plugins
=============================
*/
var gulp = require('gulp'),
cleanCSS = require('gulp-clean-css'),
autoprefixer = require('gulp-autoprefixer'),
concat = require('gulp-concat'),
rename = require('gulp-rename'),
uglify = require('gulp-uglify'),
terser = require('gulp-terser'),
jshint = require('gulp-jshint'),
plumber = require('gulp-plumber'),
c = require('ansi-colors'),
replace = require('gulp-replace'),
size = require('gulp-size'),
zip = require('gulp-zip'),

// postcss      = require('postcss'),
atimport = require("postcss-import"),
purgecss = require("@fullhuman/postcss-purgecss"),
tailwindcss = require("tailwindcss"),

del = require('del'),
gulpCopy = require('gulp-copy'),
runSequence = require('run-sequence'),
inject = require('gulp-inject'),
postcss = require("gulp-postcss");

gulp.task('clean', function() {
return del('dist', {
    force: true
});
});
gulp.task('copy_css_files', function(done) {
return gulp.src(CSS_Files)
    .pipe(gulp.dest('./dist/production/assets/css'))
    .pipe(size())
done();
});

gulp.task('copy_js_files', function(done) {
return gulp.src(JS_Files)
    .pipe(gulp.dest('./dist/production/assets/js'))
    .pipe(size())

done();
});

gulp.task('copy_all_files', function(done) {
return gulp.src([
        './**/*',
        '!.jshintignore',
        '!.jshintrc',
        '!bower.json',
        '!gulpfile.js',
        '!package.json',
        '!package-lock.json', 
        '!.gitattributes',
        '!gitignore',
        '!README.md', 
        '!.gitignore',
        '!./node_modules/**',
        '!./bower_components/**',
        '!./dist/**',
        '!./git/**'
    ])
    .pipe(gulp.dest('./dist/production'))
    .pipe(size())
done(); 
});

gulp.task('inject_code_html', function(cb) {
return gulp.src('./dist/production/*.html') //file with tags for injection
    .pipe(inject(gulp.src(Production_JS_Files), {
        starttag: '<!-- gulp:{{ext}} -->',
        endtag: '<!-- endgulp -->',
        relative: true
    }))
    .pipe(gulp.dest('./dist/production')); //where index.html will be saved. Same dir for overwrite old one
})
gulp.task('inject_code_html_2', function(cb) {
return gulp.src('./dist/production/*.html') //file with tags for injection
    .pipe(inject(gulp.src(Production_CSS_Files), {
        starttag: '<!-- gulp:{{ext}} -->',
        endtag: '<!-- endgulp -->',
        relative: true
    }))
    .pipe(gulp.dest('./dist/production')); //where index.html will be saved. Same dir for overwrite old one
})

gulp.task('remove_extra_code', function() {
return gulp.src('./dist/production/*.html')
    .pipe(replace('<link rel="stylesheet" href="assets/css/app.min.css">', ''))
    .pipe(replace('<script src="assets/js/build.min.js"></script>', ''))
    .pipe(gulp.dest('./dist/production'))
});
gulp.task('production-zip', function(done) {
gulp.src([
        './dist/production/**/*',
    ])
    .pipe(zip('production-' + File_Name))
    .pipe(gulp.dest('./dist/'))
    .pipe(size())
done();
});

gulp.task('vendor', function(done) {
return gulp.src(CSS_Files)
    .pipe(concat('vendors.css'))
    .pipe(postcss())
    .pipe(gulp.dest('./assets/css'))
    .pipe(size())
done();
});

gulp.task('tw', function(done) {
return gulp.src('./node_modules/tailwindcss/tailwind.css')
 //   .pipe(concat('vendors.css'))
    .pipe(postcss())
    .pipe(concat('tailwind.css'))
    .pipe(gulp.dest('./assets/css'))
 

    .pipe(rename({
        suffix: '.min'
    }))

    .pipe(cleanCSS())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('./assets/css'))
    .pipe(size())
done();
});

gulp.task('vendor_minified', function(done) {
return gulp.src(CSS_Files)
   .pipe(concat('vendors.css'))

 // NEED TO ADD TAILWIND PRE PROSS TO OPTIMIZE FILE SIZE
 //   .pipe(postcss())
    .pipe(rename({
        suffix: '.min'
    }))

    .pipe(cleanCSS())
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(gulp.dest('./assets/css'))
    .pipe(size())
done();
});
gulp.task('js', function(done) {
return gulp.src(JS_Files)
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(concat('build.js'))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(terser())
    .pipe(gulp.dest('./assets/js'))
    .pipe(size())
done();
});
gulp.task('app_css', function(done) {
return gulp.src(['./assets/css/vendors.min.css', './assets/css/tailwind.min.css', './assets/css/custom.css'])
    .pipe(concat('app.css'))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(gulp.dest('./assets/css'))
    .pipe(size())
done();
});
gulp.task('zip', function(done) {
gulp.src([
        './**/*',
        '.jshintignore',
        '.jshintrc',
        '!.gitattributes',
        '!README.md',
        '!.gitignore',
        '!./node_modules/**',
        '!./bower_components/**',
        '!./dist/**',
        '!./git/**'
    ])
    .pipe(zip('dev-' + File_Name))
    .pipe(gulp.dest('dist'))
    .pipe(size())
done();
});
gulp.task('watch', function() {
gulp.watch('tailwind.config.js', gulp.series('build_css'));
gulp.watch('./assets/css/custom.css', gulp.series('build_css'));
gulp.watch(['./assets/js/app.js'], gulp.series('js'));
gulp.watch('*.html', gulp.series('build_css'));
gulp.watch('*.md', gulp.series('build_css'));
});
gulp.task(
'build_css',
gulp.series('tw', 'vendor_minified', 'app_css')
);
gulp.task(
'build',
gulp.series('build_css', 'js')
);
gulp.task(
'production',
gulp.series('clean', 'copy_all_files', 'copy_css_files', 'copy_js_files', 'inject_code_html', 'inject_code_html_2', 'remove_extra_code', 'production-zip', 'zip', )
);
gulp.task(
'default',
gulp.series('build', 'watch')
);

})();