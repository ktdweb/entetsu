'use strict';

import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import shell from '/usr/local/lib/node_modules/gulp-shell';

class Sass extends DefaultRegistry {

  init() {
    /**
     * for gulpfile.bable.js in parent directory
     */
    let src  = './admin/sass/style.sass';
    let dist = './admin/css/style.css';
    let lib  = './admin/sass/lib.sass';
    let libd = './admin/css/lib.css';
    let min  = './admin/css/style.min.css';
    let docs = './admin/docs/sass';
    let name = '"css reference"';
    let watch = './admin/sass/**/*.*';
    let root = './admin/sass/**/*';
    let pages = './admin/sass/pages/**/*';
    let layouts = './admin/sass/layouts/**/*';

    /**
     * for gulpfile.bable.js in this directory
     */
    // let src  = './sass/style.sass';
    // let dist = './css/style.css';
    // let lib  = './sass/lib.sass';
    // let libd = './css/lib.css';
    // let min  = './css/style.min.css';
    // let docs = './docs/sass';
    // let name = '"css reference"';
    // let watch = './sass/**/*.*';
    // let root = './sass/**/*';
    // let pages = './sass/pages/**/*';
    // let layouts = './sass/layouts/**/*';

    gulp.task('admin:sass', shell.task([`
      sassc -M ${src} > ${dist} -m ${dist}
    `]));

    gulp.task('admin:sass:lib', shell.task([`
      sassc -t compressed -M ${lib} > ${libd} -m ${libd}
    `]));

    gulp.task('admin:sass:min', shell.task([`
      sassc -t compressed -M ${src} > ${min} -m ${min}
    `]));

    gulp.task('admin:sass:watch', () => {
      gulp
        .watch([watch], gulp.series('admin:sass'))
        .on('error', err => process.exit(1));
    });

    gulp.task('admin:docs:root', shell.task([`
      styledocco -n ${name} -o ${docs} ${root}
    `]));

    gulp.task('admin:docs:pages', shell.task([`
      styledocco -n ${name} -o ${docs}/pages ${pages}
    `]));

    gulp.task('admin:docs:layouts', shell.task([`
      styledocco -n ${name} -o ${docs}/layouts ${layouts}
    `]));

    gulp.task(
      'sass:admin:docs',
      gulp.series(
        'admin:docs:root',
        'admin:docs:pages',
        'admin:docs:layouts'
    ));

    gulp.task('admin:sass:build',
      gulp.series(
        'admin:sass:min',
        'admin:sass:lib'
        //'admin:sass:docs'
    ));
  }
};

module.exports = new Sass();
