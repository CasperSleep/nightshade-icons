import gulp from'gulp';
import { svg } from './index.js';

const pressConfig = {
  'cwd': './lib/press',
  'dest': './dist/press',
  'files': [
    '**/*.svg'
  ]
};

const storefrontConfig = {
  'cwd': './lib/storefront',
  'dest': './dist/storefront',
  'files': [
    '**/*.svg'
  ]
};

gulp.task('default', ['pressSvg', 'storefrontSvg']);
gulp.task('pressSvg', svg(gulp, pressConfig));
gulp.task('storefrontSvg', svg(gulp, storefrontConfig));
