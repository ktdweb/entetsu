<?php
use \Slim\App;

/**
 * Slim
 */
// import ./src/settings.php first
$settings = require __DIR__ . '/src/settings.php';
$app = new App($settings);

// require ./src
require __DIR__ . '/src/dependencies.php';
require __DIR__ . '/src/middleware.php';
require __DIR__ . '/src/app.php';

// require ./routes
$routeFiles = (array) glob('./routes/*.php');
foreach ($routeFiles as $routeFile) {
    require $routeFile;
}

// then run
$app->run();
