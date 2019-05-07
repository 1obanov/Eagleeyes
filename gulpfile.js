var gulp = require('gulp');
//wez paczke "gulp" z folderu "node_modules" i zapisz ją do zmiennej
var concat = require('gulp-concat');
//wez paczke "gulp-concat" z folderu "node_modules" i zapisz ją do zmiennej
//gulp odpowiada za tworzenia zadan i automatyzacje
//gulp-concat rozszerza mozliwosci gulpa poprzez lączenie plikow
var browserSync = require('browser-sync');

var sass = require('gulp-ruby-sass');
//gulp ruby-sass pozwoli nam na kompilacje sasa przy pomocy jezyka Ruby

var rename = require('gulp-rename');
//gulp-rename pozwoli nam zmienic nazwy plikow
var sourcemaps = require('gulp-sourcemaps');
//gulp-sourcemaps pozwala nam dodawac mapy do plikow


var Files = {

  html : './index.html',
  css_dest : './css',
  scss : './scss/style.scss',
  js_dest : './js',
  js : './js/app.js',
  resp_css_dest : './css',
  resp_scss : './scss/responsive.scss'
};


gulp.task('sass', function(){

  return sass(Files.scss, {
    style: 'expanded',
    sourcemap: true
  })
    .on('error', sass.logError)
    .pipe(sourcemaps.write())
    .pipe(rename('main.css'))
    .pipe(gulp.dest(Files.css_dest))
    .pipe(browserSync.reload({stream: true}));


});



gulp.task('resp_sass', function(){

  return sass(Files.resp_scss, {
    style: 'expanded',
    sourcemap: true
  })
    .on('error', sass.logError)
    .pipe(sourcemaps.write())
    .pipe(rename('responsive.css'))
    .pipe(gulp.dest(Files.resp_css_dest))
    .pipe(browserSync.reload({stream: true}));


});

gulp.task('js', function (){

	return gulp.src(Files.js)
		.pipe(concat('main.js'))
		.pipe(gulp.dest(Files.js_dest))
		.pipe(browserSync.reload({stream: true}));

});


gulp.task('default', ['resp_sass', 'sass', 'js'], function(){
//Tworzymy nowe zadanie. ktore wykona sie dopiero jak wykonają się zadania 'js' i 'css'

//Wlączam Browser Sync i odpalam serwer lokalny
browserSync.init({
  server: {
    baseDir: "./"
  }
});



// gulp.watch('./css/**/*.css', ['css']);
gulp.watch('./scss/**/*.scss', ['sass']);
gulp.watch('./scss/**/*.scss', ['resp_sass']);
gulp.watch('./js/**/*.js', ['js']);
gulp.watch(Files.html, browserSync.reload);
//Obserwuj pliki i w zaleznosci od plikow odpal odpowiedni task

});
