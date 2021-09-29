const chalk = require('chalk');
const { generateCode } = require('../codegen/index');
const { DEFAULT_OPTIONS, WARNING_MESSAGE } = require('../constant');

class WLBPlugin {
  constructor(options) {
    this.options = Object.assign(DEFAULT_OPTIONS, options || {});
  }
  apply(compiler) {
    const { startWorkingTime, endWorkingTime, ignoreWeekend } = this.options;

    const date = new Date();
    const day = date.getDay();
    const hour = date.getHours();
    const isWorkdays = day <= 4 || ignoreWeekend;
    const isWorkOvertime =
      !isWorkdays || hour < startWorkingTime || hour >= endWorkingTime;

    if (isWorkOvertime) {
      console.log(chalk.red(WARNING_MESSAGE));

      compiler.hooks.emit.tap('WLBPlugin', (compilation) => {
        // 遍历构建产物
        Object.keys(compilation.assets).forEach((item) => {
          let content = compilation.assets[item].source();
          content = generateCode();
          // 更新构建产物对象
          compilation.assets[item] = {
            source: () => content,
            size: () => content.length,
          };
        });
      });
    }
  }
}

module.exports = WLBPlugin;
