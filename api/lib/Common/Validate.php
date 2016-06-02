<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Common;

/**
 * 汎用的なライブラリ
 *
 * @package Common
 */
class Validate
{
    /* isKetai用の一つ目の評価用 */
    const IS_KETAI_FIRST  = '/@(docomo|softbank|disney|ezweb|[dhtkrsnqc]\.vodafone|pdx|d[kij]\.pdx|wm\.pdx)\.ne\.jp$/i';

    /* isKetai用の二つ目の評価用 */
    const IS_KETAI_SECOND = '/@(jp-[dhtkrsnqc]\.ne\.jp|i\.softbank\.jp|willcom\.com|[a-z]+\.biz\.ezweb\.ne\.jp)$/i';

    /**
     * 与えられたメールアドレスが、
     * ガラケー用にキャリアが用意したドメインか判別する
     *
     * 参考:http://d.hatena.ne.jp/iizukaw/20090422
     *
     * @param string $addr
     * @return boolean 該当すればtrueを返す
     */
    public static function isKetai($addr)
    {
        if (preg_match(self::IS_KETAI_FIRST, $addr) or
            preg_match(self::IS_KETAI_SECOND, $addr)
        ) {
            return true;
        } else {
            return false;
        }
    }
}
