import FlowBabelWebpackPlugin from 'flow-babel-webpack-plugin';

export default {
  devtool: 'inline-source-map',
  module: {
    rules: [],
  },
  plugins: [
    new FlowBabelWebpackPlugin(),
  ],
};
