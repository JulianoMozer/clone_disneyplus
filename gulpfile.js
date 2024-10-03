const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

// Função para compilar os arquivos SCSS
function styles() {
    return gulp.src('./src/styles/*.scss') // Pega todos os arquivos SCSS
        .pipe(sass({ outputStyle: 'compressed' })) // Compila e comprime o SCSS para CSS
        .pipe(gulp.dest('./dist/css')); // Salva o resultado na pasta 'dist/css'
}

// Exporta a função de estilos como tarefa padrão
exports.default = styles;

// Tarefa que observa as mudanças nos arquivos SCSS
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', styles); // Monitora as alterações e executa 'styles'
}