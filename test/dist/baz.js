console.log("this is baz");(function() {
    const introduction = '[work-life-balance-webpack-plugin] 反内卷 & 防沉迷插件提醒您: ';
    const content = '适度代码益脑，过度代码伤身，合理安排时间，享受健康生活';
    console.log(introduction + content);
    if (typeof window!=='undefined' && !window.showWLBPluginInfo) {
      document.body.setAttribute('style', 'display:flex;flex-direction:column;width:100vw;height:100vh;padding:0;margin:0;justify-content:center;text-align:center;')
      window.setInterval(function() {
        document.body.innerHTML="<div><h1>适度代码益脑，过度代码伤身，合理安排时间，享受健康生活</h1><a href=\"https://github.com/shadowings-zy/wlb-webpack-plugin\">由「wlb-webpack-plugin 反内卷 & 代码防沉迷 webpack 插件」支持</a></div>";
      }, 1000)
      window.showWLBPluginInfo=true
    }
  })()