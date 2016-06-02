<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Db;

/**
 * PDOのシングルトンを実現
 *
 * @package Db
 */
class Connect
{
    /** @var String $host ホスト名 */
    private $host;

    /** @var String $name DB名 */
    private $name;

    /** @var String $name ユーザ */
    private $user;

    /** @var String $name パスワード */
    private $pass;

    /** @var String $name ポート番号 デフォルト3306 */
    private $port = '3306';

    /** @var String $charset 文字コード デフォルトutf8 */
    private $charset = 'utf8';

    /** @var Boolean $debug デバッグ デフォルトfalse */
    private $debug = false;

    /**
     * 引数をプロパティに代入
     *
     * @param String $host
     * @param String $name
     * @param String $user
     * @param String $pass
     * @return void
     * @codeCoverageIgnore
     */
    public function __construct(
        $host,
        $name,
        $user,
        $pass
    ) {
        $this->host = $host;
        $this->name = $name;
        $this->user = $user;
        $this->pass = $pass;
    }

    /**
     * ポート番号を変更
     *
     * @param String $port
     * @return void
     */
    public function setPort($port)
    {
        $this->port = $port;
    }

    /**
     * 文字コードを変更
     *
     * @param String $charset
     * @return void
     */
    public function setCharset($charset)
    {
        $this->charset = $charset;
    }

    /**
     * debugの実行
     *
     * @param String $debug
     * @return void
     */
    public function setDebug($debug)
    {
        $this->debug = $debug;
    }

    /**
     * PDOを返す
     *
     * @return object
     */
    public function getConnection()
    {
        try {
            $pdo = new \PDO(
                $this->getDsn(),
                $this->user,
                $this->pass,
                array(
                    \PDO::ATTR_EMULATE_PREPARES => false,
                    \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION
                )
            );

        } catch (\PDOException $e) {
            if ($this->debug) {
                $pdo = $e->getMessage();
            } else {
                $pdo = null;
            }
        }

        return $pdo;
    }

    /**
     * dsnを返す
     *
     * @return String
     */
    private function getDsn()
    {
        $dsn   = "mysql:";
        $dsn  .= "host={$this->host};";
        $dsn  .= "port={$this->port};";
        $dsn  .= "dbname={$this->name};";
        $dsn  .= "charset={$this->charset};";

        return $dsn;
    }
}
