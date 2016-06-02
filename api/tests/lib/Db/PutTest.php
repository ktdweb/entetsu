<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Db;

/**
 * Putクラス用のテストファイル
 *
 * @package Db
 */
class PutTest extends DbTest
{
    /**
     * PUTのインスタンスを作成
     *
     * @return Object
     */
    public function getObject()
    {
        return new \Lib\Db\Put($this->pdo);
    }

    /**
     * 正常系 executeが正しく返すか
     *
     * @covers Lib\Db\Put::execute()
     * @test testExecuteNormal()
     */
    public function testExecuteNormal()
    {
        $sql  = 'UPDATE `users` SET `name` = ?';
        $sql .= 'WHERE `id` = 1;';
        $values = 'ichiro';
        $res = $this->object->execute($sql, $values);
        $table = $this->db->createQueryTable(
            'users',
            'SELECT * FROM `users`'
        );

        $this->assertEquals(
            'ichiro',
            $table->getValue(0, 'name')
        );
    }

    /**
     * 異常系エラー 間違ったsql文を挿入するとエラーを返すか
     *
     * @covers Lib\Db\Put::execute()
     * @test testExecuteError()
     */
    public function testExecuteError()
    {
        try {
            $this->object->setDebug(true);
            $sql  = 'UPDATE `members` SET `name` = ?';
            $sql .= 'WHERE `id` = 1;';
            $values = 'ichiro';
            $res = $this->object->execute($sql, $values);
            $this->fail('fail');
        } catch (\Exception $e) {
            $this->assertEquals('fail', $e->getMessage());
        }
    }

    /**
     * 異常系例外 executeが正しく返すか
     *
     * @covers Lib\Db\Put::execute()
     * @test testExecuteException()
     */
    public function testExecuteException()
    {
        try {
            $sql  = 'UPDATE `users` SET `name` = ?';
            $sql .= 'WHERE `id` = 1;';
            $values = 'ichiro';
            $res = $this->object->execute($sql, $values);
            $this->fail('fail');
        } catch (\Exception $e) {
            $this->assertEquals('fail', $e->getMessage());
        }
    }
}
