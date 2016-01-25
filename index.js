import gulp from 'gulp';
import svgSprite from 'gulp-svg-sprite';
import plumber from 'gulp-plumber';
import path from 'path';
// import { svgOpts } from './svg_config.js'

let svgOpts = {
  'cwd': './lib',
  'dest': './test',
  'files': [
    '**/*.svg'
  ]
};

let svgConfig = {
  'log': 'debug',
  'mode': {
    'symbol': true
  }
};


export const svg = (gulp, svgOpts) => {

  const {cwd, dest, files} = svgOpts;

  gulp.src(`${files}`, {cwd: `${cwd}`})
    .pipe(plumber())
    .pipe(svgSprite(svgConfig))
    .on('error', (error) => {
      console.log(error);
    })
    .pipe(gulp.dest(`${dest}`));
};
