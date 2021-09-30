const WORK_LIFE_BALANCE_SLOGAN_LIST = [
  {
    introduction:
      '[work-life-balance-webpack-plugin] 反内卷 & 防沉迷插件提醒您: ',
    content: '需求千万条，反卷第一条，非要搞内卷，加班两行泪',
  },
  {
    introduction:
      '[work-life-balance-webpack-plugin] 反内卷 & 防沉迷插件提醒您: ',
    content: '今天你卷我，明天我卷你，争相当卷王，迟早要遭殃',
  },
  {
    introduction:
      '[work-life-balance-webpack-plugin] 反内卷 & 防沉迷插件提醒您: ',
    content: '适度代码益脑，过度代码伤身，合理安排时间，享受健康生活',
  },
];

const DEFAULT_WARNING_MESSAGE =
  '别卷了！现在不是工作时间！为了营造良好的工作环境，WLB插件已经将「反内卷 & 防沉迷逻辑」注入到打包产物中。';

const DEFAULT_OPTIONS = {
  startWorkingTime: 10,
  endWorkingTime: 20,
  ignoreWeekend: false,
  warningMessage: DEFAULT_WARNING_MESSAGE,
  replaceOriginBundle: true,
};

module.exports = {
  WORK_LIFE_BALANCE_SLOGAN_LIST,
  DEFAULT_OPTIONS,
};
