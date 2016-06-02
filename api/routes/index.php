<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Routes;

/**
 * root
 */
$app->get(
    '/',
    function (
        $request,
        $response,
        $args
    ) {
        $response->write('hello');

        return $response->withHeader(
            'Content-Type',
            'text/html'
        );
    }
);
