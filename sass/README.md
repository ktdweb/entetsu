# micro-sass
ruby-sassを利用するためruby環境とsassのインストールが必要

```
git clone git@github.com-kobabasu:kobabasu/micro-sass.git sass
```

## npm
1. 必要があればdevelopブランチを使う  
   `git checkout develop`
1. `npm start`
1. `npm install`
1. `npm run build`

## npm script
すべてsassディレクトリ内で使用

```
npm run build:  docも生成するため長い
npm run watch:  watch
npm run sass :  コンパイル このスクリプトのみcomressed
```

## check
1. ブラウザで確認
   `open sample/index.html -a Google\ Chrome`

## path
* `style.sass`内のroot変数を変更
* sample/index.htmlのbase hrefのパスを変更

## project
* 上記pathの確認

## files
ファイル構成は以下、
configs, base, lib, pages, layouts, modulesに別れる

| ファイル名 | 内容
| ---- | ----
| style.sass | rootのファイル
| config.sass | ライブラリの初期設定
| vars.sass | フレームワーク全体の初期設定
| arrays.scss | color, widthなど配列で展開する
| base.sass | elementに影響を与えるクラス
| theme.sass | admin, frontの両方に関わるクラス
| functions | sassのfunction集 汎用のディレクトリ
| mixins | sassのmixin集 汎用のディレクトリ
| motions | motionに関わるクラス 汎用のディレクトリ
| layouts | 各ページ共通のクラス admin,frontに別れる
| pages | 各ページそれぞれのクラス admin,frontに別れる
| modules | 汎用のディレクトリ

### modules

| ファイル名 | 内容
| --- | ---
| index.sass | 読込順の設定
| debug.sass | 横のgridを引くクラス 縦のgridはneat
| bootstrap.sass | bootstrapを上書きするクラス
| neat.sass | neatを上書きするクラス
| fontawesome.sass | fontawesomeを上書きするクラス
| colors.sass | arraysのcolorを展開
| widths.sass | arraysのwidthを展開
| grid.sass | gridに関するクラス
| anchor.sass | anchorのhoverを一括で設定するクラス
| table.sass | tableに関するクラス
| form.sass | formに関するクラス
| responsive.sass | responsiveに関するクラス
| typography.sass | typeに関するクラス
