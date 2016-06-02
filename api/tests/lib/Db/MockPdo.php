<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Db;

/**
 * PDOのMock
 *
 * @package Db
 */
class MockPdo extends \PDO
{
    /**
     * なにもしない
     *
     * @return void
     */
    public function __construct()
    {
    }
}
