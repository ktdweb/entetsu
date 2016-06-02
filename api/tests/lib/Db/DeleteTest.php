<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Db;

/**
 * Deleteクラス用のテストファイル
 *
 * @package Db
 */
class DeleteTest extends DbTest
{
    /**
     * DELETEのインスタンスを作成
     *
     * @return Object
     */
    public function getObject()
    {
        return new \Lib\Db\Delete($this->pdo);
    }

    /**
     * 正常系 executeが正しく返すか
     *
     * @covers Lib\Db\Delete::execute()
     * @test testExecuteNormal()
     */
    public function testExecuteNormal()
    {
        $sql = 'DELETE FROM `users` WHERE `id` = 1;';
        $res = $this->object->execute($sql);

        $this->assertEquals(
            1,
            $this->db->getRowCount('users')
        );
    }

    /**
     * 異常系エラー 間違ったsql文を挿入するとエラーを返すか
     *
     * @covers Lib\Db\Delete::execute()
     * @test testExecuteError()
     */
    public function testExecuteError()
    {
        try {
            $this->object->setDebug(true);
            $sql = 'DELETE FROM `members` WHERE `id` = 1;';

            $res = $this->object->execute($sql);
            $this->fail('fail');
        } catch (\Exception $e) {
            $this->assertEquals('fail', $e->getMessage());
        }
    }

    /**
     * 異常系例外 executeが正しく返すか
     *
     * @covers Lib\Db\Delete::execute()
     * @test testExecuteException()
     */
    public function testExecuteException()
    {
        try {
            $sql = 'DELETE FROM `users` WHERE `id` = 1;';
            $res = $this->object->execute($sql);
            $this->fail('fail');
        } catch (\Exception $e) {
            $this->assertEquals('fail', $e->getMessage());
        }
    }
}
