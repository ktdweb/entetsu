<?php
/**
 * application middleware
 */

use \Slim\Middleware\HttpBasicAuthentication;

// e.g: $app->add(enw \Slim\Csrf\Guard);

$c = $app->getContainer();

/**
 * tuupola/slim-basic-auth
 */
// $app->add(new HttpBasicAuthentication([
//     'path' => $c->get('auth')['basic_auth_path'],
//     'secure' => true,
//     'relaxed' => array('localhost', '127.0.0,1'),
//     'users' => $c->get('auth')['basic_auth']
// ]));
