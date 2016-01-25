import gulp from'gulp';
import { svg } from '../index.js';

const svgOpts = {
  'cwd': '../lib/storefront',
  'dest': '.',
  'files': [
    '**/*.svg'
  ]
};

gulp.task('svg', svg(gulp, svgOpts));
