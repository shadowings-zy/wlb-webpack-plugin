const WORK_LIFE_BALANCE_SLOGAN_LIST = [
  '[work-life-balance-webpack-plugin]反卷插件提醒您：需求千万条，反卷第一条，非要搞内卷，加班两行泪',
  '[work-life-balance-webpack-plugin]反卷插件提醒您：今天你卷我，明天我卷你，争相当卷王，迟早要遭殃',
  '[work-life-balance-webpack-plugin]反卷插件提醒您：拒绝内卷，提早下班，享受生活，从我做起',
];

const DEFAULT_WARNING_MESSAGE =
  '别卷了！现在不是工作时间！为了营造良好的工作环境，WLB插件已经将打包产物替换为「反卷工作标语」';

const DEFAULT_OPTIONS = {
  startWorkingTime: 10,
  endWorkingTime: 20,
  ignoreWeekend: false,
  warningMessage: DEFAULT_WARNING_MESSAGE,
};

module.exports = {
  WORK_LIFE_BALANCE_SLOGAN_LIST,
  DEFAULT_OPTIONS,
};
