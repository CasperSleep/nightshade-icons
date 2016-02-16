import gulp from'gulp';
import { svg } from '../index.js';

const config = {
  'cwd': '../lib/storefront',
  'dest': '.',
  'files': [
    '**/*.svg'
  ]
};

gulp.task('svg', svg(gulp, config));
