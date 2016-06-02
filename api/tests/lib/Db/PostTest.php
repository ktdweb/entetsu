<?php
/**
 * Web App REST API
 *
 * @link https://github.com/kobabasu/rest-php.git
 */

namespace Lib\Db;

/**
 * Postクラス用のテストファイル
 *
 * @package Db
 */
class PostTest extends DbTest
{
    /**
     * POSTのインスタンスを作成
     *
     * @return Object
     */
    public function getObject()
    {
        return new \Lib\Db\Post($this->pdo);
    }

    /**
     * 正常系 executeが正しく返すか
     *
     * @covers Lib\Db\Post::execute()
     * @test testExecuteNormal()
     */
    public function testExecuteNormal()
    {
        $sql = 'INSERT INTO `users` (`name`,`email`) ';
        $sql .= 'VALUES (?,?);';
        $values = array('maro', 'maro@example.com');

        $res = $this->object->execute($sql, $values);

        $this->assertEquals(
            3,
            $this->db->getRowCount('users')
        );
    }

    /**
     * 異常系エラー 間違ったsql文を挿入するとエラーを返すか
     *
     * @covers Lib\Db\Post::execute()
     * @test testExecuteError()
     */
    public function testExecuteError()
    {
        try {
            $this->object->setDebug(true);
            $sql = 'INSERT INTO `members` (`name`,`email`) ';
            $sql .= 'VALUES (?,?);';
            $values = array('maro', 'maro@example.com');

            $res = $this->object->execute($sql, $values);
            $this->fail('fail');
        } catch (\Exception $e) {
            $this->assertEquals('fail', $e->getMessage());
        }
    }

    /**
     * 異常系例外 executeが正しく返すか
     *
     * @covers Lib\Db\Post::execute()
     * @test testExecuteException()
     */
    public function testExecuteException()
    {
        try {
            $sql = 'INSERT INTO `members` (`name`,`email`) ';
            $sql .= 'VALUES (?,?);';
            $values = array('maro', 'maro@example.com');
            $res = $this->object->execute($sql, $values);
            $this->fail('fail');
        } catch (\Exception $e) {
            $this->assertEquals('fail', $e->getMessage());
        }
    }

    /**
     * 正常系 getLastInsertIdがintか
     *
     * @covers Lib\Db\Post::getLastInsertId()
     * @test testGetInsertIdNormal()
     */
    public function testGetInsertIdNormal()
    {
        $res = $this->object->getLastInsertId();
        $this->assertInternalType('int', $res);
    }
}
