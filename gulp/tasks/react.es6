'use strict';

import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import shell from '/usr/local/lib/node_modules/gulp-shell';

class React extends DefaultRegistry {

  init() {
    let src  = './src';
    let js   = './js';
    let dist = './dist/build.js';
    let min  = './dist/build.min.js';
    let map  = './dist/build.min.js.map';
    let docs = './docs/src';
    let watch = './src/**/*.*';

    gulp.task('babel', shell.task([`
      babel ${src} --out-dir ${js}
    `]));

    gulp.task('browserify', shell.task([`
      browserify ${js}/App.js -o ${dist} -v -t \
      [ babelify --presets [ es2015 react ] ]
    `]));

    gulp.task('uglify', shell.task([`
      uglifyjs -c -o ${min} --source-map ${map} ${dist}
    `]));

    gulp.task('src', gulp.series('babel', 'browserify'));

    gulp.task('src:min',
      gulp.series(
        'babel',
        'browserify',
        `uglify`
    ));

    gulp.task('src:watch', () => {
      gulp
        .watch([watch], gulp.series('src'))
        .on('error', err => process.exit(1));
    });

    gulp.task('src:docs', shell.task([`
      jsdoc ${src} -d ${docs}
    `]));

    gulp.task('src:build',
      gulp.series(
        'src:min',
        'src:docs'
    ));
  }
};

module.exports = new React();
