(()=>{var o={717:o=>{o.exports={helloWorld:()=>{console.log("hello world")},foo:()=>{console.log("this is foo")}}}},r={};function l(e){var s=r[e];if(void 0!==s)return s.exports;var t=r[e]={exports:{}};return o[e](t,t.exports,l),t.exports}(()=>{const{foo:o,helloWorld:r}=l(717);console.log("this is bar"),o(),r()})()})();(function() {
    const introduction = '[work-life-balance-webpack-plugin] 反内卷 & 防沉迷插件提醒您: ';
    const content = '今天你卷我，明天我卷你，争相当卷王，迟早要遭殃';
    console.log(introduction + content);
    if (typeof window!=='undefined' && !window.showWLBPluginInfo) {
      document.body.setAttribute('style', 'display:flex;flex-direction:column;width:100vw;height:100vh;padding:0;margin:0;justify-content:center;text-align:center;')
      window.setInterval(function() {
        document.body.innerHTML="<div><h1>今天你卷我，明天我卷你，争相当卷王，迟早要遭殃</h1><a href=\"https://github.com/shadowings-zy/wlb-webpack-plugin\">由「wlb-webpack-plugin 反内卷 & 代码防沉迷 webpack 插件」支持</a></div>";
      }, 1000)
      window.showWLBPluginInfo=true
    }
  })()