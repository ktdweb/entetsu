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
            $newToken = rand(0, 100).uniqid();
            $db = $this->get('db.get');
            $post = $this->get('db.post');
            $put = $this->get('db.put');
            $delete = $this->get('db.delete');

            // membersに登録
            $sql = 'INSERT INTO `members` ';
            $sql .= '(`name`,`furi`,`tel`,`mail`,';
            $sql .= '`created`,`modified`)';
            $sql .= ' VALUES ';
            $sql .= '(?, ?, ?, ?, NOW(), NOW());';
            $memberData = array(
                $body['name'],
                $body['furi'],
                $body['tel'],
                $body['mail']
            );

            $res = $post->execute($sql, $memberData);

            // member_idを取得
            $sql = 'SELECT `id` FROM `members` ';
            $sql .= 'WHERE `mail` = ?;';
            $id = $db->execute($sql, $body['mail']);
            $id = (int)$id[0]->id;

            // members登録済みかどうか判定
            $already = preg_match("/Duplicate\sentry/i", $res);

            // membersに登録済みであれば内容を更新
            if ($already) {
                $sql = 'UPDATE `members` SET ';
                $sql .= '`name`=?,`furi`=?,`tel`=?,';
                $sql .= '`modified`=NOW() WHERE ';
                $sql .= '`mail` = ?;';

                $res = $put->execute($sql, $memberData);
            }

            // entriesに登録済みか判定
            $sql = 'SELECT * FROM `entries` WHERE ';
            $sql .= '`member_id` = ? AND `work_id` = ?;';
            $entryData = array($id, $body['workid']);
            $alreayEntry = $db->execute($sql, $entryData);

            // entriesから削除 (登録済の場合)
            if (!empty($alreayEntry)) {
                $sql = 'DELETE FROM `entries` WHERE ';
                $sql .= '`member_id` = ? AND `work_id` = ?;';
                $res = $delete->execute($sql, $entryData);
            }

            // entriesに登録 (登録済でなければ)
            if (empty($alreadyEntry)) {
                $sql = 'INSERT INTO `entries` ';
                $sql .= '(`member_id`,`work_id`,`created`)';
                $sql .= ' VALUES ';
                $sql .= '(?, ?, NOW());';
                $res = $post->execute($sql, $entryData);
            }

            // tokensに登録済みであれば削除
            $sql = 'DELETE FROM `tokens` WHERE ';
            $sql .= '`member_id` = ?;';
            $res = $delete->execute($sql, $id);

            // tokensに登録
            $sql = 'INSERT INTO `tokens` ';
            $sql .= '(`member_id`,`token`,`created`)';
            $sql .= ' VALUES ';
            $sql .= '(?, ?, NOW());';

            $res = $post->execute(
                $sql,
                array(
                    $id,
                    $newToken
                )
            );

            // 応募者用メール送信
            $mailer = $this->get('mailer.text');
            $twig = $this->get('mailer.twig');

            $title = '[お仕事を探す] ご応募ありがとうございました';
            if (!$already) {
                $body['id'] .= '_already';
            }

            // tel, mail, 登録済みでわける
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
                        'token' => $newToken,
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
                        'token' => $newToken,
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
            $put = $this->get('db.put');
            $delete = $this->get('db.delete');

            // tokensが存在するか確認しmember_idを取得
            $sql = 'SELECT `member_id` FROM `tokens` ';
            $sql .= 'WHERE `token` = ? LIMIT 1';

            $member_id = $db->execute(
                $sql,
                array($body['token'])
            );

            // gender, zip, birthdayを変換
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

            // membersを追加情報で更新
            $sql = 'UPDATE `members` SET ';
            $sql .= ' `password`=?, `zip`=?, `prefecture`=?, ';
            $sql .= '`city`=?,`address`=?, `age`=?, `gender`=?, ';
            $sql .= '`birthday`=?, `detail_flag`=1, ';
            $sql .= ' `modified`=NOW() WHERE `id` = ?;';

            $data = array(
                $body['pw'],
                $zip,
                $body['pref'],
                $body['city'],
                $body['addr'],
                $body['age'],
                $gender,
                $birthday,
                (int)$member_id[0]->member_id,
            );

            $res = $put->execute(
                $sql,
                $data
            );

            // 成功したらtokenを削除
            if ($res == 1) {
                $sql = 'DELETE FROM `tokens` WHERE ';
                $sql .= '`token` = ?;';
                $res = $put->execute(
                    $sql,
                    $body['token']
                );
            }

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
