'use strict';

import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import shell from '/usr/local/lib/node_modules/gulp-shell';

class Sass extends DefaultRegistry {
  init() {
    let src  = './sass/style.sass';
    let dist = './css/style.css';
    let min  = './css/style.min.css';
    let docs = './docs/sass';
    let name = '"css reference"';
    let watch = './sass/**/*.*';

    let root = './sass/**/*';
    let pages = './sass/pages/**/*';
    let layouts = './sass/layouts/**/*';

    gulp.task('sass', shell.task([`
      sassc -M ${src} > ${dist} -m ${dist}
    `]));

    gulp.task('sass:min', shell.task([`
      sassc -t compressed -M ${src} > ${min} -m ${min}
    `]));

    gulp.task('sass:watch', () => {
      gulp
        .watch([watch], gulp.series('sass'))
        .on('error', err => process.exit(1));
    });

    gulp.task('docs:root', shell.task([`
      styledocco -n ${name} -o ${docs} ${root}
    `]));

    gulp.task('docs:pages', shell.task([`
      styledocco -n ${name} -o ${docs}/pages ${pages}
    `]));

    gulp.task('docs:layouts', shell.task([`
      styledocco -n ${name} -o ${docs}/layouts ${layouts}
    `]));

    gulp.task(
      'sass:docs',
      gulp.series(
        'docs:root',
        'docs:pages',
        'docs:layouts'
    ));

    gulp.task('sass:build',
      gulp.series(
        'sass:min'
        //'sass:docs'
    ));
  }
};

module.exports = new Sass();
