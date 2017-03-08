<?php
use Lib\Config\DetectEnvironment;

/**
 * Composer
 */
require_once(__DIR__ . '/vendor/autoload.php');

/**
 * server environment
 */
$production_server_ips = array(
    //'10.0.2.15', // local
    '150.60.165.126'
);

$env = new DetectEnvironment($production_server_ips);
// $env->setMode('proxies');
$file = __DIR__ . '/config/' . $env->getName();
$ext = (is_file($file . '.php')) ? '.php' : '.php.sample';
require($file . $ext);

/**
 * detect debug mode
 */
const DEBUG = DEBUG_DEFAULT;
//const DEBUG = true;
ini_set('display_errors', DEBUG);

/**
 * bootstrap
 */
require_once './bootstrap.php';
