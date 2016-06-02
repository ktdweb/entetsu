 /*
  * mysqlを起動すること
  * mysql.server start
  * <Leader> se で実行
  */

-- profile for local database;
-- profile名、DB名を変更すること ユーザ情報は変更する必要なし
let g:dbext_default_profile_assist = 'type=mysql:user=vim:passwd=vim012:host=0.0.0.0:port=3306:dbname=ad110xb4ir_assist:extra=-vvv'
DBSetOption profile=assist

-- profile for local testing database;
-- profile名、DB名を変更すること ユーザ情報は変更する必要なし
let g:dbext_default_profile_test = 'type=mysql:user=vim:passwd=vim012:host=0.0.0.0:port=3306:dbname=ad110xb4ir_test:extra=-vvv'
DBSetOption profile=test

SHOW databases;
SHOW tables;

-- users テーブル確認 /*{{{*/
SELECT * FROM `users`;
/*}}}*/
