<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Routes;

use \Slim\App;
use \Slim\Http\Body;
use \Slim\Http\Environment;
use \Slim\Http\Headers;
use \Slim\Http\Request;
use \Slim\Http\RequestBody;
use \Slim\Http\Response;
use \Slim\Http\Uri;

use \Lib\Db\Get;
use \Lib\Db\Post;
use \Lib\Db\Put;
use \Lib\Db\Delete;

use \Lib\SwiftMailer\Init;
use \Lib\SwiftMailer\Mailer;

use \Lib\Image\Original;
use \Lib\Image\Thumbnail;

/**
 * Slimの拡張
 *
 * @package Routes
 */
class AppMock extends \PHPUnit_Extensions_Database_TestCase
{
    /** @var Object $pdo PDOオブジェクト */
    protected $pdo = null;

    /** @var Object $db getConnectionの返り値  */
    protected $db = null;

    /** @var Object $body bodyオブジェクト */
    protected $body;

    /** @var Object $request requestオブジェクト */
    protected $request;

    /** @var Object $response responseオブジェクト */
    protected $response;

    /**
     * getConnection method
     *
     * @return Object
     */
    public function getConnection()
    {
        $dsn  = "mysql:host={$GLOBALS['DB_HOST']};";
        $dsn .= "dbname={$GLOBALS['DB_NAME']};";

        if ($this->db == null) {
            if ($this->pdo == null) {
                $this->pdo = new \PDO(
                    $dsn,
                    $GLOBALS['DB_USER'],
                    $GLOBALS['DB_PASS']
                );
            }

            $this->db = $this->createDefaultDBConnection(
                $this->pdo,
                $dsn
            );
        }

        return $this->db;
    }

    /**
     * getDataSet method
     *
     * @return Object
     */
    public function getDataSet()
    {
        return new \PHPUnit_Extensions_Database_DataSet_YamlDataSet(
            dirname(__FILE__) . '/../fixtures/users.yml'
        );
    }

    /**
     * setUp method
     *
     * @return void
     */
    protected function setUp()
    {
        parent::setUp();

        $this->db = $this->getConnection();

        $this->body = new RequestBody();
    }

    /**
     * @ignore
     */
    protected function tearDown()
    {
    }

    /**
     * SlimアプリケーションのMockを作成
     *
     * @param String $path アクセスするURI
     * @param String $method 使用するhttpメソッド
     * @return Object
     */
    protected function create(
        $path,
        $method = 'GET'
    ) {
        $app = new App();

        $env = Environment::mock([
            'REQUEST_URI' => $path,
            'REQUEST_METHOD' => $method
        ]);

        $uri = Uri::createFromEnvironment($env);
        //$headers = Headers::createFromEnvironment($env);
        $headers = new Headers([
            'Content-Type' => 'application/json;charset=utf8'
        ]);
        $cookies = [];
        $serverParams = $env->all();

        $this->request = new Request(
            $method,
            $uri,
            $headers,
            $cookies,
            $serverParams,
            $this->body
        );

        $this->response = new Response();

        $this->setContainer($app->getContainer());

        return $app;
    }

    /**
     * bodyを設定 POST, PUTなど
     *
     * @param String $body // 投げるJSON
     * @return void
     */
    protected function setRequestBody($body)
    {
        $this->body->write($body);
        $this->body->rewind();
    }

    /**
     * Slim appのインスタンスを作成し実行
     *
     * @param Object $app Slimのapp
     * @return void
     */
    protected function invoke($app)
    {
        return $app($this->request, $this->response);
    }

    /**
     * コンテナを追加
     *
     * @param Object $container コンテナオブジェクト
     * @return void
     */
    private function setContainer($container)
    {
        $container['db.get'] = function ($c) {
            $obj = new Get($this->pdo);
            $obj->setDebug(true);

            return $obj;
        };

        $container['db.post'] = function ($c) {
            $obj = new Post($this->pdo);
            $obj->setDebug(true);

            return $obj;
        };

        $container['db.put'] = function ($c) {
            $obj = new Put($this->pdo);
            $obj->setDebug(true);

            return $obj;
        };

        $container['db.delete'] = function ($c) {
            $obj = new Delete($this->pdo);
            $obj->setDebug(true);

            return $obj;
        };

        $container['mailer'] = function ($c) {
            $transport = new Init(
                $GLOBALS['MAIL_HOST'],
                $GLOBALS['MAIL_PORT'],
                $GLOBALS['MAIL_USER'],
                $GLOBALS['MAIL_PASS']
            );

            $mailer = new Mailer($transport);
            $mailer->setFrom($GLOBALS['MAIL_FROM']);
            $mailer->setName($GLOBALS['MAIL_NAME']);

            return $mailer;
        };

        $container['image.original'] = function ($c) {
            $original = new Original();
            $original->setDestination = './';
            $original->setFilename = 'test';
            $original->setCompress = 0;
            $original->setImageType = 'png';

            return $original;
        };

        $container['image.thumbnail'] = function ($c) {
            $thumbnail = new Thumbnail();
            $thumbnail->setDestination = './';
            $thumbnail->setFilename = 'test';
            $thumbnail->setPostfix = '_s';
            $thumbnail->setCompress = 70;
            $thumbnail->setWidth = '200';
            $thumbnail->setHeight = '200';
            $thumbnail->setImageType = 'jpg';

            return $thumbnail;
        };
    }
}
