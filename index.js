import svgSprite from 'gulp-svg-sprite';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';

/**
 * Build an optimized SVG symbol spritesheet from individual SVGs
 * @param {function} A gulp instance
 * @param config.cwd {string} CWD passed to gulp.src
 * @param config.files {string|array} File globs passed to gulp.src
 * @param config.dest {string} Output destination passed to gulp.dest
 */
export const svg = (gulp, config) => {

  const {cwd, dest, files} = config;

  gulp.src(files, {cwd: cwd})
    .pipe(plumber())
    .pipe(svgSprite({
      log: 'debug',
      mode: {
        symbol: true
      },
    }))
    .on('error', (error) => {
      console.log(error);
    })
    .pipe(rename('sprite.symbol.svg'))
    .pipe(gulp.dest(dest));
};
