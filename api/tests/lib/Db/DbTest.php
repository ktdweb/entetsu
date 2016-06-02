<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Db;

/**
 * Dbクラス用のテストファイル
 *
 * @package Db
 */
class DbTest extends \PHPUnit_Extensions_Database_TestCase
{
    /** @var Object $pdo PDOオブジェクト */
    protected $pdo;

    /** @var Object $db getConnectionの返り値  */
    protected $db;

    /** @var Object $object 対象クラス */
    protected $object;

    /**
     * getConnection method
     *
     * @return Object
     */
    public function getConnection()
    {
        $dsn  = "mysql:host={$GLOBALS['DB_HOST']};";
        $dsn .= "dbname={$GLOBALS['DB_NAME']};";
        $this->pdo = new \PDO(
            $dsn,
            $GLOBALS['DB_USER'],
            $GLOBALS['DB_PASS']
        );

        return $this->createDefaultDBConnection(
            $this->pdo,
            $dsn
        );
    }

    /**
     * getDataSet method
     *
     * @return Object
     */
    public function getDataSet()
    {
        return new \PHPUnit_Extensions_Database_DataSet_YamlDataSet(
            dirname(__FILE__) . '/../../fixtures/users.yml'
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

        $this->object = $this->getObject();
    }

    /**
     * @ignore
     */
    protected function tearDown()
    {
    }

    /**
     * DBUnit拡張でDBのモックを作成
     *
     * @return Object
     */
    public function getObject()
    {
        $mock = $this->getMockForAbstractClass(
            '\Lib\Db\Db',
            array($this->pdo)
        );

        return $mock;
    }

    /**
     * 正常系 falseを返すか
     *
     * @covers Lib\Db\Db::setDebug()
     * @test testSetDebugNormal()
     */
    public function testSetDebugNormal()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('debug');
        $ref->setAccessible(true);
        $this->object->setDebug(true);
        $res = $ref->getValue($this->object);

        $this->assertTrue($res);
    }

    /**
     * nullを返すか
     *
     * @covers Lib\Db\Db::close()
     * @test testClose()
     */
    public function testClose()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('pdo');
        $ref->setAccessible(true);
        $this->object->close();
        $res = $ref->getValue($this->object);

        $this->assertNull($res);
    }

    /**
     * debugがtrueであればExceptionを返すか
     *
     * @covers Lib\Db\Db::debug()
     * @test testDebugTrue()
     */
    public function testDebugTrue()
    {
        $e = 'fail';
        $this->object->setDebug(true);
        $ref = new \ReflectionClass($this->object);
        $method = $ref->getMethod('debug');
        $method->setAccessible(true);
        $res = $method->invokeArgs(
            $this->object,
            array($e)
        );
        $this->assertEquals('fail', $res);
    }

    /**
     * debugがfalseであればExceptionを返すか
     *
     * @covers Lib\Db\Db::debug()
     * @test testDebugFalse()
     */
    public function testDebugFalse()
    {
        $e = 'fail';
        $this->object->setDebug(false);
        $ref = new \ReflectionClass($this->object);
        $method = $ref->getMethod('debug');
        $method->setAccessible(true);
        $res = $method->invokeArgs(
            $this->object,
            array($e)
        );
        $this->assertNull($res);
    }
}
