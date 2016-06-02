'use strict';

import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import shell from '/usr/local/lib/node_modules/gulp-shell';

class Karma extends DefaultRegistry {

  init() {
    let test = './test/karma.conf.js';
    let src  = './test/src';
    let spec = './test/spec';

    gulp.task('karma', shell.task([`
      karma start ${test}
    `]));

    gulp.task('karma:build', shell.task([`
      babel ${src} --out-dir ${spec}
    `]));
  }
};

module.exports = new Karma();
