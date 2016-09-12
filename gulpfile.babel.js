'use strict';

import gulp from 'gulp';
import shell from '/usr/local/lib/node_modules/gulp-shell';

/**
 * for gulpfile.bable.js in parent directory
 */
import react from './gulp/tasks/react.es6';
import sass from './gulp/tasks/sass.es6';
import karma from './gulp/tasks/karma.es6';
import e2e from './gulp/tasks/e2e.es6';

import adminReact from './admin/gulp/tasks/react.es6';
import adminSass from './admin/gulp/tasks/sass.es6';

/**
 * for gulpfile.bable.js in this directory
 */
// import react from './tasks/react.es6';
// import sass from './tasks/sass.es6';
// import karma from './tasks/karma.es6';
// import e2e from './tasks/e2e.es6';

// import adminReact from '../admin/gulp/tasks/react.es6';
// import adminSass from '../admin/gulp/tasks/sass.es6';

/**
 * react
 *
 * gulp src
 * gulp src:min
 * gulp src:watch
 * gulp src:docs
 * gulp src:build
 */
gulp.registry(react);

/**
 * sass
 *
 * gulp sass
 * gulp sass:min
 * gulp sass:watch
 * gulp sass:docs
 * gulp sass:build
 */
gulp.registry(sass);

/**
 * karma
 *
 * gulp karma
 */
gulp.registry(karma);

/**
 * e2e (protractor)
 *
 * gulp e2e
 */
gulp.registry(e2e);

/**
 * admin
 *
 * gulp admin:src
 * gulp admin:src:watch
 * gulp admin:sass
 * gulp admin:sass:watch
 */
gulp.registry(adminReact);
gulp.registry(adminSass);

/**
 * gulp watch
 */
gulp.task('watch', shell.task([`
  tput setaf 36 && echo '\n  gulp watch: empty task. \n'
`]));

/**
 * gulp build
 */
gulp.task('build', shell.task([`
  tput setaf 36 && echo '\n  gulp build: empty task. \n'
`]));
