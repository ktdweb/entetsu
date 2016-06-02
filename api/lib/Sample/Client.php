<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Sample;

use Lib\Sample\ServiceInterface as ServiceIF;

/**
 * 注入される側のクラス
 *
 * @package Sample
 */
class Client
{
    /**
     * 注入したオブジェクト
     *
     * @var Object $service
     */
    private $service;

    /**
     * 引数でインスタンスを注入
     *
     * @param ServiceIF $service
     * @return void
     */
    public function __construct(ServiceIF $service)
    {
        $this->service = $service;
    }

    /**
     * 注入されたオブジェクトのsayメソッドに引数を渡す
     *
     * @param String $word
     * @return String
     */
    public function say($word)
    {
        return $this->service->say($word);
    }
}
