const path = require('path')
const WLBPlugin = require('../src/plugin')

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, "./src/bar.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].js"
  },
  plugins: [
    new WLBPlugin({
      start: 10,
      end: 20,
      ignoreWeekend: false,
    })
  ]
}