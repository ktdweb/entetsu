<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\SwiftMailer;

/**
 * 実際にメールを送る
 *
 * @package SwiftMailer
 */

class Mailer
{
    /** @var Object #swift Swiftオブジェクト */
    private $swift;

    /** @var Object #message メッセージオブジェクト */
    private $message;

    /** @var String $form 送り主のアドレス */
    private $from;

    /** @var String $name 送り主の名前 */
    private $name;

    /** @var Object $attach 添付画像 */
    private $attach = null;

    /**
     * Swiftオブジェクトを代入
     *
     * @param Object $swift
     * @return void
     * @codeCoverageIgnore
     */
    public function __construct(
        \Lib\SwiftMailer\Init $swift
    ) {
        $this->swift = $swift;
    }

    /**
     * Twigのテンプレートを反映して返す
     *
     * @param String $template
     * @param Array $data
     * @return Object
     */
    public function setTemplate(
        $template,
        $data
    ) {
        return $this->swift->setTemplate(
            $template,
            $data
        );
    }

    /**
     * メッセージを返す
     *
     * @param String $subject
     * @param String $body
     * @return Object
     */
    public function setMessage(
        $subject,
        $body
    ) {
        $this->message = $this->swift->setMessage(
            $subject,
            array($this->from => $this->name),
            $body
        );

        return $this->message;
    }

    /**
     * 送り主のアドレスを設定
     *
     * @param String $from
     * @return void
     */
    public function setFrom($from)
    {
        $this->from = $from;
    }

    /**
     * 送り主の名前を設定
     *
     * @param String $name
     * @return void
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * 添付ファイルを設定
     *
     * @param String $path
     * @param String $contentType
     * @param String $filename
     * @return void
     */
    public function setAttachment(
        $path,
        $contentType = 'image/jpeg',
        $filename = null
    ) {
        $attach = \Swift_Attachment::fromPath($path);

        if ($contentType) {
            $attach->setContentType($contentType);
        }

        if ($filename) {
            $attach->setFilename($filename);
        }

        $this->attach = $attach;
    }

    /**
     * 実際に送る
     *
     * @param Array $to
     * @return void
     */
    public function send($to)
    {
        $mailer = $this->swift->getMailer();

        if ($this->attach) {
            $this->message->attach($this->attach);
        }

        $i = 1;
        foreach ((Array)$to as $addr) {
            try {
                $this->message->setTo((Array)$addr);

                $res[$i] = $mailer->send(
                    $this->message,
                    $failures
                );
            } catch (\Swift_RfcComplianceException $e) {
                $res[$i] = 'RFC Compliance Error';
            }

            $i++;
        }

        return $res;
    }

    /**
     * ログを保存する
     *
     * @return void
     */
    public function saveLog()
    {
        $this->swift->saveLog();
    }

    /**
     * ログの保存先を返す
     *
     * @return String
     */
    public function getPath()
    {
        return $this->swift->getPath();
    }
}
