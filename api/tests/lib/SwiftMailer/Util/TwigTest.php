<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\SwiftMailer\Util;

/**
 * Initクラス用のテストファイル
 *
 * @package SwiftMailer
 */
class TwigTest extends \PHPUnit_Framework_TestCase
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
        $this->object = new \Lib\SwiftMailer\Util\Twig();
    }

    /**
     * @ignore
     */
    protected function tearDown()
    {
    }

    /**
     * 正常系 テンプレートを返すか
     *
     * @covers Lib\SwiftMailer\Util\Twig::render()
     * @test testRenderNormal()
     */
    public function testRenderNormal()
    {
        $res = $this->object->render(
            'defaultTest.twig',
            array('name' => 'twig')
        );

        $this->assertEquals('Hello twig' . PHP_EOL, $res);
    }

    /**
     * 正常系 第二引数が空でも成立するか
     *
     * @covers Lib\SwiftMailer\Util\Twig::render()
     * @test testRenderEmptyNormal()
     */
    public function testRenderEmptyNormal()
    {
        $res = $this->object->render(
            'defaultTest.twig'
        );

        $this->assertEquals('Hello ' . PHP_EOL, $res);
    }
}
