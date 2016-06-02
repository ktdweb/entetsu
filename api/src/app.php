<?php
/**
 * customize application
 */

/**
 * headers
 */
$app->add(function ($request, $response, $next) {

    $newResponse = $response
        ->withHeader(
            'Content-Type',
            'application/json;charset=utf-8'
        )
        ->withAddedHeader(
            'Access-Control-Allow-Origin',
            'null'
        );

    return $next($request, $newResponse);
});
