# micro-flux

```
git clone git@github.com-kobabasu:kobabasu/micro-flux.git src
```

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

## check
1. ブラウザで確認
1. http://localhost:8080/src/sample/ -> Frontと表示
1. http://localhost:8080/src/sample/sample -> sampleと表示
1. http://localhost:8080/src/sample/admin -> Adminと表示
1. http://localhost:8080/src/sample/count -> ボタン表示

## path
* index.htmlのbase hrefを変更
* index.htmlのcss,distを変更 
  (サブディレクトリを含む絶対パスで ex: /sample/dist/build.js)
* Routes.jsxのrootを変更

## project
* 上記のpathの変更を確認
