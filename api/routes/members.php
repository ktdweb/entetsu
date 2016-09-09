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
$app->group('/members', function () {

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
            $sql = 'select * from `users`';

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
     * POST add
     */
    $this->post(
        '/',
        function (
            $request,
            $response,
            $args
        ) {
            $body = $request->getParsedBody();
            $token = '';

            $db = $this->get('db.post');
            $sql = 'INSERT INTO `members` ';
            $sql .= '(`name`,`furi`,`tel`,`mail`)';
            $sql .= ' VALUES ';
            $sql .= '(?, ?, ?, ?);';

            $res = $db->execute(
                $sql,
                array(
                    $body['name'],
                    $body['furi'],
                    $body['tel'],
                    $body['mail']
                )
            );

            $resAdd = preg_match("/Duplicate\sentry/i", $res);
            $token = rand(0, 100).uniqid();

            if ($resAdd) {
                $id = $db->execute('SELECT last_insert_id();');

                $sql = 'INSERT INTO `tokens` ';
                $sql .= '(`member_id`,`token`,`created`)';
                $sql .= ' VALUES ';
                $sql .= '(?, ?, NOW());';

                $res = $db->execute(
                    $sql,
                    array(
                        $id,
                        $token
                    )
                );

                $body['id'] .= '_already';
            }

            $mailer = $this->get('mailer.text');
            $twig = $this->get('mailer.twig');

            // 応募者用メール送信
            $title = '[お仕事を探す] ご応募ありがとうございました';
            switch ($body['id']) {
                case 'modalTel':
                    $template = 'entry_tel.twig';
                    break;
                case 'modalMail':
                    $template = 'entry_mail.twig';
                    break;
                case 'modalTel_already':
                    $template = 'entry_tel_already.twig';
                    break;
                case 'modalMail_already':
                    $template = 'entry_tel_already.twig';
                    break;
                default:
                    // no op
                    break;
            }
            
            $mailer->setMessage(
                $title,
                $twig->render(
                    $template,
                    array(
                        'name' => $body['name'],
                        'mail' => $body['mail'],
                        'token' => $token,
                        'workid' => $body['workid'],
                        'worktitle' => $body['worktitle'],
                        'worktime' => $body['worktime']
                    )
                )
            );

            $res = $mailer->send($body['mail']);

            // 管理社用メール送信
            $mailer->setMessage(
                'ホームページより応募がありました',
                $twig->render(
                    'entry_admin.twig',
                    array(
                        'name' => $body['name'],
                        'tel' => $body['tel'],
                        'mail' => $body['mail'],
                        'token' => $token,
                        'workid' => $body['workid'],
                        'worktitle' => $body['worktitle'],
                        'worktime' => $body['worktime'],
                        'type' => $body['id']
                    )
                )
            );

            $res = $mailer->send('keiji@seeknetusa.com');

            return $response->withJson(
                $res,
                200,
                $this->get('settings')['withJsonEnc']
            );
        }
    );

    /**
     * POST set
     */
    $this->post(
        '/set/',
        function (
            $request,
            $response,
            $args
        ) {
            $body = $request->getParsedBody();

            $db = $this->get('db.get');

            $sql = 'SELECT `member_id` FROM `tokens` ';
            $sql .= 'WHERE `token` = ? LIMIT 1';

            $member_id = $db->execute(
                $sql,
                array($body['token'])
            );

            $gender = 1;
            if ($body['gender'] != '女性') {
                $gender = 2;
            }

            $zip = preg_replace("/-/", "", $body['zip']);
            $birthday = preg_replace(
                "/\//",
                "-",
                $body['birthday']
            );

            $sql = 'UPDATE `members` SET ';
            $sql .= ' `password`=?, `zip`=?, `prefecture`=?, ';
            $sql .= '`city`=?,`address`=?, `age`=?, `gender`=?, ';
            $sql .= '`birthday`=?, `detail_flag`=1 ';
            $sql .= 'WHERE `id` = ?;';

            $data = array(
                $body['pw'],
                $zip,
                $body['pref'],
                $body['city'],
                $body['addr'],
                $body['age'],
                1,
                $birthday,
                $member_id[0]->member_id,
            );

            $put = $this->get('db.put');
            $res = $put->execute(
                $sql,
                $data
            );

            return $response->withJson(
                $res,
                200,
                $this->get('settings')['withJsonEnc']
            );
        }
    );

    /**
     * POST login
     */
    $this->post(
        '/login',
        function (
            $request,
            $response,
            $args
        ) {
            $body = $request->getParsedBody();

            $db = $this->get('db.get');
            $sql = 'select `name` from `members`';
            $sql .= ' WHERE `mail` = ? AND `password` = ?';
            $sql .= ' LIMIT 1';

            $res = $db->execute(
                $sql,
                array($body['id'], $body['password'])
            );

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
