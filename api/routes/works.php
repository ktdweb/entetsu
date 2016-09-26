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
            $sql .= 'WHERE (`tags`.`category_id` = ?)';
            $sql .= ' AND ( `entry_end` > NOW() ';
            $sql .= " OR `entry_end` = '0000-00-00 00:00:00' )";
            $sql .= ' AND ( `entry_start` < NOW() ';
            $sql .= " OR `entry_start` = '0000-00-00 00:00:00' )";
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
            $sql .= ' AND ( `entry_end` > NOW() ';
            $sql .= " OR `entry_end` = '0000-00-00 00:00:00' )";
            $sql .= ' AND ( `entry_start` < NOW() ';
            $sql .= " OR `entry_start` = '0000-00-00 00:00:00' )";
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
            $sql .= ' ( `entry_end` > NOW() ';
            $sql .= " OR `entry_end` = '0000-00-00 00:00:00' )";
            $sql .= ' AND ( `entry_start` < NOW() ';
            $sql .= " OR `entry_start` = '0000-00-00 00:00:00' ) AND ";
            $sql .= "( (`title` LIKE '%" .$key . "%') OR ";
            $sql .= "(`detail` LIKE '%" .$key . "%') OR ";
            $sql .= "(`location` LIKE '%" .$key . "%') OR ";
            $sql .= "(`wage` LIKE '%" .$key . "%') OR ";
            $sql .= "(`type` LIKE '%" .$key . "%') OR ";
            $sql .= "(`selling` LIKE '%" .$key . "%') OR ";
            $sql .= "(`desc` LIKE '%" .$key . "%') )";
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
        '/admin/{id:.*}',
        function (
            $request,
            $response,
            $args
        ) {
            $db = $this->get('db.get');
            $sql = 'SELECT `works`.*, `sections`.`name`,';
            $sql .= ' `sections`.`tel`, `sections`.`email` from `works`';
            $sql .= ' LEFT JOIN `sections` ON `works`.`section_id` = `sections`.`id`';

            if (is_numeric($args['id'])) {
                $sql .= ' WHERE `works`.`section_id` = ?';
                $body = $db->execute($sql, $args['id']);
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
            $sql = 'SELECT `works`.*, `sections`.`name`,';
            $sql .= ' `sections`.`tel`, `sections`.`email` from `works`';
            $sql .= ' LEFT JOIN `sections` ON `works`.`section_id` = `sections`.`id`';

            if ($args['name'] == 'admin') {
                $body = $db->execute($sql);
            } else {
                $sql .= ' WHERE ';
                $sql .= ' ( `works`.`entry_end` > NOW() ';
                $sql .= " OR `works`.`entry_end` = '0000-00-00 00:00:00' )";
                $sql .= ' AND ';
                $sql .= ' ( `works`.`entry_start` < NOW() ';
                $sql .= " OR `works`.`entry_start` = '0000-00-00 00:00:00' )";
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
        '/admin/{id:.*}',
        function (
            $request,
            $response,
            $args
        ) {
            $db = $this->get('db.delete');

            $sql = 'DELETE FROM `works` ';
            $sql .= 'WHERE `id` = ' . (int)$args['id'];
            $res = $db->execute($sql);

            $sql = 'DELETE FROM `tags` ';
            $sql .= 'WHERE `work_id` = ' . (int)$args['id'];
            $res = $db->execute($sql);

            return $response->withJson(
                $res,
                200,
                $this->get('settings')['withJsonEnc']
            );
        }
    );

});
