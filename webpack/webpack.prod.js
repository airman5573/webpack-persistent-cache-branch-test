const { merge } = require("webpack-merge");
const common = require("./webpack.common");

const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");

const smp = new SpeedMeasurePlugin();

module.exports = smp.wrap(
  merge(common, {
    mode: "production",
    cache: {
      type: "filesystem",
      buildDependencies: {
        config: [__filename],
      },
    },
    snapshot: {
      module: {
        timestamp: true,
      },
    },
  })
);
