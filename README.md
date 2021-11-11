# npm run start
自動開啟 http://localhost:5000 執行

## npm run build
打包至 dist

## npm run test
執行測試（單次）

## npm run test:watch
執行測試（監視變化）

## commit 規範
[https://www.conventionalcommits.org/en/v1.0.0/](https://www.conventionalcommits.org/en/v1.0.0/)  
[https://github.com/conventional-changelog/commitlint/#what-is-commitlint](https://github.com/conventional-changelog/commitlint/#what-is-commitlint)
```
<type>(<scope>): <subject>
<BLANK LINE>
<body>
<BLANK LINE>
<footer>
```
- type: commit 的类型
  - build: 影響項目構建或依賴項修改
  - ci: 持續整合相關文件修改
  - chore: 其他修改
  - docs: 文件修改
  - feat: 新功能、新特性
  - fix: 修改bug
  - perf: 更改程式碼以提高效能
  - refactor: 程式碼重構（在不影響內部行為、功能下的程式碼修改）
  - revert: 恢復上一次commit
  - style: 程式碼格式修改，不是css修改
  - test: 測試新增、修改
- scope: commit影響的範圍，比如: route, component, utils, build...
- subject: commit的概述
- body: commit具體修改内容，可以分为多行
- footer: 一些備註，通常是BREAKING CHANGE或修復的bug的連結
