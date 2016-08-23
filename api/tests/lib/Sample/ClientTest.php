<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Sample;

/**
 * Lib\Sample\Clientのテスト
 *
 * @package Sample
 */
class ClientTest extends \PHPUnit_Framework_TestCase
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
        $service = $this->createMock(
            'Lib\Sample\ServiceInterface',
            array('say')
        );
        $service->expects($this->any())
          ->method('say')
          ->with($this->equalTo('tes'))
          ->will($this->returnValue('nayn'));

        $this->object = new Client($service);
    }

    /**
     * @ignore
     */
    protected function tearDown()
    {
    }

    /**
     * 正常系 正しい文字列を返すか
     *
     * @covers Lib\Sample\Client::__construct
     * @test   Implement testConstructNormal().
     */
    public function testConstructNormal()
    {
        $this->assertNotNull($this->object);
    }

    /**
     * 正常系 正しい文字列を返すか
     *
     * @covers Lib\Sample\Client::say
     * @test   testSayNormal()
     */
    public function testSayNormal()
    {
        $res = $this->object->say('tes');
        $this->assertEquals('nayn', $res);
    }
}
