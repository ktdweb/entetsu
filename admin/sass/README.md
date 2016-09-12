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
* `style.sass`を変更
* `lib.sass`を変更
* `config/_config.sass`を変更
* sample/index.htmlのパスを変更

## project
* 上記pathの確認

## files
ファイル構成は以下、

| ファイル名 | 内容
| ---- | ----
| style.sass | rootのファイル
| config.sass | ライブラリの初期設定
| vars.sass | フレームワーク全体の初期設定
| arrays.scss | color, widthなど配列で展開する
| base.sass | elementに影響を与えるクラス
| theme.sass | デザインに関わるクラス
| extends | タグ・クラスをoverrideするもの
| functions | sassのfunction集
| mixins | sassのmixin集
| motions | motionに関わるクラス
| layouts | 各ページ共通のクラス
| pages | 各ページそれぞれのクラス
| modules | 汎用のクラス
