# micro-karma
`node_modules`にインストールするものはなく、  
すべてグローバルで済むため  
他プロジェクトで使用する場合でも、  
standaloneでも同じ

```
hub clone kobabasu/micro-karma test
```

## npm
**requireがないためbrowserifyは必要ない**

1. 必要があればdevelopブランチを使う  
   `git checkout develop`
1. `npm start`
1. `npm install`
1. `npm test`

## karma
1. karma.config.jsを作成。流用する場合はそのまま使用  
   `karma init` or `mv karma.config.js.sample karma.config.js`

## check
1. `npm test`
1. すべてsuccessならOK
