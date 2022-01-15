const webpack = require('webpack');
const chalk = require('chalk');
const { generateCode } = require('../codegen/index');
const { DEFAULT_OPTIONS } = require('../constant');

const pluginName = 'WLBPlugin'

class WLBPlugin {
  constructor(options) {
    this.options = Object.assign(DEFAULT_OPTIONS, options || {});
  }
  apply(compiler) {
    const {
      startWorkingTime,
      endWorkingTime,
      ignoreWeekend,
      warningMessage,
      replaceOriginBundle,
    } = this.options;

    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    const isWorkdays = day <= 4 || ignoreWeekend;
    const isWorkOvertime =
      !isWorkdays || hour < startWorkingTime || hour >= endWorkingTime;

    if (isWorkOvertime) {
      console.log(chalk.red(warningMessage));

      compiler.hooks.thisCompilation.tap(pluginName, (compilation) => {
        compilation.hooks.processAssets.tap(
          {
            name: pluginName,
            stage: webpack.Compilation.PROCESS_ASSETS_STAGE_SUMMARIZE,
          },
          (assets) => {
            Object.keys(assets).forEach((item) => {
              let content = assets[item].source();
              if (replaceOriginBundle) {
                content = generateCode();
              } else {
                content = content + generateCode();
              }
              // 更新构建产物对象
              assets[item] = {
                source: () => content,
                size: () => content.length,
              };
            });
          })
      });
    }
  }
}

module.exports = WLBPlugin;
