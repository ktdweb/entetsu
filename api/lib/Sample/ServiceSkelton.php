<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Sample;

/**
 * Serviceの雛形クラス
 *
 * @package Sample
 */
abstract class ServiceSkelton
{

    /**
     * 雛形自体が出力
     *
     * @return String
     */
    public function __construct()
    {
        return 'loading... service skel' . PHP_EOL;
    }

    /**
     * 引数を合わせ返す
     *
     * @param String $word
     * @return String
     */
    abstract public function say($word);
}
