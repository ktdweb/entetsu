<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Routes;

/**
 * users
 */
$app->group('/works', function () {

    /**
     * GET
     */
    $this->get(
        '/category/{id:[0-9]+}',
        function (
            $request,
            $response,
            $args
        ) {
            $db = $this->get('db.get');

            $sql  = 'SELECT `works`.* FROM `tags` ';
            $sql .= 'INNER JOIN `works` ON ';
            $sql .= '`tags`.`work_id` = `works`.`id` ';
            $sql .= 'WHERE `tags`.`category_id` = ?';
            $body = $db->execute($sql, $args['id']);

            return $response->withJson(
                $body,
                200,
                $this->get('settings')['withJsonEnc']
            );
        }
    );

    /**
     * GET
     */
    $this->get(
        '/slider/{start:[0-9]+}/{end:[0-9]+}',
        function (
            $request,
            $response,
            $args
        ) {
            $db = $this->get('db.get');

            $start = round($args['start'] * 24 / 100) . ':00';
            $end = round($args['end'] * 24 / 100) . ':00';

            $sql  = 'SELECT `works`.* FROM `works` ';
            $sql .= 'WHERE (`time_start` >= ?) AND (`time_end` <= ?)';
            $body = $db->execute($sql, array($start, $end));

            return $response->withJson(
                $body,
                200,
                $this->get('settings')['withJsonEnc']
            );
        }
    );

    /**
     * GET
     */
    $this->get(
        '/keyword/{keyword:.*}',
        function (
            $request,
            $response,
            $args
        ) {
            $db = $this->get('db.get');

            $key = $args['keyword'];
            $sql  = 'SELECT `works`.* FROM `works` WHERE ';
            $sql .= "(`title` LIKE '%" .$key . "%') OR ";
            $sql .= "(`detail` LIKE '%" .$key . "%') OR ";
            $sql .= "(`location` LIKE '%" .$key . "%') OR ";
            $sql .= "(`wage` LIKE '%" .$key . "%') OR ";
            $sql .= "(`type` LIKE '%" .$key . "%') OR ";
            $sql .= "(`selling` LIKE '%" .$key . "%') OR ";
            $sql .= "(`desc` LIKE '%" .$key . "%');";
            $body = $db->execute($sql);

            return $response->withJson(
                $body,
                200,
                $this->get('settings')['withJsonEnc']
            );
        }
    );


    /**
     * GET
     */
    $this->get(
        '/{name:.*}',
        function (
            $request,
            $response,
            $args
        ) {
            $db = $this->get('db.get');
            $sql = 'select * from `works`';

            if ($args['name']) {
                $sql .= ' WHERE `name` = ?;';
                $body = $db->execute($sql, $args['name']);
            } else {
                $body = $db->execute($sql);
            }

            return $response->withJson(
                $body,
                200,
                $this->get('settings')['withJsonEnc']
            );
        }
    );

    /**
     * POST
     */
    $this->post(
        '/',
        function (
            $request,
            $response,
            $args
        ) {
            $body = $request->getParsedBody();

            $db = $this->get('db.post');

            $sql  = 'INSERT INTO `users` ';

            $fields = array_keys($body);
            $values = array_values($body);
            $holder = array_fill(0, count($values), '?');

            $sql .= '(' . implode(', ', $fields) . ')';
            $sql .= ' VALUES ';
            $sql .= '(' . implode(', ', $holder) . ')';

            $db->execute($sql, $values);

            return $response->withJson(
                $body,
                200,
                $this->get('settings')['withJsonEnc']
            );
        }
    );

    /**
     * PUT
     */
    $this->put(
        '/{id:[0-9]+}',
        function (
            $request,
            $response,
            $args
        ) {
            $body = $request->getParsedBody();

            $db = $this->get('db.put');

            $fields = array_keys($body);
            $values = array_values($body);

            $sql = 'UPDATE `users` SET ';
            $sql .= implode(' = ?, ', $fields) . ' = ?';
            $sql .= ' WHERE `id` = ' . (int)$args['id'];

            $res = $db->execute($sql, $values);

            return $response->withJson(
                $res,
                200,
                $this->get('settings')['withJsonEnc']
            );
        }
    );

    /**
     * DELETE
     */
    $this->delete(
        '/{id:[0-9]+}',
        function (
            $request,
            $response,
            $args
        ) {
            $db = $this->get('db.delete');

            $sql = 'DELETE FROM `users` ';
            $sql .= 'WHERE `id` = ' . (int)$args['id'];

            $res = $db->execute($sql);

            return $response->withJson(
                $res,
                200,
                $this->get('settings')['withJsonEnc']
            );
        }
    );

});
