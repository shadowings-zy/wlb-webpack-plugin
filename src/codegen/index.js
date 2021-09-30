const { WORK_LIFE_BALANCE_SLOGAN_LIST } = require('../constant');

const getRandomSlogan = () => {
  const index = Math.floor(
    Math.random() * WORK_LIFE_BALANCE_SLOGAN_LIST.length,
  );
  return WORK_LIFE_BALANCE_SLOGAN_LIST[index];
};

const htmlTemplate = (slogan) => {
  return `<div><h1>${slogan}</h1><a href=\\"https://github.com/shadowings-zy/wlb-webpack-plugin\\">由「wlb-webpack-plugin 反内卷 & 代码防沉迷 webpack 插件」支持</a></div>`;
};

const generateCode = () => {
  const slogan = getRandomSlogan();
  return `(function() {
    const introduction = '${slogan.introduction}';
    const content = '${slogan.content}';
    console.log(introduction + content);
    if (typeof window!=='undefined' && !window.showWLBPluginInfo) {
      document.body.setAttribute('style', 'display:flex;flex-direction:column;width:100vw;height:100vh;padding:0;margin:0;justify-content:center;text-align:center;')
      window.setInterval(function() {
        document.body.innerHTML="${htmlTemplate(slogan.content)}";
      }, 1000)
      window.showWLBPluginInfo=true
    }
  })()`;
};

module.exports = { generateCode };
