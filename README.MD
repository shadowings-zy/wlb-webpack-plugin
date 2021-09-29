# wlb-webpack-plugin 反内卷 webpack 插件

该插件会在非工作日及下班时间自动将 webpack 打包产物替换为反内卷标语，是追求 work-life-balance 的前端工程师们的最佳选择。

## 安装方式

使用 npm 安装

```
npm install wlb-webpack-plugin --save-dev
```

使用 yarn 安装

```
yarn add wlb-webpack-plugin -D
```

## 使用方式

在 webpack.config.js 中使用：

```javascript
const WLBPlugin = require('wlb-webpack-plugin');

module.exports = {
  // ... other settings
  plugins: [
    // ... other settings
    new WLBPlugin({
      startWorkingTime: 10, // 开始工作的时间
      endWorkingTime: 20, // 下班时间
      ignoreWeekend: false, // 是否忽略周末
      warningMessage:
        '别卷了！现在不是工作时间！为了营造良好的工作环境，WLB插件已经将打包产物替换为「反卷工作标语」',
    }),
  ],
};
```

配置项：
|配置项|描述|默认值|
|-|-|-|
|startWorkingTime|开始工作的时间|10|
|endWorkingTime|结束工作的时间|20|
|ignoreWeekend|是否忽略周末|false|
|warningMessage|非工作时间提示信息|`"别卷了！现在不是工作时间！为了营造良好的工作环境，WLB插件已经将打包产物替换为「反卷工作标语」"`|
