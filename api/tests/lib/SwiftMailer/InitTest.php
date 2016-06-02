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
}
