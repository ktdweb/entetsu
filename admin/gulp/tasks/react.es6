'use strict';

import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import shell from '/usr/local/lib/node_modules/gulp-shell';

class React extends DefaultRegistry {

  init() {
    /**
     * for gulpfile.bable.js in parent directory
     */
    let src  = './admin/src';
    let js   = './admin/js';
    let dist = './admin/dist/build.js';
    let min  = './admin/dist/build.min.js';
    let map  = './admin/dist/build.min.js.map';
    let docs = './admin/docs/src';
    let watch = './admin/src/**/*.*';
    let ignore = [];
    let thisfile = './admin/gulp/tasks/react.es6';

    /**
     * for gulpfile.bable.js in this directory
     */
    // let src  = './src';
    // let js   = './js';
    // let dist = './dist/build.js';
    // let min  = './dist/build.min.js';
    // let map  = './dist/build.min.js.map';
    // let docs = './docs/src';
    // let watch = './src/**/*.*';
    // let ignore = [];
    // let thisfile = './gulp/tasks/react.es6';


    gulp.task('admin:babel', shell.task([`

      # 無視するディレクトリのアラート用
      tput setaf 33 && echo "---\n" \
      "ignore files: ${ignore}" \
      "by ${thisfile} \n---" &&
      tput setaf 255 &&

      ### 無視するディレクトリがない場合
      babel ${src} --out-dir ${js}

      ### 無視するディレクトリがある場合
      # babel ${src} --out-dir ${js} --ignore ${ignore}
    `]));

    gulp.task('admin:browserify', shell.task([`
      browserify ${js}/App.js -o ${dist} -v -t \
      [ babelify --presets [ es2015 react ] ]
    `]));

    gulp.task('admin:uglify', shell.task([`
      uglifyjs -c -o ${min} --source-map ${map} ${dist}
    `]));

    gulp.task('admin:src', gulp.series('admin:babel', 'admin:browserify'));

    gulp.task('admin:src:min',
      gulp.series(
        'admin:babel',
        'admin:browserify',
        `admin:uglify`
    ));

    gulp.task('admin:src:watch', () => {
      gulp
        .watch([watch], gulp.series('admin:src'))
        .on('error', err => process.exit(1));
    });

    gulp.task('admin:src:docs', shell.task([`
      jsdoc ${src} -d ${docs}
    `]));

    gulp.task('admin:src:build',
      gulp.series(
        'admin:src:min',
        'admin:src:docs'
    ));
  }
};

module.exports = new React();
