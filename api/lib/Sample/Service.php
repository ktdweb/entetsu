<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Sample;

use Lib\Sample\ServiceInterface as ServiceIF;
use Lib\Sample\ServiceSkelton as ServiceSkel;

/**
 * Lib\Sample\ServiceInterfaceのテスト
 *
 * @package Sample
 */
class Service extends ServiceSkel implements ServiceIF
{
    /**
     * {@inheritdoc}
     *
     * @param String $word
     * @return String
     */
    public function say($word)
    {
         return 'service: ' . $word . PHP_EOL;
    }
}
