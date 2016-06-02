<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Db;

/**
 * GET,POST,PUT,DELETEのスケルトンクラス
 *
 * @package Db
 */
abstract class Db
{
    /** @var Boolean $debug デバッグ状態 */
    protected $debug = false;

    /** @var Object $pdo DBハンドラー */
    protected $pdo;

    /**
     * 引数を代入
     *
     * @param Object $pdo
     * @param Boolean $debug
     * @return void
     * @codeCoverageIgnore
     */
    public function __construct(
        \PDO $pdo
    ) {
        $this->pdo = $pdo;
    }

    /**
     * debugを設定
     *
     * @param Boolean $debug
     * @return void
     */
    public function setDebug($debug)
    {
        $this->debug = $debug;
    }

    /**
     * $dbhを空に
     *
     * @return void
     */
    public function close()
    {
        $this->pdo = null;
    }

    /**
     * $debugがtrueであれば表示
     *
     * @param String $e
     * @return void
     */
    protected function debug($e)
    {
        if ($this->debug) {
            return $e;
        } else {
            return null;
        }
    }

    /**
     * $debugがtrueであれば表示
     *
     * @param String $sql
     * @param Array $values
     * @return void
     */
    abstract public function execute($sql, $values);
}
