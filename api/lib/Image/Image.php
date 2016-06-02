<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Image;

/**
 * Imageのスケルトンクラス
 *
 * @package Image
 */
abstract class Image
{
    /** @var String $filename ファイル名 */
    protected $filename = null;

    /** @var String $prefix ファイル名接頭辞 */
    protected $prefix = null;

    /** @var String $postfix ファイル名接尾辞 */
    protected $postfix = '_s';

    /** @var String $destination 保存先 */
    protected $destination = './';

    /** @var String $ext 保存する画像タイプ */
    protected $imageType = 'jpg';

    /** @var Int $compress 圧縮率 */
    protected $compress = 6;

    /** @var Object $pmage 画像ソース */
    protected $image;

    /**
     * コンストラクタ
     *
     * @return void
     * @codeCoverageIgnore
     */
    public function __construct()
    {
        $this->setFilename(date('Ymd_His'));
    }

    /**
     * $filenameを設定
     *
     * @param String $filename
     * @return void
     */
    public function setFilename($filename)
    {
        $this->filename = $filename;
    }

    /**
     * $prefixを設定
     *
     * @param String $prefix
     * @return void
     */
    public function setPrefix($prefix)
    {
        $this->prefix = $prefix;
    }

    /**
     * $postfixを設定
     *
     * @param String $postfix
     * @return void
     */
    public function setPostfix($postfix)
    {
        $this->postfix = $postfix;
    }

    /**
     * $destinationを設定
     *
     * @param String $path
     * @return void
     */
    public function setDestination($path)
    {
        if (is_dir($path) && is_writable($path)) {
            $this->destination = $path;
        }
    }

    /**
     * $imageTypeを設定
     *
     * @param String $imageType
     * @return void
     */
    public function setImageType($imageType)
    {
        $type = array('gif', 'jpg', 'png');
        if (in_array($imageType, $type, true)) {
            $this->imageType = $imageType;
        } else {
            $this->imageType = 'jpg';
        }
    }

    /**
     * $compressを設定
     *
     * @param Int $val
     * @return void
     */
    public function setCompress($val)
    {
        if (is_int($val) && $val >= 0 && $val <= 100) {
            if ($val > 10) {
                $val = round($val / 10, 0);
            }
            $this->compress = $val;
        }
    }

    /**
     * ファイル名を含めたパスを結合し返す
     *
     * @return void
     */
    public function getPath()
    {
        $path  = $this->destination;
        $path .= $this->prefix;
        $path .= $this->filename;
        $path .= $this->postfix;
        $path .= '.' . $this->imageType;

        return $path;
    }

    /**
     * ソースを読込しimageオブジェクトに変換
     *
     * @param Mixed $source
     * @return void
     */
    public function source($source)
    {
        $type = $this->detectImageType($source);

        switch ($type) {
            case 1: // IMAGETYPE_GIF
                $image = imagecreatefromgif($source);
                break;
            case 2: // IMAGETYPE_JPG
                $image = imagecreatefromjpeg($source);
                break;
            case 3: // IMAGETYPE_PNG
                $image = imagecreatefrompng($source);
                break;
            case 'BASE64':
                $base64 = base64_decode($source);
                $image = imagecreatefromstring($base64);
                break;
            default:
                $image = false;
                break;
        }

        $this->image = $image;
    }

    /**
     * 画像を保存
     *
     * @return void
     */
    public function save()
    {
        $path = $this->getPath();

        try {
            switch ($this->imageType) {
                case 'gif':
                    imagegif($this->image, $path);
                    chmod($path, 0755);
                    break;
                case 'jpg':
                    imagejpeg(
                        $this->image,
                        $path,
                        $this->compress * 10
                    );
                    chmod($path, 0755);
                    break;
                case 'png':
                    $compress = 10 - $this->compress;
                    if ($compress == 10) {
                        $compress = 9;
                    }
                    imagepng(
                        $this->image,
                        $path,
                        $compress
                    );
                    chmod($path, 0755);
                    break;
            }
        } catch (\Exception $e) {
            return '画像作成に失敗しました';
        }
    }

    /**
     * ソースの画像タイプを特定
     *
     * @param Mixed $source
     * @return String
     */
    private function detectImageType($source)
    {
        if (base64_decode($source, true)) {
            $type = 'BASE64';
        } else {
            $type = exif_imagetype($source);
        }

        return $type;
    }
}
