<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Image;

/**
 * オリジナル画像を保存するクラス
 *
 * @package Image
 */
class Original extends Image
{
    /** @var String $postfix ファイル名接尾辞 */
    protected $postfix = '';

    /**
     * なにもせずそのまま保存
     *
     * @return void
     * @codeCoverageIgnore
     */
    public function save()
    {
        parent::save();
    }
}
