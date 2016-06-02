# REST

## 開発環境を準備
apiディレクトリにcoreosディレクトリは含めない

### vagrant
1. `hub clone coreos/coreos-vagrant coreos`
1. `cd coreos`
1. 必要なファイルをリネーム  
   * `mv user-data.sample user-data`
   * `mv config.rb.sample config.rb`
1. Vagrantfile編集  
   `vim Vagrantfile`
   * stableを使用
   * `$instance_name_prefix = "任意の名前"`
   * NFSの設定 ローカルのディレクトリは'..'で。'../app'だと変更が必要
   * portの設定 80->8080, 443->3443, 3306->3306, 1025->1025, 1080->1080
1. `vagrant up`

### docker
1. `vagrant ssh`
2. mysqlコンテナ起動
```
docker run --net=host --name mysql -p 3306:3306 -e "ROOT_PW=..." -e "DB_NAME=..." -e "DB_USER=..." -e "DB_PASS=..." -d kobabasu/mysql:0.75
```
3. apacheコンテナ起動
```
docker run --net=host --name apache -p 80:80 -p 443:443 -v /home/core/share:/var/www/html -d kobabasu/apache:0.24
```
4. smtpコンテナ起動
```
docker run --net=host --name smtp -p 1025:1025 -p 1080:1080 -d kobabasu/smtp:0.11
```
5. `docker ps -a`で起動しているか確認
6. `exit`

### mysql
1. DB, ユーザ作成 rootユーザで行う
```
mysql -h 0.0.0.0 --port 3306 -uroot -p[password] -D [dbname] < ../api/sql/install.sql
```
2. table作成
```
mysql -h 0.0.0.0 --port 3306 -u[username] -p[password] -D [dbname] < ../api/sql/users.create.sql
```


---


## ローカルレポジトリの作成
以下を実行後apiへ移動

```
git clone git@github.com-{user}:kobabasu/rest-slim.git api
```

### git
originと整合性が取れない場合があったため、
先にdevelopに切替。initには-dオプションを付けない

1. `git checkout develop`
1. `git flow init`

### npm
1. `npm install`
1. `npm run build`

### composer
1. `composer install --no-dev`

### .htaccess
再びサーバへ

1. `cp .htaccess.sample .htaccess`
1. `cp .logs/htaccess.sample logs/.htaccess`
1. `cp .reports/htaccess.sample reports/.htaccess`
1. HTTPSが使える場合はHTTPS正規化の設定を有効に
1. BASIC認証をかける場合にはBASIC認証設定を有効にしパスを変更
1. サーバがPHP-CGI版の場合にはPHP-CGI用のBASIC認証設定を有効に

### .htpasswd
変更する場合のみ以下を実行
もし、stageに追加された場合は`git checkout .htpasswd`で
元に戻す

1. `htpasswd -m .htpasswd api`
1. パスワードを二回入力

### config
1. production.php.sampleをproduction.phpにとしてコピー
1. config内のdevelopment, productionをそれぞれ設定
1. config内,phpunit.xmlのid,pwを設定

### phpunit
1. `phpunit`
1. すべてテストをパスすればOK
1. testdox形式で出力する場合は
   `phpunit --testdox`
1. http://localhost:8080/api/docs/reports/にアクセス
1. レポートがすべて100%であることを確認

### mailcatcher
1. まずphpunitを実行
1. http://localhsot:1080/にアクセス
1. メールが届いているか確認
1. Plain Textタブではfrom, toはメールアドレスが表示
   To, Subjectは文字化けせず表示
1. Sourceタブでは文字化けが散見していてOK。
   Content-Typeがtext/plain。charsetがiso-2022-jp
1. ダウンロードしダブルクリックでメーラが開く
1. 問題なく表示されていればOK

### phpdoc
1. `phpdoc`を実行
1. エラーがでず完了するか確認
1. http://localhost:8080/api/docs/api/にアクセス
1. 問題なく表示されればOK

### frisby
1. `npm run test`
1. すべてテストをパスすればOK

### dbext
1. vagrantでmysqlコンテナを起動
1. `vim sql/db.api.sql`
1. let g:dbext...をヤンク
1. :<C-r>0
1. DBSetOptionをヤンク
1. :<C-r>0
1. sqlを実行し結果が表示されればOK

### permissions
1. `chmod 604 config/\*`
1. `chmod 604 sql/\*`
1. `chmod 604 .htaccess`
1. `chmod 604 .htpasswd`
1. `chmod 604 phpunit.xml`

### 確認
1. http://localhost:8080/api/でBASIC認証が求められなくhelloと表示されるか確認
1. http://localhost:8080/api/users/taroでBASIC認証を入力し表示されるか確認

以下は設定箇所を忘れそうなので確認する

1. 一度composer.jsonのautoloadを確認しておく
1. .htpasswdとconfig内のBASIC_AUTHが一致しているか確認
1. 一度src/settings.phpのauthのpathでどこに認証がかかってるか確認


---


## リモートリポジトリの作成
CPIでの例

### bare
1. `ssh example.com`
1. `mkdir -p repo/api; cd $_`
1. `git init --bare --share=true`
1. `exit` (一度リモートを出る)

### push
ローカルで作業

1. `git remote add production ssh://example.com/usr/home/aa999v5xxx/repo/api`
1. 余計な後処理が面倒なためmaster, developのみでcommit済みであるか確認
1. `git push production --all`

### リモートリポジトリ作成 
再びサーバへ

1. `ssh example.com`
1. `cd html/`
1. `git clone /usr/home/aa999x5xxx/repo/api api`
1. viがなぜか調子が悪いためvimに変更 `git config core.editor vim`
1. `exit`

### lftp
.gitignoreで除外されているファイルをアップする。
再度ローカルへ

1. `lftp example.com`
1. `cd html/api`
1. `mkdir vendor node_modules`
1. `cd config; lcd config`
1. put production.php
1. `cd vendor; lcd vendor`
1. `mirror -R`
1. `cd node_modules; lcd node_modules`
1. `mirror -R`
1. `exit`

### .htaccess
再びサーバへ

1. 本番環境用の.htaccessを作成
1. `cp .htaccess.sample .htaccess`
1. `cp .logs/htaccess.sample logs/.htaccess`
1. `cp .reports/htaccess.sample reports/.htaccess`
1. HTTPSが使える場合はHTTPS正規化の設定を有効に
1. BASIC認証をかける場合にはBASIC認証設定を有効にしパスを変更
1. サーバがPHP-CGI版の場合にはPHP-CGI用のBASIC認証設定を有効に
1. サーバがCPIで会った場合にはCPI特有の記述を有効に

### .htpasswd
1. `htpasswd -m .htpasswd api`
1. パスワードを二回入力

### config
1. config/production.phpのBASIC認証の設定を変更
1. config内のdevelopment, productionをそれぞれ設定

### permissions
1. `chmod 604 config/\*`
1. `chmod 604 sql/\*`
1. `chmod 604 .htaccess`
1. `chmod 604 .htpasswd`
1. `chmod 604 phpunit.xml`

### hooks
1. `cd repo/api/hooks`
2. `touch post-receive`
3. 以下を記述
```
  cd /usr/home/aa120v5xup/html/api
  git --git-dir=.git pull
```
4. `chmod +x post-receive`

### 確認
httpsでないとエラーがでる

1. https://example.com/api/でBASIC認証が求められなくhelloと表示されるか確認
1. https://example.com/api/users/taroでBASIC認証を入力し表示されるか確認


---


## その他

### cURL sample
1. INDEXを表示
```
curl -i -X GET --user api:api012 -H 'Content-Type:application/json;charset=utf-8' http://localhost:8080/api/users/
```
1. レコードを表示
```
curl -i -X GET --user api:api012 -H 'Content-Type:application/json;charset=utf-8' http://localhost:8080/api/users/{存在するid}
```
1. レコードをinsert
```
curl -i -X POST --user api:api012 -H 'Content-Type:application/json;charset=utf-8' -d '{"name":"taro", "email":"taro@example.com"}' http://localhost:8080/api/users/
```
1. レコードを変更
```
curl -i -X PUT --user api:api012 -H 'Content-Type:application/json;charset=utf-8' -d '{name":"curl", "email":"curl@example.com"}' http://localhost:8080/api/user/{存在するid}
```
1. レコードを削除
```
curl -i -X DELETE --user api:api012 -H 'Content-Type:application/json;charset=utf-8' http://localhost:8080/api/users/{存在するid}
```

### files
|name            |desc                                        |
|:---------------|:-------------------------------------------|
|.babelrc        |es2015のpresetを設定                        |
|.gitattributes  |marge oursが必要であれば変更                |
|.gitignore      |cache,logs,reportsを除外                    |
|(.htaccess)     |sampleをコピーして用意                      |
|.htaccess.sample|CPIのphpバージョン指定設定サンプル含む      |
|.htpasswd       |.htaccessにより設定するため、sampleではない |
|README.md       |このファイル                                |
|bootstrap.php   |Slimの設定                                  |
|composer.json   |PSR-4のautoloadの設定があるので注意         |
|composer.lock   |composerのlockファイル                      |
|index.php       |server environmentの設定                    |
|note.md         |メモ                                        |
|package.json    |es6変換,frisbyを読込。scriptsは要確認       |
|php.ini         |CPIのバージョン指定用php.ini                |
|phpdoc.xml      |lib,routes,testsに限定。出力先はdocs/api    |
|phpunit.xml     |lib,routesに限定。テスト用DBの設定含む      |

### directories
|name            |desc                                        |
|:---------------|:-------------------------------------------|
|/.git           |gitディレクトリ                             |
|/cache          |twig専用cache                               |
|/config         |設定はここにまとめる。要パーミッション      |
|/docs           |テストのレポートとphpdoc                    |
|/lib            |汎用コード                                  |
|/logs           |Slim,mailのログとcoverage                   |
|/mail           |twigによるmailテンプレート                  |
|/node_modules   |npmディレクトリ                             |
|/reports        |frisbyのjunitreport                         |
|/routes         |Slimのroutesをまとめる                      |
|/spec           |frisbyのテストコード                        |
|/sql            |本番DB,テストDBの作成。usersテーブルの作成  |
|/src            |Slimの汎用コード                            |
|/tests          |phpunitのテストコード                       |
|/vendor         |composerディレクトリ                        |

### config
phpの定数を定義。DB, MAILなど。

|name            |desc                                        |
|:--------------------|:--------------------------------------|
|development.php      |開発環境用                             |
|(production.php)     |sampleをコピーし作成                   |
|production.php.sample|本番環境用                             |

### docs
テストのレポートとphpdoc

|name            |desc                                        |
|:---------------|:-------------------------------------------|
|api             |phpdocによる出力                            |
|reports         |phpunitによるcoverage reporter              |

### mail
twigによるmailテンプレート

|name            |desc                                        |
|:---------------|:-------------------------------------------|
|default.twig    |twigによるmailテンプレートsample。未使用    |
|defaultTest.twig|tests/lib/SwiftMailer/MailerTest.phpで使用  |

### spec
frisbyのテストコード

|name            |desc                                        |
|:---------------|:-------------------------------------------|
|dist            |未使用                                      |
|js              |frisbyはこの中のファイルをすべて読み込む    |
|src             |この中のファイルを編集しbabelで変換         |

### sql
sqlに関するディレクトリ
パーミッションでアクセス制限をかける

|name            |desc                                        |
|:---------------|:-------------------------------------------|
|db.api.sql      |dbextで利用するsql編集ファイル              |
|install.sql     |DBの作成。初期設定時のみ使用                |
|users.create.sql|usersテーブルの作成。初期設定時のみ使用     |

## src
Slim3の各種設定

|name            |desc                                        |
|:---------------|:-------------------------------------------|
|app.php         |アプリケーション全体の設定。Content-Typeなど|
|dependencies.php|コンテナ関連                                |
|middleware.php  |slim-basic-authなど                         |
|settings.php    |定数やloggerの設定など                      |

## tests
phpunitのテストコード

|name            |desc                                        |
|:---------------|:-------------------------------------------|
|/fixtures       |フィクスチャ                                |
|/lib            |libが対象のテストコード                     |
|/routes         |routesが対象のテストコード                  |
|/bootstrap.php  |テスト専用。phpunit.xmlで利用               |


---


## trouble shootings
### 本番環境のみ'Slim Application Error'
basic authのmiddlewareの関係でhttp接続では
Slim Application Errorが発生。https接続する。

### ローカル環境でBASIC認証後'Internal Server Error'
dockerを使用している場合、
.htaccessのパスは/usr/homeではなく/var/www/htmlとなるため注意

### ローカル環境のログ確認方法
1. `docker inspect --format {{.State.Pid}} apache
1. `sudo nsenter --target=上記で出てきたid --mount --uts --ipc --net --pid`
1. 上記でコンテナにログインできるので/var/logなどに移動して確認
