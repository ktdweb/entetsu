<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Image;

/**
 * Originalクラス用のテストファイル
 *
 * @package Image
 */
class OriginalTest extends \PHPUnit_Framework_TestCase
{
    /**
     * setUp method
     *
     * @return void
     */
    protected function setUp()
    {
        parent::setUp();

        $this->object = new Original();
    }

    /**
     * @ignore
     */
    protected function tearDown()
    {
    }

    /**
     * 正常系 Imageクラスと同様に$filenameを取得できるか
     *
     * @covers Lib\Image\Original::save()
     * @test testSaveNormal()
     */
    public function testSaveNormal()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('filename');
        $ref->setAccessible(true);
        $res = $ref->getValue($this->object);

        $this->assertRegExp('/[0-9]{8}_[0-9]{6}/', $res);
    }
}
