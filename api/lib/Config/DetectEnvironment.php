<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Config;

/**
 * アプリケーション設定
 *
 * @package Config
 */
class DetectEnvironment
{
    /** 開発環境の名前 */
    const DEVELOPMENT = 'development';

    /** 本番環境の名前 */
    const PRODUCTION  = 'production';

    /** @var Boolean $ips 与えられたips */
    public $ips = null;

    /** @var Boolean $flag productionであればtrue */
    public $flag = false;

    /** @var String $mode proxiesはIPの3つまでで判断 */
    private $mode = 'proxie';


    /**
     * 与えられた引数をcheckIps()にかけ結果を返す
     *
     * Arrayにキャストする
     * $flagに代入する
     *
     * @param Mixed $ips
     */
    public function __construct($ips)
    {
        $this->ips = (array)$ips;
        $this->flag = $this->checkIps();
    }

    /**
     * SERVER_ADDRと比較し結果を返す
     *
     * @param Array $ips
     * @return Boolean
     */
    public function checkIps()
    {
        $flag = false;
        $serverAddr = $this->getServerAddr();

        foreach ($this->ips as $val) {
            if ($serverAddr == $this->checkIp($val)) {
                $flag = true;
            }
        }

        return $flag;
    }

    /**
     * 環境変数のSERVER_ADDRを取得
     *
     * @return String
     */
    public function getServerAddr()
    {
        $res = null;

        if (isset($_SERVER['SERVER_ADDR'])) {
            $res = $this->checkIp($_SERVER['SERVER_ADDR']);
        }

        return $this->convertIp($res);
    }

    /**
     * 正しい書式かどうか確認
     *
     * @param String $addr
     * @return String
     */
    public function checkIp($addr)
    {
        $res = null;

        if (filter_var($addr, FILTER_VALIDATE_IP)) {
            $res = $addr;
        }

        return $this->convertIp($res);
    }

    /**
     * production環境であればtrueを返す
     *
     * @return boolean
     */
    public function evalProduction()
    {
        return $this->checkIps();
    }

    /**
     * development環境であればtrueを返す
     *
     * @return boolean
     */
    public function evalDevelopment()
    {
        return !$this->checkIps();
    }

    /**
     * booleanの代わりにenvironment名を返す
     *
     * @return String
     */
    public function getName()
    {
        $res = self::DEVELOPMENT;
        if ($this->checkIps()) {
            $res = self::PRODUCTION;
        }

        return $res;
    }

    /**
     * $modeをset
     *
     * @param String $mode
     * @return void
     * @codeCoverageIgnore
     */
    public function setMode($mode)
    {
        $this->mode = $mode;
    }

    /**
     * IPのネットワークIDのみ返す
     *
     * @param String $ip
     * @return String
     */
    private function convertIp($ip)
    {
        if ($this->mode == 'proxies') {
            $pattern = '/^([0-9]+\.[0-9]+\.[0-9]+)/';
            preg_match($pattern, $ip, $match);
            $ip = array_shift($match);
        }

        return $ip;
    }
}
