# micro-admin

```
git clone git@github.com-kobabasu:kobabasu/micro-admin.git admin
```

デフォルトではドキュメントルートがひとつ上の階層にあることを想定

## standalone
1. gulpfile.babel.js, tasks/{react.es6, sass.es6}を編集
1. sass/style.sassを編集
1. index.htmlを編集

## npm
1. 必要があればdevelopブランチを使う  
   `git checkout develop`
1. `npm start`
1. `npm install`
1. `npm run build`

## vagrant
1. `hub clone cores/cores-vagrant coreos`
1. `cd coreos`
1. 必要なファイルをリネーム  
   * `mv user-data.sample user-data`
   * `mv config.rb.sample config.rb`
1. Vagrantfile編集  
   `vim Vagrantfile`
   * `$instance_name_prefix = "任意の名前"`
   * NFSの設定
   * portの設定 80->8080
1. `vagrant up`

## docker
1. `vagnrat ssh`
1. apacheコンテナ起動
```
docker run --net=host --name apache -p 80:80 -p 443:443 -v /home/core/share/app:/var/www/html -d kobabasu/apache:0.21
```
1. `exit`

## gulp
1. gulp admin:src, admin:sassが通れば成功
1. gulp admin:src:watch, gulp admin:sass:watchで監視

## check
1. ブラウザで確認
1. http://localhost:8080/admin/

## path
* index.htmlのcss,distを変更 
  (サブディレクトリを含む絶対パスで /sample/dist/build.js)
* Routes.jsxのrootを変更

## project
* 上記のpathの変更を確認


---


## trouble shootings
### gulpのtaskが追加されない
一度でも、admin以下のディレクトリでgulpを実行すると、
親ディレクトリでのgulpfile.babel.jsがうまく動かない。
admin/node_modulesが作成されているはずなので、削除し親ディレクトリで再実行。
