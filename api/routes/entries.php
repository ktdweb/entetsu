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
$app->group('/entries', function () {

    /**
     * POST reset
     */
    $this->post(
        '/',
        function (
            $request,
            $response,
            $args
        ) {
            $body = $request->getParsedBody();
            $db = $this->get('db.get');
            $post = $this->get('db.post');
            $delete = $this->get('db.delete');

            // membersからデータを取得
            $sql = 'select * from `members`';
            $sql .= ' WHERE `id` = ?;';

            $res = $db->execute($sql, $body['id']);
            $data = $res[0];

            // worksからデータを取得
            $sql = 'select * from `works`';
            $sql .= ' WHERE `id` = ?;';

            $res = $db->execute($sql, $body['workid']);
            $works = $res[0];

            // entriesに存在すれば削除
            $sql = 'DELETE FROM `entries` WHERE ';
            $sql .= '`member_id` = ? AND `work_id` = ?;';
            $res = $delete->execute(
                $sql,
                array(
                    $body['id'],
                    $body['workid']
                )
            );

            // entriesに登録
            $sql = 'INSERT INTO `entries` ';
            $sql .= '(`member_id`, `work_id`, `created`) ';
            $sql .= ' VALUES (?, ?, NOW());';

            $post->execute(
                $sql,
                array(
                    $body['id'],
                    $body['workid']
                )
            );

            // 応募者用メール送信
            $mailer = $this->get('mailer.text');
            $twig = $this->get('mailer.twig');

            $title = '[お仕事を探す] 応募';
            $template = 'entry_login.twig';
            
            $mailer->setMessage(
                $title,
                $twig->render(
                    $template,
                    array(
                        'name' => $data->name,
                        'mail' => $data->mail,
                        'worktitle' => $works->title,
                        'worktime' => $works->abbr_time
                    )
                )
            );

            $res = $mailer->send($data->mail);

            return $response->withJson(
                $res,
                200,
                $this->get('settings')['withJsonEnc']
            );
        }
    );
});
