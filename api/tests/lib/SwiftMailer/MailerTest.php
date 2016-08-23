<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\SwiftMailer;

/**
 * Mailerクラス用のテストファイル
 *
 * @package SwiftMailer
 */
class MailerTest extends \PHPUnit_Framework_TestCase
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
        $swift = new \Lib\SwiftMailer\Init(
            $GLOBALS['MAIL_HOST'],
            $GLOBALS['MAIL_PORT'],
            $GLOBALS['MAIL_USER'],
            $GLOBALS['MAIL_PASS']
        );

        $this->object = new Mailer($swift);
    }

    /**
     * @ignore
     */
    protected function tearDown()
    {
    }

    /**
     * 正常系 メッセージを返すか
     *
     * @covers Lib\SwiftMailer\Mailer::setMessage()
     * @test testSetMessageNormal()
     */
    public function testSetMessageNormal()
    {
        $body = 'hello twig';

        $this->object->setFrom($GLOBALS['MAIL_FROM']);
        $this->object->setName($GLOBALS['MAIL_NAME']);
        $res = $this->object->setMessage(
            'test subject',
            $body
        );

        $this->assertInternalType('object', $res);
    }

    /**
     * 正常系 $formが正しく設定されるか
     *
     * @covers Lib\SwiftMailer\Mailer::setFrom()
     * @test testSetFromNormal()
     */
    public function testSetFromNormal()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('from');
        $ref->setAccessible(true);
        $this->object->setFrom('test@example.com');
        $res = $ref->getValue($this->object);

        $this->assertEquals('test@example.com', $res);
    }

    /**
     * 正常系 $nameが正しく設定されるか
     *
     * @covers Lib\SwiftMailer\Mailer::setName()
     * @test testSetNameNormal()
     */
    public function testSetNameNormal()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('name');
        $ref->setAccessible(true);
        $this->object->setName('システム自動通知');
        $res = $ref->getValue($this->object);

        $this->assertEquals('システム自動通知', $res);
    }

    /**
     * 正常系 添付ファイルを添付してもメッセージも返すか
     *
     * @covers Lib\SwiftMailer\Mailer::setAttachment()
     * @test testSetAttachmentNormal()
     */
    public function testSetAttachmentNormal()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('attach');
        $ref->setAccessible(true);
        $this->object->setAttachment(
            'tests/imgs/test.jpg',
            'image/jpeg'
        );
        $res = $ref->getValue($this->object);

        $this->assertInternalType('object', $res);
    }

    /**
     * 正常系 メッセージを返すか
     *
     * @covers Lib\SwiftMailer\Mailer::send()
     * @test testSetSendNormal()
     */
    public function testSendNormal()
    {
        $body = 'hello twig';

        $this->object->setFrom($GLOBALS['MAIL_FROM']);
        $this->object->setName($GLOBALS['MAIL_NAME']);
        $this->object->setMessage(
            'タイトル',
            $body
        );

        $res = $this->object->send(
            'test@example.com'
        );

        $this->assertEquals(1, $res);
    }

    /**
     * 異常系例外 間違ったメールアドレスでもメッセージを返すか
     *
     * @covers Lib\SwiftMailer\Mailer::send()
     * @test testSetSendExceptionRfc()
     */
    public function testSetSendExceptionRfc()
    {
        $body = 'hello twig';

        $this->object->setFrom($GLOBALS['MAIL_FROM']);
        $this->object->setName($GLOBALS['MAIL_NAME']);
        $this->object->setMessage(
            'タイトル',
            $body
        );

        $res = $this->object->send(
            'failure'
        );

        $this->assertEquals(
            'RFC Compliance Error',
            $res
        );
    }

    /**
     * 正常系 添付画像を含むメッセージを返すか
     *
     * @covers Lib\SwiftMailer\Mailer::send()
     * @test testSetSendAttachmentNormal()
     */
    public function testSendAttachmentNormal()
    {
        $body = 'hello twig';

        $this->object->setAttachment(
            'tests/imgs/test.jpg',
            'image/jpeg',
            'test'
        );

        $this->object->setFrom($GLOBALS['MAIL_FROM']);
        $this->object->setName($GLOBALS['MAIL_NAME']);
        $this->object->setMessage(
            '添付画像テスト',
            $body
        );

        $res = $this->object->send(
            'test@example.com'
        );

        $this->assertEquals(1, $res);
    }

    /**
     * 正常系 X-Original-Toが設定されるか
     *
     * @covers Lib\SwiftMailer\Mailer::setXOriginalTo()
     * @test testSetXOriginalTo()
     */
    public function testSetXOriginalTo()
    {
        $body = 'hello test';

        $this->object->setFrom($GLOBALS['MAIL_FROM']);
        $this->object->setName($GLOBALS['MAIL_NAME']);
        $this->object->setMessage(
            'X-Original-Toテスト',
            $body
        );

        $to = array(1 => 'test@example.com');
        $this->object->setXOriginalTo($to[1]);
        $res = $this->object->send($to);

        $this->assertEquals(1, $res['1']['result']);
    }

    /**
     * 正常系 ログファイルが生成されるか
     *
     * @covers Lib\SwiftMailer\Mailer::saveLog()
     * @test testSetSaveLog()
     */
    public function testSetSaveLog()
    {
        $body = 'hello twig';

        $this->object->setFrom($GLOBALS['MAIL_FROM']);
        $this->object->setName($GLOBALS['MAIL_NAME']);
        $this->object->setMessage(
            'タイトル',
            $body
        );

        $this->object->send(
            'test@example.com'
        );

        $this->object->saveLog();

        $file = $this->object->getPath();
        $this->assertFileExists($file);
    }

    /**
     * 正常系 ログファイルのパスが取得できるか
     *
     * @covers Lib\SwiftMailer\Mailer::getPath()
     * @test testSetGetPath()
     */
    public function testSetGetPath()
    {
        $body = 'hello twig';

        $this->object->setFrom($GLOBALS['MAIL_FROM']);
        $this->object->setName($GLOBALS['MAIL_NAME']);
        $this->object->setMessage(
            'タイトル',
            $body
        );

        $this->object->send(
            'test@example.com'
        );

        $res = $this->object->getPath();

        $this->assertInternalType('string', $res);
    }
}
