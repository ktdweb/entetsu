'use strict';

import gulp from 'gulp';
import DefaultRegistry from 'undertaker-registry';
import shell from '/usr/local/lib/node_modules/gulp-shell';

class E2e extends DefaultRegistry {

  init() {
    let test = './e2e/protractor.conf.js';

    gulp.task('e2e', shell.task([`
      protractor ${test}
    `]));
  }
};

module.exports = new E2e();
