<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Image;

/**
 * サムネイルを作成し保存するクラス
 *
 * @package Image
 */
class Thumbnail extends Image
{
    /** @var Int $width 保存する横幅 初期値は16:9 */
    private $width = 224;

    /** @var Int $height 保存する縦幅 初期値は16:9 */
    private $height = 126;

    /** @var Object $canvas 空のImage用オブジェクト */
    private $canvas;

    /**
     * $widthを設定
     *
     * @param String $width
     * @return void
     */
    public function setWidth($width)
    {
        $this->width = (int)$width;
    }

    /**
     * $heightを設定
     *
     * @param String $height
     * @return void
     */
    public function setHeight($height)
    {
        $this->height = (int)$height;
    }

    /**
     * 画像編集用のイメージをメモリに作成
     *
     * @return void
     */
    private function copy()
    {
        $this->canvas = imagecreatetruecolor(
            $this->width,
            $this->height
        );

        imagecopyresampled(
            $this->canvas,
            $this->image,
            0,
            0,
            0,
            0,
            $this->width,
            $this->height,
            imagesx($this->image),
            imagesy($this->image)
        );

        $this->image = $this->canvas;
    }

    /**
     * なにもせずそのまま保存
     *
     * @return void
     */
    public function save()
    {
        $this->copy();

        parent::save();

        imagedestroy($this->canvas);
    }
}
