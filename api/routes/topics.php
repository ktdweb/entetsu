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
$app->group('/topics', function () {

    /**
     * GET
     */
    $this->get(
        '/',
        function (
            $request,
            $response,
            $args
        ) {
            $db = $this->get('db.get');
            $sql = 'SELECT * FROM `topics`';

            $sql .= ' WHERE ';
            $sql .= ' ( `term_end` > NOW() ';
            $sql .= " OR `term_end` = '0000-00-00 00:00:00' )";
            $sql .= ' AND ';
            $sql .= ' ( `term_start` < NOW() ';
            $sql .= " OR `term_start` = '0000-00-00 00:00:00' )";
            $sql .= ' ORDER BY `created` DESC;';

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
        '/front/',
        function (
            $request,
            $response,
            $args
        ) {
            $db = $this->get('db.get');
            $sql = 'SELECT * FROM `topics`';

            $sql .= ' WHERE ';
            $sql .= ' ( `term_end` > NOW() ';
            $sql .= " OR `term_end` = '0000-00-00 00:00:00' )";
            $sql .= ' AND ';
            $sql .= ' ( `term_start` < NOW() ';
            $sql .= " OR `term_start` = '0000-00-00 00:00:00' )";
            $sql .= ' ORDER BY `created` DESC;';

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
        '/detail/{id:[0-9]+}',
        function (
            $request,
            $response,
            $args
        ) {
            $db = $this->get('db.get');
            $sql = 'SELECT `topics`.*, `sections`.`name`,';
            $sql .= ' `sections`.`tel`, `sections`.`email`, ';
            $sql .= '`wages`.`name` as `unit_wage` from `works` ';
            $sql .= ' LEFT JOIN `sections` ON `works`.`section_id` = `sections`.`id`';
            $sql .= ' LEFT JOIN `wages` ON `works`.`unit_wage_id` = `wages`.`id`';

            $sql .= ' WHERE ';
            $sql .= ' ( `works`.`entry_end` > NOW() ';
            $sql .= " OR `works`.`entry_end` = '0000-00-00 00:00:00' )";
            $sql .= ' AND ';
            $sql .= ' ( `works`.`entry_start` < NOW() ';
            $sql .= " OR `works`.`entry_start` = '0000-00-00 00:00:00' )";

            $sql .= ' AND ';
            $sql .= '`works`.`id` = ?;';

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
        '/admin/{id:.*}',
        function (
            $request,
            $response,
            $args
        ) {
            $db = $this->get('db.get');
            $sql = 'SELECT * FROM `topics`';

            if (is_numeric($args['id'])) {
                $sql .= ' WHERE `id` = ?';
                $sql .= ' ORDER BY `created` DESC;';
                $body = $db->execute($sql, $args['id']);
            } else {
                $sql .= ' ORDER BY `created` DESC;';
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
        '/admin/update/',
        function (
            $request,
            $response,
            $args
        ) {
            $body = $request->getParsedBody();

            $db = $this->get('db.put');
            $post = $this->get('db.post');
            $del = $this->get('db.delete');

            $id = (int)$body['id'];

            unset($body['id']);
            unset($body['link']);
            unset($body['modified']);

            // works
            $values = array_values($body);

            $sql = 'UPDATE `topics` SET ';
            $sql .= '`category_id`=?,';
            $sql .= '`title`=?,';
            $sql .= '`desc`=?,';
            $sql .= '`term_start`=?,';
            $sql .= '`term_end`=?,';
            $sql .= '`created`=?,';
            $sql .= '`modified`=NOW() ';
            $sql .= ' WHERE `id` = ' . $id . ';';

            $res = $db->execute($sql, $values);

            return $response->withJson(
                $res,
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

            $db = $this->get('db.put');
            $post = $this->get('db.post');
            $del = $this->get('db.delete');

            $id = (int)$body['id'];

            // works
            $values = array_values($body);

            $sql = 'INSERT INTO `topics` (';
            $sql .= '`category_id`,';
            $sql .= '`title`,';
            $sql .= '`desc`,';
            $sql .= '`term_start`,';
            $sql .= '`term_end`,';
            $sql .= '`created`,';
            $sql .= '`modified` ';
            $sql .= ' ) VALUES (';
            $sql .= '?, ?, ?, ?, ?, NOW(), NOW());';

            $values = array(
                $body['category_id'],
                $body['title'],
                $body['desc'],
                $body['term_start'],
                $body['term_end']
            );

            $res = $db->execute($sql, $values);

            return $response->withJson(
                $res,
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

            $body['link'] = $body['links'];
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

            $sql = 'DELETE FROM `topics` ';
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
