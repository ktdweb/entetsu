<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Hello;

/**
 * Helloクラス用のテストファイル
 *
 * @package Hello
 */
class HelloTest extends \PHPUnit_Framework_TestCase
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
        $this->object = new Hello;
    }

    /**
     * @ignore
     */
    protected function tearDown()
    {
    }

    /**
     * 正常系 sayメソッドが正しい値を返すか確認
     *
     * @covers Lib\Hello\Hello::say
     * @test   testSayNormal()
     */
    public function testSayNormal()
    {
        $res = $this->object->say();

        $this->assertEquals('Hello!', $res);
    }
}
