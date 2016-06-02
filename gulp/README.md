# micro-gulp
容量節約のため、npmのローカルにはgulpのみ  
必須なもの以外はnpm globalを利用  

## 現在のディレクトリに展開させる場合

```
git init
git remote add origin git@github.com-kobabasu:kobabasu/micro-gulp.git
git fetch origin
git checkout master (またはdevelop)
```

## 既に存在するディレクトリにインストールする場合

```
git clone git@github.com-kobabasu:kobabasu/micro-gulp.git gulp 
mv gulp/gulpfile.babel.js ./
mv gulp/.babelrc ./
```
1. gulpfile.babel.jsのimportのパスを変更
1. その後、存在するpackage.jsonを編集

## npm
1. 必要があればdevelopブランチを使う  
   `git checkout develop`
1. `npm start`
1. `npm install`

## run
1. gulpfile.babel.jsを編集する
1. `gulp watch`, `gulp build`などを実行

## 各ライブラリをinstall
### react
1. `git clone git@github.com-kobabasu:kobabasu/micro-flux.git src`
1. `cd src`
1. micro-fluxのREADME.mdを参照しinstall

### sass
1. `git clone git@github.com-kobabasu:kobabasu/micro-sass.git sass`
1. `cd sass`
1. micro-sassのREADME.mdを参照しinstall

### sass
1. `git clone git@github.com-kobabasu:kobabasu/micro-karma.git test`
1. `cd test`
1. micro-karmaのREADME.mdを参照しinstall

### e2e
1. `git clone git@github.com-kobabasu:kobabasu/micro-protractor.git e2e`
1. `cd e2e`
1. micro-protractorのREADME.mdを参照しinstall

## tasks
各タスクはファイル別に分割されている

### react
react.es6

* gulp src
* gulp src:min
* gulp src:watch
* gulp src:docs
* gulp src:build

### sass
sass.es6

* gulp sass
* gulp sass:min
* gulp sass:watch
* gulp sass:docs
* gulp sass:build

### karma
karma.es6

* gulp karma

### e2e (protractor)
e2e.es6

* gulp e2e
