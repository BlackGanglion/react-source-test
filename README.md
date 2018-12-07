# React 源码研究

* dev 版本，官方提供的 development 包
* prod 版本，对于源码要重新打包，去掉 production 的混淆与压缩
  - scripts/rollup/build.js `isProduction = true`
  - `/* isProduction && closure() */` 注释掉
  - npm run build