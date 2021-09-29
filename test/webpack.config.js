const path = require('path');
const WLBPlugin = require('../src/plugin');

module.exports = {
  mode: 'production',
  entry: {
    main: path.join(__dirname, './src/bar.js'),
    baz: path.join(__dirname, './src/baz.js'),
  },
  output: {
    path: path.join(__dirname, './dist'),
    filename: '[name].js',
  },
  plugins: [
    new WLBPlugin({
      startWorkingTime: 1,
      endWorkingTime: 3,
      ignoreWeekend: false,
      warningMessage:
        '别卷了！现在不是工作时间！为了营造良好的工作环境，WLB插件已经将打包产物替换为「反卷工作标语」',
    }),
  ],
};
