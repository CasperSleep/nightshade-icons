import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';

let config = {
  'cwd': './lib',
  'dest': './test',
  'files': [
    '**/*.svg'
  ]
};

export const svg = (gulp, config) => {

  const {cwd, dest, files} = config;

  gulp.src(`${files}`, {cwd: `${cwd}`})
    .pipe(plumber())
    .pipe(svgSprite({
      'log': 'debug',
      'mode': {
        'symbol': true
      }
    }))
    .on('error', (error) => {
      console.log(error);
    })
    .pipe(rename('sprite.symbol.svg'))
    .pipe(gulp.dest(`${dest}`));
};
