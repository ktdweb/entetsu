<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\SwiftMailer;

/**
 * SwiftMailerの初期化クラス
 *
 * @package SwiftMailer
 */
class Init
{
    /** Twigのテンプレートディレクトリseparatorはいらない */
    const TEMPLATE_DIR = 'mail';

    /** Twigのキャッシュディレクトリseparatorはいらない */
    const CACHE_DIR = 'cache';

    /** クラスの保存先 最後にseparatorはいらない */
    const LOG_DIR = 'logs/mail';

    /** メール分割送信の分割数 */
    const INTERVAL_COUNT = 100;

    /** メール分割送信の間隔 */
    const INTERVAL_TIME = 30;

    /** @var String $host ホスト名 */
    private $host;

    /** @var String $port ポート番号 */
    private $port;

    /** @var String $user ユーザ名 */
    private $user;

    /** @var String $pass パスワード */
    private $pass;

    /** @var String $charset 文字コード */
    private $charset;

    /** @var String $path ログファイルパス */
    private $path;

    /** @var Object $logger ログ機能のオブジェクト */
    private $logger;

    /**
     * Swift初期化
     *
     * @param String $host
     * @param String $port
     * @param String $user
     * @param String $pass
     * @param String $charset
     * @return vold
     * @codeCoverageIgnore
     */
    public function __construct(
        $host,
        $port,
        $user,
        $pass,
        $charset = 'iso-2022-jp'
    ) {
        $this->host = $host;
        $this->port = $port;
        $this->user = $user;
        $this->pass = $pass;
        $this->charset = $charset;
        $this->setPath();

        \Swift::init(function () use ($charset) {
            \Swift_DependencyContainer::getInstance()
                ->register('mime.qpheaderencoder')
                ->asAliasOf('mime.base64headerencoder');
            \Swift_Preferences::getInstance()->setCharset(
                $charset
            );
        });
    }

    /**
     * Mailerを返す
     *
     * @return Object
     * @codeCoverageIgnore
     */
    public function getMailer()
    {
        $transport = \Swift_SmtpTransport::newInstance(
            $this->host,
            $this->port
        );

        $transport->setUsername($this->user);
        $transport->setPassword($this->pass);

        $mailer = \Swift_Mailer::newInstance($transport);

        $mailer = $this->setAntiFlood($mailer);
        $mailer = $this->setLog($mailer);

        return $mailer;
    }

    /**
     * Mailerに分割送信機能を追加
     *
     * @param Object $mailer
     * @return Object
     * @codeCoverageIgnore
     */
    private function setAntiFlood(\Swift_Mailer $mailer)
    {
        $mailer->registerPlugin(
            new \Swift_Plugins_AntiFloodPlugin(
                self::INTERVAL_COUNT,
                self::INTERVAL_TIME
            )
        );

        return $mailer;
    }

    /**
     * Mailerにログ機能を追加
     *
     * @param Object $mailer
     * @return object
     * @codeCoverageIgnore
     */
    private function setLog(\Swift_Mailer $mailer)
    {
        $logger = new \Swift_Plugins_Loggers_ArrayLogger();
        $mailer->registerPlugin(
            new \Swift_Plugins_LoggerPlugin($logger)
        );

        $this->logger = $logger;
        return $mailer;
    }

    /**
     * ログファイルのパスを決定
     *
     * @param String $dir
     * @param String $filename
     * @return void
     */
    public function setPath(
        $dir = null,
        $filename = null
    ) {
        if (is_null($dir)) {
            $dir = self::LOG_DIR;
        }

        if (is_null($filename)) {
            $filename = date('ymd');
        }

        $this->path = $dir . '/' . $filename . '.log';
    }

    /**
     * ログファイルのパスを返す
     *
     * @return String
     */
    public function getPath()
    {
        return $this->path;
    }

    /**
     * ログを保存
     *
     * @return void
     */
    public function saveLog()
    {
        $current = '';
        if (file_exists($this->path)) {
            $current .= file_get_contents($this->path);
        }

        $log = $this->logger->dump();
        $current .= $log;

        file_put_contents(
            $this->path,
            $current,
            FILE_APPEND
        );
    }

    /**
     * Twigのテンプレートを反映して返す
     *
     * @param String $template // テンプレートファイル名
     * @param Array $data // テンプレート内ファイルの変数
     * @return void
     * @codeCoverageIgnore
     */
    public function setTemplate($template, $data)
    {
        $dir = self::TEMPLATE_DIR;
        $loader = new \Twig_Loader_Filesystem($dir);
        $this->twig = new \Twig_Environment($loader, array(
            'cache' => self::CACHE_DIR
        ));

        return $this->twig->render(
            $template,
            $data
        );
    }

    /**
     * Swiftのメッセージオブジェクトを返す
     *
     * @param String $subject
     * @param Array $from
     * @param String $body
     * @return Object
     * @codeCoverageIgnore
     */
    public function setMessage(
        $subject,
        $from,
        $body
    ) {
        $message = \Swift_Message::newInstance()
            ->setSubject($subject)
            ->setFrom($from)
            ->setBody($body);

        $message->setCharset($this->charset);
        $message->setEncoder(
            \Swift_Encoding::get7BitEncoding()
        );
        
        return $message;
    }
}
