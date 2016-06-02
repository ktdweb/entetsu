<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Db;

/**
 * Connectクラス用のテストファイル
 *
 * @package Db
 */
class ConnectTest extends \PHPUnit_Framework_TestCase
{
    /** @var Object $object 対象クラス */
    protected $object;

    /**
     * setUp method
     *
     * @return void
     */
    protected function setUp()
    {
        $this->object = new \Lib\Db\Connect(
            $GLOBALS['DB_HOST'],
            $GLOBALS['DB_NAME'],
            $GLOBALS['DB_USER'],
            $GLOBALS['DB_PASS']
        );
    }

    /**
     * @ignore
     */
    protected function tearDown()
    {
    }

    /**
     * 正常系 $this->portに正常にsetされるか
     *
     * @covers Lib\Db\Connect::setPort()
     * @test testSetPort()
     */
    public function testSetPort()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('port');
        $ref->setAccessible(true);
        $this->object->setPort('2205');
        $res = $ref->getValue($this->object);

        $this->assertEquals('2205', $res);
    }

    /**
     * 正常系 $this->charsetに正常にsetされるか
     *
     * @covers Lib\Db\Connect::setCharset()
     * @test testSetCharset()
     */
    public function testSetCharset()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('charset');
        $ref->setAccessible(true);
        $this->object->setCharset('euc-jp');
        $res = $ref->getValue($this->object);

        $this->assertEquals('euc-jp', $res);
    }

    /**
     * 正常系 $this->debugに正常にsetされるか
     *
     * @covers Lib\Db\Connect::setDebug()
     * @test testSetDebug()
     */
    public function testSetDebug()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('debug');
        $ref->setAccessible(true);
        $this->object->setDebug(true);
        $res = $ref->getValue($this->object);

        $this->assertTrue($res);
    }

    /**
     * 正常系 getConnectionがPDOを返すか
     *
     * @covers Lib\Db\Connect::getConnection()
     * @test testGetConnectionNormal()
     */
    public function testGetConnectionNormal()
    {
        $res = $this->object->getConnection();
        $this->assertInstanceOf('PDO', $res);
    }

    /**
     * 異常系例外 debugがtrueであれば例外を返すか
     *
     * @covers Lib\Db\Connect::getConnection()
     * @test testGetConnectionTrue()
     */
    public function testGetConnectionExceptionTrue()
    {
        try {
            $db = new \Lib\Db\Connect(
                'xxx',
                'xxx',
                'xxx',
                'xxx'
            );
            $db->setDebug(true);
            $res = $db->getConnection();
            $this->fail('fail');
        } catch (\Exception $e) {
            $this->assertInternalType('string', $res);
        }
    }

    /**
     * 異常系例外 debugがであればnullを返すか
     *
     * @covers Lib\Db\Connect::getConnection()
     * @test testGetConnectionTrue()
     */
    public function testGetConnectionExceptionFalse()
    {
        try {
            $db = new \Lib\Db\Connect(
                'xxx',
                'xxx',
                'xxx',
                'xxx'
            );
            $res = $db->getConnection();
            $this->fail('fail');
        } catch (\Exception $e) {
            $this->assertNull($res);
        }
    }

    /**
     * 正常系 dsnを返すか
     *
     * @covers Lib\Db\Connect::getDsn()
     * @test testGetDsn()
     */
    public function testGetDsn()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getMethod('getDsn');
        $ref->setAccessible(true);
        $res = $ref->invoke($this->object);
        $this->assertInternalType('string', $res);
    }
}
