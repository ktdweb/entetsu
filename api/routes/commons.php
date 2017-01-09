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
$app->group('/commons', function () {


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

            $sql = 'SELECT * FROM `sections` ORDER BY `sort`;';
            $sections = $db->execute($sql);

            $sql = 'SELECT * FROM `wages` ORDER BY `sort`;';
            $wages = $db->execute($sql);

            $sql = '
                SELECT * FROM `categories`
                ORDER BY
                `category_group_id`,
                `sort`;
            ';
            $categories = $db->execute($sql);

            $sql = 'SELECT * FROM `category_groups`;';
            $groups = $db->execute($sql);

            foreach ($sections as $section) {
                $res['sections'][$section->id] = array(
                    'id' => $section->id,
                    'name' => $section->name
                );
            }

            foreach ($wages as $wage) {
                $res['wages'][$wage->id] = array(
                    'id' => $wage->id,
                    'name' => $wage->name
                );
            }

            foreach ($groups as $group) {
                $res['groups'][$group->id] = array(
                    'id' => $group->id,
                    'name' => $group->name
                );
            }

            foreach ($categories as $category) {
                $gid = $category->category_group_id;
                $res['categories'][$gid][] = array(
                    'id' => $category->id,
                    'name' => $category->name
                );
            }

            return $response->withJson(
                $res,
                200,
                $this->get('settings')['withJsonEnc']
            );
        }
    );
});
