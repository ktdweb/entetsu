<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Routes;

/**
 * tokens
 */
$app->group('/tokens', function () {

    /**
     * POST check
     */
    $this->post(
        '/check',
        function (
            $request,
            $response,
            $args
        ) {
            $body = $request->getParsedBody();

            $db = $this->get('db.get');
            $sql = 'select `created` from `tokens`';
            $sql .= ' WHERE `token` = ?;';

            $res = $db->execute($sql, $body['token']);
            $res = $res[0]->created;

            $created = strtotime("+24 hour", strtotime($res));
            $now = strtotime('now');
            if ($created < $now) {
                $res = array();
            }

            return $response->withJson(
                $res,
                200,
                $this->get('settings')['withJsonEnc']
            );
        }
    );

    /**
     * POST reset
     */
    $this->post(
        '/reset',
        function (
            $request,
            $response,
            $args
        ) {
            $body = $request->getParsedBody();
            $newToken = rand(0, 100).uniqid();
            $post = $this->get('db.post');
            $delete = $this->get('db.delete');

            $db = $this->get('db.get');
            $sql = 'select * from `members`';
            $sql .= ' WHERE `mail` = ?;';

            $res = $db->execute($sql, $body['mail']);
            $id = $res[0]->id;
            $body = $res[0];

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

            $title = '[お仕事を探す] パスワード設定ページ再発行';
            $template = 'token_reset.twig';
            
            $mailer->setMessage(
                $title,
                $twig->render(
                    $template,
                    array(
                        'name' => $body->name,
                        'mail' => $body->mail,
                        'token' => $newToken,
                    )
                )
            );

            $res = $mailer->send($body->mail);

            return $response->withJson(
                $res,
                200,
                $this->get('settings')['withJsonEnc']
            );
        }
    );
});
