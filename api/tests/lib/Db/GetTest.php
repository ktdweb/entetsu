<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Db;

/**
 * Getクラス用のテストファイル
 *
 * @package Db
 */
class GetTest extends DbTest
{
    /**
     * GETのインスタンスを作成
     *
     * @return Object
     */
    public function getObject()
    {
        return new \Lib\Db\Get($this->pdo);
    }

    /**
     * 正常系 executeが正しく返すか
     *
     * @covers Lib\Db\Get::execute()
     * @test testExecuteNormal()
     */
    public function testExecuteNormal()
    {
        $sql = 'SELECT count(*) as `res` FROM `users`';
        $res = $this->object->execute($sql);
        $this->assertEquals(2, $res[0]->res);
    }

    /**
     * 正常系 空のvaluesを挿入したら無視するか
     *
     * @covers Lib\Db\Get::execute()
     * @test testExecuteNormalValues()
     */
    public function testExecuteNormalValues()
    {
        try {
            $sql = 'SELECT count(*) as `res` FROM `members`';
            $sql .= ' WHERE `id` = ?';
            $res = $this->object->execute($sql, false);
            $this->assertEquals(0, count($res));
        } catch (\Exception $e) {
            $this->assertEquals('fail', $e->getMessage());
        }
    }

    /**
     * 異常系エラー 間違ったsql文を挿入するとエラーを返すか
     *
     * @covers Lib\Db\Get::execute()
     * @test testExecuteError()
     */
    public function testExecuteError()
    {
        try {
            $this->object->setDebug(true);
            $sql = 'SELECT count(*) as `res` FROM `members`';
            $res = $this->object->execute($sql);
            $this->fail('fail');
        } catch (\Exception $e) {
            $this->assertEquals('fail', $e->getMessage());
        }
    }

    /**
     * 異常系例外 executeが正しく返すか
     *
     * @covers Lib\Db\Get::execute()
     * @test testExecuteException()
     */
    public function testExecuteException()
    {
        try {
            $sql = 'SELECT count(*) as `res` FROM `users`';
            $res = $this->object->execute($sql);
            $this->fail('fail');
        } catch (\Exception $e) {
            $this->assertEquals('fail', $e->getMessage());
        }
    }
}
