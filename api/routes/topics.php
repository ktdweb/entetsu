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
        '/admin/each/{id:.*}',
        function (
            $request,
            $response,
            $args
        ) {
            $db = $this->get('db.get');
            $sql = 'SELECT `works`.*, `sections`.`name`,';
            $sql .= ' `sections`.`tel`, `sections`.`email`, ';
            $sql .= '`wages`.`name` as `unit_wage` from `works` ';
            $sql .= ' LEFT JOIN `sections` ON `works`.`section_id` = `sections`.`id`';
            $sql .= ' LEFT JOIN `wages` ON `works`.`unit_wage_id` = `wages`.`id`';

            $sql .= ' WHERE `works`.`id` = ? LIMIT 1';
            $body = $db->execute($sql, $args['id']);

            $sql = 'SELECT `category_id` FROM `tags`';
            $sql .= ' WHERE `work_id` = ?';
            $tags = $db->execute($sql, $args['id']);

            foreach ($tags as $val) {
                $body['tags'][] = $val->category_id;
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
        '/admin/{id:.*}',
        function (
            $request,
            $response,
            $args
        ) {
            $db = $this->get('db.get');
            $sql = 'SELECT `works`.*, `sections`.`name`,';
            $sql .= ' `sections`.`tel`, `sections`.`email`, ';
            $sql .= '`wages`.`name` as `unit_wage` from `works` ';
            $sql .= ' LEFT JOIN `sections` ON `works`.`section_id` = `sections`.`id`';
            $sql .= ' LEFT JOIN `wages` ON `works`.`unit_wage_id` = `wages`.`id`';

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
            $tags = $body['tags'];

            unset($body['email']);
            unset($body['name']);
            unset($body['tel']);
            unset($body['id']);
            unset($body['tags']);

            // tags delete
            $sql = 'DELETE FROM `tags` WHERE `work_id` = ?';
            $del->execute($sql, $id);

            // tags insert
            $sql = '
                INSERT INTO `tags` (
                `work_id`,
                `category_id`
                ) VALUES
            ';
            foreach ($tags as $tag) {
                $sql .= '(' . $id . ', ' . $tag . '),';
            };
            $sql = rtrim($sql, ',') . ';';

            $post->execute($sql);

            // works
            $values = array_values($body);

            $sql = 'UPDATE `works` SET ';
            $sql .= '`section_id`=?,';
            $sql .= '`title`=?,';
            $sql .= '`detail`=?,';
            $sql .= '`location`=?,';
            $sql .= '`time`=?,';
            $sql .= '`time_start`=?,';
            $sql .= '`time_end`=?,';
            $sql .= '`entry_start`=?,';
            $sql .= '`entry_end`=?,';
            $sql .= '`break`=?,';
            $sql .= '`wage`=?,';
            $sql .= '`days`=?,';
            $sql .= '`holidays`=?,';
            $sql .= '`type`=?,';
            $sql .= '`term`=?,';
            $sql .= '`career`=?,';
            $sql .= '`selling`=?,';
            $sql .= '`cert`=?,';
            $sql .= '`desc`=?,';
            $sql .= '`img`=?,';
            $sql .= '`abbr_wage`=?,';
            $sql .= '`abbr_time`=?,';
            $sql .= '`unit_wage_id`=?,';
            $sql .= '`created`=?,';
            $sql .= '`modified`=? ';
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
