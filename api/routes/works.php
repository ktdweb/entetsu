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
        '/detail/{id:[0-9]+}',
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
        '/category/{id:[0-9]+}',
        function (
            $request,
            $response,
            $args
        ) {
            $db = $this->get('db.get');

            $sql  = 'SELECT `works`.*, `wages`.`name` as `unit_wage` FROM `tags` ';
            $sql .= ' INNER JOIN `works` ON ';
            $sql .= '`tags`.`work_id` = `works`.`id` ';
            $sql .= ' LEFT JOIN `wages` ON `works`.`unit_wage_id` = `wages`.`id` ';
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
        '/slider/{start:[0-9]+}/{end:[0-9]+}/{category:[0-9]+}',
        function (
            $request,
            $response,
            $args
        ) {
            $db = $this->get('db.get');

            $start = round($args['start'] * 24 / 100) . ':00';
            $end = round($args['end'] * 24 / 100) . ':00';

            $sql  = 'SELECT `works`.*, `wages`.`name` as `unit_wage` FROM `tags` ';
            $sql .= ' INNER JOIN `works` ON ';
            $sql .= '`tags`.`work_id` = `works`.`id` ';
            $sql .= ' LEFT JOIN `wages` ON `works`.`unit_wage_id` = `wages`.`id` ';
            $sql .= 'WHERE (`time_start` >= ?) AND (`time_end` <= ?)';

            if ($args['category'] != 0) {
                $sql .= ' AND (`tags`.`category_id` = ' . $args['category'] . ') ';
            }

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
            $sql  = 'SELECT `works`.*, `wages`.`name` as `unit_wage` FROM `works` ';
            $sql .= ' LEFT JOIN `wages` ON `works`.`unit_wage_id` = `wages`.`id`';
            $sql .= ' WHERE ( `entry_end` > NOW() ';
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

            if (is_numeric($args['id']) && $args['id'] != 0) {
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
        '/latest/',
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

            $sql .= ' WHERE ';
            $sql .= ' ( `works`.`entry_end` > NOW() ';
            $sql .= " OR `works`.`entry_end` = '0000-00-00 00:00:00' )";
            $sql .= ' AND ';
            $sql .= ' ( `works`.`entry_start` < NOW() ';
            $sql .= " OR `works`.`entry_start` = '0000-00-00 00:00:00' )";
            $sql .= " ORDER BY `works`.`modified` DESC LIMIT 3;";

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
            $sql = 'SELECT `works`.*, `sections`.`name`,';
            $sql .= ' `sections`.`tel`, `sections`.`email`, ';
            $sql .= '`wages`.`name` as `unit_wage` from `works` ';
            $sql .= ' LEFT JOIN `sections` ON `works`.`section_id` = `sections`.`id`';
            $sql .= ' LEFT JOIN `wages` ON `works`.`unit_wage_id` = `wages`.`id`';

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
            unset($body['created']);
            unset($body['modified']);

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

            $test = $post->execute($sql);

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
            $tags = $body['tags'];

            $get = $this->get('db.get');
            $db = $this->get('db.post');

            $sql = 'INSERT INTO `works` (';
            $sql .= '`section_id`,';
            $sql .= '`title`,';
            $sql .= '`detail`,';
            $sql .= '`location`,';
            $sql .= '`time`,';
            $sql .= '`time_start`,';
            $sql .= '`time_end`,';
            $sql .= '`entry_start`,';
            $sql .= '`entry_end`,';
            $sql .= '`break`,';
            $sql .= '`wage`,';
            $sql .= '`days`,';
            $sql .= '`holidays`,';
            $sql .= '`type`,';
            $sql .= '`term`,';
            $sql .= '`career`,';
            $sql .= '`selling`,';
            $sql .= '`cert`,';
            $sql .= '`desc`,';
            $sql .= '`img`,';
            $sql .= '`abbr_wage`,';
            $sql .= '`abbr_time`,';
            $sql .= '`unit_wage_id`,';
            $sql .= '`created`,';
            $sql .= '`modified` ';
            $sql .= ') VALUES (';
            $sql .= '?, ?, ?, ?, ?, ?, ?, ?, ?, ?,';
            $sql .= '?, ?, ?, ?, ?, ?, ?, ?, ?, ?,';
            $sql .= '?, ?, ?, NOW(), NOW());';

            $values = array(
                $body['section_id'],
                $body['title'],
                $body['detail'],
                $body['location'],
                $body['time'],
                $body['time_start'],
                $body['time_end'],
                $body['entry_start'],
                $body['entry_end'],
                $body['break'],
                $body['wage'],
                $body['days'],
                $body['holidays'],
                $body['type'],
                $body['term'],
                $body['career'],
                $body['selling'],
                $body['cert'],
                $body['desc'],
                $body['img'],
                $body['abbr_wage'],
                $body['abbr_time'],
                $body['unit_wage_id']
            );

            $res = $db->execute($sql, $values);

            $sql = 'SELECT LAST_INSERT_ID() as `id`;';
            $lastId = $get->execute($sql);

            // tags insert
            $sql = '
                INSERT INTO `tags` (
                `work_id`,
                `category_id`
                ) VALUES
            ';
            foreach ($tags as $tag) {
                $sql .= '(' . $lastId[0]->id . ', ' . $tag . '),';
            };
            $sql = rtrim($sql, ',') . ';';

            $db->execute($sql);


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
