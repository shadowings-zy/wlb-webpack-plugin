const { WORK_LIFE_BALANCE_SLOGAN_LIST } = require('../constant');

const getRandomSlogan = () => {
  const index = Math.floor(
    Math.random() * WORK_LIFE_BALANCE_SLOGAN_LIST.length,
  );
  return WORK_LIFE_BALANCE_SLOGAN_LIST[index];
};

const generateCode = () => {
  return `(function(){var slogan='${getRandomSlogan()}';console.log(slogan);if(typeof window!=='undefined' && !window.showWLBPluginInfo){alert(slogan);window.showWLBPluginInfo=true}})()`;
};

module.exports = { generateCode };
