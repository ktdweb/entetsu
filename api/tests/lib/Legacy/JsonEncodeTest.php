<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Legacy;

/**
 * Helloクラス用のテストファイル
 *
 * @package Legacy
 */
class JsonEncodeTest extends \PHPUnit_Framework_TestCase
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
        $this->object = new JsonEncode;
    }

    /**
     * @ignore
     */
    protected function tearDown()
    {
    }
    
    /**
     * 正常系 '日本語'を'日本語'と返すか
     *
     * @covers Lib\Legacy\JsonEncode::prettyPrint()
     * @test testPrettyPrintNormal()
     */
    public function testPrettyPrintNormal()
    {
        $json = '{"a":"日本語"}';
        $res = JsonEncode::prettyPrint($json);
        $ans = '{'.PHP_EOL.'  "a":"日本語"'.PHP_EOL.'}';
        $this->assertEquals($ans, $res);
    }

    /**
     * 正常系 '日本語'を'日本語'と返すか
     *
     * @covers Lib\Legacy\JsonEncode::jsonXencode()
     * @test testjsonXencodeNormal()
     */
    public function testJsonXencodeNormal()
    {
        $data = array('a' => '日本語');
        $res = JsonEncode::jsonXencode($data);
        $this->assertEquals('{"a":"日本語"}', $res);
    }

    /**
     * 正常系 '\u8a9e'を'語'で返すか
     *
     * @covers Lib\Legacy\JsonEncode::unicodeEncode()
     * @test testUnicodeEncodeNormal()
     */
    public function testUnicodeEncodeNormal()
    {
        $str = '\u8a9e';
        $res = JsonEncode::unicodeEncode($str);
        $this->assertEquals('語', $res);
    }
}
