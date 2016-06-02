<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Image;

/**
 * Imageクラス用のテストファイル
 *
 * @package Image
 */
class ImageTest extends \PHPUnit_Framework_TestCase
{
    /**
     * setUp method
     *
     * @return void
     */
    protected function setUp()
    {
        parent::setUp();

        $this->object = $this->getObject();
    }

    /**
     * @ignore
     */
    protected function tearDown()
    {
    }

    /**
     * @ignore
     */
    public static function tearDownAfterClass()
    {
        // for testSaveNormal
        
        if (is_file('./test_s.gif')) {
            unlink('./test_s.gif');
        }

        if (is_file('./test_s.jpg')) {
            unlink('./test_s.jpg');
        }

        if (is_file('./test_s.png')) {
            unlink('./test_s.png');
        }
    }

    /**
     * DBUnit拡張でDBのモックを作成
     *
     * @return Object
     */
    public function getObject()
    {
        $mock = $this->getMockForAbstractClass(
            '\Lib\Image\Image'
        );

        return $mock;
    }

    /**
     * 正常系 $filenameの初期値がYmd_Hisで設定されてるか
     *
     * @covers Lib\Image\Image::setFilename()
     * @test testSetFilenameDefaultNormal()
     */
    public function testSetFilenameDefaultNormal()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('filename');
        $ref->setAccessible(true);
        $res = $ref->getValue($this->object);

        $this->assertRegExp('/[0-9]{8}_[0-9]{6}/', $res);
    }

    /**
     * 正常系 $filenameが正しく設定されるか
     *
     * @covers Lib\Image\Image::setFilename()
     * @test testSetFilenameNormal()
     */
    public function testSetFilenameNormal()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('filename');
        $ref->setAccessible(true);
        $this->object->setFilename('test');
        $res = $ref->getValue($this->object);

        $this->assertEquals('test', $res);
    }

    /**
     * 正常系 $prefixが正しく設定されるか
     *
     * @covers Lib\Image\Image::setPrefix()
     * @test testSetPrefixNormal()
     */
    public function testSetPrefixNormal()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('prefix');
        $ref->setAccessible(true);
        $this->object->setPrefix('test');
        $res = $ref->getValue($this->object);

        $this->assertEquals('test', $res);
    }

    /**
     * 正常系 $postfixが正しく設定されるか
     *
     * @covers Lib\Image\Image::setPostfix()
     * @test testSetPostfixormal()
     */
    public function testSetPostfixNormal()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('postfix');
        $ref->setAccessible(true);
        $this->object->setPostfix('test');
        $res = $ref->getValue($this->object);

        $this->assertEquals('test', $res);
    }

    /**
     * 正常系 $destinationが正しく設定されるか
     *
     * @covers Lib\Image\Image::setDestination()
     * @test testSetDestinationNormal()
     */
    public function testSetDestinationNormal()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('destination');
        $ref->setAccessible(true);
        $this->object->setDestination('../coreos');
        $res = $ref->getValue($this->object);

        $this->assertEquals('./', $res);
    }

    /**
     * 正常系 $compressが正しく設定されるか
     *
     * @covers Lib\Image\Image::setCompress()
     * @test testSetCompressNormal()
     */
    public function testSetCompressNormal()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('compress');
        $ref->setAccessible(true);
        $this->object->setCompress(9);
        $res = $ref->getValue($this->object);

        $this->assertEquals('9', $res);
    }

    /**
     * 異常系例外 $compressに数値型以外が与えられたら無視するか
     *
     * @covers Lib\Image\Image::setCompress()
     * @test testSetCompressException()
     */
    public function testSetCompressException()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('compress');
        $ref->setAccessible(true);
        $this->object->setCompress('test');
        $res = $ref->getValue($this->object);

        $this->assertEquals('6', $res);
    }

    /**
     * 正常系 $compressに11以上が与えられたら10以下で返すか
     *
     * @covers Lib\Image\Image::setCompress()
     * @test testSetCompress11Normal()
     */
    public function testSetCompress11Normal()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('compress');
        $ref->setAccessible(true);
        $this->object->setCompress(11);
        $res = $ref->getValue($this->object);

        $this->assertEquals('1', $res);
    }

    /**
     * 正常系 $compressに100が与えられたら10以下で返すか
     *
     * @covers Lib\Image\Image::setCompress()
     * @test testSetCompress100Normal()
     */
    public function testSetCompress100Normal()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('compress');
        $ref->setAccessible(true);
        $this->object->setCompress(100);
        $res = $ref->getValue($this->object);

        $this->assertEquals('10', $res);
    }

    /**
     * 正常系 $compressに101が与えられたら10以下で返すか
     *
     * @covers Lib\Image\Image::setCompress()
     * @test testSetCompress101Normal()
     */
    public function testSetCompress101Normal()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('compress');
        $ref->setAccessible(true);
        $this->object->setCompress(101);
        $res = $ref->getValue($this->object);

        $this->assertEquals('6', $res);
    }

    /**
     * 正常系 getPath()が正しく返されるか
     *
     * @covers Lib\Image\Image::getPath()
     * @test testGetPathNormal()
     */
    public function testGetPathNormal()
    {
        $res = $this->object->getPath();

        $pattern = '/^\.\/[0-9]{8}_[0-9]{6}_s.jpg$/';
        $this->assertRegExp($pattern, $res);
    }

    /**
     * 正常系 gif,jpg,pngを与えたら正しく設定されるか
     *
     * @covers Lib\Image\Image::setImageType()
     * @test testSetImageTypeNormal()
     */
    public function testSetImageTypeNormal()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('imageType');
        $ref->setAccessible(true);
        $this->object->setImageType('jpg');
        $res = $ref->getValue($this->object);

        $this->assertEquals('jpg', $res);
    }

    /**
     * 異常系エラー gif,jpg,png以外を与えたら初期値のままか
     *
     * @covers Lib\Image\Image::setImageType()
     * @test testSetImageTypeException()
     */
    public function testSetImageTypeException()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('imageType');
        $ref->setAccessible(true);
        $this->object->setImageType('tiff');
        $res = $ref->getValue($this->object);

        $this->assertEquals('jpg', $res);
    }

    /**
     * 正常系 GIFの画像が正しく読み込まれるか
     *
     * @covers Lib\Image\Image::detectImageType()
     * @test testDetectImageTypeGifNormal()
     */
    public function testDetectImageTypeGifNormal()
    {
        $class = new \ReflectionClass($this->object);
        $method = $class->getMethod('detectImageType');
        $method->setAccessible(true);
        $source = 'tests/imgs/test.gif';
        $res = $method->invokeArgs(
            $this->object,
            array($source)
        );

        $this->assertEquals(1, $res);
    }

    /**
     * 正常系 JPGの画像が正しく読み込まれるか
     *
     * @covers Lib\Image\Image::detectImageType()
     * @test testDetectImageTypeJpgNormal()
     */
    public function testDetectImageTypeJpgNormal()
    {
        $class = new \ReflectionClass($this->object);
        $method = $class->getMethod('detectImageType');
        $method->setAccessible(true);
        $source = 'tests/imgs/test.jpg';
        $res = $method->invokeArgs(
            $this->object,
            array($source)
        );

        $this->assertEquals(2, $res);
    }

    /**
     * 正常系 PNGの画像が正しく読み込まれるか
     *
     * @covers Lib\Image\Image::detectImageType()
     * @test testDetectImageTypePngNormal()
     */
    public function testDetectImageTypePngNormal()
    {
        $class = new \ReflectionClass($this->object);
        $method = $class->getMethod('detectImageType');
        $method->setAccessible(true);
        $source = 'tests/imgs/test.png';
        $res = $method->invokeArgs(
            $this->object,
            array($source)
        );

        $this->assertEquals(3, $res);
    }

    /**
     * 正常系 Base64の画像が正しく読み込まれるか
     *
     * @covers Lib\Image\Image::detectImageType()
     * @test testDetectImageTypeBase64Normal()
     */
    public function testDetectImageTypeBase64Normal()
    {
        $class = new \ReflectionClass($this->object);
        $method = $class->getMethod('detectImageType');
        $method->setAccessible(true);
        $source = require('tests/imgs/base64.php');
        $res = $method->invokeArgs(
            $this->object,
            array($source)
        );

        $this->assertNotFalse($res);
    }

    /**
     * 異常系例外 予期しない画像の場合例外を返すか
     *
     * @covers Lib\Image\Image::detectImageType()
     * @test testDetectImageTypeException()
     */
    public function testDetectImageTypeException()
    {
        $class = new \ReflectionClass($this->object);
        $method = $class->getMethod('detectImageType');
        $method->setAccessible(true);
        $source = 'tests/imgs/test.doc';
        $res = $method->invokeArgs(
            $this->object,
            array($source)
        );

        $this->assertFalse($res);
    }


    /**
     * 正常系 GIFの画像が正しく読み込まれるか
     *
     * @covers Lib\Image\Image::source()
     * @test testSourceGifNormal()
     */
    public function testSourceGifNormal()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('image');
        $ref->setAccessible(true);
        $source = 'tests/imgs/test.gif';

        $this->object->source($source);
        $res = $ref->getValue($this->object);

        $this->assertNotFalse($res);
    }

    /**
     * 正常系 JPGの画像が正しく読み込まれるか
     *
     * @covers Lib\Image\Image::source()
     * @test testSourceJpgNormal()
     */
    public function testSourceJpgNormal()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('image');
        $ref->setAccessible(true);
        $source = 'tests/imgs/test.jpg';

        $this->object->source($source);
        $res = $ref->getValue($this->object);

        $this->assertNotFalse($res);
    }

    /**
     * 正常系 PNGの画像が正しく読み込まれるか
     *
     * @covers Lib\Image\Image::source()
     * @test testSourcePngNormal()
     */
    public function testSourcePngNormal()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('image');
        $ref->setAccessible(true);
        $source = 'tests/imgs/test.png';

        $this->object->source($source);
        $res = $ref->getValue($this->object);

        $this->assertNotFalse($res);
    }

    /**
     * 正常系 Base64の画像が正しく読み込まれるか
     *
     * @covers Lib\Image\Image::source()
     * @test testSourceBase64Normal()
     */
    public function testSourceBase64Normal()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('image');
        $ref->setAccessible(true);
        $source = require('tests/imgs/base64.php');

        $this->object->source($source);
        $res = $ref->getValue($this->object);

        $this->assertNotFalse($res);
    }

    /**
     * 異常系例外 対応した画像以外であればfalseを返すか
     *
     * @covers Lib\Image\Image::source()
     * @test testSourceException()
     */
    public function testSourceException()
    {
        $class = new \ReflectionClass($this->object);
        $ref = $class->getProperty('image');
        $ref->setAccessible(true);
        $source = 'tests/imgs/test.bmp';

        $this->object->source($source);
        $res = $ref->getValue($this->object);

        $this->assertFalse($res);
    }

    /**
     * 正常系 gifが保存されるか
     *
     * @covers Lib\Image\Image::save()
     * @test testSaveGifNormal()
     */
    public function testSaveGifNormal()
    {
        $this->object->source('tests/imgs/test.gif');
        $this->object->setFilename('test');
        $this->object->setImageType('gif');
        $this->object->save();

        $this->assertFileExists('./test_s.gif');
    }

    /**
     * 正常系 jpgが保存されるか
     *
     * @covers Lib\Image\Image::save()
     * @test testSaveJpgNormal()
     */
    public function testSaveJpgNormal()
    {
        $this->object->source('tests/imgs/test.jpg');
        $this->object->setFilename('test');
        $this->object->save();

        $this->assertFileExists('./test_s.jpg');
    }

    /**
     * 正常系 pngが保存されるか
     *
     * @covers Lib\Image\Image::save()
     * @test testSavePngNormal()
     */
    public function testSavePngNormal()
    {
        $this->object->source('tests/imgs/test.png');
        $this->object->setFilename('test');
        $this->object->setImageType('png');
        $this->object->save();

        $this->assertFileExists('./test_s.png');
    }

    /**
     * 正常系 圧縮率が10でpngが保存されるか
     *
     * @covers Lib\Image\Image::save()
     * @test testSavePngCompressNormal()
     */
    public function testSavePngCompressNormal()
    {
        $this->object->source('tests/imgs/test.png');
        $this->object->setFilename('test');
        $this->object->setCompress(10);
        $this->object->setImageType('png');
        $this->object->save();

        $this->assertFileExists('./test_s.png');
    }

    /**
     * 正常系 圧縮率が0でpngが保存されるか
     *
     * @covers Lib\Image\Image::save()
     * @test testSavePngCompress0Normal()
     */
    public function testSavePng0CompressNormal()
    {
        $this->object->source('tests/imgs/test.png');
        $this->object->setFilename('test');
        $this->object->setCompress(0);
        $this->object->setImageType('png');
        $this->object->save();

        $this->assertFileExists('./test_s.png');
    }

    /**
     * 正常系 pngが保存されるか
     *
     * @covers Lib\Image\Image::save()
     * @test testSaveExceoption()
     */
    public function testSavePngException()
    {
        $this->object->source('tests/imgs/test.bmp');
        $this->object->setFilename('test');
        $res = $this->object->save();

        $expect = '画像作成に失敗しました';
        $this->assertEquals($expect, $res);
    }
}
