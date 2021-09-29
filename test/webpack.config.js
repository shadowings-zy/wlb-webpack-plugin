const path = require("path");
const WLBPlugin = require("../src/plugin");

module.exports = {
  mode: "production",
  entry: path.join(__dirname, "./src/bar.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "[name].js",
  },
  plugins: [
    new WLBPlugin({
      startWorkingTime: 19,
      endWorkingTime: 20,
      ignoreWeekend: false,
    }),
  ],
};
