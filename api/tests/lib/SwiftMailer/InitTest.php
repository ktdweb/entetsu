<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\SwiftMailer;

/**
 * Initクラス用のテストファイル
 *
 * @package SwiftMailer
 */
class InitTest extends \PHPUnit_Framework_TestCase
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
        $this->object = new \Lib\SwiftMailer\Init(
            '127.0.0.1',
            '1025',
            null,
            null
        );
    }

    /**
     * @ignore
     */
    protected function tearDown()
    {
    }

    /**
     * 正常系 変更したパスを返すか
     *
     * @covers Lib\SwiftMailer\Init::setPath()
     * @test testSetPathNormal()
     */
    public function testSetPathNormal()
    {
        $this->object->setPath('dir', 'testfilename');
        $res = $this->object->getPath();
        $ans = 'dir/testfilename.log';
        $this->assertEquals($ans, $res);
    }

    /**
     * 正常系 デフォルトのpathを返すか
     *
     * @covers Lib\SwiftMailer\Init::getPath()
     * @test testGetPathNormal()
     */
    public function testGetPathNormal()
    {
        $res = $this->object->getPath();
        $ans = 'logs/mail/' . date('ymd') .  '.log';
        $this->assertEquals($ans, $res);
    }

    /**
     * 正常系 ログファイルが生成されるか
     *
     * @covers Lib\SwiftMailer\Init::saveLog()
     * @test testSaveLogNormal()
     */
    public function testSaveLogNormal()
    {
        $mailer = $this->object->getMailer();
        $this->object->saveLog();
        $file = $this->object->getPath();
        $this->assertFileExists($file);
    }

    /**
     * 正常系 リターンメールが設定されるか
     *
     * @covers Lib\SwiftMailer\Init::setReturnPath()
     * @test testReturnPathNormal()
     */
    public function testReturnPathNormal()
    {
        $object = new \Lib\SwiftMailer\Init(
            '127.0.0.1',
            '1025',
            null,
            null,
            'failure@example.com'
        );
        $ref = new \ReflectionClass($object);
        $method = $ref->getMethod('setReturnPath');
        $method->setAccessible(true);

        $message = $object->setMessage(
            'test return-path',
            'info@example.com',
            'return-path'
        );
        $headers = $message->getHeaders();
        $res = $headers->has('return-path');
        $this->assertTrue($res);
    }

    /**
     * 異常系エラー Initの第四引数が空ならヘッダもないか
     *
     * @covers Lib\SwiftMailer\Init::setReturnPath()
     * @test testReturnPathError()
     */
    public function testReturnPathError()
    {
        $object = new \Lib\SwiftMailer\Init(
            '127.0.0.1',
            '1025',
            null,
            null
        );
        $ref = new \ReflectionClass($object);
        $method = $ref->getMethod('setReturnPath');
        $method->setAccessible(true);

        $message = $object->setMessage(
            'test return-path',
            'info@example.com',
            'return-path'
        );

        $headers = $message->getHeaders();
        $res = $headers->has('return-path');
        $this->assertFalse($res);
    }

    /**
     * 正常系 ヘッダに設定されるか
     *
     * @covers Lib\SwiftMailer\Init::addTextHeader()
     * @test testAddTextHeader()
     */
    public function testAddTextHeader()
    {
        $message = $this->object->setMessage(
            'test add text hedaer',
            'info@example.com',
            'add text header'
        );

        $headers = $message->getHeaders();
        $res = $headers->has('X-Original-To');
        $this->assertTrue($res);
    }
}
